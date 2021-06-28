import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FileBase64 from "react-file-base64";
import { updateDataCourseAdmin } from "../../../../redux/actions/action";
import { useSelector } from "react-redux";
import courseAdminApi from "../../../../API/Admin/courseAdminApi";

const CourseUpdate = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.courseReducerAdmin);
  const [loading, setLoading] = useState(true);

  const [value, setValue] = useState({
    title: "",
    author: "",
    price: "",
    status: "",
  });
  const [description, setDescription] = useState("");

  const [dataSection, setDataSection] = useState([]);

  const [section, setSection] = useState("");

  const [hashTag, setHashTag] = useState("");

  const [dataHashTag, setDataHashTag] = useState([]);

  const [img, setImg] = useState(null);

  useEffect(() => {
    courseAdminApi.getOneDataDetailCourseAdmin(id).then((datas) => {
      console.log("day lad data", datas.data);
      setDescription(datas.data.description);
      setDataSection([...datas.data.section]);
      setImg(datas.data.img);
      setDataHashTag(datas.data.hashTag);
      setValue({
        title: datas.data.title,
        author: datas.data.author,
        price: datas.data.price,
        status: datas.data.status,
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

  const onAddSection = (e) => {
    if (section) {
      setDataSection([...dataSection, section]);
      setSection("");
    }
  };

  const onAddHashTag = (e) => {
    if (hashTag) {
      setDataHashTag([...dataHashTag, hashTag]);
      setHashTag("");
    }
  };

  const onSubMitForm = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      img: img,
      author: value.author,
      title: value.title,
      price: Number(value.price),
      description: description,
      section: dataSection,
      status: value.status,
      hashTag: dataHashTag,
    };

    console.log(data);

    dispatch(updateDataCourseAdmin(data));
  };

  const onResetSection = (e) => {
    setDataSection([]);
  };

  const onResetHashTag = (e) => {
    setDataHashTag([]);
  };
  return (
    <>
      {dataState.isLoadingUpdate ? (
        <Redirect to="/admin/course" />
      ) : (
        <div className="course__add">
          {loading ? (
            <h2> Loading...</h2>
          ) : (
            <div className="container">
              <form className="form" onSubmit={(e) => onSubMitForm(e)}>
                <div className="row">
                  <div className="course__add_display">
                    <div className="course__add__heading">Course</div>

                    <button type="submit" className="course__add__addSub">
                      Update Course
                    </button>
                  </div>
                </div>
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

                      <div className="course__add__wrapper__input">
                        <label htmlFor="">Price</label>
                        <input
                          type="number"
                          name="price"
                          id=""
                          placeholder="Price"
                          value={value.price}
                          onChange={(e) => onChangeValue(e)}
                          required
                        />
                      </div>

                      <div className="course__add__wrapper__input">
                        <label htmlFor="">Section</label>
                        <input
                          type="text"
                          name="Section"
                          id=""
                          placeholder="Section"
                          value={section}
                          onChange={(e) => setSection(e.target.value)}
                        />

                        <div
                          className="course__add__wrapper__input__add"
                          onClick={(e) => onAddSection(e)}
                        >
                          Add section
                        </div>

                        <div
                          className="course__add__wrapper__input__add"
                          onClick={(e) => onResetSection(e)}
                        >
                          Reset section
                        </div>
                      </div>
                      <ul className="course__add__wrapper__input__add__ul">
                        {dataSection?.map((item, index) => {
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

                        <FileBase64
                          multiple={false}
                          onDone={({ base64 }) => setImg(base64)}
                          accept="image/*"
                          type="file"
                          value={img}
                          src={img}
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

                      <div className="course__add__wrapper__input">
                        <label htmlFor="">Hash Tag</label>
                        <input
                          type="text"
                          name="hashTag"
                          id=""
                          placeholder="Hash Tag"
                          value={hashTag}
                          onChange={(e) => setHashTag(e.target.value)}
                        />

                        <div
                          className="course__add__wrapper__input__add"
                          onClick={(e) => onAddHashTag(e)}
                        >
                          Add Hash Tag
                        </div>
                        <div
                          className="course__add__wrapper__input__add"
                          onClick={(e) => onResetHashTag(e)}
                        >
                          Reset Hash Tag
                        </div>
                      </div>
                      <ul className="course__add__wrapper__input__add__ul">
                        {dataHashTag?.map((item, index) => {
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

                      <div className="course__add__wrapper__textarea">
                        <div className="course__add__wrapper__textarea__mar">
                          <label htmlFor="">Description</label>
                          <CKEditor
                            data={description}
                            required
                            editor={ClassicEditor}
                            onChange={(event, editor) =>
                              onChangeDes(event, editor)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CourseUpdate;
