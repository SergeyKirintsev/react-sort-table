import React from "react";

const Rank = ({ handleClick }) => (
  <button
    onClick={() => handleClick("rank")}
    className="btn btn-primary rank"
    name="rank"
  >
    Rank
  </button>
);

export default Rank;
