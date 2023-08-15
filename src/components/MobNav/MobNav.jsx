import React from "react";
import "./MobNav.css";
import { Link } from "react-router-dom";

const MobNav = () => {
  return (
    <div className="mob_nav">
      <ul className="mob_nav_links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobNav;
