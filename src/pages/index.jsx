import React, { useState, useEffect } from "react"
import AppContext from "../context/app-context"

//Components
import PokemonModal from "../components/pokemon-modal"
import Navbar from "../components/navbar"
import PokemonCard from "../components/pokemon-card"
import FilterType from "../components/filter-type"
import FilterColors from "../components/filter-colors"
import FilterGender from "../components/filter-gender"

//API
import { getPokemons, getInitialPokemons } from "../api"

const IndexPage = () => {
  const [pokemons, setPokemons] = useState([])
  const [next, setNext] = useState(null)

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(next)
      setPokemons(prevArray => [...prevArray, ...data.results])
      setNext(data.next)
      console.log("data", data)
    } catch (err) {
      console.log("err", err)
    }
  }

  useEffect(() => {
    fetchPokemons()
    getInitialPokemons()
  }, [getInitialPokemons])

  return (
    <AppContext.Provider>
      <header className="container">
        <Navbar />
        <div className="w-100 border-bottom"></div>
      </header>
      <div className="container">
        <div className="row" id="panel">
          <div className="border-end col-12 col-md-3 p-0" id="filters">
            <span>Filters</span>
            <i class="fas fa-filter"></i>
            <div className="w-100 border-bottom"></div>
            <FilterType />
            <div className="w-100 border-bottom"></div>
            <FilterColors />
            <div className="w-100 border-bottom"></div>
            <FilterGender />
          </div>
          <div className="col-12 col-md-9" id="rigth-panel">
            <span>Choose a pokemon to get more information</span>
            <PokemonModal />
            <div className="d-flex flex-wrap">
              {pokemons.map(item => {
                return <PokemonCard data={item} key={item?.name} />
              })}
            </div>
            {next && (
              <div className="d-flex justify-content-center">
                <button className="btn-warning" onClick={() => fetchPokemons()}>
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default IndexPage
