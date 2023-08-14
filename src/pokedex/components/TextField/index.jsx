import PropTypes from "prop-types";
import {
  TextFieldInput as Input,
  TextFieldLabel as Label,
  TextFieldContainer as Container,
} from "./styled";

const TextField = ({ className, label, name, value, onChange }) => {
  return (
    <Container className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Input type="text" name={name} value={value} onChange={onChange} />
    </Container>
  );
};

TextField.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional label
   */
  label: PropTypes.string,
  /**
   * Required name
   */
  name: PropTypes.string.isRequired,
  /**
   * Required value
   */
  value: PropTypes.string.isRequired,
  /**
   * Required onChange
   */
  onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  className: null,
  label: null,
};

export default TextField;
