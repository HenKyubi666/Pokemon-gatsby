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
      localStorage.clear()
      let dataFormatted = localStorage.getItem("allPokemons")

      if (typeof dataFormatted !== "string") {
        // get API
        let { data } = await axios.get(`${URL}pokedex/national/`)

        //create empy list of pokemons
        const pokemonList = []

        //filter pokemonList for to save in localStorage
        // for (let index = 0; index < data.pokemon_entries.length; index++) {
        //   pokemonList.push({
        //     idPokemon: data.pokemon_entries[index].entry_number,
        //     namePokemon: data.pokemon_entries[index].pokemon_species?.name,
        //   })
        // }

        let max = Math.round(data.pokemon_entries.length / 20)
        // for (let index = 0; index < data.pokemon_entries.length; index++) {
        //   const element = data.pokemon_entries.length[index]
        // }

        let count = 0
        let temporalList = []
        for (let index = 0; index < data.pokemon_entries.length; index++) {
          // console.log("pokemon", data.pokemon_entries[index])
          temporalList.push({
            idPokemon: data.pokemon_entries[index].entry_number,
            namePokemon: data.pokemon_entries[index].pokemon_species?.name,
          })
          // console.log("lista temporal", temporalList)
          if ((index + 1) % 20 === 0) {
            // console.log("entro al if", count)
            pokemonList.push(temporalList)
            temporalList = []
            count++
          }
          // else {
          //   if (max - count === 1) {
          //     pokemonList[count].push({
          //       idPokemon: data.pokemon_entries[index].entry_number,
          //       namePokemon: data.pokemon_entries[index].pokemon_species?.name,
          //     })
          //     // console.log(temporalList)
          //     // console.log("ultimos", data.pokemon_entries[index])
          //   }
          // }
          // pokemonList.push({
          // for (let index = 0; index < data.pokemon_entries.length; index++) {
          //       const element = array[index]

          //       pokemonList.push({
          //         idPokemon: data.pokemon_entries[index].entry_number,
          //         namePokemon: data.pokemon_entries[index].pokemon_species?.name,
          //       })
          //     }}
          //     )
        }
        // console.log("lista total de pokemons", pokemonList)

        // format pokemonList and save in localStorage
        localStorage.setItem("allPokemons", JSON.stringify(pokemonList))
        dataFormatted = JSON.stringify(pokemonList)
      }
      dataFormatted = JSON.parse(dataFormatted)
      // console.log(dataFormatted)
      // let initialPokemonsList = []

      // for (let index = 0; index < 20; index++) {
      //   initialPokemonsList.push(dataFormatted[index])
      // }
      resolve(dataFormatted[0])
    } catch (error) {
      reject(error)
    }
  })
}

export const getNextPokemons = positionInList => {
  return new Promise(resolve => {
    console.log("entro al next", positionInList)
    let fullList = JSON.parse(localStorage.getItem("allPokemons"))
    // console.log("tal cual viene", fullList)
    let nextList = fullList[positionInList]
    // console.log("aca", peguelo)
    // fullList[positionInList]

    //traer localStorage
    //

    // const maxi = previousList.length + 20
    // console.log(maxi)

    //
    // const pokemonList = []
    // const max =
    //   previousList.length + 20 >= fullList.length
    //     ? 0
    //     : previousList.length < fullList.length
    //     ? fullList.length - previousList.length
    //     : fullList.length + 20

    // for (let index = previousList.length; index < max; index++) {
    //   pokemonList.push({
    //     idPokemon: fullList[index].entry_number,
    //     namePokemon: fullList[index].pokemon_species?.name,
    //   })
    // }

    // resolve({ data: [...previousList, ...pokemonList], max })
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
