import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signin">
      <div className="logo_wrapper">
        <div className="logo_img">
          <img src={require("../../assets/logo.png")} alt="logo" />
        </div>
        <Link to={"/"} className="logo_name">
          LMS
        </Link>
      </div>
      <div className="sigin_container box_shadow">
        <h4>Welcome to LMS</h4>
        <p>Sign Up and Start Learning!</p>
        <div className="signin_form">
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="signin_form">
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="signin_form">
          <input type="password" placeholder="Password" />
        </div>
        <div className="remember_me">
          <input type="radio" />
          <p>
            I’m in for emails with exciting discounts and personalized
            recommendations
          </p>
        </div>
        <button className="primary_btn signin_btn">Sign In</button>

        <div className="forgot_password">
          <p>By signing up, you agree to our </p>
          <h6>Terms of Use</h6> <p>and</p> <h6>Privacy Policy.</h6>
        </div>
        <div className="signin_signup forgot_password">
          <p>Already have a account?</p>{" "}
          <Link className="signin_options" to={"/signin"}>
            Log In.
          </Link>
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

export default SignUp;
