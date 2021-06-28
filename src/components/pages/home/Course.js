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
                <h1 className="course__title">
                  <span>K</span>hoa hoc
                </h1>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <p className="course_paragraph">
                  Các khóa học tại iModel.vn là các khóa học có nội dung được
                  đúc kết ra từ nhiều năm kinh nghiệm giảng dạy, kinh nghiệm
                  triển khai dự án thực tế của các chuyên gia đạt chứng chỉ
                  Autodesk Professional Certification của Autodesk cùng với chất
                  lượng tốt nhất và chi phí rẻ nhất trên thị trường. Đặc biệt,
                  iModel.vn có khóa học <b>ưu đãi đặc</b> biệt dành riêng cho
                  các Em sinh viên (*).
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
