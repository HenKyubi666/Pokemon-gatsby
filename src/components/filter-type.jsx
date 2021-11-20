import React from "react"

const FilterType = ({ pokemon = [] }) => {
  return (
    <div className="type-filter">
      <span>Type:</span>
      <div>
        {pokemon.map((type, index) => {
          return (
            <div className="container m-0 p-0 row">
              <div className="form-check col-6">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="pokemon-type"
                />
                <label className="form-check-label" htmlFor="pokemon-type">
                  {type}
                </label>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilterType
