import React, { useEffect, useState } from "react";
import CourseBox from "./CourseBox";
import { Ring } from "react-awesome-spinners";
import Paginations from "./Paginations.js";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { pagination } from "../../../redux/actions/action";
import Contact from "../home/Contact.js";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const query = useQuery();

  const { dataPagination, isLoading } = useSelector(
    (state) => state.courseReducer
  );

  const page = query.get("page") || 1;

  useEffect(() => {
    return {};
  }, [dataPagination]);

  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const { currentPage } = useSelector((state) => state.courseReducer);

  useEffect(() => dispatch(pagination({ page })), [dispatch, page]);

  const onSetActive = (number) => {
    if (Number(number) === Number(currentPage)) setActive(true);
    else setActive(false);
  };

  return (
    <>
      {isLoading ? (
        <div style={style}>
          <Ring />
        </div>
      ) : (
        <div className="courses">
          <div className="container">
            <div className="row">
              {dataPagination?.map((item) => {
                return <CourseBox key={item._id} data={item} />;
              })}
            </div>
          </div>

          <div className={" pagination__course"}>
            <Paginations
              page={page}
              active={active}
              onSetActive={onSetActive}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
