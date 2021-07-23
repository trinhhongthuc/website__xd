import React, { useEffect } from "react";
import Content from "./Content";
import Information from "./Information";
import { animateScroll as scroll } from "react-scroll";

const Dynamo = () => {
  useEffect(() => {
    // let scroll = animateScroll;
    scroll.scrollToTop();
  }, []);
  return (
    <div className="dynamo">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="dynamo__heading">Dynamo</div>
          </div>
        </div>
      </div>

      <Information />
      <Content />
    </div>
  );
};

export default Dynamo;
