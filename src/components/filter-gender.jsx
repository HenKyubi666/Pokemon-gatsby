import React from "react"

const FilterGender = () => {
  return (
    <div className="gender-filter">
      <span>Gender:</span>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender-filter"
          id="all"
          // checked="checked"
        />
        <label className="form-check-label" htmlFor="all">
          All
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender-filter"
          id="male"
        />
        <label className="form-check-label" htmlFor="male">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender-filter"
          id="female"
        />
        <label className="form-check-label" htmlFor="female">
          Female
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender-filter"
          id="undefined"
        />
        <label className="form-check-label" htmlFor="undefined">
          Undefined
        </label>
      </div>
    </div>
  )
}

export default FilterGender
