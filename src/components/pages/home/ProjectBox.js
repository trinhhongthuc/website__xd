import React from "react";
import projectImg from "../../image/project.jpg";

const ProjectBox = () => {
  return (
    <div className="col-xl-3 col-lg-3">
      <div className="project__box">
        <div className="project__box__img">
          <img src={projectImg} alt="" />
        </div>

        <div className="project__box__title">Nha cao tang - ket cau</div>
      </div>
    </div>
  );
};

export default ProjectBox;
