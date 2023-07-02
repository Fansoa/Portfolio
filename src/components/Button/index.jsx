import { ButtonContainer } from "./styled";
import PropTypes from 'prop-types'

const Button = ({className, variantType}) => {
  return <ButtonContainer className={className} variantType={variantType}>Toto</ButtonContainer>;
};

Button.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional variantType
   */
  variantType: PropTypes.oneOf(['fill', 'stroke']),
}

Button.defaultProps = {
  className: null,
  variantType: 'fill',
}

export default Button;
