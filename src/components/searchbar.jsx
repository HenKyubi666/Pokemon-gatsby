import React, { useContext } from "react"
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
      item =>
        item.idPokemon.toString().includes(Number(name)) ||
        item.namePokemon.includes(name)
    )
    //
    let pokemonList = await reOrderFormatted(searchList)
    pokemonList =
      pokemonList.length < searchList.length ? searchList : pokemonList
    const res = name ? pokemonList : dataFormatted[0]
    //
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
    </div>
  )
}

export default SearchBar
