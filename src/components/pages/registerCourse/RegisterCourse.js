import React, { useEffect, useState } from "react";
import FormRegisterCourse from "./FormRegisterCourse";
import Counter from "../home/Counter.js";
import { useSelector, useDispatch } from "react-redux";
import FormAnimation from "../formAnimation/FormAnimation";
import Payment from "../courseDetail/Payment";

const RegisterCourse = () => {
  const dispatch = useDispatch();
  const [hiddenNotify, setHiddenNotify] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, []);
  const { notifycation } = useSelector((state) => state.registerCourseReducer);

  useEffect(() => {
    if (notifycation) {
      setHiddenNotify(true);

      setTimeout(() => {
        dispatch({ type: "HIDDEN_NOTIFICATION" });
        setHiddenNotify(false);
      }, 3000);
    }
    return {};
  }, [notifycation, dispatch]);

  return (
    <div className="register__course">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 register__course__top">
            <h1 className="register__course__heading">
              <span>Đ</span>ăng ký khóa học
            </h1>
            <p className="register__course__paragraph">
              <b>iModel.vn</b> luôn có các chương trình ưu đãi dành cho các học
              viên đăng ký theo nhóm.
            </p>
            <p className="register__course__paragraph">
              <b>iModel.vn</b> giảm 5% cho nhóm 2 người.
            </p>
            <p className="register__course__paragraph">
              <b>iModel.vn</b> giảm 10% cho nhóm 3-4 người.
            </p>
            <p className="register__course__paragraph">
              <b>iModel.vn</b> giảm 15% cho nhóm nhiều hơn 4 người.
            </p>
            <p className="register__course__paragraph">
              <b>iModel.vn</b> sẽ thanh toán tiền khuyến mãi cho học viên vào
              buổi học đầu tiên.
            </p>
          </div>
        </div>
      </div>

      <FormRegisterCourse />

      <Payment />

      <Counter />
      {hiddenNotify ? (
        <FormAnimation
          setHiddenNotify={setHiddenNotify}
          title="Đăng ký khóa học thành công"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default RegisterCourse;
