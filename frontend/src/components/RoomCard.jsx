import React from "react";

export default function RoomCard({ room }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{room.type}</h3>
      <p>Capacity: {room.capacity} guests</p>
      <p className="text-green-700 font-bold mt-1">Rs. {room.price} / night</p>
    </div>
  );
}
