import React from "react";
import PaymentBox from "./PaymentBox";

const Payment = () => {
  return (
    <div className="payment">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <h1 className="course__outline__heading">Thanh toán học phí</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="payment__box">
              <div className="payment__box__heading">NGÂN HÀNG MBBANK</div>

              <p className="payment__box__paragraph">
                - Chi nhánh: Kim Ngưu, Q. Hai Bà Trưng, TP. Hà Nội
              </p>

              <p className="payment__box__paragraph">
                - Số tài khoản: 2530199986688
              </p>

              <p className="payment__box__paragraph">
                - Chủ tài khoản: Thái Hoàng Phi Hùng
              </p>

              <p className="payment__box__paragraph">
                - Lưu ý: Khi chuyển khoản vui lòng để lại số điện thoại
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            <div className="payment__box">
              <div className="payment__box__heading">NGÂN HÀNG TECHCOMBANK</div>

              <p className="payment__box__paragraph">
                - Chi nhánh: Phòng giao dịch Xa La, TP. Hà Nội
              </p>

              <p className="payment__box__paragraph">
                - Số tài khoản: 19033013326017
              </p>

              <p className="payment__box__paragraph">
                - Chủ tài khoản: Thái Hoàng Phi Hùng
              </p>

              <p className="payment__box__paragraph">
                - Lưu ý: Khi chuyển khoản vui lòng để lại số điện thoại
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            <div className="payment__box">
              <div className="payment__box__heading">NGÂN HÀNG BIDV</div>

              <p className="payment__box__paragraph">
                - Chi nhánh: Lạc Trung, Q. Hai Bà Trưng, TP. Hà Nội
              </p>

              <p className="payment__box__paragraph">
                - Số tài khoản: 12110000590858
              </p>

              <p className="payment__box__paragraph">
                - Chủ tài khoản: Thái Hoàng Phi Hùng
              </p>

              <p className="payment__box__paragraph">
                - Lưu ý: Khi chuyển khoản vui lòng để lại số điện thoại
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
