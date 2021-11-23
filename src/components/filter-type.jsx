import React, { useState, useEffect, useContext } from "react"
import { getFilterNames, getPokemonsInType, removeRepeat } from "../api"
import FilterContext from "../context/filter-context"

const FilterType = () => {
  const [filters, setFilters] = useState([])
  const [filtersSelected, setFiltersSelected] = useState([])
  const { setFilterType } = useContext(FilterContext)

  const fetchFilterNames = async () => {
    try {
      const data = await getFilterNames()
      setFilters(data.results)
    } catch (err) {
      console.log("err", err)
    }
  }

  const getPokemonNames = async (types = []) => {
    let newArrayPokemonNames = []
    for (let i = 0; i < types.length; i++) {
      const pokemons = await getPokemonsInType(types[i])
      const pokemonNames = []
      for (let i = 0; i < pokemons.pokemon.length; i++) {
        pokemonNames.push(pokemons.pokemon[i].pokemon.name)
      }
      newArrayPokemonNames.push(...pokemonNames)
    }
    newArrayPokemonNames = removeRepeat(newArrayPokemonNames)
    return newArrayPokemonNames
  }

  const onChange = async id => {
    let selected = filtersSelected
    let find = selected.indexOf(id)
    if (find > -1) {
      selected.splice(find, 1)
    } else {
      selected.push(id)
    }
    setFiltersSelected(selected)
    const selectedNames = await getPokemonNames(selected)
    setFilterType(selectedNames)
  }

  useEffect(() => {
    fetchFilterNames()
  }, [])

  return (
    <div className="gender-filter row mx-3">
      <span className="p-0">Type:</span>
      {filters.length > 0 &&
        filters.map((filter, index) => (
          <div key={`custom-checkbox-${index}`} className="form-check col-6">
            <input
              id={`custom-checkbox-${index}`}
              className="form-check-input"
              type="checkbox"
              value={filtersSelected.includes(filter?.name)}
              onChange={() => onChange(filter?.name)}
            />
            <label
              className="form-check-label"
              htmlFor={`custom-checkbox-${index}`}
            >
              {filter?.name}
            </label>
          </div>
        ))}
    </div>
  )
}

export default FilterType
