import React from "react";

const SortButton = ({ handleClick, title }) => (
  <button onClick={handleClick} className="btn btn-primary age">
    {title}
  </button>
);

export default SortButton;
