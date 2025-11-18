import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm({ onSubmit }) {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ checkIn, checkOut, guests });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block mb-1 font-semibold">Check-in</label>
        <ReactDatePicker selected={checkIn} onChange={setCheckIn} className="border rounded p-2 w-full" placeholderText="Select check-in" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Check-out</label>
        <ReactDatePicker selected={checkOut} onChange={setCheckOut} className="border rounded p-2 w-full" placeholderText="Select check-out" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Guests</label>
        <input type="number" min="1" value={guests} onChange={e => setGuests(e.target.value)} className="border rounded p-2 w-full" />
      </div>
      <button type="submit" className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">Book Now</button>
    </form>
  );
}
