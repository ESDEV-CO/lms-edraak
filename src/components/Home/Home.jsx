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

const Home = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
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

  return (
    <div className="home_page">
      <section className="home_page_left">
        <div className="home_page_left_live_stream_container">
          <div className="home_page_left_heading">
            <h4>Live Streams</h4>
            <button className="home_btn">See All</button>
          </div>
          <div className="stream_carousel">
            {StreamData.slice(currentIndex1, currentIndex1 + streamToShow).map(
              (item) => {
                return (
                  <div className="home_stream_info_wrapper">
                    <div className="home_stream_info">
                      <img src={item?.image} alt="" />
                      <h6>{item?.name}</h6>
                      <span className="stream_status"> Live</span>
                    </div>
                  </div>
                );
              }
            )}
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
                    <span className="course_views">{item?.views}</span>
                    <span className="course_views">{item?.time}</span>
                    <button className="course_share">
                      <CiMenuKebab />
                    </button>
                  </div>
                  <h5>{item?.course_name}</h5>
                  <span className="course_views">{item?.description}</span>
                  <div className="course_author">
                    <span className="course_views">
                      By <strong>{item?.instructor_name}</strong>
                    </span>
                    <span className="course_price">{item?.price}</span>
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
                    <span className="course_views">{item?.views}</span>
                    <span className="course_views">{item?.time}</span>
                    <button className="course_share">
                      <CiMenuKebab />
                    </button>
                  </div>
                  <h5>{item?.course_name}</h5>
                  <span className="course_views">{item?.description}</span>
                  <div className="course_author">
                    <span className="course_views">
                      By <strong>{item?.instructor_name}</strong>
                    </span>
                    <span className="course_price">{item?.price}</span>
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
        <div className="home_page_left_instructors">
          <div className="home_page_left_heading">
            <h4>Popular Instructors</h4>
            <button className="home_btn">See All</button>
          </div>
          <div className="instructors_carousel"></div>
        </div>
        <div className="home_page_left_"></div>
      </section>
      <section className="home_page_right">
        <div className="home_page_right_"></div>
        <div className="home_page_right_"></div>
        <div className="home_page_right_"></div>
        <div className="home_page_right_"></div>
      </section>
    </div>
  );
};

export default Home;
