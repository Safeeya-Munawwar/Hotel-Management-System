import React, { useState } from "react";
import Booking from "../components/Booking"; // adjust the path if needed


const restaurants = [
  {
    name: "The Royal Dine",
    description: "Serving authentic Asian and Western cuisine with a modern twist.",
    images: ["/images/dining1.PNG", "/images/dining1-2.PNG", "/images/dining1-3.PNG"],
  },
  {
    name: "Sunset Lounge",
    description: "Relax and enjoy cocktails with a breathtaking view of Kandy hills.",
    images: ["/images/dining2.PNG", "/images/dining2-2.PNG", "/images/dining2-3.PNG"],
  },
  {
    name: "Cafe Delight",
    description: "Casual dining, pastries, and fresh coffee for your leisure moments.",
    images: ["/images/dining3.PNG", "/images/dining3-2.PNG", "/images/dining3-3.PNG"],
  },
];

const awards = [
  "2020 KAYAK Travel Awards - The Golden Crown Hotel",
  "Tripadvisor Recognition 2024",
  "Tripadvisor Recognition 2025",
];

const DiningPage = () => {
  const [currentImage, setCurrentImage] = useState(restaurants.map(() => 0));

  const nextImage = (index) => {
    setCurrentImage((prev) =>
      prev.map((imgIdx, i) =>
        i === index ? (imgIdx + 1) % restaurants[i].images.length : imgIdx
      )
    );
  };

  const prevImage = (index) => {
    setCurrentImage((prev) =>
      prev.map((imgIdx, i) =>
        i === index ? (imgIdx - 1 + restaurants[i].images.length) % restaurants[i].images.length : imgIdx
      )
    );
  };

  return (
    <div className="font-poppins bg-gray-50">

      {/* Hero Section */}
      <div
        className="w-full h-[400px] md:h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white relative"
        style={{ backgroundImage: "url('/images/dining-header.PNG')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg border-b-4 border-yellow-500 pb-2">
            Dining
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto">
            Indulge in sumptuous meals during your stay. The Golden Crown, Kandy serves a range of Asian cuisine as well as Western, bringing you the flavours from around the world.
          </p>
        </div>

        <div className="absolute -bottom-16 w-full px-5">
  <Booking />
</div>
      </div>

      <div className="h-[100px]"></div> {/* Spacing for booking form */}

      {/* Restaurants Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
          Our Restaurants
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden relative group hover:shadow-2xl transition-shadow duration-300">
              {/* Carousel */}
              <img
                src={restaurant.images[currentImage[idx]]}
                alt={restaurant.name}
                className="w-full h-60 object-cover transition duration-500 group-hover:scale-105"
              />
              <button
                onClick={() => prevImage(idx)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
              >
                ‹
              </button>
              <button
                onClick={() => nextImage(idx)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
              >
                ›
              </button>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{restaurant.name}</h3>
                <p className="text-gray-600">{restaurant.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Awards & Recognition</h2>
          <ul className="space-y-2 text-gray-600">
            {awards.map((award, idx) => (
              <li key={idx} className="flex items-center justify-center gap-2">
                <span className="text-yellow-500">★</span>
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Reserve Your Table</h2>
        <p className="text-gray-600 mb-6">Experience fine dining at The Golden Crown. Book your table today.</p>
        <button className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded hover:bg-yellow-600 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DiningPage;
