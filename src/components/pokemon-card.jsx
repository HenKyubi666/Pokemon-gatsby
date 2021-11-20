import React from "react"
import classNames from "classnames"

const PokemonCard = ({ pokemon = [] }) => {
  return (
    <>
      <div className="card col-12 col-md-4">
        <img src={pokemon.src} className="card-img-top" alt={pokemon.img} />
        <div className="card-body">
          <p className="card-text">
            {pokemon.name} {pokemon.id}
          </p>
          <div>
            types
            {pokemon.map((item, index) => {
              return (
                <div className={classNames({ fire: item.type === "fire" })}>
                  {item.type}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonCard
