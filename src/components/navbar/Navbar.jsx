import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  let { pathname } = useLocation();
  let isLogin = localStorage.getItem("x-auth-token");

  if (pathname.includes("register") || pathname.includes("admin")) {
    return <></>;
  }

  return (
    <header className="header">
      <div className="container header__container">
        <h2>Logo</h2>
        <NavLink className="header__link" to={"/"}>
          Home
        </NavLink>
        <NavLink
          className="header__link "
          to={isLogin ? "/admin/manageProduct" : "/register"}
        >
          {isLogin ? "Account" : "Login"}
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
