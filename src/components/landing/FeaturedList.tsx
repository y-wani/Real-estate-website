"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import getLocation from "@/api/getLocation";
import getLocationID from "@/api/getLocationId";
import getFeaturedRestaurants from "@/api/getFeaturedRestaurants"; // Import the function to fetch restaurants
import { useRouter } from "next/navigation";
import "../../styles/landing.css";
import ImageFallback from "../Accessory/ImageFallback";
import dummyimg from "../../../public/download.png";

const FeaturedList = () => {
  const router = useRouter();
  const [userCity, setUserCity] = useState<{ city: string | null; stateCode: string | null }>({
    city: "New York",
    stateCode: "NY",
  });
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserCity = async () => {
      try {
        const location = await getLocation();
        setUserCity(location);
        console.log("Fetched Location:", location);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchUserCity();
  }, []);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        if (userCity.city && userCity.stateCode) {
          const locationId = await getLocationID(userCity.city); // Get location ID based on user's city
          if (locationId !== null) {  // Check that locationId is not null
            const response = await getFeaturedRestaurants(locationId); // Only call if locationId is valid
            if (response && response.data && response.data.data) {
              setRestaurants(response.data.data.slice(0, 4)); // Slice to show only the top 4 restaurants
            } else {
              console.error("Invalid response structure from getFeaturedRestaurants.");
              setError("Failed to load featured restaurants.");
            }
          } else {
            console.error("Location ID is null.");
            setError("Failed to get location ID.");
          }
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setError("Failed to fetch featured restaurants.");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [userCity]);

  const handleShowMore = () => {
    const { city, stateCode } = userCity;
    console.log("Redirecting to:", `/listings/${stateCode}/${city}`);
    router.push(`/listings/${stateCode}/${city}`);
  };

  return (
    <div className="card-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        restaurants.map((restaurant, index) => (
          <div key={index} className="card">
            <ImageFallback
              src={restaurant.heroImgUrl}
              fallbackSrc={dummyimg}
              alt={restaurant.heroImgUrl ? `${restaurant.name} image` : "Placeholder image"}
              width={300}
              height={200}
              style={{ objectFit: "cover" }}
              className="card-img"
            />
            <span className="card-desc">{restaurant.name}</span>
            <span className="card-price">Rating: {restaurant.averageRating}</span>
          </div>
        ))
      )}
      <button className="see-more-button" onClick={handleShowMore}>
        <FaLongArrowAltRight color="white" size={35} />
      </button>
    </div>
  );
};

export default FeaturedList;
