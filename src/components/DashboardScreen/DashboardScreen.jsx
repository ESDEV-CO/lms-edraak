import React from "react";
import "./DashboardScreen.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, Outlet } from "react-router-dom";

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

const DashboardScreen = () => {
  return (
    <div>
      <Navbar />
      <div class="dash_screen_wrapper">
        <div className="dash_side_icons_wrapper">
          <Link to={"/dashboard"} className="dash_side_icons">
            <BsGrid />
          </Link>
          <Link to={"/dashboard/courses"} className="dash_side_icons">
            <BiBookAlt />
          </Link>
          <Link className="dash_side_icons">
            <BsGraphUp />
          </Link>
          <Link to={"/dashboard/create-course"} className="dash_side_icons">
            <GrAddCircle />
          </Link>
          <Link className="dash_side_icons">
            <BiMessageRoundedDetail />
          </Link>
          <Link className="dash_side_icons">
            <IoMdNotificationsOutline />
          </Link>
          <Link className="dash_side_icons">
            <LiaCertificateSolid />
          </Link>
          <Link className="dash_side_icons">
            <AiOutlineStar />
          </Link>
          <Link className="dash_side_icons">
            <FiDollarSign />
          </Link>
          <Link className="dash_side_icons">
            <AiOutlineWallet />
          </Link>
          <Link className="dash_side_icons">
            <LuFileSpreadsheet />
          </Link>
          <Link className="dash_side_icons">
            <IoIosCheckmarkCircleOutline />
          </Link>
          <Link className="dash_side_icons">
            <FiSettings />
          </Link>
          <Link className="dash_side_icons">
            <TbMessageReport />
          </Link>
        </div>
        <div class="dash_screen_outlet">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardScreen;
