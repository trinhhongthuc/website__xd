import React, { useEffect } from "react";
import Button from "../../layouts/button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link as LInkScroll } from "react-scroll";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="banner" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="banner__title">Khóa Học ưu đãi</h1>
      <LInkScroll to="course" duration={200} offset={-80}>
        {" "}
        <Button />
      </LInkScroll>
    </div>
  );
};

export default Banner;
