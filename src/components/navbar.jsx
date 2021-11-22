import React from "react"

// Components
import SearchBar from "./searchbar"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid justify-content-center justify-content-md-between">
        <a className="navbar-brand" href="https://pokeapi.co/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="logo"
          />
        </a>
        <SearchBar />
      </div>
    </nav>
  )
}

export default Navbar
