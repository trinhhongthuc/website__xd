import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "redux/actions/action";
import { useHistory } from "react-router-dom";
import { Ring } from "react-awesome-spinners";
import FormAnimation from "../../formAnimation/FormAnimation";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (data, e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(loginAdmin(data));
    reset();
  };

  const { isLogin, error } = useSelector((state) => state.loginReducer);

  useEffect(() => {
    if (isLogin && sessionStorage.getItem("token")) {
      history.push("/admin");
    }
  }, [history, isLogin]);

  useEffect(() => {
    if (error) setNotify(true);
    setLoading(false);
    setTimeout(() => {
      setNotify(false);
    }, 3000);
  }, [error]);

  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {loading ? (
        <div style={style}>
          <Ring />
        </div>
      ) : notify ? (
        <FormAnimation
          setHiddenNotify={setNotify}
          title="Username or password is not match"
        />
      ) : (
        <div className="login">
          <form
            method="post"
            className="login__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="login__form__heading">Login</h2>

            <div className="login__form__wrapper">
              <label htmlFor="" className="login__form__wrapper__label">
                Tên đăng nhập:
              </label>
              <input
                {...register("username", {
                  required: true,
                  maxLength: 200,
                  minLength: 2,
                })}
                placeholder="Enter code here"
                type="text"
                className="form__register__course__wrapper__input"
              />
              <p className="form__register__course__wrapper__input__error">
                {errors.username?.type === "required" &&
                  "*Tên đăng nhập is required"}
              </p>
            </div>

            <div className="login__form__wrapper">
              <label htmlFor="" className="login__form__wrapper__label">
                Mật khẩu:
              </label>
              <input
                {...register("password", {
                  required: true,
                  maxLength: 200,
                  minLength: 2,
                })}
                placeholder="Enter code here"
                type="password"
                className="form__register__course__wrapper__input"
              />
              <p className="form__register__course__wrapper__input__error">
                {errors.password?.type === "required" &&
                  "*PassWord is required"}
              </p>
            </div>

            <div className="form__register__wrapper__button">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
