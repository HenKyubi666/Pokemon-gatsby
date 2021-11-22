import React, { useContext, useEffect, useState } from "react"
import PokemonEvolution from "./pokemon-evolution"
import PokemonDetails from "../api"
import ModalContext from "../context/modal-context"

const PokemonModal = () => {
  const { data } = useContext(ModalContext)
  const { pokemon, setPokemon } = useState([])

  const fetchPokemonDetails = async () => {
    try {
      console.log("entro a fetchpokemondetails", data.idPokemon)
      const detailsData = await PokemonDetails(data.idPokemon)
      console.log("details", detailsData)
      setPokemon(detailsData)
      // setNext(data.next)
      // console.log("data", data)
    } catch (err) {
      console.log("err", err)
    }
  }

  // const pokemonDetails = async () => {
  //   try {
  //     console.log("entro al details", data)
  //     const pokemonDetailsData = await fetchPokemonDetails(data.idPokemon)
  //     console.log(pokemonDetailsData)
  //     // console.log(data)
  //     // setPokemons(data)
  //     // setNext(data.next)
  //     // console.log("data", data)
  //   } catch (err) {
  //     console.log("error en pokemon details", err)
  //   }
  // }

  // const [formatedId, setFormatedId] = useState(null)
  // const
  // const formatId = (id = "0") =>
  //   setFormatedId(id.length === 1 ? `00${id}` : id.length === 2 ? `0${id}` : id)

  useEffect(() => {
    console.log(".....data", data?.idPokemon)
    fetchPokemonDetails()
    console.log(".....lel", pokemon)
  })
  // useEffect(() => {
  //   if (data.idPokemon == !null) {
  //     pokemonDetails()
  //   }
  // }, [])

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {/* <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-2">
            <div className="d-flex justify-content-end ">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-md-6">
                  <img
                    src={data?.data?.sprites?.front_default}
                    alt={data?.data?.name}
                    className="w-100"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <h2>{data?.data?.name}</h2>
                    <div className="px-3">{data?.data?.id}</div>
                  </div>
                  <p>{data?.specie?.flavor_text_entries[0]?.flavor_text}</p>
                  <table className="table table-striped table-hover">
                    <tr>
                      <th>Height:</th>
                      <td>{data?.data?.height} m</td>
                    </tr>
                    <tr>
                      <th>Weight:</th>
                      <td>{data?.data?.weight} Kg</td>
                    </tr>
                    <tr>
                      <th>Category:</th>
                      <td>{data?.data?.types[0]?.type?.name}</td>
                    </tr>
                    <tr>
                      <th>Gender:</th>
                      <td>
                        {data?.specie?.has_gender_differences
                          ? "Female"
                          : "Male - Female"}
                      </td>
                    </tr>
                    <tr>
                      <th>Habitat:</th>
                      <td>{data?.specie?.habitat?.name}</td>
                    </tr>
                    <tr>
                      <th>Color:</th>
                      <td>{data?.specie?.color?.name}</td>
                    </tr>
                  </table>
                  <h4>Types:</h4>
                  <div className="d-flex">
                    {data?.data?.types.map((type, index) => {
                      return (
                        <div className="col-6 col-lg-4">
                          <div
                            key={index}
                            className="tag border border-3 ms-3 ps-3 "
                          >
                            {type?.type?.name}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="col-12">
                  <h3>Evolution</h3>
                  <PokemonEvolution />
                  <p>This pokemon does not evolve</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default PokemonModal
