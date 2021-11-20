import React from "react"
import PokemonEvolution from "./pokemon-evolution"

const PokemonModal = () => {
  return (
    <>
      {/*      
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modal-pokemon"
      >
        Launch static backdrop modal
      </button>

  
      <div
        class="modal fade"
        id="modal-pokemon"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-xl align">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div className="row p-4">
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="col-12 col-md-6">
                <img src="" alt="" />
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex">
                  <h2>Pokemon Name</h2>
                  <div>id</div>
                </div>
                <div>Description</div>
                <table className="table table-striped table-hover">Table</table>
                <h4>Types:</h4>
              </div>
              <div className="col-12">
                <h3>Evolution</h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Pokemon
      </button>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content p-2">
            <div class="d-flex justify-content-end ">
              {/* <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5> */}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-12 col-md-6">
                  <img src="" alt="" />
                </div>
                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <h2>Pokemon Name</h2>
                    <div>id</div>
                  </div>
                  <p>Description</p>
                  {/* {pokemon.map((item, index) => {
                    return ( */}
                  <table className="table table-striped table-hover">
                    <tr>
                      <th>Height:</th>
                      <td>pokemon.Height</td>
                    </tr>
                    <tr>
                      <th>Weight:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Category:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Gender:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Habitat:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Color:</th>
                      <td></td>
                    </tr>
                  </table>
                  {/* )
                  })} */}
                  <h4>Types:</h4>
                </div>
                <div className="col-12">
                  <h3>Evolution</h3>
                  <PokemonEvolution />
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
