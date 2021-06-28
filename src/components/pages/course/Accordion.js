import React from "react";
import { FaBookOpen } from "react-icons/fa";

const Accordion = ({ title, children }) => {
  return (
    <>
      <label className={`accordion-title  `}>
        <p className="courses__detail__left__section">
          <span className="courses__detail__left__section__icon">
            <FaBookOpen />
          </span>
          <span className="courses__detail__left__section__title">{title}</span>
        </p>
      </label>
    </>
  );
};

export default Accordion;
