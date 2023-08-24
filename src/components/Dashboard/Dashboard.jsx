import React from "react";
import "./Dashboard.css";
import { BsGrid } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <div className="dashboard_right_wrapper">
        <div className="container_heading">
          <BsGrid />
          <h4>Instructor Dashboard</h4>
        </div>
        <div className="dashboard_card_div">
          <div className="dashboard_card_wrapper box_shadow">
            <div className="dashboard_card_info">
              <h5>Total Sales</h5>
              <h3>$350</h3>
              <span className="card1_bg">New $50</span>
            </div>
            <div className="dashboard_card_img">
              <img
                src={require("../../assets/achievement.png")}
                alt="dash_img"
              />
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
      </div>
    </div>
  );
};

export default Dashboard;
