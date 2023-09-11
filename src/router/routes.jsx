import PokemonPage from "../pokedex/pages/PokemonPage";
import SearchPage from "../pokedex/pages/SearchPage";
import Test from "../pokedex/pages/test";

export const routes = [
  {
    path: "/pokedex",
    element: <SearchPage />,
  },
  {
    path: "/pokedex/:pokemonName",
    element: <PokemonPage />,
  },
];
