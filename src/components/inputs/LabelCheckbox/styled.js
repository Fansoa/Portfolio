import styled from "@emotion/styled";
import CheckIcon from "../../../icons/CheckIcon";
import { pxToRem } from "../../../theme/methods/pxToRem";

export const LabelCheckboxContainer = styled.div`
  display: flex;
  gap: ${pxToRem(15)};
`;

export const Checkbox = styled.input``;

export const CustomCheckbox = styled.div`
  position: relative;
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  border-radius: ${pxToRem(4)};
  border: ${pxToRem(0.5)} solid black;
`;

export const LabelCheckboxCheckIcon = styled(CheckIcon)`
  position: absolute;
  top: 0px;
`;

export const LabelCheckboxLabel = styled.label``;
