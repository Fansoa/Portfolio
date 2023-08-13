import PropTypes from "prop-types";
import { COMPONENT_STATES } from "../../../core/constants";
import {
  LabelInputContainer as Container,
  LabelInputInput as Input,
  LabelInputLabel as Label,
  LabelInputErrorMessage as ErrorMessage,
} from "./styled";
import { noop } from "../../../core/methods/noop";

const LabelInput = ({
  className,
  componentState,
  onBlur,
  setIsHover,
  type,
  label,
  errorMessage,
  onChange,
  value,
}) => {
  return (
    <Container className={className}>
      <Label htmlFor={label} componentState={componentState}>
        {label}
      </Label>
      <Input
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={componentState === COMPONENT_STATES.disable}
        onBlur={onBlur}
        type={type}
        componentState={componentState}
        onChange={onChange}
        value={value}
      />
      {componentState === COMPONENT_STATES.error && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </Container>
  );
};

LabelInput.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional componentState
   */
  componentState: PropTypes.oneOf([
    COMPONENT_STATES.default,
    COMPONENT_STATES.disable,
    COMPONENT_STATES.error,
    COMPONENT_STATES.fill,
    COMPONENT_STATES.hover,
  ]),
  /**
   * Optional onBlur
   */
  onBlur: PropTypes.func,
  /**
   * Optional setIsHover
   */
  setIsHover: PropTypes.func,
  /**
   * Optional type
   */
  type: PropTypes.oneOf(["text", "number"]),
  /**
   * Optional label
   */
  label: PropTypes.string,
  /**
   * Optional errorMessage
   */
  errorMessage: PropTypes.string,
  /**
   * Required onChange
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Required value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

LabelInput.defaultProps = {
  className: null,
  componentState: "default",
  onBlur: noop,
  onFocus: noop,
  setIsHover: noop,
  type: "text",
  label: null,
  errorMessage: null,
};

export default LabelInput;
