import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import types from "../../../../redux/types";
import { Redirect } from "react-router-dom";

const SlideAdd = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [status, setStatus] = useState("active");

  const onSubmitForm = (e) => {
    e.preventDefault();
    const rs = {
      title: name,
      status: status,
      img: img,
    };

    dispatch({ type: types.SLIDE_ADMIN_ADD_SAGA, payload: rs });
  };

  const { isLoadingAdd } = useSelector((state) => state.slideReducerAdmin);

  return (
    <>
      {isLoadingAdd ? (
        <Redirect to={`/admin/slide`} />
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
              <label htmlFor="">Tên Slide</label>
              <input
                type="text"
                name=""
                id=""
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="slide__add__form__wrapper">
              <label htmlFor="">Image</label>
              <FileBase64
                multiple={false}
                onDone={({ base64 }) => setImg(base64)}
                accept="image/*"
                type="file"
                value={img}
              />
            </div>

            <div className="slide__add__form__wrapper">
              <label htmlFor="">Status</label>
              <select
                name=""
                id=""
                value={status}
                onChange={(e) => setStatus(e.target.value)}
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

export default SlideAdd;
