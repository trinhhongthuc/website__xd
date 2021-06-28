import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";
import { addDataCourseAdmin } from "../../../../redux/actions/action";
import { Redirect } from "react-router-dom";
const CourseAdd = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    title: "",
    author: "",
    price: "",
    status: "active",
  });
  const [dataSection, setDataSection] = useState([]);

  const [section, setSection] = useState("");

  const [hashTag, setHashTag] = useState("");

  const [dataHashTag, setDataHashTag] = useState([]);

  const [des, setDes] = useState("");

  const [img, setImg] = useState(null);

  const { isLoadingAdd } = useSelector((state) => state.courseReducerAdmin);

  const onChangeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onChangeDes = (event, editor) => {
    const data = editor.getData();
    setDes(data);
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
      img: img,
      author: value.author,
      title: value.title,
      price: Number(value.price),
      description: des,
      section: dataSection,
      status: value.status,
      hashTag: dataHashTag,
    };
    dispatch(addDataCourseAdmin(data));
  };
  return (
    <>
      {isLoadingAdd ? (
        <Redirect to={`/admin/course/`} />
      ) : (
        <div className="course__add">
          <div className="container">
            <form className="form" onSubmit={(e) => onSubMitForm(e)}>
              <div className="row">
                <div className="course__add_display">
                  <div className="course__add__heading">Course</div>

                  <button type="submit" className="course__add__addSub">
                    Add Course
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
        </div>
      )}
    </>
  );
};

export default CourseAdd;
