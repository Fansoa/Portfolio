import PropTypes from "prop-types";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import LabelInput from "..";
import { getComponentState } from "../../../../core/methods/getComponentState";
import useManageComponentState from "../../../../core/hooks/useManageComponentState";

const LabelInputController = ({ name, isDisable, ...props }) => {
  const { control } = useFormContext();
  const inputFieldValue = useWatch({ name });

  const { isHover, setIsHover, isFilled, handleOnBlur } =
    useManageComponentState({ inputFieldValue, isDisable });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <LabelInput
          onChange={onChange}
          value={value}
          componentState={getComponentState({
            isDisable,
            error,
            isHover,
            isFilled,
          })}
          onBlur={handleOnBlur}
          setIsHover={setIsHover}
          errorMessage={error?.message}
          {...props}
        />
      )}
    />
  );
};

LabelInputController.propTypes = {
  /**
   * Required name
   */
  name: PropTypes.string.isRequired,
  /**
   * Optional isDisable
   */
  isDisable: PropTypes.bool,
};

LabelInputController.defaultProps = {
  isDisable: false,
};

export default LabelInputController;
