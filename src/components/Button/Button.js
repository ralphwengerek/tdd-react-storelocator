import React from "react";
import "./Button.scss";

const Button = ({ location, handleClick, active }) => {
  return (
    <button onClick={handleClick} className={`btn ${active ? "active" : ""}`}>
      {location ? location : "All locations"}
    </button>
  );
};

export default Button;
