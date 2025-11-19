import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Booking from "../../components/Booking"; // path adjust if needed

export default function ReservationPage() {
  const { slug } = useParams();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 300);
  }, []);

  // Map slugs to restaurant names/images
  const restaurantData = {
    savana: {
      name: "Savana",
      headerImage: "/images/savana-tab.JPG",
      tagline: "The Golden Hospitality",
      image: "/images/dining2.PNG",
    },
    "long-bar": {
      name: "Long Bar",
      headerImage: "/images/longbar-header.PNG",
      tagline: "Where Good Times Begin",
      image: "/images/reservation.jpg",
    },
    treats: {
      name: "Treats",
      headerImage: "/images/banner-treat-nw.jpg",
      tagline: "Fresh. Delightful. Relaxed",
      image: "/images/dining3.PNG",
    },
    "high-tea": {
      name: "High Tea",
      headerImage: "/images/high-tea-banner.jpg",
      tagline: "Elegant Evenings, Elevated Taste",
      image: "/images/dining3-3.PNG",
    },
    "in-room-dining": {
      name: "In Room Dining",
      headerImage: "/images/inroom-dining-banner-new.jpg",
      tagline: "Dining at Your Doorstep",
      image: "/images/dining-inroom.jpg",
    },
    "sky-lounge": {
      name: "Sky Lounge",
      headerImage: "/images/sky-lounge-header.JPG",
      tagline: "Dine Above the City",
      image: "/images/sky-lounge-center.JPG",
    },
  };

  const restaurant = restaurantData[slug];

  if (!restaurant)
    return (
      <p className="p-10 text-center text-red-600">Restaurant not found.</p>
    );

  return (
    <div className="font-poppins bg-white text-[#222]">
      {/* ======================= HERO HEADER ======================= */}
      <div
        className="w-full h-[400px] md:h-[560px] bg-cover bg-center relative flex items-center justify-center text-white"
        style={{ backgroundImage: `url('${restaurant.headerImage}')` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div
          className={`
          absolute bottom-10 right-10 w-[440px] 
          bg-black/80 text-white p-6 
          backdrop-blur-sm shadow-lg
          flex items-center justify-end
          transition-all duration-700 ease-out
          ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}
        >
          {/* Title */}
          <h2 className="text-2xl leading-snug text-right mr-4">
            {restaurant.name} <br />
            {restaurant.tagline}
          </h2>

          {/* Vertical Line */}
          <div className="w-[2px] bg-white h-12"></div>
        </div>
      </div>

      {/* ======================= BOOKING FORM ======================= */}
      <Booking />
      {/* Page Header */}
      <div className="py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Reservation - {restaurant.name}
        </h1>
      </div>

      {/* Main Section: Image + Form */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Image */}
        <div className="flex items-center justify-center">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Form */}
        <div>
          <form className="space-y-4 bg-white p-6 rounded shadow-lg">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title *
              </label>
              <select className="w-full border px-3 py-2 rounded mt-1">
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full border px-3 py-2 rounded mt-1"
                required
              />
            </div>

            {/* E-mail */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-mail *
              </label>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full border px-3 py-2 rounded mt-1"
                required
              />
            </div>

            {/* Telephone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Telephone Number *
              </label>
              <input
                type="tel"
                placeholder="Telephone number"
                className="w-full border px-3 py-2 rounded mt-1"
                required
              />
            </div>

            {/* Desired Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Desired Date *
              </label>
              <input
                type="date"
                className="w-full border px-3 py-2 rounded mt-1"
                required
              />
            </div>

            {/* Dining Option */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dining Option *
              </label>
              <input
                type="text"
                value={restaurant.name}
                readOnly
                className="w-full border px-3 py-2 rounded mt-1 bg-gray-100"
              />
            </div>

            {/* Number of Adults */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Adults *
              </label>
              <input
                type="number"
                min={1}
                placeholder="No. of adults"
                className="w-full border px-3 py-2 rounded mt-1"
                required
              />
            </div>

            {/* Number of Children */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Children
              </label>
              <input
                type="number"
                min={0}
                placeholder="No. of children"
                className="w-full border px-3 py-2 rounded mt-1"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                placeholder="Type your message here..."
                className="w-full border px-3 py-2 rounded mt-1"
                rows={4}
                required
              />
            </div>

            {/* Consent */}
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" required />
              <p className="text-sm text-gray-600">
                I consent to my personal data being stored and processed for the
                purposes of processing my inquiry. For more information view our{" "}
                <a href="privacy.com" className="underline text-[#D4AF37]">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#D4AF37] text-white font-semibold rounded hover:bg-yellow-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
