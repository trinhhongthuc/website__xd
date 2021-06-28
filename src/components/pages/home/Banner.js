import React, { useEffect, useState } from "react";
import Button from "../../layouts/button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import { Link as LInkScroll } from "react-scroll";
import { Carousel } from "3d-react-carousal";
import slideApi from "../../../API/slideApi";

const Banner = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    slideApi.getBanner().then((data) => {
      setItems(data.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  let slides = items.map((item) => {
    return <img src={item.img} alt={item.title} />;
  });

  return (
    <>
      {loading ? (
        <LoadingMask loading={loading} text={"loading..."}>
          <div style={{ width: 500, height: "100vh" }}></div>
        </LoadingMask>
      ) : (
        <div className="banner" data-aos="fade-up" data-aos-duration="1000">
          <Carousel slides={slides} required autoplay={true} interval={2500} />
          <div className="wrapper__banner">
            <h1 className="banner__title">Khóa Học ưu đãi</h1>
            <LInkScroll to="course" duration={200} offset={-80}>
              <Button />
            </LInkScroll>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
