import styled from "@emotion/styled";

export const RandomButtonContainer = styled.div`
  ${({ theme }) => `
    box-sizing: border-box;
    border-radius: 80px;
    padding: 20px 18px 20px 18px;
    background: ${theme.pokedex.colors.softOrange2};
    color: ${theme.pokedex.colors.white};
    height: 65px;
    display: flex;
    align-items: center;
  `}
`;
