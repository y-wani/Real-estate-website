import React from 'react';
import "../../styles/landing.css";
import Image from 'next/image';
import landingimg from "../../../public/landingImg.png";
import LandingSearch from './LandingSearch';
import FeaturedList from './FeaturedList';
import Info from './Info';
import Offer from './Offer';

const LandingPage = () => {
  const mainText = "Find Your Next Favorite Meal";

  return (
    <div className='main-box'>
      <div className='opening-img-box'>
        <Image src={landingimg} alt='landing-img' className='image--main' />
        <h1 className='img-text'>{mainText}</h1> 
        <LandingSearch />
      </div>
      <h1 className='heading--text--fl'>Featured Restaurants</h1>
      <div className='featured-list-bx'> 
        <FeaturedList />
      </div>
      <Info />
      <Offer />
    </div>
  );
}

export default LandingPage;
