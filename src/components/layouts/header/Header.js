import React, { useEffect, useState } from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import { Link as LInkScroll } from "react-scroll";
const Header = () => {
  const [hidden, setHidden] = useState(false);
  const history = useHistory();

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (scroll > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const header = () => {
    if (!hidden) {
      return (
        <div className="header" id="header">
          <div className="header__logo">
            <Link to="/home" className="header__logo__link">
              Imodel<span>.</span>vn
            </Link>
          </div>
          <nav className="header__navbar">
            <ul className="navbar__ul">
              <li className="navbar__ul__li">
                <NavLink to="/home" className="navbar__ul__li__link">
                  Trang Chủ
                </NavLink>
              </li>

              <li className="navbar__ul__li">
                <LInkScroll
                  className="navbar__ul__li__link"
                  activeClass="active"
                  path="/khoahoc"
                  to="course"
                  duration={200}
                >
                  Khóa học
                </LInkScroll>
              </li>

              <li className="navbar__ul__li">
                <NavLink to="dynamo" className="navbar__ul__li__link">
                  Dynamo
                </NavLink>
              </li>

              <li className="navbar__ul__li">
                <NavLink to="/chungchi" className="navbar__ul__li__link">
                  Chứng chỉ
                </NavLink>
              </li>

              <li className="navbar__ul__li">
                <NavLink to="/dangkykhoahoc" className="navbar__ul__li__link">
                  Đăng ký khóa học
                </NavLink>
              </li>

              <li className="navbar__ul__li">
                <LInkScroll
                  className="navbar__ul__li__link"
                  activeClass="active"
                  to="contact"
                  duration={400}
                >
                  Liên hệ
                </LInkScroll>
              </li>
            </ul>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="header-scroll">
          <div className="header__logo">
            <Link to="/" className="header__logo__link">
              Imodel<span>.</span>vn
            </Link>
          </div>
          <nav className="header__navbar">
            <ul className="navbar__ul">
              <li className="navbar__ul__li">
                <NavLink to="/home" className="navbar__ul__li__link">
                  Trang Chủ
                </NavLink>
              </li>

              <li className="navbar__ul__li">
                <LInkScroll
                  className="navbar__ul__li__link"
                  activeClass="active"
                  to="course"
                  duration={200}
                >
                  Khóa học
                </LInkScroll>
              </li>

              <li className="navbar__ul__li">
                <NavLink to="dynamo" className="navbar__ul__li__link">
                  Dynamo
                </NavLink>
              </li>

              <li className="navbar__ul__li">
                <NavLink to="/chungchi" className="navbar__ul__li__link">
                  Chứng chỉ
                </NavLink>
              </li>

              <li className="navbar__ul__li">
                <NavLink to="/dangkykhoahoc" className="navbar__ul__li__link">
                  Đăng ký khóa học
                </NavLink>
              </li>

              <li className="navbar__ul__li">
                <LInkScroll
                  className="navbar__ul__li__link"
                  activeClass="active"
                  to="contact"
                  duration={400}
                >
                  Liên hệ
                </LInkScroll>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  };

  return <>{header()}</>;
};

export default Header;
