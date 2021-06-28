import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../../redux/actions/action";
import { Redirect } from "react-router-dom";

const PostAdd = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    author: "",
    status: "active",
  });

  const { isLoadingAddPost } = useSelector((state) => state.postReducerAdmin);

  const [description, setDescription] = useState("");

  const [img, setImg] = useState(null);

  const onChangeDes = (event, editor) => {
    const data = editor.getData();
    setDescription(data);
  };

  const onChangeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const rs = {
      author: value.author,
      description: description,
      img: img,
      status: value.status,
    };

    dispatch(addPost(rs));
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

          {isLoadingAddPost ? (
            <Redirect to="/admin/post" />
          ) : (
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="course__add__wrapper">
                  <div className="course__add__wrapper__input">
                    <label htmlFor="">Author</label>
                    <input
                      type="text"
                      name="author"
                      id=""
                      placeholder="Author"
                      value={value.author}
                      onChange={(e) => onChangeValue(e)}
                      required
                    />
                  </div>
                </div>

                <div className="course__add__wrapper">
                  <div className="course__add__wrapper__input">
                    <label htmlFor="">Tile Project</label>
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
          )}
        </form>
      </div>
    </div>
  );
};

export default PostAdd;
