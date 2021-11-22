import { createContext } from "react"

const defaultState = {
  // Main
  pokemonDetailData: null,
  setPokemonDetailData: () => {},
}

const ModalContext = createContext(defaultState)

export default ModalContext
