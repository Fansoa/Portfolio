import styled from "@emotion/styled";

export const ButtonContainer = styled.button`
  ${({ theme, variantType }) => `
    all: unset;
    user-select: none;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    background-color: ${theme.buttonTheme[variantType].backgroundColor};
  `}
`;
