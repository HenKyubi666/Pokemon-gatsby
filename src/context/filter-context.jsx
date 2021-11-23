import { createContext } from "react"

const defaultState = {
  // Main
  filterType: [], // multiselect
  setFilterType: [], // multiselect
  filterColors: [], // multiselect
  setFilterColors: [], // multiselect
  filterGender: null, // string
  setFilterGender: null, // string
}

const FilterContext = createContext(defaultState)

export default FilterContext
