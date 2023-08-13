import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100px;
    min-height: 100vh;
    padding-bottom: 20px;
    padding-top: 20px;
    background-color: ${theme.colors.darkButNotBlack};
  `}
`;
