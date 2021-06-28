import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FileBase64 from "react-file-base64";
import { addCertificateAdmin } from "../../../../redux/actions/action";
const CertificateAdd = () => {
  const { isLoadingAdd } = useSelector(
    (state) => state.certificateReducerAdmin
  );
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

    dispatch(addCertificateAdmin(rs));
  };

  return (
    <>
      {isLoadingAdd ? (
        <Redirect to={`/admin/certificate`} />
      ) : (
        <div className="slide__add">
          <div className="slide__add__wrapper">
            <h2 className="slide__add__wrapper__heading">Thêm chứng chỉ </h2>
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
                required
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

export default CertificateAdd;
