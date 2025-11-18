import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import RoomCard from "../components/RoomCard";
import BookingForm from "../components/BookingForm";
import { useNavigate } from "react-router-dom";

export default function HotelDetail() {
  const navigate = useNavigate();
  const hotel = {
    name: "Kandy Golden Crown",
    location: "Kandy, Sri Lanka",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161c3f0b9",
      "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
      "https://images.unsplash.com/photo-1501117716987-c8e1cf0f75bb",
    ],
    rooms: [
      { type: "Standard Room", price: 12000, capacity: 2 },
      { type: "Deluxe Room", price: 18000, capacity: 4 },
      { type: "Suite", price: 30000, capacity: 5 },
    ]
  };

  const handleBooking = data => {
    navigate("/booking", { state: { hotel, booking: data } });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold">{hotel.name}</h2>
      <p className="text-gray-600">{hotel.location}</p>
      <ImageCarousel images={hotel.images} />

      <div>
        <h3 className="text-2xl font-semibold mt-6">Rooms</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {hotel.rooms.map((room, i) => <RoomCard key={i} room={room} />)}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mt-6">Book a Room</h3>
        <BookingForm onSubmit={handleBooking} />
      </div>
    </div>
  );
}
