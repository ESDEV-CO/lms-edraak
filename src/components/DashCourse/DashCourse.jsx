import React from "react";
import "./DashCourse.css";
import { BiBookAlt } from "react-icons/bi";

const DashCourse = () => {
  return (
    <div className="dash_course_container">
      <div className="container_heading">
        <span>
          <BiBookAlt />
        </span>
        <h3>Courses</h3>
      </div>
      <div className="course_creation_card box_shadow">
        <span>
          <BiBookAlt />
        </span>
        <h3>Jump into Course Creation</h3>
        <button className="primary_btn">Create your Course</button>
      </div>
    </div>
  );
};

export default DashCourse;
