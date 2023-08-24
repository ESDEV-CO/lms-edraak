import React from "react";
import "./DashSideBar.css";
import { Link } from "react-router-dom";
import { BsGrid } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { BiBookAlt } from "react-icons/bi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { FiDollarSign } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineWallet } from "react-icons/ai";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { TbMessageReport } from "react-icons/tb";

const DashSideBar = () => {
  return (
    <div className="dash_sidebar">
      <Link to={"/dashboard"} className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <BsGrid />
        </span>
        <h5>Dashboard</h5>
      </Link>
      <Link to={"/dashboard/courses"} className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <BiBookAlt />
        </span>
        <h5>Courses</h5>
      </Link>
      <Link className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <BsGraphUp />
        </span>
        <h5>Analysis</h5>
      </Link>
      <Link to={"/dashboard/create-course"} className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <GrAddCircle />
        </span>
        <h5>Create Course</h5>
      </Link>
      <Link to={"/dashboard/messages"} className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <BiMessageRoundedDetail />
        </span>
        <h5>Messages</h5>
      </Link>
      <Link to={"/dashboard/notification"} className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <IoMdNotificationsOutline />
        </span>
        <h5>Notifications</h5>
      </Link>
      <Link className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <LiaCertificateSolid />
        </span>
        <h5>My Certificates</h5>
      </Link>
      <Link className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <AiOutlineStar />
        </span>
        <h5>Reviews</h5>
      </Link>
      <Link to={"/dashboard/earning"} className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <FiDollarSign />
        </span>
        <h5>Earning</h5>
      </Link>
      <Link to={"/dashboard/payout"} className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <AiOutlineWallet />
        </span>
        <h5>Payout</h5>
      </Link>
      <Link className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <LuFileSpreadsheet />
        </span>
        <h5>Statements</h5>
      </Link>
      <Link className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <IoIosCheckmarkCircleOutline />
        </span>
        <h5>Verifications</h5>
      </Link>
      <Link to={"/dashboard/settings"} className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <FiSettings />
        </span>
        <h5>Setting</h5>
      </Link>
      <Link className="dash_sidebar_heading ">
        <span className="dash_sidebar_icon">
          <TbMessageReport />
        </span>
        <h5>Send Feedback</h5>
      </Link>
    </div>
  );
};

export default DashSideBar;
