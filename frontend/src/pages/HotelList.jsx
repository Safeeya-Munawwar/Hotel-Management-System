import React from "react";
import HotelCard from "../components/HotelCard";

// For now, hardcode some hotels
const hotels = [
  {
    id: "1",
    name: "The Golden Crown",
    location: "Colombo, Sri Lanka",
    pricePerNight: 120,
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg"
    ],
  },
  {
    id: "2",
    name: "Sea View Resort",
    location: "Galle, Sri Lanka",
    pricePerNight: 90,
    images: [
      "https://example.com/sea1.jpg",
      "https://example.com/sea2.jpg"
    ],
  },
];

export default function HotelList() {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}
