import { createContext } from "react"

const defaultState = {
  // Main
  error: null,

  // Fetch Init Data
  isFetchingData: false,
  data: [],
  setData: () => {},

  // Fetch Pokemon Data
  isFetchingDataPokemon: false,
  dataPokemon: null,
}

const AppContext = createContext(defaultState)

export default AppContext
