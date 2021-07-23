import React, { useEffect } from "react";
import Button from "../../layouts/button/Button";
import img from "../../image/feedbackinfo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { animateScroll as scroll } from "react-scroll";
import CourseOutline from "./CourseOutline";
import Counter from "../home/Counter";
import bannerImg from "../../image/autodesk.jpg";
import Payment from "./Payment";

const CourseDetail = () => {
  useEffect(() => {
    AOS.init();
    scroll.scrollToTop();
  }, []);

  return (
    <div className="course__detail">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 course__detail__top">
            <h1 className="course__detail__heading">
              <span>Đ</span>ăng ký khóa học
            </h1>

            <h1 className="course__detail__heading__why">
              TẠI SAO NÊN HỌC REVIT TẠI IMODEL.VN ?
            </h1>
            <p className="course__detail__paragraph">
              <b>Imodel.vn</b> hiểu rằng trên thị trường hiện nay có rất nhiều
              trung tâm, lớp học Revit dẫn đến việc khó khăn cho học viên khi
              chọn lựa khóa học phù hợp. Các khóa học tại <b>Imodel.vn</b> do
              các chuyên gia đào tạo, các chuyên gia này cũng chính là những
              người đảm nhiệm vai trò tuyển dụng tại các Tập đoàn xây dựng lớn ở
              Việt Nam. Cho nên, hơn ai hết, <b>Imodel.vn</b> hiểu rõ thực tế
              công việc Revit/BIM cần những kỹ năng gì, nên học như thế nào để
              hiểu quả nhất. Và các vấn đề đó đều được giải quyết tại khóa học
              tại <b>Imodel.vn</b>.
            </p>
            <div className="course__detail__button">
              <Button />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row course__detail__box__center">
          <div className="col-xl-4 col-lg-4">
            <div className="course__detail__box">
              <h1 className="course__detail__box__heading">YÊU CẦU</h1>

              <p className="course__detail__box__paragraph">
                - Là người có kiến thức cơ bản về Xây Dựng.
              </p>

              <p className="course__detail__box__paragraph">
                - Là người biết sử dụng máy tính cơ bản.
              </p>

              <p className="course__detail__box__paragraph">
                - Là người muốn áp dụng Revit vào học tập và công việc.
              </p>

              <p className="course__detail__box__paragraph">
                - Cấu hình máy tính tối thiểu: Core i3, đời 3, ổ cứng C dung
                lượng trống lớn hơn 30 GB, Ram 8GB.
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            <div className="course__detail__box">
              <h1 className="course__detail__box__heading">
                BẠN SẼ NHẬN ĐƯỢC GÌ ?
              </h1>

              <p className="course__detail__box__paragraph">
                - Thành thạo kỹ năng, thấu hiểu cách hoạt động, điểm mạnh, điểm
                yếu và cách khắc phục của Revit khi làm dự án thực tế.
              </p>

              <p className="course__detail__box__paragraph">
                - Ngay sau khi tham gia vào khóa học, bạn sẽ được gửi đầy đủ các
                tài liệu liên quan đến Khóa học Revit Structure Online.
              </p>

              <p className="course__detail__box__paragraph">
                - Được tham gia Group học viên cũ để được trao đổi, giúp đỡ
                những thắc mắc với Revit Structure hàng ngày.
              </p>

              <p className="course__detail__box__paragraph">
                - Được tham gia các buổi Workshop về các đề tài xoay quanh Revit
                Structure như: Revit Architechture, Revit Collobration, Lập
                trình Dynamo, Naviswork, Lập trình C# Addin, Lập trình Package
                Dynamo…
              </p>

              <p className="course__detail__box__paragraph">
                - Được ưu tiên giới thiệu việc làm khi có thông tin tuyển dụng.
              </p>

              <p className="course__detail__box__paragraph">
                - Được cung cấp Add-in{" "}
                <b>RevACO (Add-in Revit miễn phí dành cho học viên)</b> trong
                Revit sử dụng miễn phí trọn đời.
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            <div className="course__detail__box">
              <h1 className="course__detail__box__heading">MÔ TẢ KHÓA HỌC</h1>

              <p className="course__detail__box__paragraph">
                - Thời lượng: 32~ (h).
              </p>

              <p className="course__detail__box__paragraph">
                - Thời gian: 19h30 - 21h30~.
              </p>

              <p className="course__detail__box__paragraph">
                - Lịch học: thứ 2 - thứ 5.
              </p>

              <p className="course__detail__box__paragraph">
                - Khai giảng (dự kiến): 26/04/2021.
              </p>

              <p className="course__detail__box__paragraph">
                - Số buổi: 16 (buổi).
              </p>

              <p className="course__detail__box__paragraph">
                - Chi phí: +3,000,000 2,544,000 đ (Sinh Viên).      +3,500,000
                3,024,000 đ (KS/KTS).
              </p>

              <p className="course__detail__box__paragraph">
                - Bản vẽ sau khóa học: Click now.
              </p>

              <p className="course__detail__box__paragraph">
                - Đăng ký khóa học: Click now.
              </p>
              <p className="course__detail__box__paragraph">
                - Sau mỗi buổi học đều có video quay lại máy giảng viên.
              </p>

              <p className="course__detail__box__paragraph">
                - Vào giữa khóa, học viên có bài kiểm tra giữa kỳ để đánh giá
                năng lực sau 1 nửa chặng đường học tập.
              </p>

              <p className="course__detail__box__paragraph">
                - Cuối khóa học, học viên được nhận đề thi thử Chứng chỉ cấp
                quốc tế Certificate of Completion Revit Structure miễn phí.
              </p>

              <p className="course__detail__box__paragraph">
                - Phiên bản: Revit 2020.
              </p>
              <p className="course__detail__box__paragraph">
                - Hình thức: Online Skype.
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            <div className="course__detail__box">
              <h1 className="course__detail__box__heading">GIẢNG VIÊN</h1>

              <p className="course__detail__box__paragraph">
                - Họ tên: Thái Hoàng Phi Hùng
              </p>

              <p className="course__detail__box__paragraph">
                - Chuyên ngành: XDDD&CN.
              </p>

              <p className="course__detail__box__paragraph">
                - Vị trí: BIM Developer/Manager.
              </p>

              <p className="course__detail__box__paragraph">
                - Chứng chỉ: Autodesk Revit Structure Professional
                Certification.
              </p>

              <p className="course__detail__box__paragraph">
                - Là người phát triển ACOPackage .
              </p>

              <p className="course__detail__box__paragraph">
                - Là người phát triển RevACO .
              </p>

              <div className="course__detail__box__img">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CourseOutline />

      <Counter />

      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 offset-2">
            <div className="course__detail__banner">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Payment />
    </div>
  );
};

export default CourseDetail;
