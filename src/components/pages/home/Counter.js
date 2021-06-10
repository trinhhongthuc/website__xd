import React, { useEffect } from "react";
import CounterBox from "./CounterBox";
import AOS from "aos";
import "aos/dist/aos.css";

const Counter = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container" data-aos="fade-up" data-aos-duration="1000">
      <div className="row counter">
        <CounterBox title="Học viên" number={40}></CounterBox>
        <CounterBox title="Khóa Học" number={500}></CounterBox>
        <CounterBox title="Thời lượng" number={200}></CounterBox>
        <CounterBox title="Tốt nghiệp" number={3000}></CounterBox>
      </div>
    </div>
  );
};

export default Counter;
