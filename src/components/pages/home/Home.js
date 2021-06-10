import React, { useEffect } from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Counter from "./Counter";
import Course from "./Course";
import FeedBack from "./FeedBack";
import Introduce from "./Introduce";
import Project from "./Project";
import { animateScroll as scroll } from "react-scroll";

const Home = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="home">
      <Banner />
      <Introduce />
      <Course />
      <Counter />
      <Project />
      <FeedBack />
      <Contact />
    </div>
  );
};

export default Home;
