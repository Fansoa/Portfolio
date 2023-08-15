import PokemonForm from "./components/PokemonForm";
import { SearchPageContainer as Container } from "./styled";

const SearchPage = () => {
  return (
    <Container>
      <PokemonForm />
    </Container>
  );
};

SearchPage.propTypes = {};

export default SearchPage;
