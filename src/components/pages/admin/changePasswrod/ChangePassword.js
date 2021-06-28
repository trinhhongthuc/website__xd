import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "redux/actions/action";
import FormAnimation from "../../formAnimation/FormAnimation";
import { Ring } from "react-awesome-spinners";

const ChangePassword = ({ setHiddenModel }) => {
  const dispatch = useDispatch();
  const [err, setErr] = useState(false);
  const [titleErr, setTitleErr] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      oldpassword: "",
      newpassword: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data, e) => {
    e.preventDefault();

    if (data.newpassword.trim() !== data.configpassword.trim()) {
      setTitleErr("Password is match");
      setErr(true);
      reset();
      setTimeout(() => {
        setErr(false);
      }, 3500);
      return;
    }
    dispatch(
      changePassword({
        oldpassword: data.oldpassword,
        newpassword: data.newpassword,
        confirmPassword: data.configpassword,
      })
    );
    reset();
  };

  const onClickHidden = (e) => {
    if (e.target.className === "change__password__overlay")
      setHiddenModel(false);
  };
  /// nhớ lmaf chổ này tiếp nha

  const { isChangePassword, error, iShowModel } = useSelector(
    (state) => state.loginReducer
  );
  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    if (error) {
      setErr(true);
      setTitleErr(error);
      setTimeout(() => {
        setErr(false);
      }, 3000);
    } else if (iShowModel) {
      setErr(true);
      setTitleErr("Modify password success");
      setTimeout(() => {
        setErr(false);
      }, 3000);
    }
  }, [error, iShowModel]);

  return (
    <>
      {isChangePassword ? (
        <div style={style}>
          <Ring />
        </div>
      ) : (
        <div
          className="change__password__overlay"
          onClick={(e) => onClickHidden(e)}
        >
          <form
            action=""
            className="form__change"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="form__change__heading">Đổi mật khẩu</h2>
            <div className="form__change__wrapper">
              <label htmlFor="" className="form__change__wrapper__label">
                Mật khẩu cũ:
              </label>
              <input
                {...register("oldpassword", {
                  required: true,
                  maxLength: 200,
                  minLength: 2,
                })}
                placeholder="Enter mật khẩu cũ"
                type="password"
                className="form__register__course__wrapper__input"
              />
              <p className="form__change__wrapper__error">
                {errors.oldpassword?.type === "required" &&
                  "*Password is required"}
              </p>
            </div>

            <div className="form__change__wrapper">
              <label htmlFor="" className="form__change__wrapper__label">
                Nhập mật khẩu mới:
              </label>
              <input
                {...register("newpassword", {
                  required: true,
                  maxLength: 200,
                  minLength: 2,
                })}
                placeholder="Enter mật khẩu mới"
                type="password"
                className="form__register__course__wrapper__input"
              />
              <p className="form__change__wrapper__error">
                {errors.newpassword?.type === "required" &&
                  "*Mật khẩu mới is required"}
              </p>
            </div>

            <div className="form__change__wrapper">
              <label htmlFor="" className="form__change__wrapper__label">
                Nhập lại mật khẩu
              </label>
              <input
                {...register("configpassword", {
                  required: true,
                  maxLength: 200,
                  minLength: 2,
                })}
                placeholder="Enter mật khẩu mới"
                type="password"
                className="form__register__course__wrapper__input"
              />
              <p className="form__change__wrapper__error">
                {errors.configpassword?.type === "required" &&
                  "*Nhập lại mật khẩu is required"}
              </p>
            </div>

            <div className="form__change__button">
              <button>Change Password</button>
            </div>
          </form>
        </div>
      )}

      {err ? <FormAnimation title={titleErr} setHiddenNotify={setErr} /> : ""}
    </>
  );
};

export default ChangePassword;
