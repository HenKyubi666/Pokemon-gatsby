import React, { useContext, useEffect, useState } from "react"
import ModalContext from "../context/modal-context"
import { fetchPokemonDetails } from "../api"

const PokemonCard = ({ pokemonData }) => {
  const [formatedId, setFormatedId] = useState(null)
  const { setPokemonDetailData } = useContext(ModalContext)

  const PokemonDetails = async () => {
    try {
      if (pokemonData?.idPokemon) {
        let pokemonDetailsData = await fetchPokemonDetails(
          pokemonData.idPokemon
        )
        pokemonDetailsData.img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatedId}.png`
        setPokemonDetailData(pokemonDetailsData)
      }
    } catch (err) {
      console.log("err", err)
    }
  }

  const formatId = (id = "0") =>
    setFormatedId(id.length === 1 ? `00${id}` : id.length === 2 ? `0${id}` : id)

  useEffect(() => {
    if (pokemonData?.idPokemon) formatId(JSON.stringify(pokemonData?.idPokemon))
  }, [pokemonData])

  return (
    <div className="h-100 col-12 col-md-4 p-2">
      <button
        className="card shadow-sm pokemon-component w-100"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          PokemonDetails()
        }}
      >
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatedId}.png`}
          className="card-img-top"
          alt={pokemonData.namePokemon}
        />
        <div className="d-flex col-12 justify-content-evenly">
          <p> {pokemonData?.namePokemon}</p>
          <p> {pokemonData?.idPokemon}</p>
        </div>
      </button>
    </div>
  )
}

export default PokemonCard
