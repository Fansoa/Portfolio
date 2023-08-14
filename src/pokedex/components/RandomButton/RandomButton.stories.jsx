import RandomButton from ".";

export default {
  title: "Pokedex/RandomButton",
  component: RandomButton,
  tags: ["autodocs"],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};

export const RandomButtonStory = {
  name: "RandomButton",
};
