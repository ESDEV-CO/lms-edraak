import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiGridAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo_info">
        <span className="nav_hamburger">
          <GiHamburgerMenu />
        </span>
        <span className="logo_wrapper">
          <span className="logo_img">
            <img src={require("../../assets/logo.png")} alt="logo" />
          </span>
          <h2>LMS</h2>
        </span>
        <span className="nav_category">
          <BiGridAlt />
        </span>
      </div>
      <div className="navbar_search"></div>
      <div className="navbar_user_info"></div>
    </div>
  );
};

export default Navbar;
