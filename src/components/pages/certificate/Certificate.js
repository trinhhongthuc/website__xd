import React, { useEffect } from "react";
import Counter from "../home/Counter";
import TemplateCertificate from "./TemplateCertificate";
import Contact from "../home/Contact.js";
import { animateScroll as scroll } from "react-scroll";

const Certificate = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <div className="certificate">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <h1 className="certificate__heading">TRA CỨU CHỨNG CHỈ</h1>
            <p className="certificate__text">
              <b>iModel.vn</b> cung cấp công cụ tra cứu kết quả học tập, chứng
              chỉ học viên online bằng cách nhập Code vào ô bên dưới.
            </p>
            <p className="certificate__text">
              <b>iModel.vn</b> đảm bảo sự minh bạch, công khai, công bằng trong
              việc công bố kết quả học tập của từng học viên.
            </p>

            <form method="POST" className="certificate__form">
              <div className="certificate__form__input">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter code here"
                />
              </div>
              <div className="certificate__form__button">
                <button>Send Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Counter />
      <TemplateCertificate />
      <Contact />
    </div>
  );
};

export default Certificate;
