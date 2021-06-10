import React, { useEffect } from "react";
import ProjectBox from "./ProjectBox";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container" data-aos="fade-up" data-aos-duration="1000">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <h1 className="project__title">
            <span>D</span>u an
          </h1>
        </div>

        <div className="col-xl-12 col-lg-12">
          <p className="project__paragraph">
            Hình ảnh một số dự án đã được triển khai bởi đội ngũ{" "}
            <b>iModel.vn.</b> Nội dung triển khai bao gồm: mô hình hóa, tạo bản
            vẽ, thống kê, BIM 4D, shopdrawing, kiểm tra va chạm, phối hợp CDE...
          </p>
        </div>
      </div>

      <div className="row">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
    </div>
  );
};

export default Project;
