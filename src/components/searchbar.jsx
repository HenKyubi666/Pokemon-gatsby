import React, { useState, useEffect, useContext } from "react"
import { reOrderFormatted } from "../api"
import AppContext from "../context/app-context"

const SearchBar = () => {
  const { setData } = useContext(AppContext)
  const search = async name => {
    const dataFormatted = JSON.parse(localStorage.getItem("allPokemons"))
    let listOrder = []
    for (let index = 0; index < dataFormatted.length; index++) {
      const element = dataFormatted[index]
      for (let index = 0; index < element.length; index++) {
        const pokemonData = element[index]
        listOrder.push(pokemonData)
      }
    }
    const searchList = listOrder.filter(
      item => item.idPokemon == Number(name) || item.namePokemon.includes(name)
    )
    let pokemonList = await reOrderFormatted(searchList)
    pokemonList = pokemonList.length < 20 ? searchList : pokemonList
    const res = name ? pokemonList : dataFormatted[0]
    setData(res)
  }

  return (
    <div className="d-flex form-search align-items-center">
      <i className="fas fa-search"></i>
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={event => search(event.target.value)}
      />
      {/* {pokemonFullList.map((val, key) => {
        return <div key={key}>val.</div>
      })} */}

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
