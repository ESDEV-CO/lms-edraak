import React, { useState } from "react";
import "./Home.css";
import { StreamData } from "../Stream/StreamData";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { CiMenuKebab } from "react-icons/ci";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 6;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsToShow, StreamData.length - itemsToShow)
    );
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
            {StreamData.slice(currentIndex, currentIndex + itemsToShow).map(
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
              onClick={handlePrevious}
              className="carousel_btn previous_btn"
              disabled={currentIndex === 0}
            >
              <GrFormPrevious />
            </button>
            <button
              onClick={handleNext}
              className="carousel_btn next_btn"
              disabled={currentIndex + itemsToShow >= StreamData.length}
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
          <div className="home_page_left_featured_courses">
            <div className="featured_courses">
              <img
                src={require("../../assets/featured1.jpg")}
                alt="featured1"
              />
              <div className="featured_courses_views">
                <span className="course_views">109k Views.</span>
                <span className="course_views">10 days ago</span>
                <button className="course_share">
                  <CiMenuKebab />
                </button>
              </div>
              <h5>
                Complete Python Bootcamp: Go from zero to hero in Python 3
              </h5>
            </div>
          </div>
        </div>
        <div className="home_page_left_"></div>
        <div className="home_page_left_"></div>
        <div className="home_page_left_"></div>
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
