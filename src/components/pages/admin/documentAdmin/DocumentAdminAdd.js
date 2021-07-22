import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DocumentApi from "API/DocumentApi";

const DocumentAdminAdd = () => {
  const history = useHistory();
  const [value, setValue] = useState({
    nameDocument: "",
    link: "",
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

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const rs = {
        title: value.nameDocument,
        link: value.link,
        status: value.status,
        note: description,
      };

      DocumentApi.addNewDocument(rs)
        .then((data) => {
          if (data.success) {
            history.push("/admin/tailieu");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
                  <label htmlFor="">Tên tài liệu</label>
                  <input
                    type="text"
                    name="nameDocument"
                    id=""
                    placeholder="Enter name document"
                    value={value.nameDocument}
                    onChange={(e) => onChangeValue(e)}
                    required
                  />
                </div>
              </div>

              <div className="course__add__wrapper">
                <div className="course__add__wrapper__input">
                  <label htmlFor="">Chú thích cho tài liệu</label>
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
                  <label htmlFor="">Link dowload tài liệu</label>
                  <input
                    type="text"
                    name="link"
                    id=""
                    placeholder="Link dowload tài liệu"
                    value={value.link}
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

export default DocumentAdminAdd;
