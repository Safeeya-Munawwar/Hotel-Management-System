import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Booking from "../../components/Booking"; // path adjust if needed

import { Link } from "react-router-dom";

export default function RestaurantDetails() {
  const { slug } = useParams();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 300);
  }, []);

  const restaurantData = {
    savana: {
      name: "Savana",
      headerImage: "/images/savana-tab.JPG",
      tagline: "The Golden Hospitality",
      overview:
        "Savana is an all-day dining restaurant with ample choices or an a la carte selection to satisfy your cravings. Whether it’s dinner by starlight, a hurried lunch or a leisurely breakfast, our main restaurant elevates every dining experience.",
      centerImage: "/images/savana-center.JPG",
      openingHours: "7:00 AM to 11:30 PM",
      status: "Open",
      cuisine: "International Cuisines",
      dressCode: "Smart Casual",
      contact: "+94 812 244 000",
      featureImage: "/images/savana-features.JPG",
      features: [
        "All Day Dining",
        "International Buffet and À La Carte",
        "Mountain View",
        "Live Music",
      ],
    },

    "long-bar": {
      name: "Long Bar",
      headerImage: "/images/longbar-header.PNG",
      tagline: "Where Good Times Begin",
      overview:
        "The Irish-style bar presents a vibrant ambience where you can enjoy good food, beverages, and cheer. With lively music, signature cocktails, and a warm atmosphere, Long Bar is ideal for unwinding.",
      centerImage: "/images/longbar-center.JPG",
      openingHours: "8:00 AM to 12:00 AM",
      status: "Open",
      cuisine: "Bar Snacks & Beverages",
      dressCode: "Casual",
      contact: "+94 812 244 111",
      featureImage: "/images/long-bar-photo.JPG",
      features: [
        "Irish-Style Bar",
        "Cocktails & Mixology",
        "Live Sports Screening",
        "Evening Music",
      ],
    },

    treats: {
      name: "Treats",
      headerImage: "/images/banner-treat-nw.jpg",
      tagline: "Fresh. Delightful. Relaxed",
      overview:
        "We welcome everyone to indulge in a relaxed experience at TREATS! Enjoy freshly brewed coffee, artisanal pastries, and a selection of sweet and savory delights.",
      centerImage: "/images/treats-center.JPG",
      openingHours: "8:00 AM to 8:00 PM",
      status: "Open",
      cuisine: "Bakery & Coffee Shop",
      dressCode: "Casual",
      contact: "+94 812 244 222",
      featureImage: "/images/treats-feature.JPG",
      features: [
        "Coffee & Pastry Bar",
        "Relaxed Ambience",
        "Fresh Bakes",
        "Indoor Café Seating",
      ],
    },

    "high-tea": {
      name: "High Tea",
      headerImage: "/images/high-tea-banner.jpg",
      tagline: "Elegant Evenings, Elevated Taste",
      overview:
        "Sip a cup of artisan tea or coffee at the rooftop garden while enjoying the fresh breeze or choose an ideal cozy spot indoors. Perfect for an elegant and relaxed evening.",
      centerImage: "/images/hightea-center.JPG",
      openingHours: "3:00 PM to 7:00 PM",
      status: "Open",
      cuisine: "Tea, Coffee & Snacks",
      dressCode: "Smart Casual",
      contact: "+94 812 244 333",
      featureImage: "/images/hightea-feature.JPG",
      features: [
        "Rooftop Garden",
        "Scenic Views",
        "Premium Tea Selection",
        "Cozy Seating Areas",
      ],
    },

    "in-room-dining": {
      name: "In Room Dining",
      headerImage: "/images/inroom-dining-banner-new.jpg",
      tagline: "Dining at Your Doorstep",
      overview:
        "For a more intimate dining experience, simply request in-room dining. Our team will deliver your favorite dishes directly to your room, any time of the day.",
      centerImage: "/images/inroom-center.JPG",
      openingHours: "24 Hours",
      status: "Open",
      cuisine: "International & Local Menu",
      dressCode: "Casual",
      contact: "+94 812 244 444",
      featureImage: "/images/inroom-feature.JPG",
      features: [
        "24/7 Service",
        "Private Dining",
        "Room Delivery",
        "Customizable Orders",
      ],
    },

    "sky-lounge": {
      name: "Sky Lounge",
      headerImage: "/images/sky-lounge-header.JPG",
      tagline: "Dine Above the City",
      overview:
        "Enjoy panoramic city views and a sophisticated menu at our rooftop Sky Lounge — perfect for evening cocktails, romantic dinners, or relaxed gatherings.",
      centerImage: "/images/sky-lounge-center.JPG",
      openingHours: "5:00 PM to 1:00 AM",
      status: "Open",
      cuisine: "Cocktails & Fusion Dining",
      dressCode: "Smart Casual",
      contact: "+94 812 244 555",
      featureImage: "/images/sky-lounge-feature.JPG",
      features: [
        "Rooftop City Views",
        "Signature Cocktails",
        "Modern Fusion Cuisine",
        "Live DJ (Weekends)",
      ],
    },
  };

  const restaurants = [
    {
      name: "Savana",
      image: "/images/dining-saravana.JPG",
      description:
        "Savana is an all-day dining restaurant with ample choices or an a la carte selection to satisfy your cravings.",
      hours: "7:00 AM to 11:30 PM",
      slug: "savana",
    },
    {
      name: "Long Bar",
      image: "/images/dining-longbar.jpg",
      description:
        "The Irish-style bar presents a vibrant ambience where you can enjoy good food, beverages and cheer.",
      hours: "8:00 AM to 12:00 AM",
      slug: "long-bar",
    },
    {
      name: "Treats",
      image: "/images/dining-treats.jpg",
      description:
        "We welcome everyone to indulge in a relaxed experience at our coffee shop – TREATS!",
      hours: "8:00 AM to 8:00 PM",
      slug: "treats",
    },
    {
      name: "High Tea",
      image: "/images/dining-hightea.jpg",
      description:
        "Sip a cup of artisan tea or coffee at the roof top garden while enjoying the fresh breeze or choose an ideal cozy spot at TREATS!",
      hours: "3:00 PM to 7:00 PM",
      slug: "high-tea",
    },
    {
      name: "In Room Dining",
      image: "/images/dining-inroom.jpg",
      description:
        "For a more intimate dining experience, you can simply request in-room dining, and our team will deliver your food right to your doorstep.",
      hours: "24 Hours",
      slug: "in-room-dining",
    },
    {
      name: "Sky Lounge",
      image: "/images/sky-lounge-header.JPG",
      description:
        "Enjoy panoramic city views and a sophisticated menu at our rooftop Sky Lounge, perfect for evening cocktails or casual dining.",
      hours: "5:00 PM to 1:00 AM",
      slug: "sky-lounge",
    },
  ];

  const restaurant = restaurantData[slug];

  if (!restaurant) return <p className="p-10">Restaurant not found.</p>;

  // Open / Close
  function isRestaurantOpen(hours) {
    if (hours.toLowerCase() === "24 hours") return true;

    const [openTime, closeTime] = hours.split(" to ");
    const now = new Date();

    const parseTime = (timeStr) => {
      const [time, meridian] = timeStr.trim().split(" ");
      let [hours, minutes] = time.split(":").map(Number);
      if (meridian === "PM" && hours !== 12) hours += 12;
      if (meridian === "AM" && hours === 12) hours = 0;
      return { hours, minutes };
    };

    const { hours: openH, minutes: openM } = parseTime(openTime);
    const { hours: closeH, minutes: closeM } = parseTime(closeTime);

    const openDate = new Date();
    openDate.setHours(openH, openM, 0);

    const closeDate = new Date();
    closeDate.setHours(closeH, closeM, 0);

    return now >= openDate && now <= closeDate;
  }

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
            ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
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

      {/* ======================= CONTENT SECTION ======================= */}
      <div className="w-full text-center mt-10 px-4">
        {" "}
        <h2 className="text-3xl font-semibold tracking-wide">
          {restaurant.name}
        </h2>
        <p className="text-gray-700 mt-6 leading-relaxed max-w-3xl mx-auto text-[15px]">
          {restaurant.overview}
        </p>
      </div>

      <section className="relative w-full flex justify-center mt-10">
        <div className="relative w-full max-w-6xl h-[480px] overflow-hidden">
          <img
            src={restaurant.centerImage}
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />
        </div>
      </section>

      <div className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
          {/* ---------------- LEFT COLUMN: Overview ---------------- */}
          <div className="md:w-2/3 tracking-wide leading-relaxed">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">OVERVIEW</h2>
            <p className="text-justify mb-2">{restaurant.overview}</p>
            <p className="mb-2">
              <strong>Dress Code:</strong> {restaurant.dressCode}
            </p>
          </div>

          {/* ---------------- VERTICAL LINE ---------------- */}
          <div className="hidden md:block w-px bg-gray-300 mx-6"></div>

          {/* ---------------- RIGHT COLUMN: Details + Button ---------------- */}
          <div className="md:w-1/3 flex flex-col gap-6 tracking-wide">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold mb-2 tracking-tight">
                RESTAURANT DETAILS
              </h2>

              {/* Opening Hours with Open/Closed */}
              <p>
                <strong>Opening Hours:</strong> {restaurant.openingHours} -{" "}
                <span
                  className={`font-semibold ${
                    isRestaurantOpen(restaurant.openingHours)
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {isRestaurantOpen(restaurant.openingHours)
                    ? "Open"
                    : "Closed"}
                </span>
              </p>

              <p>
                <strong>Cuisine:</strong> {restaurant.cuisine}
              </p>
              <p>
                <strong>Contact Number:</strong> {restaurant.contact}
              </p>
            </div>

            {/* Reservation Button */}
            <div className="text-black font-semibold">
              <Link
                to={`/reservation/${slug}`}
                className="inline-block px-6 py-4 bg-[#D4AF37] text-white hover:bg-yellow-700 transition"
              >
                Make A Reservation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-start md:items-center">
          {/* ---------------- LEFT COLUMN: Image ---------------- */}
          <div className="md:w-1/2">
            <img
              src={restaurant.featureImage || restaurant.headerImage}
              alt={`${restaurant.name} features`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* ---------------- RIGHT COLUMN: Features ---------------- */}
          <div className="md:w-1/2 flex flex-col justify-center gap-4">
            <h2 className="text-2xl font-bold mb-4">FEATURES</h2>
            <ul className="space-y-2">
              {restaurant.features.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  {/* Arrow bullet */}
                  <span className="text-black text-xl font-bold">⯈</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Our Restaurants */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-semibold mb-8">Our Restaurants</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.name}
              className="relative group overflow-hidden rounded-lg shadow-lg h-[450px]"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Always visible name at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 text-black text-center py-4 font-semibold text-lg z-10">
                {restaurant.name}
              </div>

              {/* Overlay on hover */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6
             bg-white/80 backdrop-blur-sm 
             translate-y-full group-hover:translate-y-0 
             transition-transform duration-500 ease-in-out z-20"
              >
                <div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 
                  text-left space-y-4"
                >
                  <h3 className="text-black text-2xl font-semibold">
                    {restaurant.name}
                  </h3>

                  <p className="text-black text-justify">
                    {restaurant.description}
                  </p>

                  <div className="flex justify-between items-center w-full">
                    <p className="text-black font-medium">Opening Hours:</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-black">8:00 AM – 12:00 AM</span>

                    {isRestaurantOpen ? (
                      <span className="text-green-600 font-semibold">Open</span>
                    ) : (
                      <span className="text-red-600 font-semibold">Closed</span>
                    )}
                  </div>

                  <div className="space-y-5">
                    {/* Find Out More link */}
                    <div className="text-black font-semibold">
                      <Link
                        to={`/restaurants/${restaurant.slug}`}
                        className="text-black underline underline-offset-4 hover:text-yellow-700  transition"
                      >
                        Find Out More
                      </Link>
                    </div>

                    {/* Reservation Button */}
                    <div className="text-black font-semibold">
                      <Link
                        to={`/reservation/${restaurant.slug}`}
                        className="inline-block px-6 py-4 bg-[#D4AF37] text-white 
                 hover:bg-yellow-700 transition"
                      >
                        Make A Reservation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
