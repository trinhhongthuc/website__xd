import React, { useState, useEffect } from "react";
import BoxRelate from "./BoxRelate";
import { Ring } from "react-awesome-spinners";
import courseApi from "../../../API/courseApi";

const ListBoxRelate = ({ hashTag, id }) => {
  const [courseRelate, setCourseRelate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    courseApi.getCourseRelated({ hashTag, id }).then((data) => {
      setCourseRelate(data.data);
      setLoading(false);
    });
  }, [hashTag, id]);

  const style = {
    width: "100%",
    height: "20vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const styleEntity = {
    fontSize: "16px",
  };

  return (
    <>
      {loading ? (
        <div style={style}>
          <Ring />
        </div>
      ) : courseRelate.length === 0 ? (
        <p style={styleEntity}>Không có khóa học liên quan</p>
      ) : (
        courseRelate.map((item) => {
          return <BoxRelate key={item._id} data={item} />;
        })
      )}
    </>
  );
};

export default ListBoxRelate;
