import PokemonIllustration from ".";

export default {
  title: "Pokedex/PokemonIllustration",
  component: PokemonIllustration,
  tags: ["autodocs"],
  args: {
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    elementTypes: ["fire", "flying"],
  },
};

export const PokemonIllustrationStory = {
  name: "PokemonIllustration",
};
