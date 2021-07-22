import Recruit from "API/RecruitApi";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

const BoxRecruit = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Recruit.getAllRecruit()
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="col-xl-8 col-lg-8">
      <div className="box-recruit">{ReactHtmlParser(data.note)}</div>
    </div>
  );
};

export default BoxRecruit;
