import PropTypes from "prop-types";
import { TypesContainer as Container } from "./styled";
import Type from "../Type";

const Types = ({ className, elementTypes }) => {
  return (
    <Container className={className}>
      {elementTypes.map((elementType, i) => (
        <Type elementType={elementType} key={i} />
      ))}
    </Container>
  );
};

Types.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional elementTypes
   */
  elementTypes: PropTypes.array,
};

Types.defaultProps = {
  className: null,
  elementTypes: [],
};

export default Types;
