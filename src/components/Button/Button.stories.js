import Button from ".";

export default {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Bouton",
    variantType: "fill",
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    onClick: {
      action: "Button is clicked",
      description: "description",
    },
  },
};

export const Default = {};
