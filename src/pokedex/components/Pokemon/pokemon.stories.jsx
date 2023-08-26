import Pokemon from ".";

export default {
  title: "Pokedex/Pokemon",
  component: Pokemon,
  tags: ["autodocs"],
  args: {
    className: null,
    name: "Charizard",
    id: "#006",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  },
};

export const PokemonStory = {
  name: "Pokemon",
};
