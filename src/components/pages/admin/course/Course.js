import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getDataCourseAdmin,
  getDeleteDataCourseAdmin,
} from "../../../../redux/actions/action";

const Course = () => {
  const dispatch = useDispatch();
  const { dataCourse, isLoading } = useSelector(
    (state) => state.courseReducerAdmin
  );

  useEffect(() => {
    dispatch(getDataCourseAdmin());
  }, [dispatch]);

  const onClickDelete = (id) => {
    dispatch(getDeleteDataCourseAdmin(id));
  };
  return (
    <>
      <div className="admin">
        <div className="admin__course__wrapper">
          <h1 className="admin__course__wrapper__heading">Khóa học</h1>

          <div className="admin__course__wrapper__add">
            <Link
              className="admin__course__wrapper__add__link"
              to="/admin/course/add"
            >
              Add new Course
            </Link>
          </div>
        </div>

        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <table>
            <thead>
              <tr className="admin__course__title">
                <td className="admin__course__id">ID</td>
                <td className="admin__course__img">Hinh</td>
                <td className="admin__course__name">ten course</td>
                <td className="admin__course__status">trang thai</td>
                <td className="admin__course__manipulation" colSpan="3">
                  thao tac
                </td>
              </tr>
            </thead>
            <tbody>
              {dataCourse?.map((item) => {
                return (
                  <tr key={item._id}>
                    <td> {item._id}</td>
                    <td className="admin__course__item__img">
                      <img src={item.img} alt="" />
                    </td>

                    <td>
                      {item.title.length > 25
                        ? item.title.slice(0, 25) + "..."
                        : item.title}
                    </td>
                    <td>{item.status}</td>

                    <td>
                      <Link to={`/admin/course/update/${item._id}`}>
                        Update
                      </Link>
                    </td>

                    <td>
                      <Link disabled to={`/admin/course/detail/${item._id}`}>
                        Xem chi tiet
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          onClickDelete(item._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Course;
