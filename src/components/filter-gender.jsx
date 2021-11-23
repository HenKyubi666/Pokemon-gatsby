import React, { useState, useEffect, useContext } from "react"
import { getGenderNames, getPokemonsInGender } from "../api"
import FilterContext from "../context/filter-context"

const FilterGender = () => {
  const [genders, setGenders] = useState([])
  const [gendersSelected, setGendersSelected] = useState([])
  const { setFilterGender } = useContext(FilterContext)

  const fetchFilterNames = async () => {
    try {
      const data = await getGenderNames()
      setGenders(data.results)
    } catch (err) {
      console.log("err", err)
    }
  }

  const getPokemonNames = async (types = []) => {
    let newArrayPokemonNames = []
    for (let i = 0; i < types.length; i++) {
      const pokemons = await getPokemonsInGender(types[i])
      const pokemonNames = []
      for (let i = 0; i < pokemons.pokemon_species_details.length; i++) {
        pokemonNames.push(
          pokemons.pokemon_species_details[i].pokemon_species.name
        )
      }
      newArrayPokemonNames.push(...pokemonNames)
    }
    newArrayPokemonNames = newArrayPokemonNames.filter(
      (item, index) => newArrayPokemonNames.indexOf(item) === index
    )
    return newArrayPokemonNames
  }

  const onChange = async id => {
    let selected = gendersSelected
    let find = selected.indexOf(id)
    if (find > -1) {
      selected.splice(find, 1)
    } else {
      selected.push(id)
    }
    console.log("selected", selected)
    setGendersSelected(selected)
    const selectedNames = await getPokemonNames(selected)
    console.log("selectedNames", selectedNames)
    setFilterGender(selectedNames)
  }

  useEffect(() => {
    fetchFilterNames()
  }, [])

  return (
    <div className="type-filter">
      <span>Type:</span>
      <div>
        {genders.length > 0 &&
          genders.map((filter, index) => (
            <div className="container m-0 p-0 row">
              <div className="form-check col-6">
                <input
                  id={`pokemon-type-${index}`}
                  className="form-check-input"
                  type="checkbox"
                  value={gendersSelected.includes(filter?.name)}
                  onChange={() => onChange(filter?.name)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`pokemon-type-${index}`}
                >
                  {filter?.name}
                </label>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default FilterGender
