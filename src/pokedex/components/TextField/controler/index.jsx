import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "..";

const TextFieldControler = ({ name, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextField name={name} value={value} onChange={onChange} {...props} />
      )}
    />
  );
};

TextFieldControler.propTypes = {
  /**
   * Required name
   */
  name: PropTypes.string.isRequired,
};

export default TextFieldControler;
