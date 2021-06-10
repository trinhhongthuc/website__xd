import React, { useEffect } from "react";
import introduceImg from "../../image/introduce.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Introduce = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="introduce" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <h1 className="introduce__heading">
              <span>V</span>ề chúng tôi
            </h1>
            <p className="introduce__paragraph">
              <b>iModel.vn</b> trước đây lấy tên là{" "}
              <b>"ACO - Công nghệ xây dựng"</b>. Do có sự thay đổi tích cực và
              chuyên nghiệp hơn trong bộ máy hoạt động, cùng với sự kết hợp với
              các nhân sự tài năng, nhiệt huyết mới nên đã chuyển tên thương
              hiệu sang <b>iModel - Inside the Model. iModel.vn</b> là nhà cung
              cấp dịch vụ đào tạo các phần mềm, giải pháp liên quan đến Công
              nghệ BIM như Revit, Naviswork, Dynamo, C# Revit API... cho các cá
              nhân và doanh nghiệp. <b>iModel.vn</b> có hơn 6 năm kinh nghiệm
              trong việc đào tạo các phần mềm và triển khai dự án BIM. iModel.vn
              đã đào tạo hàng trăm học viên và rất nhiều doanh nghiệp lớn như:
              DELTA, Obayashi, Supershed, PCSC1, MDA E&C,...
            </p>
            <p className="introduce__paragraph">
              Ngoài ra, <b>iModel.vn</b> cũng cung cấp các dịch vụ liên quan đến
              BIM như mô hình hóa dự án, triển khai bản vẽ dự án, thống kê khối
              lượng, BIM 4D, tạo add-in C# Revit API,.... <b>iModel.vn</b> tự
              hào là nhà cung cấp dịch vụ, giải pháp hiệu quả, sản phẩm chất
              lượng trong bối cảnh Công nghệ BIM đang trở thành xu thế ngành Xây
              dựng tại Việt Nam.
            </p>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="introduce__img">
              <img src={introduceImg} alt="introduce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
