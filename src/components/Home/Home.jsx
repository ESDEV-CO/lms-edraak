import React, { useState } from "react";
import "./Home.css";
import { StreamData } from "../Stream/StreamData";
import { FeaturedData } from "./FeaturedData";
import { Newest_dData } from "./NewestData";

import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { CiMenuKebab } from "react-icons/ci";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BiUserCheck } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { PiMonitorPlayBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { TbCircleCheck } from "react-icons/tb";
import { CiStreamOn } from "react-icons/ci";
import { PiBracketsAngleBold } from "react-icons/pi";
import { BiBarChartAlt2 } from "react-icons/bi";
import { BiDesktop } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiLineChart } from "react-icons/bi";
import { PiBookOpenTextBold } from "react-icons/pi";
import { AiOutlineCamera } from "react-icons/ai";
import { FiMusic } from "react-icons/fi";

const Home = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const streamToShow = 6;
  const featureToShow = 4;

  const streamPrevious = () => {
    if (currentIndex1 > 0) {
      setCurrentIndex1((prevIndex) => prevIndex - 1);
    }
  };

  const streamNext = () => {
    if (currentIndex1 < StreamData.length - 1) {
      setCurrentIndex1((prevIndex) => prevIndex + 1);
    }
  };
  const featuredPrevious = () => {
    if (currentIndex2 > 0) {
      setCurrentIndex2((prevIndex) => prevIndex - 1);
    }
  };

  const featuredNext = () => {
    if (currentIndex2 < FeaturedData.length - 1) {
      setCurrentIndex2((prevIndex) => prevIndex + 1);
    }
  };
  const newestPrevious = () => {
    if (currentIndex3 > 0) {
      setCurrentIndex3((prevIndex) => prevIndex - 1);
    }
  };

  const newestNext = () => {
    if (currentIndex3 < Newest_dData.length - 1) {
      setCurrentIndex3((prevIndex) => prevIndex + 1);
    }
  };
  const instPrevious = () => {
    if (currentIndex4 > 0) {
      setCurrentIndex4((prevIndex) => prevIndex - 1);
    }
  };

  const instNext = () => {
    if (currentIndex4 < StreamData.length - 1) {
      setCurrentIndex4((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="home_page">
      <section className="home_page_top">
        <section className="home_page_left">
          <div className="home_page_left_live_stream_container">
            <div className="home_page_left_heading">
              <h4>Live Streams</h4>
              <button className="home_btn">See All</button>
            </div>
            <div className="stream_carousel">
              {StreamData.slice(
                currentIndex1,
                currentIndex1 + streamToShow
              ).map((item) => {
                return (
                  <div className="home_stream_info_wrapper">
                    <div className="home_stream_info">
                      <img src={item?.image} alt="" />
                      <h6>{item?.name}</h6>
                      <span className="stream_status"> Live</span>
                    </div>
                  </div>
                );
              })}
              <button
                onClick={streamPrevious}
                className="carousel_btn previous_btn"
                disabled={currentIndex1 === 0}
              >
                <GrFormPrevious />
              </button>
              <button
                onClick={streamNext}
                className="carousel_btn next_btn"
                disabled={currentIndex1 === StreamData.length - 2}
              >
                <GrFormNext />
              </button>
            </div>
          </div>
          <div className="home_page_left_featured_container">
            <div className="home_page_left_heading">
              <h4>Featured Courses</h4>
              <button className="home_btn">See All</button>
            </div>
            <div className="featured_carousel">
              {FeaturedData.slice(
                currentIndex2,
                currentIndex2 + featureToShow
              ).map((item) => {
                return (
                  <div className="featured_courses">
                    <img src={item?.image} alt="featured_img" />
                    <div className="featured_courses_views">
                      <h6 className="course_views">{`${item?.views} Views`}</h6>
                      <h6 className="course_views">{item?.time}</h6>
                      <button className="course_share">
                        <CiMenuKebab />
                      </button>
                    </div>
                    <h5>{item?.course_name}</h5>
                    <h6 className="course_views">{item?.description}</h6>
                    <div className="course_author">
                      <h6 className="course_views">
                        By <strong>{item?.instructor_name}</strong>
                      </h6>
                      <h5 className="course_price">{item?.price}</h5>
                    </div>
                  </div>
                );
              })}
              <button
                onClick={featuredPrevious}
                className="carousel_btn previous_btn"
                disabled={currentIndex2 === 0}
              >
                <GrFormPrevious />
              </button>
              <button
                onClick={featuredNext}
                className="carousel_btn next_btn"
                disabled={currentIndex2 === FeaturedData.length - 2}
              >
                <GrFormNext />
              </button>
            </div>
          </div>
          <div className="home_page_left_featured_container">
            <div className="home_page_left_heading">
              <h4>Newest Courses</h4>
              <button className="home_btn">See All</button>
            </div>
            <div className="featured_carousel">
              {Newest_dData.slice(
                currentIndex3,
                currentIndex3 + featureToShow
              ).map((item) => {
                return (
                  <div className="featured_courses">
                    <img src={item?.image} alt="featured_img" />
                    <div className="featured_courses_views">
                      <h6 className="course_views">{`${item?.views} Views`}</h6>
                      <h6 className="course_views">{item?.time}</h6>
                      <button className="course_share">
                        <CiMenuKebab />
                      </button>
                    </div>
                    <h5>{item?.course_name}</h5>
                    <h6 className="course_views">{item?.description}</h6>
                    <div className="course_author">
                      <h6 className="course_views">
                        By <strong>{item?.instructor_name}</strong>
                      </h6>
                      <h5 className="course_price">{item?.price}</h5>
                    </div>
                  </div>
                );
              })}
              <button
                onClick={newestPrevious}
                className="carousel_btn previous_btn"
                disabled={currentIndex3 === 0}
              >
                <GrFormPrevious />
              </button>
              <button
                onClick={newestNext}
                className="carousel_btn next_btn"
                disabled={currentIndex3 === Newest_dData.length - 2}
              >
                <GrFormNext />
              </button>
            </div>
          </div>
          <div className="home_page_left_user_motivation">
            <div className="user_motivation">
              <span className="motivation_logo">
                <FaClockRotateLeft />
              </span>
              <h5>Go at your own pace</h5>
              <p>Enjoy lifetime access to courses on Edututs+'s website</p>
            </div>
            <div className="user_motivation">
              <span className="motivation_logo">
                <BiUserCheck />
              </span>
              <h5>Learn from industry experts</h5>
              <p>Select from top instructors around the world</p>
            </div>
            <div className="user_motivation">
              <span className="motivation_logo">
                <AiOutlinePlayCircle />
              </span>
              <h5>Find video courses on almost any topic</h5>
              <p>Build your library for your career and personal growth</p>
            </div>
            <div className="user_motivation">
              <span className="motivation_logo">
                <PiMonitorPlayBold />
              </span>
              <h5>100,000 online courses</h5>
              <p>Explore a variety of fresh topics</p>
            </div>
          </div>
          <div className="home_page_left_featured_container">
            <div className="home_page_left_heading">
              <h4>Popular Instructors</h4>
              <button className="home_btn">See All</button>
            </div>
            <div className="featured_carousel">
              {StreamData.slice(
                currentIndex4,
                currentIndex4 + featureToShow
              ).map((item) => {
                return (
                  <div className=" popular_instructor">
                    <img src={item?.image} alt="instructor_img" />
                    <span className="instructor_info">
                      <h5>{item?.name}</h5>
                      <span>
                        <TbCircleCheck />
                      </span>
                    </span>
                    <p>{item?.description}</p>
                    <div className="instructor_social">
                      <button
                        className="social_icons "
                        style={{ color: "white", background: "#3B5998" }}
                      >
                        <FaFacebookF />
                      </button>
                      <button
                        className="social_icons "
                        style={{ color: "white", background: "#1DA1F2" }}
                      >
                        <AiOutlineTwitter />
                      </button>
                      <button
                        className="social_icons "
                        style={{ color: "white", background: "#8D6CAB" }}
                      >
                        <BiLogoLinkedin />
                      </button>
                      <button
                        className="social_icons "
                        style={{ color: "white", background: "#FF0000" }}
                      >
                        <FaYoutube />
                      </button>
                    </div>
                    <div className="instructor_students">
                      <span className="course_views">{`${item?.students} Students.`}</span>
                      <span className="course_views">{`${item?.courses} Courses`}</span>
                    </div>
                  </div>
                );
              })}
              <button
                onClick={instPrevious}
                className="carousel_btn previous_btn"
                disabled={currentIndex4 === 0}
              >
                <GrFormPrevious />
              </button>
              <button
                onClick={instNext}
                className="carousel_btn next_btn"
                disabled={currentIndex4 === StreamData.length - 1}
              >
                <GrFormNext />
              </button>
            </div>
          </div>
        </section>
        <section className="home_page_right">
          <div className="home_page_right_instructor">
            <div className=" popular_instructor right_instructor">
              <img
                src={require("../../assets/img-17.jpg")}
                alt="instructor_img"
              />
              <span className="instructor_info">
                <h5>Joginder Singh</h5>
                <span>
                  <TbCircleCheck />
                </span>
              </span>
              <p>Web Developer, Designer, and Teacher</p>
              <div className="instructor_social">
                <button
                  className="social_icons "
                  style={{ color: "white", background: "#3B5998" }}
                >
                  <FaFacebookF />
                </button>
                <button
                  className="social_icons "
                  style={{ color: "white", background: "#1DA1F2" }}
                >
                  <AiOutlineTwitter />
                </button>
                <button
                  className="social_icons "
                  style={{ color: "white", background: "#8D6CAB" }}
                >
                  <BiLogoLinkedin />
                </button>
                <button
                  className="social_icons "
                  style={{ color: "white", background: "#FF0000" }}
                >
                  <FaYoutube />
                </button>
              </div>
              <div className="instructor_students">
                <span className="course_views">615k Students</span>
                <span className="course_views">12 Courses</span>
              </div>
              <button>Go To Profile</button>
            </div>
          </div>
          <div className="home_page_right_stream">
            <span className="stream_heading">
              <h6>Live Streaming</h6>
            </span>
            <span className="stream_logo">
              <CiStreamOn />
            </span>
            <p>Set up your channel and stream live to your students</p>
            <button className="primary_btn">Get Started</button>
            <span className="stream_info">
              Info : This feature only for 'Instructors'.
            </span>
          </div>
          <div className="home_page_right_recommendation">
            <h5>Get personalized recommendations</h5>
            <p>Answer a few questions for your top picks</p>
            <button className="primary_btn">Get Started</button>
          </div>
          <div className="home_page_right_stream">
            <span className="stream_heading">
              <h5>Top Categories</h5>
            </span>
            <span className="top_categories">
              <PiBracketsAngleBold /> Development
            </span>
            <span className="top_categories">
              <BiBarChartAlt2 /> Business
            </span>
            <span className="top_categories">
              <BiDesktop /> IT & Software
            </span>
            <span className="top_categories">
              <MdOutlineDesignServices /> Design
            </span>
            <span className="top_categories">
              <BiLineChart /> Marketing
            </span>
            <span className="top_categories">
              <PiBookOpenTextBold /> Personal Development
            </span>
            <span className="top_categories">
              <AiOutlineCamera /> Photography
            </span>
            <span className="top_categories">
              <FiMusic /> Music
            </span>
          </div>
          <div className="home_page_right_stream">
            <h4>Become an Instructor</h4>
            <p>
              Top instructors from around the world teach millions of students
              on Cursus. We provide the tools and skills to teach what you love.
            </p>
            <button className="primary_btn">Start Teaching</button>
          </div>
        </section>
      </section>
      <section className="home_page_bottom">
        <h4>What Our Student Have Today</h4>
        <div className="student_review_wrapper">
          <div className="student_review">
            <p>
              "Donec ac ex eu arcu euismod feugiat. In venenatis bibendum nisi,
              in placerat eros ultricies vitae. Praesent pellentesque blandit
              scelerisque. Suspendisse potenti."
            </p>
            <span className="student_info">
              <img src={require("../../assets/img-2.jpg")} alt="img1" />
              <h5>Rock Smith</h5>
            </span>
          </div>
          <div className="student_review">
            <p>
              "Donec ac ex eu arcu euismod feugiat. In venenatis bibendum nisi,
              in placerat eros ultricies vitae. Praesent pellentesque blandit
              scelerisque. Suspendisse potenti."
            </p>
            <span className="student_info">
              <img src={require("../../assets/img-1.jpg")} alt="img1" />
              <h5>Jassica William</h5>
            </span>
          </div>
          <div className="student_review">
            <p>
              "Donec ac ex eu arcu euismod feugiat. In venenatis bibendum nisi,
              in placerat eros ultricies vitae. Praesent pellentesque blandit
              scelerisque. Suspendisse potenti."
            </p>
            <span className="student_info">
              <img src={require("../../assets/img-5.jpg")} alt="img1" />
              <h5>john William</h5>
            </span>
          </div>
          <button className="carousel_btn previous_btn">
            <GrFormPrevious />
          </button>
          <button className="carousel_btn next_btn">
            <GrFormNext />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
