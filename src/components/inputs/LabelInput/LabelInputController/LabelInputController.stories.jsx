import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";
import LabelInputController from ".";

const ControlProvider = ({ name, isDisable, ...props }) => {
  const methods = useForm({
    defaultValues: {
      [name]: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <LabelInputController
        name={name}
        isDisable={isDisable}
        label="Label"
        {...props}
      />
    </FormProvider>
  );
};

ControlProvider.propTypes = {
  /**
   * Required name
   */
  name: PropTypes.string.isRequired,
  /**
   * Optional isDisable
   */
  isDisable: PropTypes.bool,
};

ControlProvider.defaultProps = {
  isDisable: false,
};

export default {
  title: "Inputs/LabelInput/Controler",
  component: ControlProvider,
  args: {
    label: "Label",
    name: "inputName",
    errorMessage: "Message d'erreur",
    isDisable: false,
  },
};

export const LabelInputControllerStory = {
  name: "LabelInputController",
  render: (props) => <ControlProvider {...props} />,
};
