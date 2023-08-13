import styled from "@emotion/styled";
import { pxToRem } from "../../theme/methods/pxToRem";

export const ButtonContainer = styled.button`
  ${({ theme, variantType, componentState }) => `
    cursor: pointer;
    user-select: none;
    padding: 0 ${pxToRem(10)} 0 ${pxToRem(10)};
    height: ${pxToRem(32)};
    font-size: ${pxToRem(12)};
    border-radius: ${pxToRem(5)};
    border: 2px solid;
    background-color: ${
      theme.buttonTheme[variantType][componentState].backgroundColor
    };
    border-color: ${theme.buttonTheme[variantType][componentState].borderColor};
  `}
`;
