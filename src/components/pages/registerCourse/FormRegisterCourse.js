import React from "react";

const FormRegisterCourse = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 co-lg-8 offset-2">
            <form method="POST" className="form__register__course">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <h3 className="form__register__course__heading">
                    Vui lòng điền đầy đủ và chính xác thông tin của bạn để chúng
                    tôi liên hệ trong thời gian sớm nhất.
                  </h3>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="form__register__course__wrapper">
                    <label
                      htmlFor="name"
                      className="form__register__course__wrapper__label"
                    >
                      Ho ten
                    </label>{" "}
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="Họ tên"
                      className="form__register__course__wrapper__input"
                      tabIndex={1}
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                  <div className="form__register__course__wrapper">
                    <label
                      htmlFor="namsinh"
                      className="form__register__course__wrapper__label"
                    >
                      Nam sinh
                    </label>
                    <input
                      type="text"
                      name="namsinh"
                      id="namsinh"
                      tabIndex={2}
                      required
                      placeholder="Năm sinh"
                      className="form__register__course__wrapper__input"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="form__register__course__wrapper">
                    <label
                      htmlFor="email"
                      className="form__register__course__wrapper__label"
                    >
                      Email
                    </label>{" "}
                    <input
                      type="text"
                      name="email"
                      id="email"
                      tabIndex={3}
                      required
                      placeholder="Email"
                      className="form__register__course__wrapper__input"
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                  <div className="form__register__course__wrapper">
                    <label
                      htmlFor="sodienthoai"
                      className="form__register__course__wrapper__label"
                    >
                      Số điện thoại
                    </label>{" "}
                    <input
                      type="text"
                      name="sodienthoai"
                      id="sodienthoai"
                      placeholder="Số điện thoại"
                      tabIndex={4}
                      required
                      className="form__register__course__wrapper__input"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="form__register__course__wrapper">
                    <label
                      htmlFor="facebook"
                      className="form__register__course__wrapper__label"
                    >
                      Facebook(dùng để tham gia nhóm lớp)
                    </label>{" "}
                    <input
                      type="text"
                      name="facebook"
                      id="facebook"
                      placeholder="Facebook"
                      tabIndex={5}
                      required
                      className="form__register__course__wrapper__input"
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                  <div className="form__register__course__wrapper">
                    <label
                      htmlFor="zalo"
                      className="form__register__course__wrapper__label"
                    >
                      Zalo(dùng để tham gia nhóm học viên cũ)
                    </label>
                    <input
                      type="text"
                      name="zalo"
                      id="zalo"
                      placeholder="Zalo"
                      tabIndex={6}
                      required
                      className="form__register__course__wrapper__input"
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 offset-3">
                <div className="form__register__display green">
                  <select className="form__register__display">
                    <option>Khóa học đăng ký</option>
                    <option>Revit Bê tông cốt thép</option>
                    <option>Revit Kết cấu thép nhà xưởng</option>
                    <option>Revit Khối lượng</option>
                    <option>Revit Education</option>
                  </select>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 offset-3">
                <div className="form__register__display">
                  <select className="form__register__display">
                    <option>Nghề nghiệp của bạn</option>
                    <option>Sinh viên</option>
                    <option>Kỹ sư</option>
                    <option>Kiến trúc sư</option>
                  </select>
                </div>
              </div>

              <div className="form__register__button">
                <button>Đăng ký ngay</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormRegisterCourse;
