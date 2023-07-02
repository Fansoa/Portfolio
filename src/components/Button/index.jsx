import { ButtonContainer } from "./styled";
import PropTypes from 'prop-types'

const Button = ({className, variantType, label}) => {
  return <ButtonContainer className={className} variantType={variantType}>{label}</ButtonContainer>;
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
}

Button.defaultProps = {
  className: null,
  label: null,
  variantType: 'fill',
}

export default Button;
