"use client";
import React, { useEffect, useState } from "react";
import dummyimg from "../../../public/listdummy.png";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import getLocation from "@/api/getLocation";
import { useRouter } from "next/navigation";
import "../../styles/landing.css";

const FeaturedList = () => {
  const router = useRouter();
  const [location, setLocation] = useState<Location_ll>({ lat: 0, long: 0 });
  const [userCity, setUserCity] = useState<{ city: string | null; stateCode: string | null }>({
    city: "New York",
    stateCode: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, long: longitude });
        },
        (error) => {
          console.error(error.message);
          // If there's an error fetching geolocation, you can set the default values here
          setUserCity({
            city: "New York",
            stateCode: "NY",
          });
        }
      );
    } else {
      // If geolocation is not supported, set default values
      setUserCity({
        city: "New York",
        stateCode: "NY",
      });
    }
  }, []); // Empty dependency array to run the effect only once

  useEffect(() => {
    const fetchUserCity = async () => {
      try {
        const { city, stateCode } = await getLocation(location);
        setUserCity({ city, stateCode });
      } catch (error) {
        console.error(error);
      }
    };

    if (location.lat !== 0 || location.long !== 0) {
      fetchUserCity();
    }
  }, [location]);

  userCity && console.log(userCity)

  const dummyData = [
    {
      img: dummyimg,
      desc: "Luxury Modern Home in Beverly Hills",
      price: "$4,500,000",
    },
    {
      img: dummyimg,
      desc: "Historic Victorian in San Francisco",
      price: "$1,200,000",
    },
    {
      img: dummyimg,
      desc: "Beachfront Bungalow in Santa Monica",
      price: "$2,700,000",
    },
    {
      img: dummyimg,
      desc: "Cozy Craftsman in Echo Park",
      price: "$900,000",
    },
  ];

  const handleShowMore = () => {
    const { city, stateCode } = userCity;
    router.push(`/listings/${stateCode}/${city}`);
  }

  return (
    <div className="card-container">
      {dummyData.map((item, index) => (
        <div key={index} className="card">
          <Image src={item.img} alt={item.desc} className="card-img" />
          <span className="card-desc">{item.desc}</span>
          <span className="card-price">{item.price}</span>
        </div>
      ))}
      
        <button className="see-more-button" onClick={handleShowMore}>
          <FaLongArrowAltRight color="white" size={35} />
        </button>
      

    </div>
  );
};

export default FeaturedList;
