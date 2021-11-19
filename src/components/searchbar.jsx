import React, { useState } from "react"
// import { searchPokemon } from "../api"

const SearchBar = () => {
  // const { onSearch } = props;

  // const [search, setSearch] = useState("");
  // const [pokemon, setPokemon] = useState();

  const onChange = e => {
    //   setSearch(e.target.value);
    //   // if (e.target.value.length === 0) {
    //   //   onSearch(null);
    //   // }
  }

  // const onClick = async (e) => {
  //   const data = await searchPokemon(search);
  //   setPokemon(data);
  //   console.log(data);
  //   // onSearch(search);
  // };

  return (
    <div className="d-flex form-search">
      <button className="btn btn-search" type="submit" onClick="{onClick}">
        {/* <SearchIcon></SearchIcon> */}
      </button>
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={onChange}
      />
      {/* {pokemon && (
        <div>
          <div>nombre: {pokemon.name}</div>
          <div>peso: {pokemon.weight} </div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
          <div></div>
        </div>
      )} */}
    </div>
  )
}

export default SearchBar
