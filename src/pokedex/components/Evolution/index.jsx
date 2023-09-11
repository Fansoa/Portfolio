import PropTypes from "prop-types";
import Pokemon from "../Pokemon";
import NextIcon from "../../icons/NextIcon";
import { EvolutionContainer as Container } from "./styled";
import { Fragment } from "react";

const Evolution = ({ className, data, elementType }) => {
  if (!data) {
    return null;
  }
  const dataLength = data.length;
  return (
    <Container className={className}>
      {data.map(({ id, name, imgUrl }, _) => {
        const displayNext = dataLength > 1 && _ !== dataLength - 1;
        return (
          <Fragment key={`${name}-${_}`}>
            <Pokemon imgUrl={imgUrl} name={name} id={id} />
            {displayNext && <NextIcon elementType={elementType} />}
          </Fragment>
        );
      })}
    </Container>
  );
};

Evolution.propTypes = {
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
  /**
   * Optional data
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      imgUrl: PropTypes.string,
    }),
  ),
};

export default Evolution;
