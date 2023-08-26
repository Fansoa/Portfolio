import PropTypes from "prop-types";
import {
  PokemonContainer as Container,
  PokemonPokemonImg as PokemonImg,
  PokemonPokeballImg as PokeballImg,
  PokemonImgContainer as ImgContainer,
  PokemonId as Id,
  PokemonName as Name,
} from "./styled";
import pokeball from "../../assets/pokeball.png";

const Pokemon = ({ className, imgUrl, id, name }) => {
  return (
    <Container className={className}>
      <ImgContainer>
        <PokemonImg src={imgUrl} />
        <PokeballImg src={pokeball} />
      </ImgContainer>
      <Id>{id}</Id>
      <Name>{name}</Name>
    </Container>
  );
};

Pokemon.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional imgUrl
   */
  imgUrl: PropTypes.string,
  /**
   * Optional id
   */
  id: PropTypes.string,
  /**
   * Optional name
   */
  name: PropTypes.string,
};

export default Pokemon;
