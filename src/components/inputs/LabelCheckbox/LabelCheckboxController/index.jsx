import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import LabelCheckbox from "..";

const LabelCheckboxController = ({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
          return <LabelCheckbox value={value} name={name} onChange={onChange} {...props} />
        }
      }
    />
  );
};

LabelCheckboxController.propTypes = {
  /**
   * isRequired name
   */
  name: PropTypes.string.isRequired,
};

export default LabelCheckboxController
