import React, { useEffect, useState } from "react";
import CourseBox from "./CourseBox";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from "@yisheng90/react-loading";
import { v4 as uuidv4 } from "uuid";
import courseApi from "../../../API/courseApi";
const Course = () => {
  const [dataCourse, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    courseApi.getCourse(4).then((data) => {
      setCourse(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton width={"100%"} height={"100vh"} />
      ) : (
        <div
          className="course"
          id="course"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h1 className="course__title">Khóa học</h1>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <p className="course_paragraph">
                  <b>RESS</b> cung cấp đến người học những kinh nghiệm và kiến
                  thức được đúc kết từ nhiều năm giảng dạy ở Trường Đại học,
                  Thiết kế các dự án , Triển khai hồ sơ của nhiều Giảng viên ở
                  các Trường, Các kỹ sư nhiều năm kinh nghiệm và tham gia các dự
                  án.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row" style={{ justifyContent: "center" }}>
              {dataCourse.map((item) => {
                return <CourseBox data={item} key={uuidv4()} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Course;
