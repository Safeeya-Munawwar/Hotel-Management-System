// C:\Users\Administrator\Projects\hotel-system\frontend\src\pages\Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Example stats data
const stats = [
  { id: 1, title: "Rooms", value: 120 },
  { id: 2, title: "Guests Served", value: 5000 },
  { id: 3, title: "Locations", value: 3 },
];

const slides = [
  { id: 1, image: "/images/slide1.jpg", title: "Luxury & Comfort", subtitle: "Experience the best stay" },
  { id: 2, image: "/images/slide2.jpg", title: "Relax & Unwind", subtitle: "A getaway like no other" },
  { id: 3, image: "/images/slide3.jpg", title: "Exquisite Dining", subtitle: "Taste the finest cuisine" },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-white text-lg md:text-2xl mb-6">{slide.subtitle}</p>
              <Link
                to="/rooms"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <h2 className="text-4xl font-bold text-gray-800">{stat.value}</h2>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          <div className="md:w-1/2">
            <img src="/images/about.jpg" alt="About Us" className="w-full rounded shadow" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">About Our Hotel</h2>
            <p className="text-gray-600">
              Welcome to our luxurious hotel where comfort meets elegance. Enjoy world-class amenities, exquisite dining, and personalized service to make your stay unforgettable.
            </p>
            <Link
              to="/about"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery / Rooms Preview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Rooms & Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/images/room1.jpg" alt="Room 1" className="w-full h-64 object-cover rounded shadow" />
            <img src="/images/room2.jpg" alt="Room 2" className="w-full h-64 object-cover rounded shadow" />
            <img src="/images/room3.jpg" alt="Room 3" className="w-full h-64 object-cover rounded shadow" />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-yellow-500 py-16 text-center text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Stay Today</h2>
        <p className="mb-6">Experience luxury, comfort, and world-class service at our hotel.</p>
        <Link
          to="/rooms"
          className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
