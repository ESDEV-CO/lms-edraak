import React, { useState } from "react";
import "./SideBar.css";
import { BiHomeAlt } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsClipboard2Check } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineFindInPage } from "react-icons/md";

const SideBar = () => {
  const [isCategories, setIsCategories] = useState(false);
  const [isTests, setISTests] = useState(false);
  const [isPages, setIsPages] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar_categories">
        <button className="sidebar_categories_span">
          <span className="sidebar_logo">
            <BiHomeAlt />
          </span>
          <h5>Home</h5>
        </button>
        <button className="sidebar_categories_span">
          <span className="sidebar_logo">
            <CiStreamOn />
          </span>
          <h5>Stream</h5>
        </button>
        <button className="sidebar_categories_span">
          <span className="sidebar_logo">
            <BsSearch />
          </span>
          <h5>Explore</h5>
        </button>
        <button
          onClick={() => setIsCategories(!isCategories)}
          className="sidebar_categories_span"
        >
          <span className="sidebar_logo">
            <BiCategory />
          </span>
          <h5>Categories</h5>
          <span className="drop_down">
            <IoMdArrowDropdown />
          </span>
        </button>
        {isCategories && (
          <div className="Categories_hidden_div">
            <h6 className="hidden_div_heading">Development</h6>
            <h6 className="hidden_div_heading">Business</h6>
            <h6 className="hidden_div_heading">Development</h6>
            <h6 className="hidden_div_heading">Finance & Accounting</h6>
            <h6 className="hidden_div_heading">IT & Software</h6>
            <h6 className="hidden_div_heading">Office Productivity</h6>
            <h6 className="hidden_div_heading">Personal Development</h6>
            <h6 className="hidden_div_heading">Design </h6>
            <h6 className="hidden_div_heading">Marketing </h6>
            <h6 className="hidden_div_heading"> Lifestyle</h6>
            <h6 className="hidden_div_heading"> Photography</h6>
            <h6 className="hidden_div_heading"> Health & Fitness</h6>
            <h6 className="hidden_div_heading"> Music</h6>
            <h6 className="hidden_div_heading"> Teaching & Academics</h6>
          </div>
        )}
        <button
          onClick={() => setISTests(!isTests)}
          className="sidebar_categories_span"
        >
          <span className="sidebar_logo">
            <BsClipboard2Check />
          </span>
          <h5>Tests</h5>
          <span className="drop_down">
            <IoMdArrowDropdown />
          </span>
        </button>
        {isTests && (
          <div className="Categories_hidden_div">
            <h6 className="hidden_div_heading">Certification Center</h6>
            <h6 className="hidden_div_heading">Certification Fill Form</h6>
            <h6 className="hidden_div_heading">Test View</h6>
            <h6 className="hidden_div_heading">Test Results</h6>
            <h6 className="hidden_div_heading">My Certification</h6>
          </div>
        )}
        <button className="sidebar_categories_span">
          <span className="sidebar_logo">
            <AiOutlineHeart />
          </span>
          <h5>Saved Courses</h5>
        </button>
        <button
          onClick={() => setIsPages(!isPages)}
          className="sidebar_categories_span"
        >
          <span className="sidebar_logo">
            <MdOutlineFindInPage />
          </span>
          <h5>Pages</h5>
          <span className="drop_down">
            <IoMdArrowDropdown />
          </span>
        </button>
        {isPages && (
          <div className="Categories_hidden_div">
            <h6 className="hidden_div_heading">About</h6>
            <h6 className="hidden_div_heading">Sign In</h6>
            <h6 className="hidden_div_heading">Sign Up</h6>
            <h6 className="hidden_div_heading">Sign up Steps</h6>
            <h6 className="hidden_div_heading">Paid Membership</h6>
            <h6 className="hidden_div_heading">Course Detail View</h6>
            <h6 className="hidden_div_heading">Chekout</h6>
            <h6 className="hidden_div_heading">Invoice</h6>
            <h6 className="hidden_div_heading">Career</h6>
            <h6 className="hidden_div_heading">Job Apply</h6>
            <h6 className="hidden_div_heading">Our Blog</h6>
            <h6 className="hidden_div_heading">Blog details View</h6>
            <h6 className="hidden_div_heading">Company Details</h6>
            <h6 className="hidden_div_heading">Press</h6>
            <h6 className="hidden_div_heading">Live Stream view</h6>
            <h6 className="hidden_div_heading">Add Live Stream</h6>
            <h6 className="hidden_div_heading">Search Result</h6>
            <h6 className="hidden_div_heading">Thank You</h6>
            <h6 className="hidden_div_heading">Coming Soon</h6>
            <h6 className="hidden_div_heading">Error 404</h6>
          </div>
        )}
      </div>
      <div className="sidebar_subscription">
        <h6>subscriptions</h6>
      </div>
      <div className="sidebar_setting"></div>
      <div className="sidebar_rights"></div>
    </div>
  );
};

export default SideBar;
