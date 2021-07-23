import React, { useEffect, useState } from "react";
import FeedBackBox from "./FeedBackBox";
import AOS from "aos";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from "uuid";
import Skeleton from "@yisheng90/react-loading";
import fetchBack from "../../../API/fetchBack";

const FeedBack = () => {
  const [dataFetchBack, setDataFetchBack] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetchBack.getFetchBack().then((data) => {
      setDataFetchBack(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton width={"100%"} height={"100vh"} />
      ) : (
        <div className="feedback" data-aos="fade-up" data-aos-duration="1000">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h1 className="feedback__title">
                  <span>P</span>hản hồi của học viên
                </h1>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <p className="feedback__paragraph">
                  Sau 3 năm thành lập hiện tại học viên tại <b>RESS</b> đã đạt
                  gần 1500 học viên. Và điều mà <b>RESS</b> làm được đó là ngoài
                  mang lại giá trị cho người học{" "}
                  <i>“Kiến thức chuyên môn + Kỹ năng nghề nghiệp”</i> thì{" "}
                  <b>RESS</b> còn mang lại cho người học sự chu đáo và thấu
                  hiểu. Để học viên hiểu rằng{" "}
                  <i>“Họ sẽ không đơn độc ngay cả sau khi kết thúc khóa học”</i>
                </p>
              </div>
            </div>

            <div className="row feedback__wrapper">
              {dataFetchBack.map((item) => {
                return <FeedBackBox key={uuidv4()} data={item} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedBack;
