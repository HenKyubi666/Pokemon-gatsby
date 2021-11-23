import React from "react"

const PokemonEvolution = (pokemon = []) => {
  return (
    <div className="col-12 col-md-4">
      <div className="circle">
        <img src={pokemon.img} alt={pokemon.alt} />
      </div>
      <h5>{pokemon.name}</h5>
      <span>{pokemon.id}</span>
    </div>
  )
}

export default PokemonEvolution
