// Page.js
"use client";
import React from "react";
import { useParams } from "next/navigation";
import "../../../../styles/featured.css";
import dummyimg from "../../../../../public/listdummy.png";
import Image from "next/image";
import getFeaturedSale from "@/api/getFeaturedSale";
import { useEffect, useState, Suspense } from "react";
import Loading from "./Loading";


const Page = () => {
  const params = useParams();
  const state_code = Array.isArray(params.state)
    ? decodeURIComponent(params.state[0]) // Extract the first element if it's an array
    : decodeURIComponent(params.state || "");

  const city = Array.isArray(params.location)
    ? decodeURIComponent(params.location[0])
    : decodeURIComponent(params.location || "");

  const [resultsData, setResultsData] = useState<Listing[]>([]);

  const fetchData = async () => {
    try {
      const response: ApiResponse = await getFeaturedSale(state_code, city);
      console.log(response);

      if (
        response &&
        response.data &&
        response.data.home_search &&
        response.data.home_search.results
      ) {
        setResultsData(response.data.home_search.results);
      } else {
        console.error("Invalid response structure from getFeaturedSale.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [state_code, city]);

  useEffect(() => {
    console.log(resultsData);
  }, [resultsData]);

  const dummyData = [
    {
      img: dummyimg,
      desc: "Luxury Modern Home in Beverly Hills",
      price: "$4,500,000",
      sqft: 2005,
      beds: 4,
      baths: 1,
    },
    {
      img: dummyimg,
      desc: "Historic Victorian in San Francisco",
      price: "$1,200,000",
      sqft: 2005,
      beds: 4,
      baths: 1,
    },
    {
      img: dummyimg,
      desc: "Cozy Craftsman in Echo Park",
      price: "$900,000",
      sqft: 2005,
      beds: 4,
      baths: 1,
    },
    {
      img: dummyimg,
      desc: "Cozy Craftsman in Echo Park",
      price: "$900,000",
      sqft: 2005,
      beds: 4,
      baths: 1,
    },
    {
      img: dummyimg,
      desc: "Cozy Craftsman in Echo Park",
      price: "$900,000",
      sqft: 2005,
      beds: 4,
      baths: 1,
    },
    {
      img: dummyimg,
      desc: "Cozy Craftsman in Echo Park",
      price: "$900,000",
      sqft: 2005,
      beds: 4,
      baths: 1,
    },
    {
      img: dummyimg,
      desc: "Cozy Craftsman in Echo Park",
      price: "$900,000",
      sqft: 2005,
      beds: 4,
      baths: 1,
    },
    {
      img: dummyimg,
      desc: "Cozy Craftsman in Echo Park",
      price: "$900,000",
      sqft: 2005,
      beds: 4,
      baths: 1,
    },
  ];

  return (
    
    <div className="listing-page">
      <div className="property-section">
        <h2>Available Properties for Sale in {city}</h2>
        
        <div className="listing-container">
        <Suspense fallback= { <Loading /> }> 
          {resultsData.map((item, index) => (
            <div key={index} className="listing-card">
              {item.primary_photo && (
                <Image
                  src={item.primary_photo?.href}
                  alt="img"
                  width={1000}
                  height={1000}
                  style={{ height: "100%", width: "100%", objectFit: "cover",}}
                />
              )}
              <span className="card-description">
                {item.branding?.[0]?.name ?? "No Branding"}
              </span>
              <span className="card-price">${item.list_price}</span>
              <span className="card-details">
                {item.description?.beds ?? 0} Beds |{" "}
                {item.description?.baths ?? 0} Baths |{" "}
                {item.description?.sqft ?? 0} Sqft
              </span>
            </div>
          ))}
          </Suspense>
        </div>
      </div>

      <div className="property-section">
        <h2>Exclusive Properties for Rent in {city}</h2>
        <div className="listing-container">
          {dummyData.map((item, index) => (
            <div key={index} className="listing-card">
              <Image src={item.img} alt={item.desc} />
              <span className="card-description">{item.desc}</span>
              <span className="card-price">{item.price}</span>
              <span className="card-details">
                {item.beds} Beds | {item.baths} Baths | {item.sqft} Sqft
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Page;
