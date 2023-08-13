import { ButtonContainer } from "./styled";
import PropTypes from "prop-types";
import { noop } from "../../core/methods/noop";
import useManageComponentState from "../../core/hooks/useManageComponentState";
import { getComponentState } from "../../core/methods/getComponentState";

const Button = ({ className, variantType, label, onClick, isDisable }) => {
  const { isHover, setIsHover, isFocus, isActive, setIsActive } =
    useManageComponentState();

  const componentState = getComponentState({
    isHover,
    isFocus,
    isActive,
    isDisable,
  });

  return (
    <ButtonContainer
      componentState={componentState}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseOut={() => setIsActive(false)}
      className={className}
      variantType={variantType}
      onClick={onClick}
    >
      {label}
    </ButtonContainer>
  );
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
  variantType: PropTypes.oneOf(["fill", "stroke"]),
  /**
   * Optional onClick
   */
  onClick: PropTypes.func,
  /**
   * Optional isDisable
   */
  isDisable: PropTypes.bool,
};

Button.defaultProps = {
  className: null,
  label: null,
  variantType: "fill",
  onClick: noop,
  isDisable: false,
};

export default Button;
