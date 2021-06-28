import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import NavBarMoBile from "./NavBarMoBile";

const HeaderMobi = () => {
  const [navMobi, setNavMobi] = useState(false);
  const hiddenNavMobi = () => {
    setNavMobi(true);
  };
  return (
    <>
      <div className="header__mobi">
        <div className="header__mobi__logo">
          <Link to="/home" className="header__logo__link">
            Imodel<span>.</span>vn
          </Link>
        </div>

        <div className="header__mobi_icon" onClick={() => hiddenNavMobi()}>
          <MdMenu />
        </div>
      </div>

      {navMobi ? <NavBarMoBile setNavMobi={setNavMobi} /> : ""}
    </>
  );
};

export default HeaderMobi;
