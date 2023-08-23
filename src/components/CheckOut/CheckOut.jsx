import React, { useState } from "react";
import "./CheckOut.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { TbCircleCheck } from "react-icons/tb";
import { FiMoon } from "react-icons/fi";
import Toggle from "../Toggle/Toggle";

const CheckOut = () => {
  const [isUser, setIsUser] = useState(false);

  return (
    <div className="checkout ">
      <div className="checkout_nav box_shadow ">
        <Link to={"/"} className="primary_btn checkout_nav_btn">
          Back To LMS
        </Link>
        <div className="logo_wrapper">
          <div className="logo_img">
            <img src={require("../../assets/logo.png")} alt="logo" />
          </div>
          <Link to={"/"} className="logo_name">
            LMS
          </Link>
        </div>
        <button onClick={() => setIsUser(!isUser)} className="user_dp">
          <img src={require("../../assets/hd_dp.jpg")} alt="hd_dp" />
        </button>
      </div>
      <div className="checkout_heading">
        <div className="checkout_heading_nav">
          <h5>Home</h5> <h6>/ Shopping Cart</h6>
        </div>
        <h4>Shopping Cart</h4>
      </div>
      <div className="cart_container">
        <div className="featured_courses cart_info box_shadow">
          <img src={require("../../assets/featured2.jpg")} alt="featured_img" />
          <div className="cart_info_data">
            <h5>The Web Developer Bootcamp</h5>
            <h6 className="course_views">Web Development | Python</h6>
            <div className="course_author">
              <h6 className="course_views">
                By <strong>John Doe</strong>
              </h6>
              <h5 className="course_price">$10</h5>
            </div>
            <span className="cart_cross_btn">
              <AiOutlineClose />
            </span>
          </div>
        </div>
        <div className="cart_bill box_shadow">
          <h4>Total</h4>
          <div className="cart_bill_detail">
            <h5>Original Price</h5>
            <h6 className="fade">$15</h6>
          </div>
          <div className="cart_bill_detail">
            <h5 className="fade">Discounted Price</h5>
            <h6 className="fade">$5</h6>
          </div>
          <div className="cart_bill_detail">
            <h3>Total Price</h3>
            <h3>$10</h3>
          </div>
          <p>Learn now is applied.</p>
          <div className=" cart_coupon">
            <input type="text" placeholder="Enter Coupon Code" />
            <button className="primary_btn">Apply</button>
          </div>
          <button className="primary_btn checkout_btn">Checkout Now</button>
        </div>
      </div>
      {isUser && (
        <div className="user_toggle box_shadow check_out_user">
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
            <h6 className="user_toggle_link">Sign Out</h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
