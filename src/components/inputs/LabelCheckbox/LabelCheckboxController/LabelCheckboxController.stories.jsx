import { FormProvider, useForm } from "react-hook-form";
import LabelCheckboxController from ".";

const ControlProvider = () => {
  const methods = useForm({
    defaultValues: {
      inputName: false,
    },
  });

  return (
    <FormProvider {...methods}>
      <LabelCheckboxController name="inputName" label="Label" />
    </FormProvider>
  );
};

export default {
  title: "Inputs/LabelCheckbox",
  component: LabelCheckboxController,
  args: {
    name: "inputName",
    label: "Label",
  },
};

export const LabelCheckboxControllerStory = {
  name: "LabelCheckboxController",
  render: () => <ControlProvider />,
};
