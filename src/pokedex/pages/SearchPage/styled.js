import styled from "@emotion/styled";

export const SearchPageContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(180deg, ${theme.pokedex.colors.softOrange2} 0%, ${theme.pokedex.colors.mirage} 100%);
  `}
`;
