import Evolution from ".";

export default {
  title: "Pokedex/Evolution",
  component: Evolution,
  tags: ["autodocs"],
  args: {
    elementType: "fire",
    data: [
      {
        name: "charmander",
        id: "#004",
        imgUrl:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "charmeleon",
        id: "#005",
        imgUrl:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      },
      {
        name: "charizard",
        id: "#006",
        imgUrl:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      },
    ],
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const EvolutionStory = {
  name: "Evolution",
};
