"use client";
import React from "react";
import dummyimg from "../../../public/listdummy.png";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const FeaturedList = () => {
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

  return (
    <div className="card-container">
      {dummyData.map((item, index) => (
        <div key={index} className="card">
          <Image src={item.img} alt={item.desc} className="card-img" />
          <span className="card-desc">{item.desc}</span>
          <span className="card-price">{item.price}</span>
        </div>
      ))}
      <button className="see-more-button" onClick={() => alert('See More Clicked')}>
        <FaLongArrowAltRight color="white" size={35}/>
      </button>
    </div>
  );
};

export default FeaturedList;
