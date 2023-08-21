import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { CiMobile3 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { LiaCertificateSolid } from "react-icons/lia";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <div className="about">
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
      <div className="about_wrapper">
        <section className="about_header">
          <ul className="about_nav">
            <li>About</li>
            <li>Blog</li>
            <li>Company</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
          <h3>Improving Lives through Learning</h3>
        </section>
        <section className="about_features">
          <h3>Our Features</h3>
          <p>On LMS,you have access to:</p>
          <span className="underline"></span>
          <div className="about_feature_card">
            <div className="feature_card_wrapper">
              <span className="card_logo">
                <CiMobile3 />
              </span>
              <h4>Mobile Learning</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam dolor veniam pariatur
              </p>
            </div>
            <div className="feature_card_wrapper">
              <span className="card_logo">
                <GoPeople />
              </span>
              <h4>Academic & Technical Support</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam dolor veniam pariatur
              </p>
            </div>
            <div className="feature_card_wrapper">
              <span className="card_logo">
                <LiaCertificateSolid />
              </span>
              <h4>Shareable Certificate</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam dolor veniam pariatur
              </p>
            </div>
            <div className="feature_card_wrapper">
              <span className="card_logo">
                <TfiWorld />
              </span>
              <h4>An Inclusive Experience</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam dolor veniam pariatur
              </p>
            </div>
          </div>
        </section>
        <section className="about_story">
          <div className="story_info">
            <h3>Out Story</h3>
            <span className="story_underline"></span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur vel dolor id ultrices. Proin a magna at mi pretium
              pulvinar in eu enim. Nulla vel lacus lectus. Donec at venenatis
              augue. Nam vitae purus placerat, hendrerit nisl id, finibus magna.
              Etiam pharetra gravida ornare. Donec sagittis, ipsum in egestas
              egestas, dui lorem sollicitudin justo, ut ullamcorper velit neque
              eu velit. Ut et fringilla elit. Mauris augue augue, auctor a
              blandit ac, convallis eget neque. Curabitur in ante ante. Nullam
              laoreet tempus erat at ornare. In nisl nisi, dapibus eget
              facilisis sit amet, commodo quis nibh.
            </p>
          </div>
          <div className="story_img">
            <img src={require("../../assets/stroy_img.png")} alt="" />
          </div>
        </section>
        <section className="about_global">
          <h3>Our Global Reach</h3>
          <p className="global_p">
            LMS is the leading global marketplace for teaching and learning,
            connecting millions of students to the skills they need to succeed.
          </p>
          <span className="underline"></span>
          <div className="global_reach_wrapper">
            <div className="global_reach">
              <h1>25K</h1>
              <p>Instructors</p>
            </div>
            <div className="global_reach">
              <h1>95K</h1>
              <p>Courses</p>
            </div>
            <div className="global_reach">
              <h1>40M</h1>
              <p>Course Enrollments</p>
            </div>
            <div className="global_reach">
              <h1>50+</h1>
              <p>Languages</p>
            </div>
            <div className="global_reach">
              <h1>595+</h1>
              <p>Membership Partners</p>
            </div>
            <div className="global_reach">
              <h1>295</h1>
              <p>Countries</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
