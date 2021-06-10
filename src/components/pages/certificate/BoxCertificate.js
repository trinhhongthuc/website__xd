import React from "react";

const BoxCertificate = ({ img }) => {
  return (
    <div className="col-xl-6 col-lg-6">
      <div className="template__certificate__wrapper">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default BoxCertificate;
