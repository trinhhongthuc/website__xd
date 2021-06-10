import React, { useEffect } from "react";
import FeedBackBox from "./FeedBackBox";
import AOS from "aos";
import "aos/dist/aos.css";

const FeedBack = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="feedback" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <h1 className="feedback__title">
              <span>P</span>han hoi cua hoc vien
            </h1>
          </div>

          <div className="col-xl-12 col-lg-12">
            <p className="feedback__paragraph">
              <b>iModel.vn</b> luôn tự hào là đơn vị cung cấp dịch vụ tốt nhất
              về chất lượng, chi phí và các chế độ hậu mãi.
            </p>
          </div>
        </div>

        <div className="row feedback__wrapper">
          <FeedBackBox />
          <FeedBackBox />
          <FeedBackBox />
          <FeedBackBox />
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
