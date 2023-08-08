import { COMPONENT_STATES } from "../../constants";

const getComponentState = ({ isDisable, error, isFilled, isHover }) => {
  if (isDisable) return COMPONENT_STATES.disable;
  if (error) return COMPONENT_STATES.error;
  if (isHover) return COMPONENT_STATES.hover;
  if (isFilled) return COMPONENT_STATES.fill;

  return COMPONENT_STATES.default;
};

export default getComponentState;
