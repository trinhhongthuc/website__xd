import React from "react";
import feedbackInfo from "../../image/feedbackinfo.jpg";
const FeedBackBox = () => {
  return (
    <div className="col-xl-4 col-lg-4">
      <div className="feedback__box">
        <div className="feedback__box_img">
          <img src={feedbackInfo} alt="" />
        </div>

        <div className="feedback__box_paragraph">
          "Ở Nhật Bản, do nhu cầu nên mình quyết định đăng ký khóa học trực tiếp
          online tại iModel.vn từ Nhật Bản. Trong khóa học, mình đã được hướng
          dẫn rất nhiệt tình và chi tiết các vấn đề trong và ngoài khóa học.
          Ngoài ra, sau khóa học iModel.vn còn có các group hỗ trợ hàng ngày học
          viên cũ thật tuyệt vời."
        </div>
        <div className="feedback__box_name">Mr.Vĩnh - Kỹ sư xây dựng</div>
      </div>
    </div>
  );
};

export default FeedBackBox;
