import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../../../redux/actions/action";
import { Redirect } from "react-router";
import postAdminApi from "../../../../API/Admin/postAdminApi";
const PostUpdate = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({
    author: "",
    status: "active",
  });

  const { isLoadingUpdate } = useSelector((state) => state.postReducerAdmin);
  const [description, setDescription] = useState("");

  const [img, setImg] = useState(null);

  useEffect(() => {
    postAdminApi.getPostByIdApi(id).then((dataServer) => {
      setDescription(dataServer.data.description);
      setImg(dataServer.data.img);
      setValue({
        author: dataServer.data.author,
        status: dataServer.data.status,
      });
      setLoading(false);
    });
  }, [dispatch, id]);

  const onChangeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onChangeDes = (event, editor) => {
    const data = editor.getData();
    setDescription(data);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const rs = {
      id: id,
      author: value.author,
      status: value.status,
      img: img,
      description: description,
    };

    dispatch(updatePost(rs));
  };

  return (
    <>
      {isLoadingUpdate ? (
        <Redirect to="/admin/post" />
      ) : (
        <div className="course__add">
          <div className="container">
            <form className="form" onSubmit={(e) => onSubmitForm(e)}>
              <div className="row">
                <div className="course__add_display">
                  <div className="course__add__heading">Post</div>

                  <button type="submit" className="course__add__addSub">
                    Add Post
                  </button>
                </div>
              </div>
              {loading ? (
                <h2>loading...</h2>
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
                        <label htmlFor="">Description</label>
                        <CKEditor
                          required
                          data={description}
                          editor={ClassicEditor}
                          onChange={(event, editor) =>
                            onChangeDes(event, editor)
                          }
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

export default PostUpdate;
