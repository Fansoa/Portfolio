import PropTypes, { elementType } from "prop-types";
import { TypesContainer as Container } from "./styled";
import Type from "../Type";

const Types = ({ className, elementTypes }) => {
  const isSingleTypeElement = elementType.length === 1;

  return (
    <Container className={className} isSingleTypeElement={isSingleTypeElement}>
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
