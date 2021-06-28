import React, { useEffect, useState } from "react";
import ProjectBox from "./ProjectBox";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-elastic-carousel";
import { v4 as uuidv4 } from "uuid";
import Skeleton from "@yisheng90/react-loading";
import projectApi from "../../../API/projectApi";

const Project = () => {
  const [dataProject, setDataProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    projectApi.getProject().then((data) => {
      setDataProject(data.data);
      setLoading(false);
    });
  }, []);

  const breakPoints = [{ itemsToShow: 4 }];

  return (
    <>
      {loading ? (
        <Skeleton width={"100%"} height={"60vh"} />
      ) : (
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="project__title">
                <span>D</span>u an
              </h1>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="project__paragraph">
                Hình ảnh một số dự án đã được triển khai bởi đội ngũ{" "}
                <b>iModel.vn.</b> Nội dung triển khai bao gồm: mô hình hóa, tạo
                bản vẽ, thống kê, BIM 4D, shopdrawing, kiểm tra va chạm, phối
                hợp CDE...
              </p>
            </div>
          </div>

          <div className="row project__box__scroll">
            <Carousel>
              {dataProject.map((item) => {
                return (
                  <div
                    key={uuidv4()}
                    className="col-xl-8 col-lg-6 col-md-12 col-sm-12 col-12"
                  >
                    <ProjectBox data={item} />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
