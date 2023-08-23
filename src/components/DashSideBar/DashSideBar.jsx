import React from "react";
import "./DashSideBar.css";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";

const DashSideBar = () => {
  return (
    <div className="dash_sidebar">
      <Link to={"/"} className=" ">
        <span className="">
          <BiHomeAlt />
        </span>
        <h5>Home</h5>
      </Link>
    </div>
  );
};

export default DashSideBar;
