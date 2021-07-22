import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { AiFillSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import jwt_decode from "jwt-decode";
import ChangePassword from "./changePasswrod/ChangePassword";

const NavTop = () => {
  const history = useHistory();
  const [hiddenSettings, setHiddenSettings] = useState(false);
  const [username, setUsername] = useState("");
  const [hiddenModel, setHiddenModel] = useState(false);

  const onClickHiddenSetting = useCallback(() => {
    setHiddenSettings(!hiddenSettings);
  }, [hiddenSettings]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const data = jwt_decode(token);
    setUsername(data.username);
  }, []);

  const onClickLogOut = useCallback(() => {
    sessionStorage.clear("token");
    history.push("/login");
  }, [history]);

  const onClickPassword = useCallback(() => {
    setHiddenModel(true);
  }, []);

  return (
    <>
      <div className="nav">
        <div className="nav__logo">{username}</div>
        <div className="nav__wrapper">
          <div className="nav__wrapper__notify">
            <IoMdNotificationsOutline />
          </div>

          <div
            className="nav__wrapper__setting"
            onClick={() => onClickHiddenSetting()}
          >
            <AiFillSetting />
            {hiddenSettings ? (
              <ul className="nav__wrapper__setting__ul">
                <li
                  className="nav__wrapper__setting__ul__li"
                  onClick={() => onClickPassword()}
                >
                  Đổi mật khẩu
                </li>
                <li
                  className="nav__wrapper__setting__ul__li"
                  onClick={() => onClickLogOut()}
                >
                  Logout
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {hiddenModel ? <ChangePassword setHiddenModel={setHiddenModel} /> : ""}
    </>
  );
};

export default NavTop;
