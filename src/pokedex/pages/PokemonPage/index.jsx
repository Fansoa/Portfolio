import { useLocation } from "react-router-dom";
import Infos from "../../components/Infos";
import Stats from "../../components/Stats";
import PokemonIllustration from "../../components/PokemonIllustration";
import {
  PokemonPageContainer as Container,
  PokemonPageMainContainer as MainContainer,
  PokemonPagePokemon,
  PokemonPageTopContainer as TopContainer,
  PokemonPageBottomContainer as BottomContainer,
  PokemonPageLabel as Label,
} from "./styled";
import Evolution from "../../components/Evolution";
import BackButton from "../../components/BackButton";

const PokemonPage = () => {
  const { state } = useLocation();
  const { id, name, infos, stats, types, pokemonImage, evolution } = state;

  return (
    <Container>
      <PokemonPagePokemon>
        <TopContainer>
          <BackButton />
          <Label>
            {name} #{id}
          </Label>
          <span />
        </TopContainer>
        <MainContainer>
          <Stats {...stats} />
          <PokemonIllustration imgUrl={pokemonImage} elementTypes={types} />
          <Infos {...infos} />
        </MainContainer>
        <BottomContainer>
          <Evolution elementType={types[0]} data={evolution} />
        </BottomContainer>
      </PokemonPagePokemon>
    </Container>
  );
};

export default PokemonPage;
