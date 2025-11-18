import React from "react";
import { Link } from "react-router-dom";

export default function HotelCard({ hotel }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
      <img src={hotel.images[0]} alt={hotel.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{hotel.name}</h3>
        <p className="text-gray-600 mt-2">{hotel.location}</p>
        <p className="text-green-700 mt-2 font-bold">From ${hotel.pricePerNight}</p>
        <Link
          to={`/hotels/${hotel.id}`}
          className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
