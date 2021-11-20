import React from "react"

const FilterColors = () => {
  return (
    <div className="color-filter">
      <span>Color:</span>
      <div
        className="btn-group colors-container"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <div>
          <input
            type="checkbox"
            className="btn-check"
            id="color-black"
            autocomplete="off"
          />
          <label className="btn black" htmlFor="color-black"></label>
        </div>

        <div>
          <input
            type="checkbox"
            className="btn-check"
            id="color-blue"
            autocomplete="off"
          />
          <label className="btn blue" htmlFor="color-blue"></label>
        </div>

        <div>
          <input
            type="checkbox"
            className="btn-check"
            id="color-brown"
            autocomplete="off"
          />
          <label className="btn brown" htmlFor="color-brown"></label>
        </div>
        <div>
          <input
            type="checkbox"
            className="btn-check"
            id="color-gray"
            autocomplete="off"
          />
          <label className="btn gray" htmlFor="color-gray"></label>
        </div>
        <div>
          <input
            type="checkbox"
            className="btn-check"
            id="color-green"
            autocomplete="off"
          />
          <label className="btn green" htmlFor="color-green"></label>
        </div>
        <div>
          <input
            type="checkbox"
            className="btn-check"
            id="color-pink"
            autocomplete="off"
          />
          <label className="btn pink" htmlFor="color-pink"></label>
        </div>
        <div>
          <input
            type="checkbox"
            className="btn-check"
            id="color-purple"
            autocomplete="off"
          />
          <label className="btn purple" htmlFor="color-purple"></label>
        </div>
        <div>
          <input
            type="checkbox"
            className="btn-check"
            id="color-red"
            autocomplete="off"
          />
          <label className="btn red" htmlFor="color-red"></label>
        </div>
        <div>
          <input
            type="checkbox"
            className="btn-check"
            id="color-white"
            autocomplete="off"
          />
          <label className="btn white" htmlFor="color-white"></label>
        </div>
        <div>
          <input
            type="checkbox"
            className="btn-check"
            id="color-yellow"
            autocomplete="off"
          />
          <label className="btn yellow" htmlFor="color-yellow"></label>
        </div>
      </div>

      {/* <div className="colors-container">
        <div className="black"></div>
        <div className="blue"></div>
        <div className="brown"></div>
        <div className="gray"></div>
        <div className="green"></div>
        <div className="pink"></div>
        <div className="purple"></div>
        <div className="red"></div>
        <div className="white"></div>
        <div className="yellow"></div>
      </div> */}
    </div>
  )
}

export default FilterColors
