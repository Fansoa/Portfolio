import styled from "@emotion/styled";

export const SearchButtonContainer = styled.div`
  ${({ theme }) => `
    box-sizing: border-box;
    border-radius: 80px;
    padding: 24px 45px 24px 45px;
    background: ${theme.pokedex.colors.softOrange2};
    height: 65px;
    width: fit-content;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    color: ${theme.pokedex.colors.white};
    display: flex;
    align-items: center;
  `}
`;
