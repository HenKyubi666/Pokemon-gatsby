import React, { useState, useEffect } from "react"
import { getFilterNames } from "../api"

const FilterGender = () => {
  const [filters, setFilters] = useState([])
  const [checkedState, setCheckedState] = useState(
    new Array(filters.length).fill(false)
  )

  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )
    setCheckedState(updatedCheckedState)
  }

  const fetchfilterNames = async () => {
    try {
      const data = await getFilterNames()
      setFilters(data.results)
      console.log("filter", data)
    } catch (err) {
      console.log("err", err)
    }
  }

  useEffect(() => {
    fetchfilterNames()
  }, [])

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
      {filters.length > 0 &&
        filters.map((filter, index) => (
          <div key={`custom-checkbox-${index}`} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id={`custom-checkbox-${index}`}
            />
            <label
              className="form-check-label"
              htmlFor={`custom-checkbox-${index}`}
            >
              {filter?.name}
            </label>
          </div>
        ))}
    </div>
  )
}

export default FilterGender
