import React from "react";
import "./CourseDetail.css";
import { AiOutlineStar } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { MdClosedCaptionOff } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { MdReportGmailerrorred } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";

const CourseDetail = () => {
  return (
    <div className="course_detail">
      <section className="course_header">
        <div className="course_header_img">
          <img src={require("../../assets/featured2.jpg")} alt="feature" />
          <div className="course_save_wrapper">
            <span className="save">
              <AiOutlineHeart /> Save
            </span>
            <span className="save">
              <MdReportGmailerrorred /> Report Abuse
            </span>
          </div>
        </div>
        <div className="course_header_info">
          <h4>The Web Developer Bootcamp</h4>
          <p>
            The only course you need to learn web development - HTML, CSS, JS,
            Node, and More!
          </p>
          <div className="course_rating">
            <span className="rating">
              <AiOutlineStar /> 4.5
            </span>
            <p>(81,665 Ratings)</p>
          </div>
          <p>114,521 students enrolled</p>
          <div className="course_language">
            <div className="language">
              <BiMessageRounded /> English
            </div>
            <div className="language">
              <MdClosedCaptionOff /> English,Dutch 12 more
            </div>
          </div>
          <p>Last Updated 1/2020</p>
          <div className="course_btn_wrapper">
            <button className="primary_btn add_to_cart">Add to Cart</button>
            <button className="primary_btn add_to_cart buy_now">Buy Now</button>
          </div>
          <p>30-DAy Money-Back Guarantee</p>
        </div>
      </section>
      <section className="course_instructor">
        <div className="instructor_wrapper">
          <div className="instructor">
            <span className="instructor_img">
              <img src={require("../../assets/img-1.jpg")} alt="img1" />
            </span>
            <span className="instructor_info">
              <h6>Johnson Smith</h6>
              <button className="primary_btn">Subscribe</button>
            </span>
          </div>
          <div className="views">
            <span className="views_detail">
              <AiOutlineEye />
              1452
            </span>
            <span className="views_detail">
              <AiOutlineLike />
              100
            </span>
            <span className="views_detail">
              <AiOutlineDislike />
              20
            </span>
            <span className="views_detail">
              <AiOutlineShareAlt />
              09
            </span>
          </div>
        </div>
        <ul className="course_list">
          <li>About</li>
          <li>Course Content</li>
          <li>Reviews</li>
        </ul>
      </section>
    </div>
  );
};

export default CourseDetail;
