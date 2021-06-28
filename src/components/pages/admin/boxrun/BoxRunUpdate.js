import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBoxRun } from "../../../../redux/actions/action";
import { Redirect, useParams } from "react-router-dom";
import boxRunAdminApi from "../../../../API/Admin/boxRunAdminApi";

const BoxRunUpdate = () => {
  const id = useParams().id;
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    title: "",
    number: 0,
    status: "active",
  });

  const { isLoadingUpdate } = useSelector((state) => state.boxRunReducerAdmin);

  const onChangeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(updateBoxRun({ ...value, id: id }));
  };

  useEffect(() => {
    boxRunAdminApi.getBoxRunById(id).then((data) => {
      setValue(data.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {isLoadingUpdate ? (
        <Redirect to="/admin/boxrun" />
      ) : (
        <div className="slide__add">
          <div className="slide__add__wrapper">
            <h2 className="slide__add__wrapper__heading">Update</h2>
          </div>
          {loading ? (
            <h2>loading...</h2>
          ) : (
            <form
              method="POST"
              className="slide__add__form"
              onSubmit={(e) => onSubmitForm(e)}
            >
              <div className="slide__add__form__wrapper">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  name="title"
                  id=""
                  required
                  value={value.title}
                  onChange={(e) => onChangeValue(e)}
                />
              </div>
              <div className="slide__add__form__wrapper">
                <label htmlFor="">Number</label>
                <input
                  type="number"
                  name="number"
                  id=""
                  required
                  value={value.number}
                  onChange={(e) => onChangeValue(e)}
                />
              </div>
              <div className="slide__add__form__wrapper">
                <label htmlFor="">Status</label>
                <select
                  name="status"
                  id=""
                  value={value.status}
                  onChange={(e) => onChangeValue(e)}
                  required
                >
                  <option value="active">Hoạt Động</option>
                  <option value="notActive">Không Hoạt động</option>
                </select>
              </div>

              <button type="submit">Update</button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default BoxRunUpdate;
