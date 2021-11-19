import * as React from "react"

//Components
import PokemonModal from "../components/pokemon-modal"
import Navbar from "../components/navbar"
import Pokedex from "../components/pokedex"

// import { getPokemons } from "./api"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  // const [pokemons, setPokemons] = useState([])

  // const fetchPokemons = async () => {
  //   try {
  //     const data = await getPokemons()
  //     // console.log(data);
  //     setPokemons(data.results)
  //   } catch (err) {}
  // }
  // useEffect(() => {
  //   fetchPokemons()
  // }, [])
  return (
    <>
      <header className="container">
        <Navbar />
        <div className="w-100 border-bottom"></div>
      </header>

      <div className="container">
        <div className="row" id="panel">
          <div className="border-end col-12 col-md-3" id="filters">
            <span>Filters</span>icono de filtro
            <div className="w-100 border-bottom"></div>
            <div className="type-filter">
              <span>Type:</span>
              <div className="row">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Default checkbox
                  </label>
                </div>
              </div>
            </div>
            <div className="w-100 border-bottom"></div>
            <div className="color-filter">
              <span>Color:</span>
              colores: 5x2
            </div>
            <div className="w-100 border-bottom"></div>
            <div className="gender-filter">
              <span>Gender:</span>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender-filter"
                  id="all"
                  checked
                />
                <label className="form-check-label" htmlFor="all">
                  All
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender-filter"
                  id="male"
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender-filter"
                  id="female"
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender-filter"
                  id="undefined"
                />
                <label className="form-check-label" htmlFor="undefined">
                  Undefined
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9" id="rigth-panel">
            <span>Choose a pokemon to get more information</span>
            <PokemonModal />
            <button className="btn-warning">Load more</button>
            <div className="pokemon-list">
              {/* <Pokedex pokemons={pokemons}></Pokedex> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
