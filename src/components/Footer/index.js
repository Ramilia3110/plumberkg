import React from "react";
import {BsFacebook} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {IoLogoWhatsapp} from "react-icons/io";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="contact-us">
          <h4>Find us</h4>
          <div className="social-media-links">
            <a>
              <BsFacebook className="social s1"/> 
            </a>
            <a>
              <AiFillTwitterCircle className="social s2" />
            </a>
            <a>
              <IoLogoWhatsapp className="social s3" />
            </a>
          </div>
        </div>
        <p>Bishkek 2021</p>
      </div>
    </div>
  );
};

export default Footer;
