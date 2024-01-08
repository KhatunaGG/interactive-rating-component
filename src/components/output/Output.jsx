import React from "react";
import "./output.css";

const Output = ({ rate }) => {
  
  return (
    <div className="output">
      <img
        src="/assets/payment_mobile.png"
        alt=""
        className="output__img-mobile"
      />
      <img
        src="/assets/payment-desktop.png"
        alt=""
        className="output__img-desktop none"
      />
      <div className="result">You selected {rate} out of 5</div>
      <h2>Thank you!</h2>
      <p className="output__text text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Output;
