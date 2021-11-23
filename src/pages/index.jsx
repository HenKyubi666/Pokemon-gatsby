import React, { useState, useEffect, useCallback } from "react"
import AppContext from "../context/app-context"
import ModalContext from "../context/modal-context"
import FilterContext from "../context/filter-context"

//Components
import PokemonModal from "../components/pokemon-modal"
import Navbar from "../components/navbar"
import PokemonCard from "../components/pokemon-card"
import FilterType from "../components/filter-type"
import FilterColors from "../components/filter-colors"
import FilterGender from "../components/filter-gender"

//API
import {
  getInitialPokemons,
  getNextPokemons,
  reOrderFormatted,
  doFilter,
} from "../api"

const IndexPage = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonDataModal, setPokemonDataModal] = useState(null)
  const [positionInList, setPositionInList] = useState(1)
  const [next, setNext] = useState(true)

  // States for Filters
  const [filterType, setFilterType] = useState([])
  const [filterColors, setFilterColors] = useState([])
  const [filterGender, setFilterGender] = useState([])

  const fetchInitialPokemons = async () => {
    try {
      const data = await getInitialPokemons()
      setPokemons(data)
    } catch (err) {
      console.log("err fetchInitialPokemons", err)
    }
  }

  const getMorePokemons = async () => {
    try {
      setPositionInList(positionInList + 1)
      const nextList = await getNextPokemons(positionInList)
      setPokemons([...pokemons, ...nextList])
      if (nextList.length < 20) setNext(false)
    } catch (error) {
      console.log("err getMorePokemons", error)
    }
  }

  const filterAndSetData = async () => {
    try {
      const data = await doFilter(filterType, filterColors, filterGender)
      setPokemons(data)
    } catch (err) {
      console.log("err fetchInitialPokemons", err)
    }
  }

  useEffect(() => {
    filterType.length > 0 || filterColors.length > 0 || filterGender.length > 0
      ? filterAndSetData()
      : fetchInitialPokemons()
  }, [filterType, filterColors, filterGender])

  return (
    <AppContext.Provider
      value={{
        data: pokemons,
        setData: setPokemons,
      }}
    >
      <header className="container">
        <Navbar />
        <div className="w-100 border-bottom"></div>
      </header>
      <div className="container">
        <div className="row" id="panel">
          <div className="border-end col-12 col-md-3 p-0" id="filters">
            <FilterContext.Provider
              value={{
                filterType,
                setFilterType,
                filterColors,
                setFilterColors,
                filterGender,
                setFilterGender,
                doFilter,
              }}
            >
              <span>Filters</span>
              <i className="fas fa-filter"></i>
              <div className="w-100 border-bottom"></div>
              <FilterType />
              <div className="w-100 border-bottom"></div>
              <FilterColors />
              <div className="w-100 border-bottom"></div>
              <FilterGender />
              <button
                className="btn btn-danger btn-flotant"
                onClick={() => fetchInitialPokemons()}
              >
                Reset
              </button>
            </FilterContext.Provider>
          </div>
          <div className="col-12 col-md-9" id="rigth-panel">
            <span className="col-12">
              Choose a pokemon to get more information
            </span>

            <ModalContext.Provider
              value={{
                pokemonDetailData: pokemonDataModal,
                setPokemonDetailData: setPokemonDataModal,
              }}
            >
              <PokemonModal />
              <div className="d-flex flex-wrap">
                {pokemons.length !== 0 ? (
                  <>
                    {pokemons.map(item => {
                      return (
                        <PokemonCard pokemonData={item} key={item?.idPokemon} />
                      )
                    })}
                  </>
                ) : (
                  <div>No items found</div>
                )}
              </div>
            </ModalContext.Provider>
            <div
              className="d-flex justify-content-center py-3"
              id="btn-loading-container"
            >
              {next ? (
                <button
                  className="btn btn-warning"
                  onClick={() => getMorePokemons()}
                >
                  Load more
                </button>
              ) : (
                <div>No more pokemons...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default IndexPage
