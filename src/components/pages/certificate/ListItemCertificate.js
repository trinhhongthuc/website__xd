import React, { useState } from "react";
import { useSelector } from "react-redux";
import certificateApi from "../../../API/certificateApi";
import DisplayOneImg from "./DisplayOneImg.js";
import { Ring } from "react-awesome-spinners";

const ListItemCertificate = ({ setHiddenListBox }) => {
  const [oneImg, setOneImg] = useState({});
  const [hiddenOneImg, setHiddenOneImg] = useState(false);
  const [loadingOneImg, setLoadingOneImg] = useState(false);
  const hiddenOverlay = (e) => {
    if (
      e.target.className === "list__certificate__overlay" ||
      e.target.className === "list__certificate__box"
    ) {
      setHiddenListBox(false);
    }
  };

  const { dataCertificates } = useSelector((state) => state.certificateReducer);

  const onClickImg = async (id) => {
    setLoadingOneImg(true);
    const Img = await certificateApi.getCertificateById(id);
    setOneImg(Img.data);
    setHiddenOneImg(true);
    setLoadingOneImg(false);
  };

  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    position: "relative",
    zIndex: 10000000,
  };

  return (
    <div
      className="list__certificate__overlay"
      onClick={(e) => hiddenOverlay(e)}
    >
      <div className="list__certificate__box">
        <div className="list__certificate__wrapper">
          {dataCertificates.map((item) => {
            return (
              <div className="list__certificate__wrapper__img" key={item._id}>
                <img
                  src={item.img}
                  alt="img"
                  onClick={(e) => onClickImg(item._id)}
                />
              </div>
            );
          })}
        </div>
        {loadingOneImg ? (
          <div style={style}>
            <Ring />
          </div>
        ) : hiddenOneImg ? (
          <DisplayOneImg setHiddenOneImg={setHiddenOneImg} data={oneImg} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ListItemCertificate;
