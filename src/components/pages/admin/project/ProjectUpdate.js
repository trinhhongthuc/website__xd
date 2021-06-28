import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { projectUpdate } from "../../../../redux/actions/action";
import { useParams, Redirect } from "react-router-dom";
import projectAdminApi from "../../../../API/Admin/projectAdminApi";

const ProjectUpdate = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState({
    title: "",
    status: "",
  });

  const { isLoadingUpdate } = useSelector((state) => state.projectReducerAdmin);

  const [img, setImg] = useState(null);

  const onChangeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    projectAdminApi.getDetailProjectById(id).then((data) => {
      setImg(data.data.img);
      setValue({
        title: data.data.title,
        status: data.data.status,
      });
      setIsLoading(false);
    });
  }, [dispatch, id]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const rs = {
      id: id,
      title: value.title,
      status: value.status,
      img: img,
    };
    dispatch(projectUpdate(rs));
  };

  return (
    <>
      {isLoadingUpdate ? (
        <Redirect to="/admin/project" />
      ) : (
        <div className="course__add">
          <div className="container">
            <form className="form" onSubmit={(e) => onSubmitForm(e)}>
              <div className="row">
                <div className="course__add_display">
                  <div className="course__add__heading">Project</div>

                  <button type="submit" className="course__add__addSub">
                    Update Project
                  </button>
                </div>
              </div>
              {isLoading ? (
                <div>loading...</div>
              ) : (
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="course__add__wrapper">
                      <div className="course__add__wrapper__input">
                        <label htmlFor="">Tile course</label>
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

                        <img src={img} alt="" />
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
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectUpdate;
