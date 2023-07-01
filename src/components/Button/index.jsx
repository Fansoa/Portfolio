import { ButtonContainer } from "./styled";
import PropTypes from 'prop-types'

const Button = ({variantType}) => {
  return <ButtonContainer variantType={variantType}>Button</ButtonContainer>;
};

Button.propTypes = {
  /**
   * Optional variantType
   */
  variantType: PropTypes.oneOf(['fill', 'stroke']),
}

Button.defaultProps = {
  variantType: 'fill',
}

export default Button;
