import React from "react"

//components
import SearchBar from "./searchbar"

// import PokemonCard from "./pokemon";
// import { getPokemonData, getPokemons, searchPokemon } from "../api";

const Navbar = () => {
  //   const [pokemons, setPokemons] = useState([]);
  //   const [page, setPage] = useState(0);
  //   const [total, setTotal] = useState(0);
  //   const [loading, setLoading] = useState(true);
  //   const [notFound, setNotFound] = useState(false);
  //   const [searching, setSearching] = useState(false);
  //   useEffect(() => {
  //     if (!searching) {
  //       fetchPokemons();
  //     }
  //   }, [page]);

  //   const fetchPokemons = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await getPokemons(20, 20 * page);
  //       console.log(data);
  //       const promises = data.results.map(async (pokemon) => {
  //         return await getPokemonData(pokemon.url);
  //       });
  //       const results = await Promise.all(promises);
  //       setPokemons(results);
  //       setLoading(false);
  //       setTotal(Math.ceil(data.count / 25));
  //       setNotFound(false);
  //     } catch (err) {}
  //   };
  //   const onSearch = async (pokemon) => {
  //     if (!pokemon) {
  //       return fetchPokemons();
  //     }
  //     setLoading(true);
  //     setNotFound(false);
  //     setSearching(true);
  //     const result = await searchPokemon(pokemon);
  //     if (!result) {
  //       setNotFound(true);
  //       setLoading(false);
  //       return;
  //     } else {
  //       setPokemons([result]);
  //       setPage(0);
  //       setTotal(1);
  //     }
  //     setLoading(false);
  //     setSearching(false);
  //   };
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://pokeapi.co/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="logo"
          />
        </a>
        <SearchBar />
      </div>
    </nav>
  )
}

export default Navbar
