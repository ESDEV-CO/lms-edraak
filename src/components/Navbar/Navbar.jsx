import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import SideBar from "../Sidebar/SideBar";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { BiGridAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbCircleCheck } from "react-icons/tb";
import { FiMoon } from "react-icons/fi";
import Toggle from "../Toggle/Toggle";
import DashSideBar from "../DashSideBar/DashSideBar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isUser, setIsUser] = useState(false);
  // console.log(
  //   "url :::",
  //   window.location?.pathname.split("/").includes("dashboard")
  // );
  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsMessage(false);
      setIsNotification(false);
      setIsUser(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={navbarRef} className="navbar">
        <div className="navbar_logo_info">
          <button className="nav_hamburger" onClick={() => setToggle(!toggle)}>
            <GiHamburgerMenu />
          </button>
          <div className="logo_wrapper">
            <div className="logo_img">
              <img src={require("../../assets/logo.png")} alt="logo" />
            </div>
            <Link to={"/"} className="logo_name">
              LMS
            </Link>
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
          <Link to={"/dashboard/create-course"} className="primary_btn user_btn">Create New Course</Link>
          <Link to={"/checkout"} className="user_info_notification">
            <AiOutlineShoppingCart />
          </Link>
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
          <button onClick={() => setIsUser(!isUser)} className="user_dp">
            <img src={require("../../assets/hd_dp.jpg")} alt="hd_dp" />
          </button>
        </div>
      </div>
      <div>
        {window.location?.pathname.split("/").includes("dashboard") ? (
          <div className="toggle_sidebar dash_side_toggle">
            {toggle && <DashSideBar />}
          </div>
        ) : (
          <div className="toggle_sidebar">{toggle && <SideBar />}</div>
        )}
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
        {isUser && (
          <div className="user_toggle box_shadow">
            <div className="user_toggle_info">
              <img
                src={require("../../assets/img-17.jpg")}
                alt="instructor_img"
              />
              <div className="user_info_wrapper">
                <span className="instructor_info">
                  <h6>Joginder Singh</h6>
                  <span>
                    <TbCircleCheck />
                  </span>
                </span>
                <p>gambol943@gmail.com</p>
              </div>
            </div>
            <h5>view Instructor Profile</h5>
            <div className="night_mode">
              <span className="night_mode_moon">
                <FiMoon />
              </span>
              <h6>Night Mode</h6>
              <span className="night_mode_switch">
                <Toggle />
              </span>
            </div>
            <div className="night_mode_list">
              <Link to={"/dashboard"} className="user_toggle_link">
                LMS Dashboard
              </Link>
              <h6 className="user_toggle_link">Paid Members</h6>
              <h6 className="user_toggle_link">Setting</h6>
              <h6 className="user_toggle_link">Help</h6>
              <h6 className="user_toggle_link">Send Feedback</h6>
              <h6 className="user_toggle_link">Sign Out</h6>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
