import React from 'react';
import "../../styles/landing.css";

const Info = () => {
  const sellingLine = "Discover Your Dream Home with Us!";
  const subSellingLine = "Experience the perfect blend of comfort and style. Choose from our curated selection of fully-furnished or customizable homes.";

  return (
    <div className="info-container">
      <div className="selling-line">{sellingLine}</div>
      <div className="sub-selling-line">{subSellingLine}</div>
      <div className="stats-container">
        <div className="stat-block">
          <div className="stat-value">10+</div>
          <div className="stat-label">Years of Crafting Dreams</div>
        </div>
        <div className="stat-block">
          <div className="stat-value">350+</div>
          <div className="stat-label">Happy Homes Sold</div>
        </div>
        <div className="stat-block">
          <div className="stat-value">7,250+</div>
          <div className="stat-label">Satisfied Customers</div>
        </div>
        <div className="stat-block">
          <div className="stat-value">21</div>
          <div className="stat-label">Recognized Certifications</div>
        </div>
      </div>
    </div>
  );
}

export default Info;
