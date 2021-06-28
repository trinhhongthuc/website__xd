import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBoxRuns, getAllBoxRuns } from "redux/actions/action";
// import { deleteBoxRuns, getAllBoxRuns } from "../../../../redux/actions/action";

const BoxRun = () => {
  const dispatch = useDispatch();

  const { isLoading, dataBoxRun } = useSelector(
    (state) => state.boxRunReducerAdmin
  );
  useEffect(() => {
    dispatch(getAllBoxRuns());
  }, [dispatch]);

  const onClickDelete = (id) => {
    dispatch(deleteBoxRuns(id));
  };
  return (
    <div className="admin">
      <div className="admin__slide__wrapper">
        <h1 className="admin__slide__wrapper__heading">Box Run</h1>

        <div className="admin__slide__wrapper__add">
          <Link
            className="admin__slide__wrapper__add__link"
            to="/admin/boxrun/add"
          >
            Add new box run
          </Link>
        </div>
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <table>
          <thead>
            <tr className="admin__slide__title">
              <td className="admin__slide__id">ID</td>
              <td className="admin__slide__img">Number</td>
              <td className="admin__slide__name">ten slide</td>
              <td className="admin__slide__status">trang thai</td>
              <td className="admin__slide__manipulation" colSpan="2">
                thao tac
              </td>
            </tr>
          </thead>
          <tbody>
            {dataBoxRun?.map((item) => {
              return (
                <tr key={item._id}>
                  <td> {item._id}</td>
                  <td className="admin__slide__item__img">{item.number}</td>

                  <td>{item.title}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      onClick={() => {
                        onClickDelete(item._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>

                  <td>
                    <Link to={`/admin/boxrun/update/${item._id}`}>Update</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BoxRun;
