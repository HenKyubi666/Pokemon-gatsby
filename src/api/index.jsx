import axios from "axios"

const URL = `https://pokeapi.co/api/v2/`

// export const getPokemons = url => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let { data } = await axios.get(url || `${URL}ability/?limit=20&offset=0`)
//       for (let i = 0; i < data.results.length; i++) {
//         data.results[i].data = await fetchPokemonData(
//           Number(
//             data.results[i].url
//               .match(/ability([^;]+)/)[1]
//               .replace("/", "")
//               .replace("/", "")
//           )
//         )
//       }
//       resolve(data)
//     } catch (error) {
//       reject(error)
//     }
//   })
// }

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

export const getInitialPokemons = () => {
  return new Promise(async (resolve, reject) => {
    try {
      localStorage.removeItem("prueba")
      let dataFormatted = localStorage.getItem("allPokemons")

      if (typeof dataFormatted !== "string") {
        // get API
        let { data } = await axios.get(`${URL}pokedex/national/`)

        //create empy list of pokemons
        const pokemonList = []

        //filter pokemonList for to save in localStorage
        for (let index = 0; index < data.pokemon_entries.length; index++) {
          pokemonList.push({
            idPokemon: data.pokemon_entries[index].entry_number,
            namePokemon: data.pokemon_entries[index].pokemon_species?.name,
          })
        }

        //format pokemonList and save in localStorage
        localStorage.setItem("allPokemons", JSON.stringify(pokemonList))
        dataFormatted = JSON.stringify(pokemonList)
      }
      dataFormatted = JSON.parse(dataFormatted)
      let initialPokemonsList = []

      for (let index = 0; index < 20; index++) {
        initialPokemonsList.push(dataFormatted[index])
      }
      resolve(initialPokemonsList)
    } catch (error) {
      reject(error)
    }
  })
}

export const getFilterNames = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${URL}type/`)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

export const getFilterPokemons = (data = [], filter = []) => {
  return new Promise(async (resolve, reject) => {
    try {
      let arr = []
      for (let i = 0; i < filter.length; i++) {
        const newFilter = data.filter(pokemon =>
          pokemon.data.types.filter(type => type.type.name === filter[i])
        )
        arr.push(newFilter)
      }
      resolve(arr)
    } catch (error) {
      reject(error)
    }
  })
}
