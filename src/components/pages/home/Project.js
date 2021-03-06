import React, { useEffect, useState } from "react";
import ProjectBox from "./ProjectBox";
import AOS from "aos";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from "uuid";
import Skeleton from "@yisheng90/react-loading";
import projectApi from "../../../API/projectApi";
import { Carousel } from "3d-react-carousal";

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

  let slides = dataProject.map((item) => {
    return <img src={item.img} alt={item.title} />;
  });
  return (
    <>
      {loading ? (
        <Skeleton width={"100%"} height={"60vh"} />
      ) : (
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="project__title">
                <span>D</span>ự án
              </h1>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="project__paragraph">
                Đội ngũ giảng viên và kỹ sư nhiều năm kinh nghiệm của{" "}
                <b>RESS</b> thực hiện các dự án trên các tỉnh thành. Một số dự
                án <b>RESS</b> đã thực hiện trong năm 2021. Bao gồm cả thiết kế
                và triển khai chi tiết hồ sơ bản vẽ thi công.
              </p>
            </div>
          </div>

          <div className="row project__box__scroll">
            <Carousel
              slides={slides}
              required
              autoplay={true}
              interval={1500}
              title="trinh hongthuc"
            />

            {/* <TouchCarousel
              cardCount={listOfData.length}
              cardSize={375}
              loop
              autoplay={3000}
            /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
