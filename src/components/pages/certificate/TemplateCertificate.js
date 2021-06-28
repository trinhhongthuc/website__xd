import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TemplateCertificate = ({ dataTemplate }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="template__certificate"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <h1 className="template__certificate__heading">
              <span>M</span>ẫu chứng chỉ
            </h1>
            <p className="template__certificate__paragraph">
              Các khóa học tại <b>iModel.vn</b> đánh giá đúng về khả năng của
              học viên.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row template__certificate__box ">
          {dataTemplate?.map((item) => {
            return (
              <div className="col-xl-4 col-lg-4" key={item._id}>
                <div className="template__certificate__wrapper">
                  <img src={item.img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TemplateCertificate;
