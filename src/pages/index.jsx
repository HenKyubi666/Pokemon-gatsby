import React, { useState, useEffect } from "react"
import AppContext from "../context/app-context"
import ModalContext from "../context/modal-context"
//Components
import PokemonModal from "../components/pokemon-modal"
import Navbar from "../components/navbar"
import PokemonCard from "../components/pokemon-card"
import FilterType from "../components/filter-type"
import FilterColors from "../components/filter-colors"
import FilterGender from "../components/filter-gender"

//API
import { getInitialPokemons, getNextPokemons } from "../api"

const IndexPage = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonDataModal, setPokemonDataModal] = useState(null)
  const [positionInList, setPositionInList] = useState(1)
  const [next, setNext] = useState(true)

  const doFilter = () => {
    // Si onchange (OR button)
    console.log("Comenzamos con el desmadre 😬")
    // Tome la lista de todos los atributos a Filtrar
    const allPokemons = JSON.parse(localStorage.getItem("allPokemons"))
    // Tome el array de filtros seleccionados hasta el momento
    // Tome el allPokemons y filtre mediante OR cada uno de los filtros
    // Toca filtrar uno por uno los filtros, es decir, hacer un .map del array de los filtros seleccionados
    // Hay que crear una lista global en la función para almacenar los que se van encontrando
    // Si el encontrado en el .map de los filtros ya existe en la variable global, ignorarla y no agregarla
    // Sort por orden de ID
    // Return nuevo array y reemplaza el array de la vista.
  }

  const fetchInitialPokemons = async () => {
    try {
      const data = await getInitialPokemons()
      // console.log(data)
      setPokemons(data)
      // setNext(data.next)
      // console.log("data", data)
    } catch (err) {
      console.log("err", err)
    }
  }

  const getMorePokemons = async () => {
    try {
      setPositionInList(positionInList + 1)
      const nextList = await getNextPokemons(positionInList)
      setPokemons([...pokemons, ...nextList])
      if (nextList.length < 20) {
        setNext(false)
        // useEffect(() => {}, [])
      }
    } catch (error) {
      console.log("err getMorePokemons", error)
    }
  }

  useEffect(() => {
    fetchInitialPokemons()
  }, [])

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
            <span>Filters</span>
            <i className="fas fa-filter"></i>
            <div className="w-100 border-bottom"></div>
            <FilterType />
            <div className="w-100 border-bottom"></div>
            <FilterColors />
            <div className="w-100 border-bottom"></div>
            <FilterGender />
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
                {pokemons.map(item => {
                  return (
                    <PokemonCard pokemonData={item} key={item?.idPokemon} />
                  )
                })}
              </div>
            </ModalContext.Provider>
            <div className="d-flex justify-content-center">
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
