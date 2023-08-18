import styled from "@emotion/styled";

export const InfosContainer = styled.div`
  ${({ theme }) => `
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
    width: 290px;
    padding: 16px 28px 15px 17px;
    background: ${theme.pokedex.colors.white};
    border-radius: 20px;
    gap: 34px;
    box-shadow: 0px 2px 4px 0px ${theme.pokedex.colors.veryLightGray}; 
  `}
`;

export const InfosLabelTextContainer = styled.div`
  ${({ isColumn }) => `
    display: flex;
    flex-direction: ${isColumn ? "column" : "row"};
    gap: 22px;
    justify-content: space-between;
  `}
`;

export const InfosLabel = styled.p`
  ${({ theme }) => `
  color: ${theme.pokedex.colors.veryDarkDesaturatedBlue};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  `}
`;
export const InfosText = styled.p`
  ${({ theme }) => `
  color: ${theme.pokedex.colors.softRed};
  // text-align: right;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  `}
`;
