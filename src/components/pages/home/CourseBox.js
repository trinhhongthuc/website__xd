import React from "react";
import courseImg from "../../image/course_item.png";
import { Link } from "react-router-dom";
const CourseBox = () => {
  return (
    <div className="col-xl-4 col-lg-4">
      <Link to="/detail" className="course__box">
        <div className="course__box__img">
          <img src={courseImg} alt="course item" />
        </div>

        <div className="course__box__title">
          Revit Khối lượng chỉ từ 159,000/buổi
        </div>
      </Link>
    </div>
  );
};

export default CourseBox;
