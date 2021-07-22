import courseApi from "API/courseApi";
import DocumentApi from "API/DocumentApi";
import React, { useEffect, useState } from "react";
import BoxDocument from "./BoxDocument";
import BoxReCourse from "./BoxReCourse";

const Document = () => {
  const [course, setCourse] = useState([]);
  const [document, setDocument] = useState([]);

  useEffect(() => {
    try {
      DocumentApi.getAllDocument()
        .then((data) => {
          // console.log(data);
          setDocument(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      courseApi
        .getCourse(5)
        .then((data) => {
          setCourse(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2 className="document-heading">Danh sách tài liệu</h2>
      </div>
      <div className="row">
        <BoxDocument document={document} />

        <BoxReCourse course={course} />
      </div>
    </div>
  );
};

export default Document;
