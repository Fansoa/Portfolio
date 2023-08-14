import PropTypes from "prop-types";
import { TypeContainer as Container, TypeLabel as Label } from "./styled";
import { useTheme } from "@emotion/react";
import { getBackgroundColorByElementType } from "./methods/getBackgroundColorByElementType";

const Type = ({ className, elementType }) => {
  const theme = useTheme();
  const backgroundColor = getBackgroundColorByElementType({
    theme,
    elementType,
  });

  return (
    <Container className={className} backgroundColor={backgroundColor}>
      <Label>{elementType}</Label>
    </Container>
  );
};

Type.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional elementType
   */
  elementType: PropTypes.oneOf([
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dark",
    "dragon",
    "steel",
    "fairy",
  ]),
};

Type.defaultProps = {
  className: null,
  elementType: "normal",
};

export default Type;
