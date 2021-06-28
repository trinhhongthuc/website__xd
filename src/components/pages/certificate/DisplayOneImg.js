import React from "react";
import img from "../../image/feedbackinfo.jpg";
import { AiOutlineClose } from "react-icons/ai";
const DisplayOneImg = ({ data, setHiddenOneImg }) => {
  const onHidden = () => {
    setHiddenOneImg(false);
  };
  return (
    <div className="display__one__img">
      <div className="display__one__img__wrapper">
        <img src={data.img} alt="" />

        <div
          className="display__one__img__wrapper__icon"
          onClick={() => onHidden()}
        >
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default DisplayOneImg;
