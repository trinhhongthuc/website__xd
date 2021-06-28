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
                  <span>P</span>han hoi cua hoc vien
                </h1>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <p className="feedback__paragraph">
                  <b>iModel.vn</b> luôn tự hào là đơn vị cung cấp dịch vụ tốt
                  nhất về chất lượng, chi phí và các chế độ hậu mãi.
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
