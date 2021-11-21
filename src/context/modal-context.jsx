import { createContext } from "react"

const defaultState = {
  // Main
  data: null,
  setData: () => {},
}

const ModalContext = createContext(defaultState)

export default ModalContext
