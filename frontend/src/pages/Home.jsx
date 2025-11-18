import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Kandy Golden Crown Hotel</h1>
      <p className="text-gray-700 mb-6">Luxury hotel in the heart of Kandy. Rooms, food, and comfort await!</p>
      <Link to="/hotel-detail" className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">View Hotel & Book</Link>
    </div>
  );
}
