import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DocumentReducerAdmin from "./../../../../redux/reducers/Admin/DocumentReducerAdmin";
import types from "redux/types";
import DocumentApi from "API/DocumentApi";

const DocumentAdmin = () => {
  const dispatch = useDispatch();

  const { isLoading, dataDocument } = useSelector(
    (state) => state.DocumentReducerAdmin
  );

  useEffect(() => {
    try {
      dispatch({ type: types.GET_ALL_DOCUMENT });
    } catch (error) {}
  }, [dispatch]);

  const onClickDelete = (id) => {
    dispatch({ type: types.DELETE_DOCUMENT, id });
  };
  return (
    <>
      <div className="admin">
        <div className="admin__course__wrapper">
          <h1 className="admin__course__wrapper__heading">Khóa học</h1>

          <div className="admin__course__wrapper__add">
            <Link
              className="admin__course__wrapper__add__link"
              to="/admin/tailieu/add"
            >
              Add Tài liệu
            </Link>
          </div>
        </div>

        <table>
          <thead>
            <tr className="admin__course__title">
              <td className="admin__course__id">ID</td>
              <td className="admin__course__img">Link</td>
              <td className="admin__course__name">Title</td>
              <td className="admin__course__status">trang thai</td>
              <td className="admin__course__manipulation" colSpan="3">
                thao tac
              </td>
            </tr>
          </thead>

          <tbody>
            {dataDocument?.map((item) => {
              return (
                <tr key={item._id}>
                  <td> {item._id}</td>
                  <td className="admin__course__item__img">{item.link}</td>

                  <td>
                    {item.title.length > 25
                      ? item.title.slice(0, 25) + "..."
                      : item.title}
                  </td>
                  <td>{item.status}</td>

                  <td>
                    <Link to={`/admin/tailieu/update/${item._id}`}>Update</Link>
                  </td>

                  <td>
                    <Link disabled to={`/admin/tailieu/detail/${item._id}`}>
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
      </div>
    </>
  );
};

export default DocumentAdmin;
