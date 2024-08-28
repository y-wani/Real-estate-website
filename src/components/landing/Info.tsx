import React from 'react';
import "../../styles/landing.css";

const Info = () => {
  const sellingLine = "Discover Your Perfect Meal!";
  const subSellingLine = "Explore a variety of cuisines and find the best restaurants near you.";

  return (
    <div className="info-container">
      <div className="selling-line">{sellingLine}</div>
      <div className="sub-selling-line">{subSellingLine}</div>
      <div className="stats-container">
        <div className="stat-block">
          <div className="stat-value">1,500+</div>
          <div className="stat-label">Restaurants Listed</div>
        </div>
        <div className="stat-block">
          <div className="stat-value">200+</div>
          <div className="stat-label">Cuisine Types</div>
        </div>
        <div className="stat-block">
          <div className="stat-value">50,000+</div>
          <div className="stat-label">Satisfied Diners</div>
        </div>
        <div className="stat-block">
          <div className="stat-value">4.8/5</div>
          <div className="stat-label">Average Rating</div>
        </div>
      </div>
    </div>
  );
}

export default Info;
