import DocumentApi from "API/DocumentApi";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Ring } from "react-awesome-spinners";

const DocumentAdminDetail = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [value, setValue] = useState({
    title: "",
    link: "",
    dateUpdate: "",
  });

  const [note, setNote] = useState("");
  const id = useParams().id;

  useEffect(() => {
    try {
      DocumentApi.getDocumentById(id).then((data) => {
        if (data && data.success) {
          setNote(data.data.note);
          setValue({
            title: data.data.title,
            link: data.data.link,
          });
          setIsLoading(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {isLoading ? (
        <div style={style}>
          <Ring />
        </div>
      ) : (
        <div className="course__add">
          <div className="container">
            <form className="form">
              <div className="row">
                <div className="course__add_display">
                  <div className="course__add__heading">Tài liệu</div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="course__add__wrapper">
                    <div className="course__add__wrapper__input">
                      <label htmlFor="">Tên tài liệu</label>
                      <input
                        type="text"
                        name="title"
                        id=""
                        placeholder="Enter name document"
                        value={value.title}
                        disabled
                        required
                      />
                    </div>
                  </div>

                  <div className="course__add__wrapper">
                    <div className="course__add__wrapper__input">
                      <label htmlFor="">Chú thích cho tài liệu</label>
                      <CKEditor
                        required
                        data={note}
                        editor={ClassicEditor}
                        disabled
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
                        disabled
                        required
                      />
                    </div>

                    <div className="course__add__wrapper__input">
                      <label htmlFor="">Status</label>
                      <select
                        name="status"
                        id=""
                        value={value.status}
                        disabled
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

export default DocumentAdminDetail;
