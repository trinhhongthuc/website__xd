import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getAllPost } from "../../../../redux/actions/action.js";

const Post = () => {
  const dispatch = useDispatch();

  const { isLoading, dataPost } = useSelector(
    (state) => state.postReducerAdmin
  );

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  const onClickDelete = (id) => {
    dispatch(deletePost(id));
  };
  return (
    <>
      <div className="admin">
        <div className="admin__course__wrapper">
          <h1 className="admin__course__wrapper__heading">Bài Post</h1>

          <div className="admin__course__wrapper__add">
            <Link
              className="admin__course__wrapper__add__link"
              to="/admin/post/add"
            >
              Add new Post
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
                <td className="admin__course__name">Author</td>
                <td className="admin__course__status">Trạng Thái</td>
                <td className="admin__course__manipulation" colSpan="3">
                  Thao tác
                </td>
              </tr>
            </thead>
            <tbody>
              {dataPost?.map((item) => {
                return (
                  <tr key={item._id}>
                    <td> {item._id}</td>
                    <td className="admin__course__item__img">
                      <img src={item.img} alt="" />
                    </td>

                    <td>{item.author}</td>
                    <td>{item.status}</td>

                    <td>
                      <Link to={`/admin/post/update/${item._id}`}>Update</Link>
                    </td>

                    <td>
                      <Link disabled to={`/admin/post/detail/${item._id}`}>
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

export default Post;
