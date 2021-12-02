import React from "react";
import landing from "./../../assets/landing.png";
import bubble2 from "./../../assets/bubble2.png";
import bubble3 from "./../../assets/bubble3.png";
import bubble4 from "./../../assets/bubble4.png";
import bubble5 from "./../../assets/bubble5.png";
import "./styles.scss";

const Landing = () => {
  return (
    <div className="landing">
      <ul className="box-area">
        <li><img src={bubble4}/></li>
        <li><img src={bubble2}/></li>
        <li><img src={bubble5}/></li>
        <li><img src={bubble3}/></li>
        <li><img src={bubble5}/></li>
        <li><img src={bubble2}/></li>
        <li><img src={bubble3}/></li>
      </ul>
      <div className="text-content">
        <h2>You enjoy, We work</h2>
        <p className="landing-text">24/7  Fast Affordable</p>
        <a className="contact-btn">Contact us</a>
      </div>
      <div className="landing-img">
        <img src={landing} />
      </div>
    </div>
  );
};

export default Landing;
