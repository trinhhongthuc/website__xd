import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataSlideAdmin,
  getDeleteDataSlideAdmin,
} from "../../../../redux/actions/action";
import { Link } from "react-router-dom";

const Slide = () => {
  const dispatch = useDispatch();

  const { dataSlider, isLoading } = useSelector(
    (state) => state.slideReducerAdmin
  );

  useEffect(() => {
    dispatch(getDataSlideAdmin());
  }, [dispatch]);

  const onClickDelete = (id) => {
    dispatch(getDeleteDataSlideAdmin(id));
  };

  return (
    <div className="admin">
      <div className="admin__slide__wrapper">
        <h1 className="admin__slide__wrapper__heading">Slide</h1>

        <div className="admin__slide__wrapper__add">
          <Link
            className="admin__slide__wrapper__add__link"
            to="/admin/slide/add"
          >
            Add new Silde
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
              <td className="admin__slide__img">Hinh</td>
              <td className="admin__slide__name">ten slide</td>
              <td className="admin__slide__status">trang thai</td>
              <td className="admin__slide__manipulation" colSpan="2">
                thao tac
              </td>
            </tr>
          </thead>
          <tbody>
            {dataSlider?.map((item) => {
              return (
                <tr key={item._id}>
                  <td> {item._id}</td>
                  <td className="admin__slide__item__img">
                    <img src={item.img} alt="" />
                  </td>

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
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Slide;
