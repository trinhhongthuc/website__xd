import React from "react";
import img from "../../image/feedbackinfo.jpg";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const CourseBox = ({ data }) => {
  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
      style={{ marginBottom: "16px" }}
    >
      <div className="courses__box">
        <Link
          to={`/course/detail/${data._id}`}
          className="courses__box__wrapper"
        >
          <div className="courses__box__wrapper__imgBg">
            <img src={data.img} alt="" />
          </div>
          <div className="courses__box__wrapper__imgAu">
            <img src={data.img} alt="" />
          </div>
          <div className="courses__box__wrapper__overlay"></div>
        </Link>

        <div className="courses__box__wrapper__content">
          <div className="courses__box__wrapper__content__author">
            <span>
              <FaUserTie />
            </span>{" "}
            {data.author}
          </div>
          <Link
            to={`/course/detail/${data._id}`}
            className="courses__box__wrapper__content__title"
          >
            {data.title}
          </Link>
          <div className="courses__box__wrapper__content__price">
            <NumberFormat
              value={data.price}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"đ"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBox;
