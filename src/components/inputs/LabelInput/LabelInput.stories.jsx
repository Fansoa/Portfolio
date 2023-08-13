import LabelInput from ".";

export default {
  title: "Inputs/LabelInput",
  component: LabelInput,
  args: {
    type: "text",
    label: "Label",
    errorMessage: "Message d'erreur",
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const LabelInputStory = {
  name: "LabelInput",
};
