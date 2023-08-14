import PropTypes from "prop-types";
import { SearchButtonContainer as Container } from "./styled";
import RandomIcon from "./components/RandomIcon";
import { noop } from "../../../core/methods/noop";

const RandomButton = ({ className, onClick }) => {
  return (
    <Container className={className} onClick={onClick}>
      <RandomIcon />
    </Container>
  );
};

RandomButton.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional onClick
   */
  onClick: PropTypes.func,
};

RandomButton.defaultProps = {
  className: null,
  onClick: noop,
};

export default RandomButton;
