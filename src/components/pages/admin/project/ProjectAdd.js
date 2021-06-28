import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { addProject } from "../../../../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const ProjectAdd = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    title: "",
    status: "active",
  });

  const { isLoadingAdd } = useSelector((state) => state.projectReducerAdmin);

  const [img, setImg] = useState(null);

  const onChangeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const rs = {
      title: value.title,
      img: img,
      status: value.status,
    };

    dispatch(addProject(rs));
  };

  return (
    <>
      {isLoadingAdd ? (
        <Redirect to={`/admin/project`} />
      ) : (
        <div className="course__add">
          <div className="container">
            <form className="form" onSubmit={(e) => onSubmitForm(e)}>
              <div className="row">
                <div className="course__add_display">
                  <div className="course__add__heading">Project</div>

                  <button type="submit" className="course__add__addSub">
                    Add Project
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="course__add__wrapper">
                    <div className="course__add__wrapper__input">
                      <label htmlFor="">Tile Project</label>
                      <input
                        type="text"
                        name="title"
                        id=""
                        placeholder="Title"
                        value={value.title}
                        onChange={(e) => onChangeValue(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="course__add__wrapper">
                    <div className="course__add__wrapper__input">
                      <label htmlFor="">Hinh anh</label>

                      <FileBase64
                        multiple={false}
                        onDone={({ base64 }) => setImg(base64)}
                        accept="image/*"
                        type="file"
                        value={img}
                        required
                      />
                    </div>

                    <div className="course__add__wrapper__input">
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
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectAdd;
