import React from "react";
import reliability from "./../../assets/advantages/reliability.png";
import guarantee from  "./../../assets/advantages/guarantee.png";
import price from  "./../../assets/advantages/price.png";
import quality from  "./../../assets/advantages/quality.png";
import professionality from  "./../../assets/advantages/professionality.png";
import fast from  "./../../assets/advantages/fast.png";
import customerDriven from  "./../../assets/advantages/customer-driven.png";
import "./styles.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact us</h2>
      <div className="glass">
        <div className="input-field">
          <input type="text" className="input" placeholder="Name"/>
          <input type="text" className="input" placeholder="Email Address"/>
          <input type="text" className="input" placeholder="Phone"/>
          <input type ="text" className="input" placeholder="Subject"/>
          <textarea className="msg" placeholder="Message"></textarea>
          <div className="contact-us-btn">Send</div>
        </div>
      </div>
     
    </div>
  );
};

export default Contact;
