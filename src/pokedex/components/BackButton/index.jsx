import PropTypes from "prop-types";
import VectorIcon from "../../icons/VectorIcon";
import { useNavigate } from "react-router-dom";

const BackButton = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={className} onClick={() => navigate("/pokedex")}>
      <VectorIcon />
    </div>
  );
};

BackButton.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
};

BackButton.defaultProps = {
  className: null,
};

export default BackButton;
