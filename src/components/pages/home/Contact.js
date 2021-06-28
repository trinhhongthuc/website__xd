import React, { useEffect } from "react";
import logo from "../../image/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { contactForm } from "../../../redux/actions/action";

const Contact = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(contactForm(data));
  };
  return (
    <div
      className="contact"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 offset-md-3 offset-xl-4 offset-lg-4 ">
            <div className="contact__title">
              <span>L</span>ien he
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <form className="contact__left" onSubmit={handleSubmit(onSubmit)}>
              <div className="contact__left__title">Send message</div>
              <input
                {...register("name", {
                  required: true,
                  maxLength: 20,
                  minLength: 2,
                })}
                placeholder="Name"
                className="form-control__contact"
              />
              <p className="contact__left__error">
                {errors.name?.type === "required" && "*Name is required"}
              </p>

              <input
                {...register("email", { required: true })}
                placeholder="Email"
                className="form-control__contact"
                type="email"
              />
              <p className="contact__left__error">
                {errors.email?.type === "required" && "*Name is required"}
              </p>

              <input
                {...register("message", { required: true })}
                placeholder="Message"
                className="form-control__contact"
              />
              <p className="contact__left__error">
                {errors.message?.type === "required" && "*Message is required"}
              </p>

              <button className="contact__left__btn">Send </button>
            </form>
          </div>

          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
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
