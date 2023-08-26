import styled from "@emotion/styled";

export const PokemonContainer = styled.div``;

export const PokemonImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PokemonPokemonImg = styled.img`
  width: 150px;
  height: 150px;
`;

export const PokemonPokeballImg = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  opacity: 0.5;
  z-index: -2;
`;

export const PokemonId = styled.p`
  ${({ theme }) => `
    color: ${theme.pokedex.colors.veryDarkDesaturatedBlue};
    text-align: center;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
  `}
`;

export const PokemonName = styled.p`
  ${({ theme }) => `
    color: ${theme.pokedex.colors.veryDarkDesaturatedBlue};
    text-align: center;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
  `}
`;
