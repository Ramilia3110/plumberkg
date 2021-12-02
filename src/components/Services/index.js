import React from "react";
import serv1 from "./../../assets/images/1.jpg";
import serv2 from "./../../assets/images/2.jpg";
import serv3 from "./../../assets/images/3.jpg";
import serv4 from "./../../assets/images/4.jpg";
import bubble5 from "./../../assets/bubble5.png";
import "./styles.scss";

const Services = () => {
  return (
    <div className="services">
      <img className="bubble" src={bubble5}/>
      <h1> Our services</h1>
      <div className="services-container">
        <div className="card">
          <div className="box b1">
            <div className="content">
              <img src={serv1} alt="" />
              <ul>
                <li> Installation of heating systems</li>
                <li> Installation of metal-plastic pipes</li>
                <li> Installation of a complete bathroom</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box b2">
            <div className="content">
              <img src={serv2} alt="" />
              <ul>
                <li> Cleaning of Any Clogged Drains</li>
                <li> Cleaning and Flushing of Hydrodynamic </li>
                <li> Electromechanical cleaning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box b3">
            <div className="content">
              <img src={serv3} alt="" />
              <ul>
                <li> Installation of a toilet, bathroom sink and siphon </li>
                <li> Installation of a washing machine and a dishwasher</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box b4">
            <div className="content">
              <img src={serv4} alt="" />
              <ul>
                <li>Replacing the tap</li>
                <li> Repairing of sewer </li>
                <li> Replacing of water pipes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {}
    </div>
  );
};

export default Services;
