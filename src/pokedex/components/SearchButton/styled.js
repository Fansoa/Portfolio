import styled from "@emotion/styled";

export const SearchButtonContainer = styled.div`
  ${({ theme }) => `
    border-radius: 80px;
    padding: 24px 45px 24px 45px;
    background: ${theme.pokedex.colors.softOrange2};
    width: fit-content;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    color: ${theme.pokedex.colors.white};
  `}
`;
