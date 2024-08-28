import React from 'react';
import '../../styles/landing.css';

const Offer = () => {
  return (
    <div className="offer-container">
      <h2>What We Offer</h2>
      <div className="offer-sections">
        <div className="offer-section">
          <h3>Find the Best Restaurants</h3>
          <p>Discover top-rated restaurants based on your preferences, from local favorites to hidden gems.</p>
        </div>
        <div className="offer-section">
          <h3>Verified Reviews</h3>
          <p>Read honest reviews from real diners to help you make the best dining decisions.</p>
        </div>
        <div className="offer-section">
          <h3>Exclusive Discounts</h3>
          <p>Enjoy special deals and discounts at select restaurants when you book through our platform.</p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
