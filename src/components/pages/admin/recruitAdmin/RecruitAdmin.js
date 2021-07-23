import RecruitApi from "API/RecruitApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import types from "redux/types";
import { Ring } from "react-awesome-spinners";

const RecruitAdmin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.GET_ALL_RECRUIT });
  }, [dispatch]);

  const { isLoading, dataRecruit } = useSelector(
    (state) => state.RecruitReducerAdmin
  );

  console.log(dataRecruit);

  const onClickDelete = (id) => {
    dispatch({ type: types.DELETE_RECRUIT, payload: id });
  };

  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {isLoading ? (
        <div style={style}>
          <Ring />
        </div>
      ) : (
        <div className="admin">
          <div className="admin__course__wrapper">
            <h1 className="admin__course__wrapper__heading">Tuyển Dụng</h1>

            <div className="admin__course__wrapper__add">
              <Link
                className="admin__course__wrapper__add__link"
                to="/admin/tuyendung/add"
              >
                Add tuyển dụng
              </Link>
            </div>
          </div>

          <table>
            <thead>
              <tr className="admin__course__title">
                <td className="admin__course__id">ID</td>
                <td className="admin__course__name">Title</td>
                <td className="admin__course__name">author</td>
                <td className="admin__course__status">trang thai</td>
                <td className="admin__course__manipulation" colSpan="3">
                  thao tac
                </td>
              </tr>
            </thead>

            <tbody>
              {dataRecruit?.map((item) => {
                return (
                  <tr key={item._id}>
                    <td> {item._id}</td>
                    <td>
                      {item.title.length > 25
                        ? item.title.slice(0, 25) + "..."
                        : item.title}
                    </td>
                    <td>{item.author}</td>
                    <td>{item.status}</td>

                    <td>
                      <Link to={`/admin/tuyendung/update/${item._id}`}>
                        Update
                      </Link>
                    </td>

                    <td>
                      <Link disabled to={`/admin/tuyendung/detail/${item._id}`}>
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
      )}
    </>
  );
};

export default RecruitAdmin;
