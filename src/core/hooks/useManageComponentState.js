import { useState } from "react";

const useManageComponentState = (inputFieldValue) => {
  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isFilled, setIsFilled] = useState(
    !inputFieldValue || inputFieldValue === 0,
  );

  const handleOnBlur = (e) => {
    const hasValue = Boolean(e.target.value);
    setIsFilled(hasValue);
  };

  return {
    isHover,
    setIsHover,
    isFocus,
    setIsFocus,
    isActive,
    setIsActive,
    isFilled,
    setIsFilled,
    handleOnBlur,
  };
};

export default useManageComponentState;
