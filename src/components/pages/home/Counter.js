import React, { useEffect, useState } from "react";
import CounterBox from "./CounterBox";
import AOS from "aos";
import "aos/dist/aos.css";
import courseApi from "../../../API/courseApi";

const Counter = () => {
  const [dataCounter, setDataCounter] = useState([]);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    courseApi.getCounter().then((data) => {
      setDataCounter(data.data);
    });
  }, []);

  return (
    <div className="container" data-aos="fade-up" data-aos-duration="1000">
      <div className="row counter">
        {dataCounter.map((item) => {
          return <CounterBox key={item._id} dataCounter={item}></CounterBox>;
        })}
      </div>
    </div>
  );
};

export default Counter;
