import React, { useContext } from "react"
import PokemonEvolution from "./pokemon-evolution"
import ModalContext from "../context/modal-context"

const PokemonModal = () => {
  const { pokemonDetailData } = useContext(ModalContext)

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
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
                    src={pokemonDetailData?.img}
                    alt={pokemonDetailData?.data?.name}
                    className="w-100"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <h2>{pokemonDetailData?.data?.name}</h2>
                    <div className="px-3">{pokemonDetailData?.data?.id}</div>
                  </div>
                  <p>
                    {
                      pokemonDetailData?.species?.flavor_text_entries[0]
                        ?.flavor_text
                    }
                  </p>
                  <table className="table table-striped table-hover">
                    <tr>
                      <th>Height:</th>
                      <td>{pokemonDetailData?.data?.height} m</td>
                    </tr>
                    <tr>
                      <th>Weight:</th>
                      <td>{pokemonDetailData?.data?.weight} Kg</td>
                    </tr>
                    <tr>
                      <th>Category:</th>
                      <td>{pokemonDetailData?.data?.types[0]?.type?.name}</td>
                    </tr>
                    <tr>
                      <th>Gender:</th>
                      <td>
                        {pokemonDetailData?.species?.has_gender_differences
                          ? "Female"
                          : "Male - Female"}
                      </td>
                    </tr>
                    <tr>
                      <th>Habitat:</th>
                      <td>{pokemonDetailData?.species?.habitat?.name}</td>
                    </tr>
                    <tr>
                      <th>Color:</th>
                      <td>{pokemonDetailData?.species?.color?.name}</td>
                    </tr>
                  </table>
                  <h4>Types:</h4>
                  <div className="d-flex">
                    {pokemonDetailData?.data?.types.map((type, index) => {
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
                  <PokemonEvolution></PokemonEvolution>
                  <p>This pokemon does not evolve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonModal
