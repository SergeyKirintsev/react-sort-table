import React from "react";

const Name = ({ handleClick }) => (
  <button
    onClick={() => handleClick("name")}
    className="btn btn-primary name"
    name="name"
  >
    Name
  </button>
);

export default Name;
