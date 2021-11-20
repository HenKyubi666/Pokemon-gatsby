import React, { useContext } from "react"
import classNames from "classnames"
import ModalContext from "../context/modal-context"
// import Lottie from "react-lottie"

//animations
// import animationThunder from "../animations/thunder.json"
const PokemonCard = ({ data }) => {
  const { setData } = useContext(ModalContext)

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationThunder,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // }

  return (
    <>
      <div className="h-100 col-12 col-md-4 p-2">
        <button
          className="card shadow-sm pokemon-component w-100"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => {
            console.log("funciona")
            setData(data)
          }}
        >
          {/* <Lottie options={defaultOptions} height={400} width={400}></Lottie> */}
          <img
            src={data?.data?.sprites?.front_default}
            className="card-img-top"
            alt={data?.pokemon_species?.name}
          />
          <div className="d-flex col-12 justify-content-evenly">
            <p> {data?.pokemon_species?.name}</p>
            <p> {data?.entry_number}</p>
          </div>
        </button>
      </div>
    </>
  )
}

export default PokemonCard
