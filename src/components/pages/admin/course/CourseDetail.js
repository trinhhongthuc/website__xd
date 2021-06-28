import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import courseAdminApi from "../../../../API/Admin/courseAdminApi";

const CourseDetail = () => {
  const id = useParams().id;
  const [value, setValue] = useState({
    title: "",
    author: "",
    price: "",
    status: "",
    img: "",
    description: "",
    section: [],
    isLoading: true,
  });
  useEffect(() => {
    let data = courseAdminApi.getOneDataCourseAdmin(id);
    data.then((result) => {
      setValue({ ...result.data, isLoading: false });
    });
  }, [id]);

  return (
    <div className="course__add">
      <div className="container">
        <form className="form">
          <div className="row">
            <div className="course__add_display">
              <div className="course__add__heading">Course</div>
            </div>
          </div>
          {value.isLoading ? (
            <h2>loading...</h2>
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
                      value={value?.title}
                      required
                      disabled
                    />
                  </div>
                  <div className="course__add__wrapper__input">
                    <label htmlFor="">Author</label>
                    <input
                      type="text"
                      name="author"
                      id=""
                      placeholder="Author"
                      value={value?.author}
                      required
                      disabled
                    />
                  </div>

                  <div className="course__add__wrapper__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      name="price"
                      id=""
                      placeholder="Price"
                      value={value?.price}
                      required
                      disabled
                    />
                  </div>

                  <div className="course__add__wrapper__input">
                    <label htmlFor="">Section</label>
                  </div>
                  <ul className="course__add__wrapper__input__add__ul">
                    {value.section?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="course__add__wrapper__input__add__ul__li"
                        >
                          <input type="text" disabled defaultValue={item} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="course__add__wrapper">
                  <div className="course__add__wrapper__input">
                    <label htmlFor="">Hinh anh</label>
                    <img src={value.img} alt="" />
                  </div>

                  <div className="course__add__wrapper__input">
                    <label htmlFor="">Status</label>
                    <select
                      name="status"
                      id=""
                      value={value.status}
                      required
                      disabled
                    >
                      <option value="active">Hoạt Động</option>
                      <option value="notActive">Không Hoạt động</option>
                    </select>
                  </div>

                  <div className="course__add__wrapper__textarea">
                    <div className="course__add__wrapper__textarea__mar">
                      <label htmlFor="">Description</label>
                      <CKEditor
                        data={value.description}
                        required
                        editor={ClassicEditor}
                        disabled
                      />
                    </div>
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

export default CourseDetail;
