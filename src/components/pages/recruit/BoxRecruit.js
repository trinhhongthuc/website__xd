import RecruitApi from "API/RecruitApi";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

const BoxRecruit = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    RecruitApi.getAllRecruit()
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="col-xl-8 col-lg-8">
      <div className="box-recruit">
        {data ? (
          ReactHtmlParser(data.note)
        ) : (
          <h2>Không có thông tin tuyển dụng</h2>
        )}
      </div>
    </div>
  );
};

export default BoxRecruit;
