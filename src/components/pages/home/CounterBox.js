import React from "react";

const CounterBox = ({ dataCounter }) => {
  const id = dataCounter._id;
  return (
    <div
      className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
      style={{ marginBottom: "12px" }}
    >
      <div className="counter__box">
        <h2 className="counter__box__number" id={`${id}`}>
          {dataCounter.number}
        </h2>
        <h1 className="counter__box__title">{dataCounter.title}</h1>
      </div>
    </div>
  );
};

export default CounterBox;
