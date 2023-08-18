import React from "react";
import "./CheckOut.css";
import { Link } from "react-router-dom";

const CheckOut = () => {
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
        <span className="user_dp">
          <img src={require("../../assets/hd_dp.jpg")} alt="hd_dp" />
        </span>
      </div>
      <div className="checkout_heading">
        <div className="checkout_heading_nav">
          <h6>Home</h6> <span>/ Shopping Cart</span>
        </div>
        <h4>Shopping Cart</h4>
      </div>
      <div className="cart_container">
        <div className="featured_courses cart_info">
          <img src={require("../../assets/featured2.jpg")} alt="featured_img" />
          <h5>The Web Developer Bootcamp</h5>
          <h6 className="course_views">Web Development | Python</h6>
          <div className="course_author">
            <h6 className="course_views">
              By <strong>John Doe</strong>
            </h6>
            <h5 className="course_price">$10</h5>
          </div>
        </div>
        <div className="cart_bill"></div>
      </div>
    </div>
  );
};

export default CheckOut;
