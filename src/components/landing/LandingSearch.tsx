'use client';

import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const LandingSearch = () => {

    const placeholderText = "Search for homes, addresses, or neighborhoods";

  return (
    <div className="landing-search--box">
      <div className="landing-search--icon">
        <HiMagnifyingGlass size={25} color='#CCCCCC'/>
      </div>
      <input placeholder= {placeholderText} />
      <button>Search</button>
    </div>
  );
}

export default LandingSearch;
