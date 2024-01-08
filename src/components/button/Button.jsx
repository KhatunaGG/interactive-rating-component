import "./button.css";
import React from "react";

const Button = ({ id, text, rate, setRate }) => {
  const getBtn = (id) => {
    setRate(id);
  };

  return (
    <button
      id={id}
      onClick={() => getBtn(id)}
      className={`rating__btn ${rate === id ? "activeColor" : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
