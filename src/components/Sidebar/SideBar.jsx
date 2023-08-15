import React from "react";
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
  return (
    <div className="sidebar">
      <div className="sidebar_categories">
        <span className="sidebar_categories_span">
          <span className="sidebar_logo">
            <BiHomeAlt />
          </span>
          <h6>Home</h6>
        </span>
        <span className="sidebar_categories_span">
          <span className="sidebar_logo">
            <CiStreamOn />
          </span>
          <h6>Stream</h6>
        </span>
        <span className="sidebar_categories_span">
          <span className="sidebar_logo">
            <BsSearch />
          </span>
          <h6>Explore</h6>
        </span>
        <span className="sidebar_categories_span">
          <span className="sidebar_logo">
            <BiCategory />
          </span>
          <h6>Categories</h6>
          <span className="drop_down">
            <IoMdArrowDropdown />
          </span>
        </span>
        <span className="sidebar_categories_span">
          <span className="sidebar_logo">
            <BsClipboard2Check />
          </span>
          <h6>Tests</h6>
          <span className="drop_down">
            <IoMdArrowDropdown />
          </span>
        </span>
        <span className="sidebar_categories_span">
          <span className="sidebar_logo">
            <AiOutlineHeart />
          </span>
          <h6>Saved Courses</h6>
        </span>
        <span className="sidebar_categories_span">
          <span className="sidebar_logo">
            <MdOutlineFindInPage />
          </span>
          <h6>Pages</h6>
          <span className="drop_down">
            <IoMdArrowDropdown />
          </span>
        </span>
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
