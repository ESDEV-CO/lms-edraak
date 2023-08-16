import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiGridAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import SideBar from "../Sidebar/SideBar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isMessage, setIsMessage] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar_logo_info">
          <button className="nav_hamburger" onClick={() => setToggle(!toggle)}>
            <GiHamburgerMenu />
          </button>
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
          <button className="primary_btn user_btn">Create New Course</button>
          <button className="user_info_notification">
            <AiOutlineShoppingCart />
          </button>
          <button
            onClick={() => setIsMessage(!isMessage)}
            className="user_info_notification"
          >
            <AiOutlineMail />
          </button>
          <button className="user_info_notification">
            <IoMdNotificationsOutline />
          </button>
          <span className="user_dp">
            <img src={require("../../assets/hd_dp.jpg")} alt="hd_dp" />
          </span>
        </div>
      </div>
      <div>
        <div className="toggle_sidebar">{toggle && <SideBar />}</div>
        {isMessage && (
          <div className="message_toggle">
            <div className="message_toggle_user">
              <span className="toggle_user_img">
                <img src={require("../../assets/img-6.jpg")} alt="img6" />
              </span>
              <span className="toggle_user_info">
                <h6>Zoena Singh</h6>
                <p>
                  Hi! Sir, How are you. I ask you one thing please explain it
                  this video price.
                </p>
                <span>2 min ago</span>
              </span>
            </div>
            <div className="message_toggle_user">
              <span className="toggle_user_img">
                <img src={require("../../assets/img-5.jpg")} alt="img6" />
              </span>
              <span className="toggle_user_info">
                <h6>Joy Dua</h6>
                <p>
                  Hello, I paid you video tutorial but did not play error 404.
                </p>
                <span>10 min ago</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
