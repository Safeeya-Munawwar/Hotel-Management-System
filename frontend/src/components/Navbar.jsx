import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">Kandy Golden Crown</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/hotel-detail" className="hover:text-yellow-300">Hotel</Link>
        <Link to="/menu" className="hover:text-yellow-300">Menu</Link>
      </div>
    </nav>
  );
}
