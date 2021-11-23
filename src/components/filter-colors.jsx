import React, { useState, useEffect, useContext } from "react"
import { getColorNames, getPokemonsInColors } from "../api"
import classNames from "classnames"
import FilterContext from "../context/filter-context"

const FilterColors = () => {
  const [color, setColor] = useState([])
  const [colorSelected, setColorSelected] = useState([])
  const { setFilterColors } = useContext(FilterContext)

  const fetchFilterNames = async () => {
    try {
      const data = await getColorNames()
      setColor(data.results)
    } catch (err) {
      console.log("err", err)
    }
  }

  const getPokemonNames = async (types = []) => {
    let newArrayPokemonNames = []
    for (let i = 0; i < types.length; i++) {
      const pokemons = await getPokemonsInColors(types[i])
      const pokemonNames = []
      for (let i = 0; i < pokemons.pokemon_species.length; i++) {
        pokemonNames.push(pokemons.pokemon_species[i].name)
      }
      newArrayPokemonNames.push(...pokemonNames)
    }
    newArrayPokemonNames = newArrayPokemonNames.filter(
      (item, index) => newArrayPokemonNames.indexOf(item) === index
    )
    return newArrayPokemonNames
  }

  const onChange = async id => {
    let selected = colorSelected
    let find = selected.indexOf(id)
    if (find > -1) {
      selected.splice(find, 1)
    } else {
      selected.push(id)
    }
    setColorSelected(selected)
    const selectedNames = await getPokemonNames(selected)
    setFilterColors(selectedNames)
  }

  useEffect(() => {
    fetchFilterNames()
  }, [])

  return (
    <div className="color-filter">
      <span>Color:</span>
      <div
        className="btn-group colors-container"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        {color.length > 0 &&
          color.map((filter, index) => (
            <div>
              <input
                value={colorSelected.includes(filter?.name)}
                onChange={() => onChange(filter?.name)}
                type="checkbox"
                className="btn-check"
                id={`color-${filter?.name}`}
                autoComplete="off"
                aria-label={`color-${filter?.name}`}
              />
              <label
                className={classNames(`btn ${filter?.name}`, {
                  "btn-selected-in-color": colorSelected.includes(filter?.name),
                })}
                htmlFor={`color-${filter?.name}`}
                aria-labelledby={`color-${filter?.name}`}
              ></label>
            </div>
          ))}
      </div>
    </div>
  )
}

export default FilterColors
