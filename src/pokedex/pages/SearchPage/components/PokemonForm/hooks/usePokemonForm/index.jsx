import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { pokemonFormSchema } from "./yupSchema";
import { getRandomInt } from "./methods";
import { useNavigate } from "react-router-dom";

const usePokemonForm = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      pokemonName: "",
      random: false,
    },
    resolver: yupResolver(pokemonFormSchema),
  });
  const { handleSubmit } = methods;

  const onSubmit = async (formValues) => {
    const { pokemonName, random } = formValues;
    let pokemon;
    let pokemonSpecies;
    let evolutionChain;
    let evolution;
    let dataToSendToApi;

    if (random) {
      dataToSendToApi = await axios
        .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000")
        .then((response) => {
          const pokemonList = response.data.results;
          const pokemonListLength = response.data.count;

          return pokemonList[getRandomInt(pokemonListLength)].name;
        });
    } else {
      dataToSendToApi = pokemonName.toLowerCase();
    }

    try {
      pokemon = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${dataToSendToApi}`)
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }

    try {
      pokemonSpecies = await axios
        .get(pokemon.species.url)
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }

    try {
      evolutionChain = await axios
        .get(pokemonSpecies.evolution_chain.url)
        .then((response) => response.data.chain);

      const getPokemonNameEvolution = (data, tableau) => {
        if (!tableau) {
          tableau = [];
          tableau.push(evolutionChain.species.name);
        }
        if (data.evolves_to && data.evolves_to.length) {
          tableau.push(data.evolves_to[0].species.name);
          getPokemonNameEvolution(data.evolves_to[0], tableau);
        }
        return tableau;
      };

      const pokemonEvolutionName = getPokemonNameEvolution(evolutionChain);

      const popo = pokemonEvolutionName.map(async (pokemonName) => {
        return await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then(({ data }) => ({
            id: data.id,
            name: pokemonName,
            imgUrl: data.sprites.other["official-artwork"].front_default,
          }));
      });

      evolution = await Promise.all(popo);
    } catch (error) {
      console.error(error);
    }

    go({
      id: pokemon?.id,
      name: pokemon?.name,
      stats: {
        hp: (pokemon?.stats[0]?.base_stat / 255) * 15,
        attack: (pokemon?.stats[1]?.base_stat / 255) * 15,
        defense: (pokemon?.stats[2]?.base_stat / 255) * 15,
        speA: (pokemon?.stats[3]?.base_stat / 255) * 15,
        speD: (pokemon?.stats[4]?.base_stat / 255) * 15,
        speed: (pokemon?.stats[5]?.base_stat / 255) * 15,
      },
      infos: {
        weight: `${pokemon?.weight / 10} kg`,
        height: `${pokemon?.height / 10} m`,
        abilities: pokemon?.abilities
          .reduce((acc, curr) => {
            return [...acc, curr.ability.name];
          }, [])
          .join(", "),
        description: pokemonSpecies?.flavor_text_entries[0]?.flavor_text,
      },
      types: pokemon?.types.reduce((acc, curr) => {
        return [...acc, curr.type.name];
      }, []),
      pokemonImage:
        pokemon?.sprites?.other?.["official-artwork"]?.front_default,
      evolution,
    });
  };

  const go = (data) => {
    if (data) {
      navigate(`/pokedex/${data.id}`, { state: data });
    }
  };

  return {
    methods,
    onSubmit: handleSubmit(onSubmit),
  };
};

export default usePokemonForm;
