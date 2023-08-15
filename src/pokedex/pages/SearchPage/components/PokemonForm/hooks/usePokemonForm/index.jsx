import { useEffect, useState } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { pokemonFormSchema } from "./yupSchema";
import Pokedex from "pokedex-promise-v2";
import { getRandomInt } from "./methods";

const P = new Pokedex();

const usePokemonForm = () => {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [stats, setStats] = useState(null);
  const [infos, setInfos] = useState(null);
  const [types, setTypes] = useState(null);
  const [pokemonImage, setPokemonImage] = useState(null);

  const methods = useForm({
    defaultValues: {
      pokemonName: "",
      random: false,
    },
    resolver: yupResolver(pokemonFormSchema),
  });
  const { handleSubmit } = methods;

  useEffect(() => {
    setId(pokemon?.id);

    setName(pokemon?.name);

    setStats({
      hp: pokemon?.stats[0]?.base_stat,
      attack: pokemon?.stats[1]?.base_stat,
      defense: pokemon?.stats[2]?.base_stat,
      speA: pokemon?.stats[3]?.base_stat,
      speD: pokemon?.stats[4]?.base_stat,
      speed: pokemon?.stats[5]?.base_stat,
    });

    setTypes(
      pokemon?.types.reduce((acc, curr) => {
        return [...acc, curr.type.name];
      }, []),
    );

    setPokemonImage(
      pokemon?.sprites?.other?.["official-artwork"]?.front_default,
    );
  }, [pokemon]);

  useEffect(() => {
    setInfos({
      weight: pokemon?.weight,
      height: pokemon?.height,
      abilities: pokemon?.abilities.reduce((acc, curr) => {
        return [...acc, curr.ability.name];
      }, []),
      description: pokemonSpecies?.flavor_text_entries[0]?.flavor_text,
    });
  }, [pokemon, pokemonSpecies]);

  const onSubmit = async (formValues) => {
    const { pokemonName, random } = formValues;

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
      dataToSendToApi = pokemonName;
    }

    try {
      const pokemon = await P.getPokemonByName(dataToSendToApi);
      setPokemon(pokemon);
    } catch (error) {
      console.error(error);
    }

    try {
      const pokemonSpecies = await P.getPokemonSpeciesByName(dataToSendToApi);
      setPokemonSpecies(pokemonSpecies);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    data: { id, name, stats, infos, types, pokemonImage },
    methods,
    onSubmit: handleSubmit(onSubmit),
  };
};

export default usePokemonForm;
