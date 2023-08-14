import styled from "@emotion/styled";

export const TypeContainer = styled.div`
  ${({ backgroundColor }) => `
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${backgroundColor};
  width: 120px;
  height: 60px;
  border-radius: 20px;
  padding: 20px 36px 20px 36px;
  `}
`;

export const TypeLabel = styled.p`
  ${({ theme }) => `
    color: ${theme.pokedex.colors.white};
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    text-transform: capitalize;
  `}
`;
