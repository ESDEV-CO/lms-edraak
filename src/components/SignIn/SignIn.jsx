import React from "react";
import "./SignIn.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const SignIn = () => {
  return (
    <div className="signin">
      <div className="logo_wrapper">
        <div className="logo_img">
          <img src={require("../../assets/logo.png")} alt="logo" />
        </div>
        <span className="logo_name">LMS</span>
      </div>
      <div className="sigin_container box_shadow">
        <h3>Welcome Back</h3>
        <p>Log In to Your Edututs+ Account!</p>

        <button
          className="signin_btn"
          style={{ color: "white", background: "#3B5998" }}
        >
          <FaFacebookF /> Continue with Facebook
        </button>
        <button
          className="signin_btn"
          style={{ color: "white", background: "#1DA1F2" }}
        >
          <AiOutlineTwitter /> Continue with Twitter
        </button>
        <button
          className="signin_btn"
          style={{ color: "white", background: "#34A853" }}
        >
          <BsGoogle /> Continue with Google
        </button>
        <div className="signin_form">
          <AiOutlineMail />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="signin_form">
          <RiLockPasswordLine />
          <input type="password" placeholder="Password" />
        </div>
        <div className="remember_me">
          <input type="radio" />
          <p>Remember Me</p>
        </div>
        <button className="primary_btn signin_btn">Sign In</button>

        <div className="forgot_password">
          <p>Or </p>
          <h6>Forgot Password.</h6>
        </div>
        <div className="signin_signup forgot_password">
          <p>Dont have a account</p> <h6>Sign Up.</h6>
        </div>
      </div>
      <div className="signin_rights">
        <img src={require("../../assets/logo.png")} alt="logo" />
        <p>
          © 2020 <strong>LMS</strong>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
