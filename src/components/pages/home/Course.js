import React, { useEffect } from "react";
import CourseBox from "./CourseBox";
import AOS from "aos";
import "aos/dist/aos.css";

const Course = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="course"
      id="course"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <h1 className="course__title">
              <span>K</span>hoa hoc
            </h1>
          </div>

          <div className="col-xl-12 col-lg-12">
            <p className="course_paragraph">
              Các khóa học tại iModel.vn là các khóa học có nội dung được đúc
              kết ra từ nhiều năm kinh nghiệm giảng dạy, kinh nghiệm triển khai
              dự án thực tế của các chuyên gia đạt chứng chỉ Autodesk
              Professional Certification của Autodesk cùng với chất lượng tốt
              nhất và chi phí rẻ nhất trên thị trường. Đặc biệt, iModel.vn có
              khóa học <b>ưu đãi đặc</b> biệt dành riêng cho các Em sinh viên
              (*).
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
        </div>
      </div>
    </div>
  );
};

export default Course;
