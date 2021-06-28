import React from "react";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const BoxRelate = ({ data }) => {
  return (
    <Link className="box__relate" to={`/course/detail/${data._id}`}>
      <div className="box__relate__wrapper">
        <div className="box__relate__wrapper__img">
          <img src={data.img} alt="img" />
          <div className="box__relate__wrapper__img__overlay"></div>
        </div>

        <div className="box__relate__wrapper__img__content">
          <div className="box__relate__wrapper__img__content__user">
            <span>
              <FaUserTie />
            </span>

            <h2>{data.author}</h2>
          </div>

          <div className="box__relate__wrapper__img__content__title">
            {data.title}
          </div>

          <div className="box__relate__wrapper__img__content__price">
            <NumberFormat
              value={data.price}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"đ"}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BoxRelate;
