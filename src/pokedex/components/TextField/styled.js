import styled from "@emotion/styled";

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TextFieldLabel = styled.label`
  ${({ theme }) => `
    color: ${theme.pokedex.colors.darkGray};
    font-family: Poppins;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  `}
  margin-bottom: 9px;
`;
export const TextFieldInput = styled.input`
  ${({ theme }) => `
    color: ${theme.pokedex.colors.veryDarkDesaturatedBlue};
    box-sizing: border-box;
    width: 280px;
    height: 56px;
    padding: 6px 8px 6px 8px;
    border-radius: 4px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    border: 1px solid ${theme.pokedex.colors.veryLightGray};
    background: ${theme.pokedex.colors.whiteSmoke};
  `}
`;
