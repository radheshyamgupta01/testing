import React from "react";
import ReactDOM from "react-dom/client";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Sign from "../Auth/Sign";
import Login from "../Auth/Login";
function Header() {
  return (
    <div className="header">
      <div>
        <h2>logo</h2>
      </div>
      <div>
        {/* <NavLink to="/sign">sign</NavLink>
        <NavLink to="/login">login</NavLink> */}
      <ul className="ul">
        <li>Home</li>
        <li>About</li>
        <li>Sign</li>
        <li>login</li>
      </ul>
      </div>
    </div>
  );
}

export default Header;
