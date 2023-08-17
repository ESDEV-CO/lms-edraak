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
  const [isNotification, setIsNotification] = useState(false);

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
          <button
            onClick={() => setIsNotification(!isNotification)}
            className="user_info_notification"
          >
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
          <div className="message_toggle box_shadow">
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
                <img src={require("../../assets/img-5.jpg")} alt="img5" />
              </span>
              <span className="toggle_user_info">
                <h6>Joy Dua</h6>
                <p>
                  Hello, I paid you video tutorial but did not play error 404.
                </p>
                <span>10 min ago</span>
              </span>
            </div>
            <div className="message_toggle_user">
              <span className="toggle_user_img">
                <img src={require("../../assets/img-8.jpg")} alt="img8" />
              </span>
              <span className="toggle_user_info">
                <h6>Jass</h6>
                <p>Thanks Sir, Such a nice video.</p>
                <span>10 min ago</span>
              </span>
            </div>
            <button className="primary_btn drop_down_btn">View All</button>
          </div>
        )}
        {isNotification && (
          <div className="notification_toggle box_shadow">
            <div className="message_toggle_user">
              <span className="toggle_user_img">
                <img src={require("../../assets/img-1.jpg")} alt="img1" />
              </span>
              <span className="toggle_user_info">
                <h6>Rock William</h6>
                <p>
                  Like Your Comment On Video{" "}
                  <strong>How to create sidebar menu</strong>.
                </p>
                <span>2 min ago</span>
              </span>
            </div>
            <div className="message_toggle_user">
              <span className="toggle_user_img">
                <img src={require("../../assets/img-2.jpg")} alt="img2" />
              </span>
              <span className="toggle_user_info">
                <h6>Jassica Smith</h6>
                <p>
                  Added New Review In Video{" "}
                  <strong>Full Stack PHP Developer</strong>.
                </p>
                <span>12 min ago</span>
              </span>
            </div>
            <div className="message_toggle_user">
              <span className="toggle_user_img">
                <img src={require("../../assets/img-9.jpg")} alt="img9" />
              </span>
              <span className="toggle_user_info">
                <p>
                  Your Membership Approved <strong>Upload Video</strong>.
                </p>
                <span>20 min ago</span>
              </span>
            </div>
            <button className="primary_btn drop_down_btn">View All</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
