import { DEFAULT_FONT_SIZE } from "../../global/constants/styleConstants";

export const pxToRem = (pixelValue) => {
  return `${pixelValue / DEFAULT_FONT_SIZE}rem`;
};
