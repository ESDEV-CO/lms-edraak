import React from "react";
import "./Dashboard.css";
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

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dash_side_icons_wrapper">
        <Link className="dash_side_icons">
          <BsGrid />
        </Link>
        <Link to={"/courses"} className="dash_side_icons">
          <BiBookAlt />
        </Link>
        <Link className="dash_side_icons">
          <BsGraphUp />
        </Link>
        <Link className="dash_side_icons">
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
    </div>
  );
};

export default Dashboard;
