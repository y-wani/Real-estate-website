import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Import leaflet to customize icons

// Define custom icon for the marker
const customMarkerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

const RestaurantMap: React.FC = () => {
  const position: [number, number] = [37.7749, -122.4194]; // Coordinates for San Francisco

  return (
    <div style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{
          height: "600px",
          width: "70%",
          margin: "10px 10px",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customMarkerIcon}>
          <Popup>
            <div style={{ fontSize: "14px", textAlign: "center" }}>
              <strong>Saptami Restaurant</strong><br />
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default RestaurantMap;
