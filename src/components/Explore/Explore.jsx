import React, { useState } from "react";
import "./Explore.css";
import { StreamData } from "../Stream/StreamData";
import { FeaturedData } from "../Home/FeaturedData";

import { BsSearch } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { CiMenuKebab } from "react-icons/ci";
import { BeatLoader } from "react-spinners";

const Explore = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const streamToShow = 7;

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

  return (
    <div className="explore">
      <div className="explore_search">
        <span className="search_logo">
          <BsSearch />
        </span>
        <input
          type="text"
          placeholder="Search for Tuts Videos, Tutors, Tests and more.."
        />
      </div>
      <div className="home_page_left_live_stream_container explore_stream">
        <div className="home_page_left_heading">
          <h4>Live Streams</h4>
          <button className="home_btn">See All</button>
        </div>
        <div className="stream_carousel">
          {StreamData.slice(currentIndex1, currentIndex1 + streamToShow).map(
            (item) => {
              return (
                <div className="home_stream_info_wrapper">
                  <div className="home_stream_info ">
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
            className="carousel_btn box_shadow previous_btn"
            disabled={currentIndex1 === 0}
          >
            <GrFormPrevious />
          </button>
          <button
            onClick={streamNext}
            className="carousel_btn box_shadow next_btn"
            disabled={currentIndex1 === StreamData.length - 2}
          >
            <GrFormNext />
          </button>
        </div>
      </div>
      <div className="featured_carousel explore_div">
        {FeaturedData.map((item) => {
          return (
            <div className="featured_courses box_shadow explore_courses">
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
      </div>
      <span className="loader">
        <BeatLoader color="#333" speedMultiplier={0.5} size={7} />
      </span>
    </div>
  );
};

export default Explore;
