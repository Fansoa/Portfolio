import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";

const CheckIcon = ({ className, fillColor }) => {
  const theme = useTheme();
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 13L2 8.47826L6.5 10.2174L14 5L6.5 13Z"
        fill={fillColor || theme.colors.green}
      />
    </svg>
  );
};

CheckIcon.propTypes = {
  className: PropTypes.string,
  fillColor: PropTypes.string,
};

CheckIcon.defaultProps = {
  /**
   * Optional CheckIcon
   */
  className: null,
  /**
   * Optional fillColor
   */
  fillColor: null,
};

export default CheckIcon;
