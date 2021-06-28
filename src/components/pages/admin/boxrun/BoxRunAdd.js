import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoxRuns } from "../../../../redux/actions/action";
import { Redirect } from "react-router-dom";

const BoxRunAdd = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    title: "",
    number: 0,
    status: "active",
  });

  const { isLoadingAdd } = useSelector((state) => state.boxRunReducerAdmin);

  const onChangeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(addBoxRuns(value));
  };

  return (
    <>
      {isLoadingAdd ? (
        <Redirect to="/admin/boxrun" />
      ) : (
        <div className="slide__add">
          <div className="slide__add__wrapper">
            <h2 className="slide__add__wrapper__heading">Slide add</h2>
          </div>

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

            <button type="submit">Add</button>
          </form>
        </div>
      )}
    </>
  );
};

export default BoxRunAdd;
