import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import RecruitApi from "API/RecruitApi";
import { useHistory } from "react-router-dom";

const RecruitAdminAdd = () => {
  const history = useHistory();
  const [value, setValue] = useState({
    title: "",
    author: "",
    status: "active",
  });

  const [description, setDescription] = useState("");

  const onChangeDes = (event, editor) => {
    const data = editor.getData();
    setDescription(data);
  };

  const onChangeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    // console.log({ ...value, note: description });

    RecruitApi.addNewRecruit({ ...value, note: description })
      .then((data) => {
        if (data && data.success) {
          history.push("/admin/tuyendung");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="course__add">
      <div className="container">
        <form className="form" onSubmit={(e) => onSubmitForm(e)}>
          <div className="row">
            <div className="course__add_display">
              <div className="course__add__heading">Tuyển Dụng</div>
              <button type="submit" className="course__add__addSub">
                Add Project
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="course__add__wrapper">
                <div className="course__add__wrapper__input">
                  <label htmlFor="">Tiêu đề</label>
                  <input
                    type="text"
                    name="title"
                    id=""
                    placeholder="Enter tiêu đề"
                    value={value.title}
                    onChange={(e) => onChangeValue(e)}
                    required
                  />
                </div>
              </div>

              <div className="course__add__wrapper">
                <div className="course__add__wrapper__input">
                  <label htmlFor="">Thông tin tuyển dụng</label>
                  <CKEditor
                    required
                    data={description}
                    editor={ClassicEditor}
                    onChange={(event, editor) => onChangeDes(event, editor)}
                  />
                </div>
              </div>

              <div className="course__add__wrapper">
                <div className="course__add__wrapper__input">
                  <label htmlFor="">Tác giả</label>
                  <input
                    type="text"
                    name="author"
                    id=""
                    placeholder="Tác giả"
                    value={value.author}
                    onChange={(e) => onChangeValue(e)}
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
  );
};

export default RecruitAdminAdd;
