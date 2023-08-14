import styled from "@emotion/styled";

export const StatsContainer = styled.div`
  ${({ theme }) => `
    width: fit-content;
    display: flex;
    padding: 7px 8px 5px 7px;
    background: ${theme.pokedex.colors.lightGray};
  `}
`;
