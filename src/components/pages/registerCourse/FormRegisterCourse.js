import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerCourse } from "../../../redux/actions/action";
import { Ring } from "react-awesome-spinners";

const FormRegisterCourse = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      namsinh: "",
      email: "",
      sodienthoai: "",
      facebook: "",
      zalo: "",
      course: "",
      job: "",
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(registerCourse(data));
    reset();
    window.scrollTo(0, 0);
  };

  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const { isLoading } = useSelector((state) => state.registerCourseReducer);

  return (
    <>
      {isLoading ? (
        <div style={style}>
          <Ring />
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 offset-xl-2 offset-lg-2">
              <form
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="form__register__course"
              >
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h3 className="form__register__course__heading">
                      Vui lòng điền đầy đủ và chính xác thông tin của bạn để
                      chúng tôi liên hệ trong thời gian sớm nhất.
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form__register__course__wrapper">
                      <label
                        htmlFor="name"
                        className="form__register__course__wrapper__label"
                      >
                        Họ tên
                      </label>
                      <input
                        {...register("name", {
                          required: true,
                          maxLength: 100,
                          minLength: 2,
                        })}
                        placeholder="Họ tên"
                        className="form__register__course__wrapper__input"
                      />
                      <p className="form__register__course__wrapper__input__error">
                        {errors.name?.type === "required" &&
                          "*Họ tên is required"}
                      </p>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form__register__course__wrapper">
                      <label
                        htmlFor="namsinh"
                        className="form__register__course__wrapper__label"
                      >
                        Năm sinh
                      </label>

                      <input
                        {...register("namsinh", {
                          required: true,
                          maxLength: 20,
                          minLength: 2,
                          min: 1900,
                          max: 2020,
                        })}
                        type="number"
                        placeholder="Năm sinh"
                        className="form__register__course__wrapper__input"
                      />
                      <p className="form__register__course__wrapper__input__error">
                        {errors.namsinh?.type === "required" &&
                          "*Năm sinh is required"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form__register__course__wrapper">
                      <label
                        htmlFor="email"
                        className="form__register__course__wrapper__label"
                      >
                        Email
                      </label>
                      <input
                        {...register("email", {
                          required: true,
                        })}
                        type="email"
                        placeholder="Email"
                        className="form__register__course__wrapper__input"
                      />
                      <p className="form__register__course__wrapper__input__error">
                        {errors.email?.type === "required" &&
                          "*Email is required"}
                      </p>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form__register__course__wrapper">
                      <label
                        htmlFor="sodienthoai"
                        className="form__register__course__wrapper__label"
                      >
                        Số điện thoại
                      </label>
                      <input
                        {...register("sodienthoai", {
                          required: true,
                          maxLength: 20,
                          minLength: 8,
                        })}
                        type="number"
                        placeholder="Số điện thoại"
                        className="form__register__course__wrapper__input"
                      />
                      <p className="form__register__course__wrapper__input__error">
                        {errors.sodienthoai?.type === "required" &&
                          "*Số điện thoại is required"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form__register__course__wrapper">
                      <label
                        htmlFor="facebook"
                        className="form__register__course__wrapper__label"
                      >
                        Facebook(dùng để tham gia nhóm lớp)
                      </label>
                      <input
                        {...register("facebook", {
                          required: true,
                        })}
                        type="text"
                        placeholder="Facebook"
                        className="form__register__course__wrapper__input"
                      />
                      <p className="form__register__course__wrapper__input__error">
                        {errors.facebook?.type === "required" &&
                          "*Facebook is required"}
                      </p>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form__register__course__wrapper">
                      <label
                        htmlFor="zalo"
                        className="form__register__course__wrapper__label"
                      >
                        Zalo(dùng để tham gia nhóm học viên cũ)
                      </label>

                      <input
                        {...register("zalo", {
                          required: true,
                        })}
                        type="text"
                        placeholder="Zalo"
                        className="form__register__course__wrapper__input"
                      />
                      <p className="form__register__course__wrapper__input__error">
                        {errors.zalo?.type === "required" &&
                          "*Zalo is required"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 offset-xl-3 offset-lg-3">
                  <div className="form__register__display green">
                    <select {...register("course", { required: true })}>
                      <option value="">Khóa học đăng ký</option>
                      <option value="Revit Bê tông cốt thép">
                        Revit Bê tông cốt thép
                      </option>
                      <option value="Revit Kết cấu thép nhà xưởng">
                        Revit Kết cấu thép nhà xưởng
                      </option>
                      <option value="Revit Khối lượng">Revit Khối lượng</option>
                      <option value="Revit Education">Revit Education</option>
                    </select>
                    <p className="form__register__course__wrapper__input__error">
                      {errors.course?.type === "required" &&
                        "*Khóa học is required"}
                    </p>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 offset-xl-3 offset-lg-3">
                  <div className="form__register__display">
                    <select {...register("job", { required: true })}>
                      <option value="">Nghề nghiệp của bạn</option>
                      <option value="Sinh viên">Sinh viên</option>
                      <option value="Kỹ sư">Kỹ sư</option>
                      <option value="Kiến trúc sư">Kiến trúc sư</option>
                      <option value="Khác">Khác</option>
                    </select>
                    <p className="form__register__course__wrapper__input__error">
                      {errors.job?.type === "required" &&
                        "*Nghề nghiệp is required"}
                    </p>
                  </div>
                </div>

                <div className="form__register__button">
                  <button>Đăng ký ngay</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormRegisterCourse;
