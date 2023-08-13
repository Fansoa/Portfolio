import { COMPONENT_STATES } from "../../../core/constants";
import { global } from "../../global";

export const inputTheme = {
  [COMPONENT_STATES.default]: {
    borderColor: global.colors.greyple,
    backgroundColor: global.colors.darkButNotBlack,
  },
  [COMPONENT_STATES.disable]: {
    borderColor: global.colors.greyple,
    backgroundColor: global.colors.greyple,
  },
  [COMPONENT_STATES.error]: {
    borderColor: global.colors.red,
    backgroundColor: global.colors.darkButNotBlack,
  },
  [COMPONENT_STATES.fill]: {
    borderColor: global.colors.greyple,
    backgroundColor: global.colors.darkButNotBlack,
  },
  [COMPONENT_STATES.hover]: {
    borderColor: global.colors.greyple,
    backgroundColor: global.colors.darkButNotBlack,
  },
};
