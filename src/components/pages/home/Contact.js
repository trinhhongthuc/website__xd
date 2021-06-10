import React, { useEffect } from "react";
import Button from "../../layouts/button/Button";
import logo from "../../image/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="contact"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-4  col-lg-4 offset-4 ">
            <div className="contact__title">
              <span>L</span>ien he
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-3">
            <div className="contact__left">
              <div className="contact__left__title">Send message</div>
              <input
                type="text"
                name="name"
                id=""
                className="form-control__contact"
              />
              <input
                type="text"
                name="name"
                id=""
                className="form-control__contact"
              />
              <input
                type="text"
                name="name"
                id=""
                className="form-control__contact"
              />

              <button className="contact__left__btn">Send </button>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8">
            <div className="contact__right">
              <div className="contact__right__wrapper">
                <h1 className="contact__right__heading">Information</h1>

                <ul className="contact__right__ul">
                  <li className="contact__right__ul__li">iModel.vn</li>

                  <li className="contact__right__ul__li">
                    Địa chỉ: Hà Nội, Việt Nam
                  </li>

                  <li className="contact__right__ul__li">Website: imodel.vn</li>

                  <li className="contact__right__ul__li">
                    Facebook: fb.com/insidethemodel
                  </li>

                  <li className="contact__right__ul__li">
                    Mail: insidethemodel@gmail.com
                  </li>

                  <li className="contact__right__ul__li">
                    Mobile: (+84)969 886 620
                  </li>
                </ul>
              </div>
              <div className="contact__right__logo">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
