import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";
import phone from "../../assets/phone.svg"

export const Header = () => {
  return (
    <nav className="header">
      <a href="/"><img src={logo} alt="logo" id="logo"/></a>
      <nav className="nav-pages">
        <ul>
          <li>
            <NavLink to="/" className="link-to">Trang chủ</NavLink>
          </li>
          <li>
            <NavLink to="/Event" className="link-to">Sự kiện</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="link-to">Liên hệ</NavLink>
          </li>
        </ul>
      </nav>
      <div className="hotline">
        <div className="telephone">
        <img src={phone} id="phone"/>
        </div>
        <h1>0123456789</h1>
      </div>
    </nav>
  );
};
