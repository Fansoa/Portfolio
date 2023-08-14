import styled from "@emotion/styled";

export const SearchButtonContainer = styled.div`
  ${({ theme }) => `
    border-radius: 80px;
    padding: 20px 18px 20px 18px;
    background: ${theme.pokedex.colors.softOrange2};
    width: fit-content;
    color: ${theme.pokedex.colors.white};
    display: flex;
    justify-content: space-around;
  `}
`;
