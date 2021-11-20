import { createContext } from "react"

const defaultState = {
  // Main
  data: null,
  setData: data => {},
}

const ModalContext = createContext(defaultState)

export default ModalContext
