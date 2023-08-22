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
            <span className="course_instructor_info">
              <h5>Johnson Smith</h5>
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
          <li>Course </li>
          <li>Content</li>
          <li>Reviews</li>
        </ul>
      </section>
      <section className="course_requirements">
        <h4>Requirements</h4>
        <ul className="requirements">
          <li>Have a computer with Internet</li>
          <li>Be ready to learn an insane amount of awesome stuff</li>
          <li>Prepare to build real web apps!</li>
        </ul>
      </section>
      <section className="course_requirements">
        <h4>Description</h4>
        <h5>Just updated to include Bootstrap 4.1.3!</h5>
        <p>
          <p>
            Hi! Welcome to the Web Developer Bootcamp, the{" "}
            <strong>only course you need to learn web development</strong>.
            There are a lot of options for online developer training, but this
            course is without a doubt the most comprehensive and effective on
            the market. Here's why:
          </p>
        </p>
        <ul className="requirements">
          <li>
            This is the only online course taught by a professional bootcamp
            instructor.
          </li>
          <li>
            94% of my in-person bootcamp students go on to get full-time
            developer jobs. Most of them are complete beginners when I start
            working with them.
          </li>
          <li>
            The previous 2 bootcamp programs that I taught cost $14,000 and
            $21,000. This course is just as comprehensive but with brand new
            content for a fraction of the price.
          </li>
          <li>
            Everything I cover is up-to-date and relevant to today's developer
            industry. No PHP or other dated technologies. This course does not
            cut any corners.
          </li>
          <li>
            This is the only complete beginner full-stack developer course that
            covers NodeJS.
          </li>
          <li>
            We build 13+ projects, including a gigantic production application
            called YelpCamp. No other course walks you through the creation of
            such a substantial application.
          </li>
          <li>
            The course is constantly updated with new content, projects, and
            modules. Think of it as a subscription to a never-ending supply of
            developer training.
          </li>
        </ul>
        <p>
          When you're learning to program you often have to sacrifice learning
          the exciting and current technologies in favor of the "beginner
          friendly" classes. With this course, you get the best of both worlds.
          This is a course designed for the complete beginner, yet it covers
          some of the most exciting and relevant topics in the industry.
        </p>
        <p>
          Throughout the course we cover tons of tools and technologies
          including:
        </p>
        <ul className="requirements bold_list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Bootstrap 4</li>
          <li>SemanticUI</li>
          <li>DOM Manipulation</li>
          <li>jQuery</li>
          <li>Unix(Command Line) Commands</li>
          <li>NodeJS</li>
          <li>NPM</li>
          <li>ExpressJS</li>
          <li>REST</li>
          <li>MongoDB</li>
          <li>Database Associations</li>
          <li>Authentication</li>
          <li>PassportJS</li>
          <li>Authorization</li>
        </ul>
        <p>
          This course is also unique in the way that it is structured and
          presented. Many online courses are just a long series of "watch as I
          code" videos. This course is different. I've incorporated everything I
          learned in my years of teaching to make this course not only more
          effective but more engaging. The course includes:
        </p>
        <ul className="requirements ">
          <li>Lectures</li>
          <li>Code-Alongs</li>
          <li>Projects</li>
          <li>Exercises</li>
          <li>Research Assignments</li>
          <li>Slides</li>
          <li>Downloads</li>
          <li>Readings</li>
        </ul>
        <p>
          If you have any questions, please don't hesitate to contact me. I got
          into this industry because I love working with people and helping
          students learn. Sign up today and see how fun, exciting, and rewarding
          web development can be!
        </p>
        <h4>Who this course is for :</h4>
        <ul className="requirements ">
          <li>
            This course is for anyone who wants to learn about web development,
            regardless of previous experience
          </li>
          <li>It's perfect for complete beginners with zero experience</li>
          <li>
            It's also great for anyone who does have some experience in a few of
            the technologies(like HTML and CSS) but not all
          </li>
          <li>
            If you want to take ONE COURSE to learn everything you need to know
            about web development, take this course
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CourseDetail;
