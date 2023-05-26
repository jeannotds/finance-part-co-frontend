import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

function Footer() {

  const compt = {
    linkdin:"https://www.linkedin.com/in/jeannot-diambu-4369a2236/",
    facebook:"https://web.facebook.com/jeannot.diambu.9",
    gmail: "mailto: diambujeannot@gmail.com"
  }

  return (
    <div className="footer">
      <div className="infos__footer">
        <div className="platform__info-footer">
          <h3>Platform</h3>
          <ul>
            <li><FaArrowRight /><span><Link className="link__href" href="/">Home</Link></span></li>
            <li><FaArrowRight /><span><Link className="link__href" href="/conatctus">Contact us</Link></span></li>
            <li><FaArrowRight /><span><Link className="link__href" href="/project">Projects</Link></span></li>
            <li><FaArrowRight /><span><Link className="link__href" href="/about">About us</Link></span></li>
          </ul>
        </div>
        <div className="contactus__info-footer">
          <h3>Contact Us</h3>
          <ul>
            <li><FaPhoneAlt /><span>+243 825 910 778</span></li>
            <li><IoIosMail /><span><Link className="link__href" href={compt.gmail}>diambujeannot@gmail.com</Link></span></li>
          </ul>
          <div className="icons__data">
            <div className="site__link">
              <Link href={compt.facebook} className="link__icons"><IoLogoFacebook className="icons__footer"/></Link>
              <Link href={compt.linkdin} className="link__icons"><IoLogoLinkedin className="icons__footer"/></Link>
            </div>
          </div>
        </div>
        <div className="connexion__info-footer">
          <h3>Sign up</h3>
          <Link className="signup__footer" href="/signup">Sign Up</Link>
          {/* <Link className="signup__footer" href="/signin">Sign In</Link> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
