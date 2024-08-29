import React from 'react';
import Image from 'next/image';
import landingimg from "../../../public/landingImg.png";
import "../../styles/restDetails.css";
import { FaStar } from "react-icons/fa6";

const RestLandingImage = () => {

    const mainText = "Saptami"

    return (
        <div className='main-box'>
            <div className='opening-img-box'>
                <Image src={landingimg} alt='landing-img' className='image--main' />
                <h1 className='img-text'>{mainText}</h1> 
                <div className='rating-box'>
                    <span>
                        4.5
                    </span>
                    <span>
                        <FaStar color='gold' style={{marginTop: "5px"}} size={30}/>
                    </span>
                </div>
            </div>

        </div>
    );
}

export default RestLandingImage;