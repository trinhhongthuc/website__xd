import React from "react";
import { Link } from "react-router-dom";
import img from "../../image/project.jpg";
const BoxReCourse = ({ course }) => {
  return (
    <>
      <div className="col-xl-4 col-lg-4">
        <h4 className="box-re-title">Khóa học</h4>
        {course?.map((courseItem) => {
          return (
            <Link
              to={`/course/detail/${courseItem._id}`}
              className="box-re-wrapper"
            >
              <div className="box-re-wrapper-img">
                <img src={courseItem.img} alt="" />
              </div>

              <div className="box-re-wrapper-title">{courseItem.title}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BoxReCourse;
