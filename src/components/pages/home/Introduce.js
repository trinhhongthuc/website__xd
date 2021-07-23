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
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <h1 className="introduce__heading">
              <span>V</span>ề chúng tôi
            </h1>
            <p className="introduce__paragraph">
              Trong xu hướng công việc hiện nay, hầu như các công ty xây dựng
              khi tuyển dụng nhân sự thiết kế hoặc triển khai hồ sơ đều yêu cầu
              các bạn phải có tối thiểu ít nhất trên 1 năm kinh nghiệm ??? Vậy
              làm sao để xin được vào các công ty như vậy ??? Trong khi các bạn
              mới vừa tốt nghiệp hoặc trước giờ chỉ làm thi công ???
            </p>

            <b>
              <h3>
                <b>Các bạn thân mến!</b>
              </h3>
            </b>

            <p className="introduce__paragraph">
              Thực tế cho thấy sinh viên khi vừa tốt nghiệp đều vấp phải, ngay
              cả những bạn có học lực khá và giỏi đó là “Vào thử việc thì không
              làm được việc theo yêu câu”. Đó cũng là lý do mà nhiều công ty rất
              quan ngại khi tuyển nhân sự mà chưa có kinh nghiệm. Vậy câu hỏi
              làm sao để các bạn có thể đáp ứng được yêu cầu của công ty cần và
              giúp cho doanh nghiệp bỏ đi những định kiến với sinh viên mới ra
              trường và những anh em kỹ sư chưa có kinh nghiệm ??? Hiểu rõ những
              vấn đề trên, trung tâm tin học Xây dựng RESS “ viết tắt của
              Revit_Etabs_Safe_Sap_Da Nang” ra đời với mong muốn mang lại những
              giá trị đào tạo thật sự, với phương châm đào tạo{" "}
              <b>“ Học để làm việc_Học để ứng dụng”</b>.<br />
              Để tránh sự nhàm chán cũng như tạo sức hấp dận lôi cuốn. Chúng tôi
              áp dụng phương pháp đào tạo mới{" "}
              <b>“Học hiểu_Học ứng dụng vào thực tế”</b>. Giúp học viên xâu
              chuỗi các kiến thức trong nhà trường lồng vào đó là kiến thức thực
              tế công viêc để giúp người học biết ý nghĩa và phương pháp làm
              việc. Bạn sẽ tiếp thu kiến thức một cách chủ dộng và hệ thống. Hơn
              thế nữa là một công việc như bạn mong muốn
            </p>

            <b>
              <h2>
                Đó là những điều thật tuyệt vời. Tất cả chỉ có tại <b>RESS</b>!
              </h2>
            </b>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
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
