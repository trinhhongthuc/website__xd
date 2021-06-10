import React, { useEffect, useState } from "react";
import CounterNumber from "./CounterNumber";
import { Link } from "react-router-dom";
const CounterBox = ({ animateNumber, number, title, children }) => {
  console.log(animateNumber);

  return (
    <div className="col-xl-3 col-lg-3">
      <div className="counter__box">
        <h2 className="counter__box__number" id="counter">
          {number}
        </h2>
        <h1 className="counter__box__title">{title}</h1>
      </div>
    </div>
  );
};

export default CounterBox;
