import { COMPONENT_STATES } from "../../constants";

export const getComponentState = ({
  isDisable,
  error,
  isHover,
  isFocus,
  isActive,
  isFilled,
}) => {
  if (isDisable) return COMPONENT_STATES.disable;
  if (error) return COMPONENT_STATES.error;
  if (isActive) return COMPONENT_STATES.active;
  if (isHover) return COMPONENT_STATES.hover;
  if (isFocus) return COMPONENT_STATES.focus;
  if (isFilled) return COMPONENT_STATES.fill;

  return COMPONENT_STATES.default;
};
