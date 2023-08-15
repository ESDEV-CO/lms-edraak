import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiGridAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo_info">
        <div className="nav_hamburger">
          <GiHamburgerMenu />
        </div>
        <div className="logo_wrapper">
          <div className="logo_img">
            <img src={require("../../assets/logo.png")} alt="logo" />
          </div>
          <span className="logo_name">LMS</span>
        </div>
        <div className="nav_category">
          <BiGridAlt />
        </div>
      </div>
      <div className="navbar_search">
        <span className="search_logo">
          <BsSearch />
        </span>
        <input
          type="text"
          placeholder="Search for Tuts Videos, Tutors, Tests and more.."
        />
      </div>
      <div className="navbar_user_info">
        <button className="user_btn">Create New Course</button>
        <span className="user_info_notification">
          <AiOutlineShoppingCart />
        </span>
        <span className="user_info_notification">
          <AiOutlineMail />
        </span>
        <span className="user_info_notification">
          <IoMdNotificationsOutline />
        </span>
        <span className="user_dp">
          <img src={require("../../assets/hd_dp.jpg")} alt="hd_dp" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
