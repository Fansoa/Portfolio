import styled from "@emotion/styled";

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelInputInput = styled.input`
${({ theme, componentState }) => `
box-sizing: border-box;
background-color: ${theme.inputTheme[componentState].backgroundColor};
border: 1px solid;
border-radius: 4px;
width: 288px;
height: 32px;
padding: 8px 12px;
border-color: ${theme.inputTheme[componentState].borderColor};
color: ${theme.colors.greyple};
&:focus {
  border-color: ${theme.colors.oldBlurple};
`}
  }
`;

export const LabelInputLabel = styled.label`
  ${({ theme, componentState }) => `
  color: ${theme.labelInputTheme[componentState].label.color};
`}
`;

export const LabelInputErrorMessage = styled.p`
  ${({ theme }) => `
  color: ${theme.colors.red};
`}
`;
