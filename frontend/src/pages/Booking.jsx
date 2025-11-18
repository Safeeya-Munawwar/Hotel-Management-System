import React from "react";
import { useLocation } from "react-router-dom";

export default function Booking() {
  const location = useLocation();
  const { hotel, booking } = location.state || {};

  if (!hotel || !booking) return <p className="p-6 text-center">No booking data found.</p>;

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-3xl font-bold">{hotel.name} - Booking Confirmation</h2>
      <p><strong>Check-in:</strong> {booking.checkIn?.toLocaleDateString()}</p>
      <p><strong>Check-out:</strong> {booking.checkOut?.toLocaleDateString()}</p>
      <p><strong>Guests:</strong> {booking.guests}</p>
      <p className="text-green-700 font-bold mt-4">Thank you for booking with us!</p>
    </div>
  );
}
