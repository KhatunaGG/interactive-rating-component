import "./main.css";
import Button from "../button/Button";
import { data } from "../../data";
import React, { useState } from "react";
import Output from "../output/Output";

const Main = () => {
  const [rate, setRate] = useState(0);
  const [submit, setSubmit] = useState(false);

  function getResult() {
    setSubmit(true);
  }

  return (
    <div className="main">
      <div className="intro">
        <button className="star">
          <img src="/assets/Star.svg" alt="star" className="star__img" />
        </button>
        <h1 className="title">How did we do?</h1>
        <p className="text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="rating">
        <div className="btn__wrapper">
          {data.map((btn, i) => {
            return (
              <Button
                key={i}
                id={btn.id}
                text={btn.text}
                rate={rate}
                setRate={setRate}
              />
            );
          })}
        </div>

        <button onClick={getResult} className="submit__btn">
          submit
        </button>
      </div>

      {submit ? <Output rate={rate} /> : null}
    </div>
  );
};

export default Main;
