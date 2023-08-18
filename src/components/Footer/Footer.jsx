import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  const languageOptions = [
    { code: "select", name: "Language" },
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
  ];
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer_list_wrapper">
          <ul className="footer_list">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
          <ul className="footer_list">
            <li>Help</li>
            <li>Advertise</li>
            <li>Developers</li>
            <li>Contact US</li>
          </ul>
          <ul className="footer_list">
            <li>Copyrights Policy</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="footer_btn">
          <button className="primary_btn dark_hover">Teach on LMS</button>
          <select className="language_select">
            {languageOptions.map((language) => (
              <option key={language.code} value={language.code}>
                {language.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="footer_rights">
        <div className="footer_rights_left">
          <img src={require("../../assets/logo.png")} alt="logo" />
          <p>
            © 2020 <strong>LMS</strong>. All Rights Reserved.
          </p>
        </div>
        <div className="footer_rights_right">
          <button className="footer_social">
            <FaFacebookF />
          </button>
          <button className="footer_social">
            <AiOutlineTwitter />
          </button>
          <button className="footer_social">
            <AiOutlineGooglePlus />
          </button>
          <button className="footer_social">
            <BiLogoLinkedin />
          </button>
          <button className="footer_social">
            <AiOutlineInstagram />
          </button>
          <button className="footer_social">
            <FaYoutube />
          </button>
          <button className="footer_social">
            <FaPinterestP />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
