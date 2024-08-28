"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "next/navigation";
import "../../../../styles/featured.css";
import dummyimg from "../../../../../public/download.png";
import Image from "next/image";
import getLocationID from "@/api/getLocationId";
import getFeaturedRestaurants from "@/api/getFeaturedRestaurants";
import Loading from "./loading";
import ImageFallback from "@/components/Accessory/ImageFallback";

const Page = () => {
  const params = useParams();
  const state_code = Array.isArray(params.state)
    ? decodeURIComponent(params.state[0])
    : decodeURIComponent(params.state || "");

  const city = Array.isArray(params.location)
    ? decodeURIComponent(params.location[0])
    : decodeURIComponent(params.location || "");

  const [restaurantsData, setRestaurantsData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [locationId, setLocationId] = useState<number | null>(null);

  const fetchData = async () => {
    try {
      const id = await getLocationID(city);
      if (id) {
        setLocationId(id);
        const response = await getFeaturedRestaurants(id);
        console.log("Featured Restaurants Data:", response);

        if (response && response.data && response.data.data) {
          setRestaurantsData(response.data.data);
        } else {
          console.error(
            "Invalid response structure from getFeaturedRestaurants."
          );
        }
      } else {
        console.error("Location ID is null.");
        setError("Failed to get location ID.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch restaurants.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <div className="listing-page">
      <div className="property-section">
        <h2>Featured Restaurants in {city}</h2>

        <div className="listing-container">
          <Suspense fallback={<Loading />}>
            {error && <p className="error-message">{error}</p>}
            {restaurantsData.map((restaurant: any, index: number) => (
              <div key={index} className="listing-card">
                <ImageFallback
                  src={restaurant.heroImgUrl}
                  fallbackSrc={dummyimg}
                  alt={restaurant.heroImgUrl ? `${restaurant.name} image` : "Placeholder image"}
                  width={300}
                  height={200}
                  style={{ objectFit: "cover" }}
                />

                <div className="card-content">
                  <span className="card-description">{restaurant.name}</span>
                  <div className="card-price">
                    Rating: {restaurant.averageRating}
                  </div>
                  <span className="card-details">
                    {restaurant.currentOpenStatusText} | Price:{" "}
                    {restaurant.priceTag}
                  </span>
                </div>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Page;
