import DocumentApi from "API/DocumentApi";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Ring } from "react-awesome-spinners";

const DocumentAdminUpdate = () => {
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
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

  const onChangeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onChangeNote = (event, editor) => {
    const data = editor.getData();
    setNote(data);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const rs = {
      id: id,
      title: value.title,
      link: value.link,
      note: note,
    };

    DocumentApi.updateDocumentById(rs)
      .then((data) => {
        if (data && data.success) {
          history.push("/admin/tailieu");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
            <form className="form" onSubmit={(e) => onSubmitForm(e)}>
              <div className="row">
                <div className="course__add_display">
                  <div className="course__add__heading">T??i li???u</div>
                  <button type="submit" className="course__add__addSub">
                    Update tai lieu
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="course__add__wrapper">
                    <div className="course__add__wrapper__input">
                      <label htmlFor="">T??n t??i li???u</label>
                      <input
                        type="text"
                        name="title"
                        id=""
                        placeholder="Enter name document"
                        value={value.title}
                        onChange={(e) => onChangeValue(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="course__add__wrapper">
                    <div className="course__add__wrapper__input">
                      <label htmlFor="">Ch?? th??ch cho t??i li???u</label>
                      <CKEditor
                        required
                        data={note}
                        editor={ClassicEditor}
                        onChange={(event, editor) =>
                          onChangeNote(event, editor)
                        }
                      />
                    </div>
                  </div>

                  <div className="course__add__wrapper">
                    <div className="course__add__wrapper__input">
                      <label htmlFor="">Link dowload t??i li???u</label>
                      <input
                        type="text"
                        name="link"
                        id=""
                        placeholder="Link dowload t??i li???u"
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
                        <option value="active">Ho???t ?????ng</option>
                        <option value="notActive">Kh??ng Ho???t ?????ng</option>
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

export default DocumentAdminUpdate;
