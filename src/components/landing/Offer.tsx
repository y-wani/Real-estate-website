import React from 'react';
import '../../styles/landing.css';

const Offer = () => {
  return (
    <div className="offer-container">
      <h2>What We Offer</h2>
      <div className="offer-sections">
        <div className="offer-section">
          <h3>Rent & Buy</h3>
          <p>We buy & rent your home. We find your desired home to invest or buy.</p>
        </div>
        <div className="offer-section">
          <h3>100% Guarantee</h3>
          <p>We guarantee the house we sell or buy for you.</p>
        </div>
        <div className="offer-section">
          <h3>Exclusive Sale</h3>
          <p>We have an offer every week. Follow our Instagram to not miss those offers.</p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
