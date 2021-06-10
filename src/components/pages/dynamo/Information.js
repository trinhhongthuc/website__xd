import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../../image/feedbackinfo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { animateScroll as scroll } from "react-scroll";

const Information = () => {
  useEffect(() => {
    AOS.init();
    scroll.scrollToTop();
  }, []);

  return (
    <div className="info">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="info__left">
              <h1 className="info__left__heading">
                <span>G</span>iới thiệu
              </h1>

              <p className="info__left__paragraph">
                ACOPackage ra đời vào 09-05-2020. Phiên bản mới nhất: 1.0.4.{" "}
                <br /> Sau khoảng thời gian sử dụng Dynamo, nhận thấy nguồn thư
                viện trong Dynamo rất nhiều, nhưng vẫn còn đó những vấn đề mà
                nguồn thư viện đó chưa xử lý tốt. <br />
                Vì vậy, tác giả đã bắt tay vào thực hiện bộ ACOPackage này với
                hashtag: #MakeDynamoGreateAgain với hi vọng làm cho Dynamo ngày
                càng tuyệt vời hơn.
                <br /> ACOPackage được phát triển dựa trên các nhu cầu thực tế
                của tác giả. Kèm theo đó là các yêu cầu thực tế của người dùng.
                Các yêu cầu của người dùng gửi về ACOPackage sẽ được cập nhật
                trong những phiên bản sau đó.
                <br /> Nếu bạn có yêu cầu gì dành cho ACOPackage, hãy liên hệ
                với chúng tôi. Chúng tôi sẵn sàng làm miễn phí giúp bạn.
                <br /> Gửi yêu cầu của bạn dành cho ACOPackage tại{" "}
                <Link>đây</Link>
                <br /> Xem hướng dẫn về ACOPackage tại <Link>đây</Link> <br />
                Nếu trong quá trình sử dụng gặp lỗi, vui lòng liên hệ để được
                giúp đỡ tại <Link>đây</Link>
                <br /> Để không bỏ lỡ cập nhật mới nhất, vui lòng theo dõi tại
                <Link>đây</Link>
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            <div className="info__right">
              <h1 className="info__right__heading">NGƯỜI PHÁT TRIỂN</h1>
              <p className="info__right__text">
                "Chúng tôi phát triển ACOPackage với mục đích phi lợi nhuận.{" "}
                <br />
                Chúng tôi làm miễn phí - Chỉ cần bạn yêu cầu!"
              </p>

              <div className="info__right__img">
                <img src={img} alt="" />
              </div>

              <div className="info__right__author">
                <div className="info__right__author__name">
                  Thái Hoàng Phi Hùng (Mr.)
                </div>

                <div className="info__right__author__job">
                  {" "}
                  Developer of ACOPackage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
