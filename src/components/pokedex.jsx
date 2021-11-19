import React from "react";

const Pokedex = (props) => {
  const { pokemons } = props;
  console.log(pokemons);
  return (
    <>
      {pokemons.map((pokemon, idx) => {
        return (
          <div key={pokemon.name}>
            {pokemon.name}#{idx + 1}
          </div>
          // <div>{pokemon.}</div>
        );
      })}
    </>
  );
};

export default Pokedex;
