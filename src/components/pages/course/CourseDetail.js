import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { v4 as uuidv4 } from "uuid";
import ListBoxRelate from "./ListBoxRelate";
import { Ring } from "react-awesome-spinners";
import courseApi from "../../../API/courseApi";

const CourseDetail = () => {
  const [courseDetail, setCourseDetail] = useState({});

  const [loading, setLoading] = useState(true);
  const id = useParams().id;

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    courseApi.getCourseDetailByID(id).then((data) => {
      setCourseDetail(data.data);
      setLoading(false);
    });
  }, [id]);

  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {loading ? (
        <div style={style}>
          {" "}
          <Ring />
        </div>
      ) : (
        <div className="courses__detail">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="courses__detail__left">
                  <div className="courses__detail__left__heading">
                    {courseDetail.title.length > 25
                      ? courseDetail.title.slice(0, 25) + "..."
                      : courseDetail.title}
                  </div>
                  {courseDetail.section.map((item, index) => {
                    return <Accordion key={uuidv4()} title={item}></Accordion>;
                  })}
                </div>
              </div>

              <div className="col-xl-8 col-lg-8">
                <div className="courses__detail__right">
                  <div className="courses__detail__right__img">
                    <img src={courseDetail.img} alt="" />
                  </div>

                  <div className="courses__detail__right__button">
                    <Link
                      className="courses__detail__right__button__link"
                      to="/dangkykhoahoc"
                    >
                      Dang ky ngay
                    </Link>
                  </div>

                  <div className="courses__detail__right__description">
                    {ReactHtmlParser(courseDetail.description)}
                  </div>

                  <div className="courses__detail__right__relate">
                    <h2 className="courses__detail__right__relate__title">
                      Các khóa học liên quan
                    </h2>
                    <ListBoxRelate
                      hashTag={courseDetail.hashTag}
                      id={courseDetail._id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetail;
