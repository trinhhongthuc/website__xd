import React from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <div className="col-xl-6 col-lg-6">
        <label
          className={`accordion-title course__outline__detail__wrapper__label ${
            isOpen ? "open" : ""
          }`}
          onClick={() => setOpen(!isOpen)}
        >
          <h3 className="">{title}</h3>
        </label>
        <div className={` accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <p className=" accordion-content">{children}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
