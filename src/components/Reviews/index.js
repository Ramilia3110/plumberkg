import React from "react";
import Review from "./Review";
import "./styles.scss";

const Reviews = () => {
  return <div className="reviews">
    <div className="reviews-container">
      <div className="title">
        <h2>Our reviews</h2>
      </div>
      <Review/>
    </div>
  </div>;
};

export default Reviews;
