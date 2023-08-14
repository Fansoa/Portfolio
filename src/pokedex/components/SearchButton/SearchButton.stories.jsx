import SearchButton from ".";

export default {
  title: "Pokedex/SearchButton",
  component: SearchButton,
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

export const SearchButtonStory = {
  name: "SearchButton",
};
