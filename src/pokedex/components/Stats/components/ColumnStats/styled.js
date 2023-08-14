import styled from "@emotion/styled";

export const ColumnStatsContainer = styled.div`
  width: fit-content;
`;
export const ColumnStatsCaseContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
export const ColumnStatsCase = styled.div`
  ${({ theme, isFirstColumn, isLastColumn, isFirst, isChecked }) => `
    box-sizing: border-box;
    width: 55px;
    height: 12px;
    border-top: 1px solid ${theme.pokedex.colors.veryLightGray};
    border-right: ${!isFirstColumn && "0px"};
    border-right: ${
      isLastColumn && `1px solid ${theme.pokedex.colors.veryLightGray}`
    };
    border-left: 1px solid ${theme.pokedex.colors.veryLightGray};
    ${
      isFirst &&
      `border-bottom: 1px solid ${theme.pokedex.colors.veryLightGray}`
    };
    background: ${
      isChecked ? theme.pokedex.colors.moderateBlue : theme.pokedex.colors.white
    };
  `}
`;
export const ColumnStatsLabel = styled.p`
  margin-top: 4px;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
`;
