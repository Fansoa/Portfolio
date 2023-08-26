import PropTypes from "prop-types";
import {
  PokemonIllustrationContainer as Container,
  PokemonIllustrationImage,
} from "./styled";
import Types from "../Types";

const PokemonIllustration = ({ className, elementTypes, imgUrl }) => {
  return (
    <Container className={className}>
      <PokemonIllustrationImage src={imgUrl} />
      <Types elementTypes={elementTypes} />
    </Container>
  );
};

PokemonIllustration.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional elementTypes
   */
  elementTypes: PropTypes.array,
  /**
   * Optional imgUrl
   */
  imgUrl: PropTypes.string,
};

export default PokemonIllustration;
