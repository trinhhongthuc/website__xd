import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";
import postAdminApi from "../../../../API/Admin/postAdminApi";
const PostDetail = () => {
  const id = useParams().id;
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(null);

  useEffect(() => {
    postAdminApi.getPostByIdApi(id).then((dataServer) => {
      setValue(dataServer.data);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <>
      <div className="course__add">
        <div className="container">
          <form className="form">
            <div className="row">
              <div className="course__add_display">
                <div className="course__add__heading">Project</div>
              </div>
            </div>
            {isLoading ? (
              <h2>Loading...</h2>
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
                        disabled
                      />
                    </div>
                  </div>

                  <div className="course__add__wrapper">
                    <div className="course__add__wrapper__input">
                      <label htmlFor="">Tile Project</label>
                      <CKEditor
                        required
                        data={value.description}
                        editor={ClassicEditor}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="course__add__wrapper">
                    <div className="course__add__wrapper__input">
                      <label htmlFor="">Hinh anh</label>
                      <img src={value.img} alt="" disabled />
                    </div>

                    <div className="course__add__wrapper__input">
                      <label htmlFor="">Status</label>
                      <select name="status" id="" value={value.status} disabled>
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
    </>
  );
};

export default PostDetail;
