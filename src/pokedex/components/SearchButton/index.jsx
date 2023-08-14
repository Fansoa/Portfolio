import PropTypes from "prop-types";
import { SearchButtonContainer as Container } from "./styled";
import { noop } from "../../../core/methods/noop";

const SearchButton = ({ className, onClick }) => {
  return (
    <Container className={className} onClick={onClick}>
      Search !
    </Container>
  );
};

SearchButton.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional onClick
   */
  onClick: PropTypes.func,
};

SearchButton.defaultProps = {
  className: null,
  onClick: noop,
};

export default SearchButton;
