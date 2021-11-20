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

export const fetchPokemonSpecie = id => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${URL}pokemon-species/${id}`)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

export const getInitialPokemons = (initial = 0) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { data } = await axios.get(`${URL}pokedex/national/`)
      // console.log("data-", data)
      const max =
        initial + 20 >= data.pokemon_entries.length
          ? null
          : data.pokemon_entries.length - initial + 20 <= 20
          ? initial + 20
          : data.pokemon_entries.length - initial + 20
      if (max !== null) {
        // Save data.pokemon_entries in localstorage
        for (let i = initial; i <= max; i++) {
          // data.pokemon_entries[i].data = await fetchPokemonData(
          //   data.pokemon_entries[i].entry_number
          // )
          // res.results[i].specie = await fetchPokemonSpecie(
          //   Number(data.pokemon_entries[i].entry_number)
          // )
        }
      }
      let res = { results: data.pokemon_entries }
      console.log("getInitial", res)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}
