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
import { GoDotFill } from "react-icons/go";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { MdReportGmailerrorred } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isCategories, setIsCategories] = useState(false);
  const [isTests, setISTests] = useState(false);
  const [isPages, setIsPages] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar_categories">
        <Link to={"/"} className="sidebar_categories_span sidebar_heading">
          <span className="sidebar_logo">
            <BiHomeAlt />
          </span>
          <h5>Home</h5>
        </Link>
        <Link
          to={"/stream"}
          className="sidebar_categories_span sidebar_heading"
        >
          <span className="sidebar_logo">
            <CiStreamOn />
          </span>
          <h5>Stream</h5>
        </Link>
        <Link
          to={"/explore"}
          className="sidebar_categories_span sidebar_heading"
        >
          <span className="sidebar_logo">
            <BsSearch />
          </span>
          <h5>Explore</h5>
        </Link>
        <button
          onClick={() => setIsCategories(!isCategories)}
          className="sidebar_categories_span sidebar_heading"
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
          className="sidebar_categories_span sidebar_heading"
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
        <button className="sidebar_categories_span sidebar_heading">
          <span className="sidebar_logo">
            <AiOutlineHeart />
          </span>
          <h5>Saved Courses</h5>
        </button>
        <button
          onClick={() => setIsPages(!isPages)}
          className="sidebar_categories_span sidebar_heading"
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
            <Link to={"/about"} className="hidden_div_heading">
              About
            </Link>
            <Link to={"/signin"} className="hidden_div_heading">
              Sign In
            </Link>
            <Link to={"/signup"} className="hidden_div_heading">
              Sign Up
            </Link>
            {/* <h6 className="hidden_div_heading">Sign up Steps</h6>
            <h6 className="hidden_div_heading">Paid Membership</h6> */}
            <Link to={"/course-detail"} className="hidden_div_heading">
              Course Detail View
            </Link>
            <Link to={"/checkout"} className="hidden_div_heading">
              Chekout
            </Link>
            {/* <h6 className="hidden_div_heading">Invoice</h6>
            <h6 className="hidden_div_heading">Career</h6>
            <h6 className="hidden_div_heading">Job Apply</h6>
            <h6 className="hidden_div_heading">Our Blog</h6>
            <h6 className="hidden_div_heading">Blog details View</h6>
            <h6 className="hidden_div_heading">Company Details</h6>
            <h6 className="hidden_div_heading">Press</h6> */}
            {/* <Link to={"/stream"} className="hidden_div_heading">
              Live Stream view
            </Link> */}
            {/* <h6 className="hidden_div_heading">Add Live Stream</h6>
            <h6 className="hidden_div_heading">Search Result</h6>
            <h6 className="hidden_div_heading">Thank You</h6>
            <h6 className="hidden_div_heading">Coming Soon</h6>
            <h6 className="hidden_div_heading">Error 404</h6> */}
          </div>
        )}
      </div>
      <div className="sidebar_subscription">
        <h6>subscriptions</h6>
        <button className="sidebar_categories_span sidebar_heading">
          <span className="sidebar_logo">
            <img src={require("../../assets/img-1.jpg")} alt="img1" />
          </span>
          <h5>Rock Smith</h5>
          <span className="online_status">
            <GoDotFill />
          </span>
        </button>
        <button className="sidebar_categories_span sidebar_heading">
          <span className="sidebar_logo">
            <img src={require("../../assets/img-2.jpg")} alt="img2" />
          </span>
          <h5>Jasica William</h5>
          <span className="online_status">
            <GoDotFill />
          </span>
        </button>
        <button className="sidebar_categories_span sidebar_heading">
          <span className="sidebar_logo">
            <AiOutlinePlusCircle />
          </span>
          <h5>Browse Instructors</h5>
        </button>
      </div>
      <div className="sidebar_setting">
        <button className="sidebar_categories_span sidebar_heading">
          <span className="sidebar_logo">
            <FiSettings />
          </span>
          <h5>Settings</h5>
        </button>
        <button className="sidebar_categories_span sidebar_heading">
          <span className="sidebar_logo">
            <BiHelpCircle />
          </span>
          <h5>Help</h5>
        </button>
        <button className="sidebar_categories_span sidebar_heading">
          <span className="sidebar_logo">
            <MdReportGmailerrorred />
          </span>
          <h5>Report History</h5>
        </button>
        <button className="sidebar_categories_span sidebar_heading">
          <span className="sidebar_logo">
            <TbMessageReport />
          </span>
          <h5>Send Feedback</h5>
        </button>
      </div>
      <ul className="sidebar_footer">
        <li>About</li>
        <li>Press</li>
        <li>Contact US</li>
        <li>Advertise</li>
        <li>Developers</li>
        <li>Copyrights</li>
        <li>Privacy Policy</li>
        <li>Terms</li>
      </ul>
      <span className="sidebar_rights">
        © 2020 <strong>LMS</strong>. All Rights Reserved.
      </span>
    </div>
  );
};

export default SideBar;
