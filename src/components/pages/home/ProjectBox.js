import React from "react";

const ProjectBox = ({ data }) => {
  return (
    <div className="project__box">
      <div className="project__box__img">
        <img src={data.img} alt="" />
      </div>

      <div className="project__box__title">
        {data.title.length > 30 ? data.title.slice(0, 30) + "..." : data.title}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProjectBox;
