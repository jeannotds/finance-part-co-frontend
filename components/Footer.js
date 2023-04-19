import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";




function Footer() {
  return (
    <div className="footer">
      <div className="infos__footer">
        <div className="platform__info-footer">
          <h3>Platform</h3>
          <ul>
            <li><FaArrowRight /><span>About us</span></li>
            <li><FaArrowRight /><span>Contact us</span></li>
            <li><FaArrowRight /><span>Projects</span></li>
            <li><FaArrowRight /><span>About Us</span></li>
          </ul>
        </div>
        <div className="contactus__info-footer">
          <h3>Contact Us</h3>
          <ul>
            <li><FaPhoneAlt /><span>+243 825 910 778</span></li>
            <li><IoIosMail /><span>diambujeannot@gmail.com</span></li>
          </ul>
          <div className="icons__data">
            <div className="site__link">
              <a href="#" className="link__icons"><IoLogoFacebook className="icons__footer"/></a>
              <a href="#" className="link__icons"><IoLogoLinkedin className="icons__footer"/></a>
            </div>
          </div>
        </div>
        <div className="connexion__info-footer">
          <h3>Sign up</h3>
          <a className="signup__footer" href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
