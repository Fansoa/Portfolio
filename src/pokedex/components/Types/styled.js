import styled from "@emotion/styled";

export const TypesContainer = styled.div`
  ${({ isSingleTypeElement }) => `
    display: flex;
    justify-content: ${isSingleTypeElement ? "center" : "space-around"};
  `}
`;
