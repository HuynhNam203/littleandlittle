import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/logo.png"
const Header = () => {
    <nav>
        <div className="div-header">
            <div>
                <img src={Logo} alt="logo"/>
            </div>
            <div>
                <NavLink to="/"></NavLink>
            </div>
        </div>
    </nav>
}