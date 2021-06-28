import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProjectDetail = () => {
  const id = useParams().id;
  const dispatch = useDispatch();

  const stateDetails = useSelector((state) => state.projectReducerAdmin);

  useEffect(() => {
    dispatch({ type: "DETAIL_PROJECT_ADMIN_SAGA", payload: id });
  }, [dispatch, id]);

  return (
    <div className="course__add">
      <div className="container">
        <form className="form">
          <div className="row">
            <div className="course__add_display">
              <div className="course__add__heading">Project</div>

              <button type="submit" className="course__add__addSub">
                Add Project
              </button>
            </div>
          </div>

          {stateDetails.isLoading ? (
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
                      value={stateDetails.detailProject.title}
                      disabled
                    />
                  </div>
                </div>

                <div className="course__add__wrapper">
                  <div className="course__add__wrapper__input">
                    <label htmlFor="">Hinh anh</label>

                    <img disabled src={stateDetails.detailProject.img} alt="" />
                  </div>

                  <div className="course__add__wrapper__input">
                    <label htmlFor="">Status</label>
                    <select
                      name="status"
                      id=""
                      value={stateDetails.detailProject.status}
                      disabled
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
  );
};

export default ProjectDetail;
