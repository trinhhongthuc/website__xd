import React from "react";
import { Link } from "react-router-dom";

const NavLeft = () => {
  return (
    <div className="nav__left">
      <Link to="/admin" className="nav__left__heading">
        Admin
      </Link>

      <ul className="nav__left__ul">
        <li className="nav__left__ul__li">
          <Link className="admin__slide__wrapper__add__link" to="/admin/slide/">
            Silde
          </Link>
        </li>

        <li className="nav__left__ul__li">
          <Link to="/admin/course">Khóa học</Link>
        </li>
        <li className="nav__left__ul__li">
          <Link to="/admin/project">Dự án</Link>
        </li>
        <li className="nav__left__ul__li">
          <Link to="/admin/post">Bài Post</Link>
        </li>
        <li className="nav__left__ul__li">
          <Link to="/admin/boxrun">Box run</Link>
        </li>
        <li className="nav__left__ul__li">
          <Link to="/admin/certificate">Chứng chỉ</Link>
        </li>

        <li className="nav__left__ul__li">
          <Link to="/admin/tailieu">Tài liệu</Link>
        </li>

        <li className="nav__left__ul__li">
          <Link to="/admin/tuyendung">Tuyển dụng</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLeft;
