import styled from "@emotion/styled";

export const PokemonPageContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(180deg, ${theme.pokedex.colors.softOrange2} 0%, ${theme.pokedex.colors.mirage} 100%);
  `}
`;

export const PokemonPagePokemon = styled.div`
  display: flex;
  flex-direction: column;
  width: 1168px;
  border-radius: 20px;
  background: #ffffffcc;
  box-sizing: border-box;
`;

export const PokemonPageLabel = styled.h1`
  ${({ theme }) => `
    color: ${theme.colors.veryDarkDesaturatedBlue};
    text-align: center;
    font-family: Roboto;
    font-size: 30px;
    font-weight: 700;
    text-transform: capitalize;
  `}
`;

export const PokemonPageTopContainer = styled.div`
  ${({ theme }) => `
    padding: 0 42px 0 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 122px;
    border-bottom: 1px solid ${theme.pokedex.colors.softOrange2};
  `}
`;

export const PokemonPageMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  padding: 42px;
`;

export const PokemonPageBottomContainer = styled.div`
  padding: 0 42px 42px 42px;
`;
