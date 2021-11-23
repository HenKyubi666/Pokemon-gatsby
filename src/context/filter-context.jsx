import { createContext } from "react"

const defaultState = {
  // Main
  filterType: [],
  setFilterType: () => {},
  filterColors: [],
  setFilterColors: () => {},
  filterGender: null,
  setFilterGender: () => {},

  // Action global
  doFilter: () => {},
}

const FilterContext = createContext(defaultState)

export default FilterContext
