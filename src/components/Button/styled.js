import styled from "@emotion/styled";
import { pxToRem } from "../../theme/methods/pxToRem";

export const ButtonContainer = styled.button`
  ${({ theme, variantType }) => `
    cursor: pointer;
    user-select: none;
    padding: 0 ${pxToRem(10)} 0 ${pxToRem(10)};
    height: ${pxToRem(32)};
    font-size: ${pxToRem(12)};
    border-radius: ${pxToRem(5)};
    background-color: ${theme.buttonTheme[variantType].backgroundColor};
    border: 2px solid;
    border-color: ${theme.buttonTheme[variantType].borderColor};
  `}
`;
