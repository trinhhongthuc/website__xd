import courseApi from "API/courseApi";
import React, { useState, useEffect } from "react";
import BoxReCourse from "../document/BoxReCourse";
import BoxRecruit from "./BoxRecruit";
import moment from "moment";
const Recruit = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    try {
      courseApi
        .getCourse(5)
        .then((data) => {
          setCourse(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="wrapper-recruit">
          <h1 className="h1">Thông tin tuyển dụng việc làm</h1>
          <p className="date-update">
            Ngày đăng: {moment(course.createdAt).format("LLL")}
          </p>
        </div>

        <BoxRecruit />

        <BoxReCourse course={course} />
      </div>
    </div>
  );
};

export default Recruit;
