import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllProjects,
  deleteOneProject,
} from "../../../../redux/actions/action";

const Project = () => {
  const dispatch = useDispatch();

  const result = useSelector((state) => state.projectReducerAdmin);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const onClickDelete = (id) => {
    dispatch(deleteOneProject(id));
  };
  return (
    <>
      <div className="admin">
        <div className="admin__course__wrapper">
          <h1 className="admin__course__wrapper__heading">Project</h1>

          <div className="admin__course__wrapper__add">
            <Link
              className="admin__course__wrapper__add__link"
              to="/admin/project/add"
            >
              Add new Project
            </Link>
          </div>
        </div>

        {result.isLoading ? (
          <h1>loading...</h1>
        ) : (
          <table>
            <thead>
              <tr className="admin__course__title">
                <td className="admin__course__id">ID</td>
                <td className="admin__course__img">Hinh</td>
                <td className="admin__course__name">Tên Dự án</td>
                <td className="admin__course__status">trang thai</td>
                <td className="admin__course__manipulation" colSpan="3">
                  thao tac
                </td>
              </tr>
            </thead>
            <tbody>
              {result.dataProject?.map((item) => {
                return (
                  <tr key={item._id}>
                    <td> {item._id}</td>
                    <td className="admin__course__item__img">
                      <img src={item.img} alt="" />
                    </td>

                    <td>{item.title}</td>
                    <td>{item.status}</td>

                    <td>
                      <Link to={`/admin/project/update/${item._id}`}>
                        Update
                      </Link>
                    </td>

                    <td>
                      <Link disabled to={`/admin/project/detail/${item._id}`}>
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

export default Project;
