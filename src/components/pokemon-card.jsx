import React from "react"
import classNames from "classnames"
// import Lottie from "react-lottie"

//animations
// import animationThunder from "../animations/thunder.json"
const PokemonCard = ({ data }) => {
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
      <div className="h-100 col-4 p-2">
        <div className="card shadow-sm movie-component">
          {/* <Lottie options={defaultOptions} height={400} width={400}></Lottie> */}
          <img
            src={data?.data?.sprites?.front_default}
            className="card-img-top"
            alt={data?.pokemon_species?.name}
          />
          <div className="card-body">
            <p className="card-text">{data?.pokemon_species?.name}</p>
            <p className="card-text">ID: {data?.entry_number}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonCard
