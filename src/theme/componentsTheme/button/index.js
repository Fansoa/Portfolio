import { global } from "../../global";
import { COMPONENT_STATES } from "../../../core/constants";

export const buttonTheme = {
  fill: {
    [COMPONENT_STATES.default]: {
      backgroundColor: global.colors.blurple,
      borderColor: global.colors.blurple,
    },
    [COMPONENT_STATES.hover]: {
      backgroundColor: global.colors.oldBlurple,
      borderColor: global.colors.oldBlurple,
    },
    [COMPONENT_STATES.active]: {
      backgroundColor: global.colors.blurple,
      borderColor: global.colors.blurple,
    },
    [COMPONENT_STATES.disable]: {
      backgroundColor: global.colors.greyple,
      borderColor: global.colors.greyple,
    },
  },
  stroke: {
    [COMPONENT_STATES.default]: {
      backgroundColor: "",
      borderColor: global.colors.blurple,
    },
    [COMPONENT_STATES.hover]: {
      backgroundColor: "",
      borderColor: global.colors.oldBlurple,
    },
    [COMPONENT_STATES.active]: {
      backgroundColor: "",
      borderColor: global.colors.blurple,
    },
    [COMPONENT_STATES.disable]: {
      backgroundColor: "",
      borderColor: global.colors.greyple,
    },
  },
};
