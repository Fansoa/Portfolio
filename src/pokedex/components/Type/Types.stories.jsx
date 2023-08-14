import Type from ".";

export default {
  title: "Pokedex/Type",
  component: Type,
  tags: ["autodocs"],
  args: {
    elementType: "normal",
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const TypeStory = {
  name: " Type",
};
