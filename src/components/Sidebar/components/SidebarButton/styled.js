import styled from "@emotion/styled";

export const SidebarButtonContainer = styled.div`
  position: relative;
`;

export const SidebarButtonButtonContainer = styled.button`
  ${({ theme, isHover }) => `
    border-radius: ${isHover ? "30px" : "40px"};
    transition: border-radius ease-in-out 0.15s;
    width: 80px;
    height: 80px;
    background-color: ${theme.colors.notQuiteBlack};
    overflow: hidden;
  `}
`;

export const SidebarButtonTooltipContainer = styled.div`
  ${({ theme }) => `
    box-sizing: border-box;
    position: absolute;
    top: 20px;
    left: 100px;
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 4px;
    background-color: ${theme.colors.fullWhite};
    padding: 5px 10px 5px 10px;
  `}
`;
