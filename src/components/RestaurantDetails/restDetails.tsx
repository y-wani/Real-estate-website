import React from "react";
import RestaurantMap from "@/components/Accessory/RestaurantMap";
import dummyimg from "../../../public/listdummy.png";
import ImageFallback from "../Accessory/ImageFallback";
import RatingRadarChart from "../Accessory/RatingRadarCharts";
import getRestDetails from "@/api/getRestDetails";
import { useParams } from "next/navigation";

const RestDetails = () => { 

    const params = useParams();

    const id = Array.isArray(params.id)
    ? decodeURIComponent(params.id[0])
    : decodeURIComponent(params.id || "");

  return (
    <div className="main-details-box">
      {/* About This Restaurant Section */}
      <div className="details-container">
        <h2 className="section-title">About this restaurant</h2>
        <p className="section-description">
          Saptami - our all day dining restaurant offers authentic cuisines with
          efficient service and local knowledge. Saptami offers a plethora of
          cuisines like Indian, Continental, Oriental etc. It is close to both
          the terminals and north Mumbai business hubs with the international
          airport at 1.2 km and domestic airport at 5 km.
        </p>
      </div>

      {/* Restaurant Details Section */}
      <div className="details-container">
        <h2 className="section-title">Restaurant details</h2>
        <div className="property-table">
          {/* Restaurant Name */}
          <div className="property-row">
            <div className="row-headings">
              <span>Name</span>
            </div>
            <div className="row-heading-results">
              <span>Saptami</span>
            </div>
          </div>
          {/* Restaurant Type */}
          <div className="property-row">
            <div className="row-headings">
              <span>Type</span>
            </div>
            <div className="row-heading-results">
              <span>Restaurant</span>
            </div>
          </div>
          {/* Rating */}
          <div className="property-row">
            <div className="row-headings">
              <span>Rating</span>
            </div>
            <div className="row-heading-results">
              <span>5.0</span>
            </div>
          </div>
          {/* Number of Reviews */}
          <div className="property-row">
            <div className="row-headings">
              <span>Number of Reviews</span>
            </div>
            <div className="row-heading-results">
              <span>720</span>
            </div>
          </div>
          {/* Price Range */}
          <div className="property-row">
            <div className="row-headings">
              <span>Price Range</span>
            </div>
            <div className="row-heading-results">
              <span>$1,200 - $2,000</span>
            </div>
          </div>
          {/* Cuisine Types */}
          <div className="property-row">
            <div className="row-headings">
              <span>Cuisine Types</span>
            </div>
            <div className="row-heading-results">
              <span>
                Indian, Asian, Healthy, International, Vegetarian Friendly,
                Vegan Options, Halal, Gluten Free Options
              </span>
            </div>
          </div>
          {/* Address */}
          <div className="property-row">
            <div className="row-headings">
              <span>Address</span>
            </div>
            <div className="row-heading-results">
              <span>
                Holiday Inn Hotel, Lobby Level, Saki Naka Junction, Andheri
                Kurla Road, Andheri East, Mumbai 400072 India
              </span>
            </div>
          </div>
          {/* Contact Email */}
          <div className="property-row">
            <div className="row-headings">
              <span>Contact Email</span>
            </div>
            <div className="row-heading-results">
              <span>saptami@himia.in</span>
            </div>
          </div>
          {/* Operating Hours */}
          <div className="property-row">
            <div className="row-headings">
              <span>Operating Hours</span>
            </div>
            <div className="row-heading-results">
              <span>7:00 AM - 11:30 PM (Sun - Sat)</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="section-title">Address</h2>
        <RestaurantMap />
      </div>
      <div>
        <h2 className="section-title">Photos</h2>
        <div>
          <ImageFallback
            src={dummyimg}
            fallbackSrc={dummyimg}
            alt=""
            width={400}
            height={250}
            style={{ objectFit: "cover", borderRadius: "30px" }}
          />
        </div>
      </div>
      <div>
        <h2 className="section-title">Rating</h2>
        <RatingRadarChart />
      </div>
    </div>
  );
};

export default RestDetails;