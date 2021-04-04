import React from "react";

const Age = ({ handleClick }) => (
  <button
    onClick={() => handleClick("age")}
    className="btn btn-primary age"
    name="age"
  >
    Age
  </button>
);

export default Age;
