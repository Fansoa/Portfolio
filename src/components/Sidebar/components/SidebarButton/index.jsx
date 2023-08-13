import PropTypes from "prop-types";
import { useState } from "react";
import {
  SidebarButtonButtonContainer as ButtonContainer,
  SidebarButtonContainer as Container,
  SidebarButtonTooltipContainer as TooltipContainer,
} from "./styled";
import { noop } from "../../../../core/methods/noop";

const SidebarButton = ({ icon, tooltipText, onClick }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Container>
      <ButtonContainer
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        isHover={isHover}
      >
        {icon}
      </ButtonContainer>
      {isHover && (
        <TooltipContainer>
          <p>{tooltipText}</p>
        </TooltipContainer>
      )}
    </Container>
  );
};

SidebarButton.propTypes = {
  /**
   * Optional icon
   */
  icon: PropTypes.element,
  /**
   * Optional tooltipText
   */
  tooltipText: PropTypes.string,
  /**
   * Optional onClick
   */
  onClick: PropTypes.func,
};

SidebarButton.defaultProps = {
  icon: null,
  tooltipText: null,
  onClick: noop,
};

export default SidebarButton;
