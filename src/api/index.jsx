import axios from "axios"

const URL = `https://pokeapi.co/api/v2/`

export const fetchPokemonDetails = id => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("entro a fetch api")
      const { data1 } = await axios.get(`${URL}pokemon-species/${id}`)
      console.log("data1", data1)
      // const { data2 } = await axios.get(`${URL}pokemon/${id}`)
      // const { data } = (data1, data2)

      resolve(data1)
    } catch (error) {
      reject(error)
    }
  })
}

// export const fetchPokemonSpecie = id => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       resolve(data)
//     } catch (error) {
//       reject(error)
//     }
//   })
// }

export const getInitialPokemons = () => {
  return new Promise(async (resolve, reject) => {
    try {
      localStorage.clear()
      let dataFormatted = localStorage.getItem("allPokemons")

      if (typeof dataFormatted !== "string") {
        // get API
        let { data } = await axios.get(`${URL}pokedex/national/`)

        //create empy list of pokemons
        const pokemonList = []

        //filter pokemonList for to save in localStorage

        let max = Math.round(data.pokemon_entries.length / 20)
        let count = 0
        let temporalList = []
        let endList = data.pokemon_entries.length
        for (let index = 0; index < endList; index++) {
          temporalList.push({
            idPokemon: data.pokemon_entries[index].entry_number,
            namePokemon: data.pokemon_entries[index].pokemon_species?.name,
          })
          if ((index + 1) % 20 === 0) {
            pokemonList.push(temporalList)
            temporalList = []
            count++
          } else {
            if (max - count === 1) {
              if (index + 1 === endList) {
                pokemonList.push(temporalList)
                temporalList = []
              }
            }
          }
        }

        // format pokemonList and save in localStorage
        localStorage.setItem("allPokemons", JSON.stringify(pokemonList))
        dataFormatted = JSON.stringify(pokemonList)
      }
      dataFormatted = JSON.parse(dataFormatted)
      resolve(dataFormatted[0])
    } catch (error) {
      reject(error)
    }
  })
}

export const getNextPokemons = positionInList => {
  return new Promise(resolve => {
    //traer localStorage
    let fullList = JSON.parse(localStorage.getItem("allPokemons"))
    //traer la posicion luego devolver en la posicion indicada
    let nextList = fullList[positionInList]
    resolve(nextList)
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
