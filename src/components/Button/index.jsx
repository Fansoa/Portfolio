import { ButtonContainer } from "./styled";
import PropTypes from 'prop-types'
import { noop } from "../../utils/methods/noop";

const Button = ({className, variantType, label, onClick}) => {
  return <ButtonContainer className={className} variantType={variantType} onClick={onClick}>{label}</ButtonContainer>;
};

Button.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional label
   */
  label: PropTypes.string,
  /**
   * Optional variantType
   */
  variantType: PropTypes.oneOf(['fill', 'stroke']),
  /**
   * Optional onClick
   */
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: null,
  label: null,
  variantType: 'fill',
  onClick: noop,
}

export default Button;
