import axios from "axios"

const URL = `https://pokeapi.co/api/v2/`

export const getPokemons = url => {
  return new Promise(async (resolve, reject) => {
    try {
      let { data } = await axios.get(url || `${URL}ability/?limit=20&offset=0`)
      for (let i = 0; i < data.results.length; i++) {
        data.results[i].data = await fetchPokemonData(
          Number(
            data.results[i].url
              .match(/ability([^;]+)/)[1]
              .replace("/", "")
              .replace("/", "")
          )
        )
      }
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

export const fetchPokemonData = id => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${URL}pokemon/${id}`)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
