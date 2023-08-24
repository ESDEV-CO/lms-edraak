import React, { useState } from "react";
import "./Dashboard.css";
import { BsGrid } from "react-icons/bs";
import { BiBookAlt } from "react-icons/bi";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { FeaturedData } from "../Home/FeaturedData";
import { NewsData } from "./NewsData";

const Dashboard = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const featureToShow = 1;
  const newsToShow = 1;
  const featuredPrevious = () => {
    if (currentIndex1 > 0) {
      setCurrentIndex1((prevIndex) => prevIndex - 1);
    }
  };

  const featuredNext = () => {
    if (currentIndex1 < 4) {
      setCurrentIndex1((prevIndex) => prevIndex + 1);
    }
  };
  const newsPrevious = () => {
    if (currentIndex2 > 0) {
      setCurrentIndex2((prevIndex) => prevIndex - 1);
    }
  };

  const newsNext = () => {
    if (currentIndex2 < NewsData.length - 1) {
      setCurrentIndex2((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="dashboard_container">
      <div className="container_heading">
        <span>
          <BsGrid />
        </span>
        <h3>Instructor Dashboard</h3>
      </div>
      <div className="dashboard_card_div">
        <div className="dashboard_card_wrapper box_shadow">
          <div className="dashboard_card_info">
            <h5>Total Sales</h5>
            <h3>$350</h3>
            <span className="card1_bg">New $50</span>
          </div>
          <div className="dashboard_card_img">
            <img src={require("../../assets/achievement.png")} alt="dash_img" />
          </div>
        </div>
        <div className="dashboard_card_wrapper box_shadow">
          <div className="dashboard_card_info">
            <h5>Total Enroll</h5>
            <h3>1500</h3>
            <span className="card2_bg">New 125</span>
          </div>
          <div className="dashboard_card_img">
            <img
              src={require("../../assets/graduation-cap.png")}
              alt="dash_img"
            />
          </div>
        </div>
        <div className="dashboard_card_wrapper box_shadow">
          <div className="dashboard_card_info">
            <h5>Total Courses</h5>
            <h3>130</h3>
            <span className="card3_bg">New 5</span>
          </div>
          <div className="dashboard_card_img">
            <img
              src={require("../../assets/online-course.png")}
              alt="dash_img"
            />
          </div>
        </div>
        <div className="dashboard_card_wrapper box_shadow">
          <div className="dashboard_card_info">
            <h5>Total Students</h5>
            <h3>2650</h3>
            <span className="card4_bg">New 245</span>
          </div>
          <div className="dashboard_card_img">
            <img src={require("../../assets/knowledge.png")} alt="dash_img" />
          </div>
        </div>
      </div>
      <div className="course_creation_card box_shadow">
        <span>
          <BiBookAlt />
        </span>
        <h3>Jump into Course Creation</h3>
        <button className="primary_btn">Create your Course</button>
      </div>
      <div className="dash_parent_wrapper">
        <div className="dash_carousel_wrapper">
          <div className="dash_carousel_left">
            <h4>Latest Courses Performance</h4>
            <div className="featured_carousel">
              {FeaturedData.slice(currentIndex1, currentIndex1 + featureToShow)
                .filter((dt) => dt?.review)
                .map((item) => {
                  return (
                    <div className="featured_courses dash_featured_courses box_shadow">
                      <img src={item?.image} alt="featured_img" />
                      <div className="featured_courses_views">
                        <h6 className="course_views">{`${item?.view}`}</h6>
                      </div>
                      <h5>{item?.course_name}</h5>
                      <div className="dash_course_info_wrapper">
                        <h6 className="course_views dash_course_info">
                          View<span>{item?.views}</span>
                        </h6>
                        <h6 className="course_views dash_course_info">
                          Purchased<span>{item?.purchase}</span>
                        </h6>
                        <h6 className="course_views dash_course_info">
                          Total Likes<span>{item?.like}</span>
                        </h6>
                      </div>
                      <h5>Go to Course Analytics</h5>
                      <h5>{`See Comments (${item?.comment})`}</h5>
                      <h5>{`See Reviews (${item?.review})`}</h5>
                    </div>
                  );
                })}
            </div>
            <button
              onClick={featuredPrevious}
              className="carousel_btn box_shadow dash_previous_btn"
              disabled={currentIndex1 === 0}
            >
              <GrFormPrevious />
            </button>
            <button
              onClick={featuredNext}
              className="carousel_btn box_shadow dash_next_btn"
              disabled={currentIndex1 === 4 - 2}
            >
              <GrFormNext />
            </button>
          </div>
          <div className="dash_carousel_right">
            <h4>News</h4>
            <div className="featured_carousel">
              {NewsData.slice(currentIndex2, currentIndex2 + newsToShow).map(
                (item) => {
                  return (
                    <div className="dash_news_wrapper box_shadow">
                      <img src={item?.image} alt="news_img" />
                      <h5>{item?.news}</h5>
                      <p>{item?.description}</p>
                      <h5>Learn More</h5>
                    </div>
                  );
                }
              )}
            </div>
            <button
              onClick={newsPrevious}
              className="carousel_btn box_shadow dash_previous_btn"
              disabled={currentIndex2 === 0}
            >
              <GrFormPrevious />
            </button>
            <button
              onClick={newsNext}
              className="carousel_btn box_shadow dash_next_btn"
              disabled={currentIndex2 === NewsData.length - 1}
            >
              <GrFormNext />
            </button>
          </div>
        </div>
        <div className="dash_profile_analysis"></div>
      </div>
    </div>
  );
};

export default Dashboard;
