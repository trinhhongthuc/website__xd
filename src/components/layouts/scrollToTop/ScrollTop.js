import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollTop = () => {
  const onScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="arrow__up" onClick={() => onScrollTop()}>
      <AiOutlineArrowUp />
    </div>
  );
};

export default ScrollTop;
