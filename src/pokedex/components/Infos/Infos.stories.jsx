import Infos from ".";

export default {
  title: "Pokedex/Infos",
  component: Infos,
  tags: ["autodocs"],
  args: {
    weight: "90.5 kg",
    height: "1.7 m",
    abilities: "blaze, solar-power",
    description:
      "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const InfosStory = {
  name: "Infos",
};
