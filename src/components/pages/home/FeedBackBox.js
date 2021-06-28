import React from "react";
import ReactHtmlParser from "react-html-parser";

const FeedBackBox = ({ data }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12 col-12">
      <div className="feedback__box">
        <div className="feedback__box_wrapper">
          <div className="feedback__box_img">
            <img src={data.img} alt="img" />
          </div>

          <div className="feedback__box_paragraph">
            {ReactHtmlParser(
              data.description.length > 400
                ? data.description.slice(0, 400) + "..."
                : data.description
            )}
          </div>
          <div className="feedback__box_name">{data.author}</div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackBox;
