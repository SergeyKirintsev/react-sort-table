import React from "react";

const Points = ({ handleClick }) => (
  <button
    onClick={() => handleClick("points")}
    className="btn btn-primary points"
    name="points"
  >
    Points
  </button>
);

export default Points;
