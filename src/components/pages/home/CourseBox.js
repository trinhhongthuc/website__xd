import React from "react";
import { Link } from "react-router-dom";
const CourseBox = ({ data }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
      <Link to={`/course/detail/${data._id}`} className="course__box">
        <div className="course__box__img">
          <img src={data.img} alt="course item" />
        </div>

        <div className="course__box__title">
          {data.title.length > 35
            ? data.title.slice(0, 35) + "..."
            : data.title}
        </div>
      </Link>
    </div>
  );
};

export default CourseBox;
