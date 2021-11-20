import axios from "axios"

const URL = `https://pokeapi.co/api/v2/`

export const getPokemons = url => {
  return new Promise(async (resolve, reject) => {
    try {
      let { data } = await axios.get(url || `${URL}ability/?limit=20&offset=0`)
      // data.results.forEach(
      //   async pokemon => await fetchPokemonData(pokemon.name)
      // )
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

export const fetchPokemonData = pokemon => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${URL}pokemon/${pokemon}`)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
