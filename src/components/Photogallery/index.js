import React from "react";

import sink1 from "./../../assets/photogallery/sink1.jpg";
import shower from "./../../assets/photogallery/shower.jpg";
import bath from "./../../assets/photogallery/bath.jpg";
import toilet from "./../../assets/photogallery/toilet.jpg";
import sink2 from "./../../assets/photogallery/sink2.jpg";
import sink3 from "./../../assets/photogallery/sink3.jpg";
import bath2 from "./../../assets/photogallery/bath2.jpg";
import "./styles.scss";

const Photogallery = () => {
  return (
    <div className="photogallery">
      <div className="photogallery-container">
        <div className="gal i1">
          <div className="image">
            <img src={sink1} alt="sink" />
          </div>
        </div>
        <div className="gal i2">
          <div className="image">
            <img src={shower} alt="sink" />
          </div>
        </div>
        <div className="gal i3">
          <div className="image">
            <img src={bath} alt="sink" />
          </div>
        </div>
        <div className="gal i4">
          <div className="image">
            <img src={toilet} alt="sink" />
          </div>
        </div>
        <div className="gal i5">
          <div className="image">
            <img src={sink2} alt="sink" />
          </div>
        </div>
        <div className="gal i6">
          <div className="image">
            <img src={sink3} alt="sink" />
          </div>
        </div>
        <div className="gal i7">
          <div className="image">
            <img src={bath2} alt="sink" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photogallery;
