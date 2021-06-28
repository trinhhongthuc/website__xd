import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const FormAnimation = ({ title, setHiddenNotify }) => {
  const onClickHidden = () => {
    setHiddenNotify(false);
  };

  return (
    <div className="form__animation">
      <p className="form__animation__title">{title}</p>
      <span className="form__animation__icon" onClick={() => onClickHidden()}>
        <AiOutlineClose />
      </span>
    </div>
  );
};

export default FormAnimation;
