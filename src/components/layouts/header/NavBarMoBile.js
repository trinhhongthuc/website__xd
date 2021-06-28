import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as LInkScroll } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";

const NavBarMoBile = ({ setNavMobi }) => {
  const onHandleHidden = () => {
    setNavMobi(false);
  };
  return (
    <div className="navbar__mobile">
      <div
        className="navbar__mobile__icon__close"
        onClick={() => setNavMobi(false)}
      >
        <AiOutlineClose />
      </div>
      <nav className="navbar__mobile__navbar">
        <ul className="navbar__mobile__ul">
          <li className="navbar__mobile__ul__li">
            <NavLink
              onClick={() => onHandleHidden()}
              to="/home"
              className="navbar__mobile__ul__li__link"
            >
              Trang Chủ
            </NavLink>
          </li>

          <li className="navbar__mobile__ul__li">
            <NavLink
              onClick={() => onHandleHidden()}
              className="navbar__mobile__ul__li__link"
              path="/khoahoc"
              to="/course"
              duration={200}
            >
              Khóa học
            </NavLink>
          </li>

          <li className="navbar__mobile__ul__li">
            <NavLink
              onClick={() => onHandleHidden()}
              to="/chungchi"
              className="navbar__mobile__ul__li__link"
            >
              Chứng chỉ
            </NavLink>
          </li>

          <li className="navbar__mobile__ul__li">
            <NavLink
              onClick={() => onHandleHidden()}
              to="/dangkykhoahoc"
              className="navbar__mobile__ul__li__link"
            >
              Đăng ký khóa học
            </NavLink>
          </li>

          <li className="navbar__mobile__ul__li">
            <LInkScroll
              className="navbar__mobile__ul__li__link"
              to="contact"
              duration={400}
              onClick={() => onHandleHidden()}
            >
              Liên hệ
            </LInkScroll>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarMoBile;
