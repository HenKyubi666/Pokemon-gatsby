import React from "react"

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
        Launch demo modal
      </button>
      {/*<!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
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
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonModal
