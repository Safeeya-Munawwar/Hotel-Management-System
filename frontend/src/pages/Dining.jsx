import React, { useEffect, useState } from "react";
import Booking from "../components/Booking";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function DiningPage() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

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

  const diningImages = [
    { src: "/images/savana-tab.JPG", alt: "Savana" },
    { src: "/images/long-bar-photo.JPG", alt: "Long Bar" },
    { src: "/images/banner-treat-nw.JPG", alt: "Treats" },
    { src: "/images/inroom-dining-banner-new.JPG", alt: "In Room Dining" },
    { src: "/images/high-tea-banner.JPG", alt: "High Tea" },
  ];

  // Custom Arrows
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 -right-5 transform -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg cursor-pointer z-10 hover:bg-white transition"
      onClick={onClick}
    >
      <FaChevronRight className="text-black text-xl" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 -left-5 transform -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg cursor-pointer z-10 hover:bg-white transition"
      onClick={onClick}
    >
      <FaChevronLeft className="text-black text-xl" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  };

  // Auto detect open/closed
  const isRestaurantOpen = () => {
    const now = new Date();

    // Convert to minutes for easier comparison
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const openingTime = 8 * 60; // 8:00 AM
    const closingTime = 24 * 60; // 12:00 AM (midnight)

    // If current time is between 8:00 AM and midnight
    return currentMinutes >= openingTime && currentMinutes < closingTime;
  };

  const isOpen = isRestaurantOpen();

  return (
    <div className="font-poppins bg-white text-[#222]">
      {/* ---------------------------- HERO HEADER ---------------------------- */}
      <div
        className="w-full h-[400px] md:h-[560px] bg-cover bg-center relative flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/dining-header.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div
          className={`
  absolute bottom-10 right-10 w-[440px] 
  bg-black/80 text-white p-6 
  backdrop-blur-sm shadow-lg
  border-none
  flex items-center justify-end
  transition-all duration-700 ease-out
  ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
`}
        >
          {/* Text */}
          <h2 className="text-2xl leading-snug text-right mr-4">
            Beyond The <br />
            Boundaries Of Taste...
          </h2>

          {/* Vertical Line */}
          <div className="w-[2px] bg-white h-12"></div>
        </div>
      </div>

      {/* ---------------------------- BOOKING FORM ---------------------------- */}
      <Booking />

      {/* ---------------------- DINING TITLE & DESCRIPTION ---------------------- */}
      <div className="w-full text-center mt-10 px-4">
        {" "}
        <h2 className="text-3xl font-semibold tracking-wide">Dining</h2>
        <p className="text-gray-700 mt-6 leading-relaxed max-w-3xl mx-auto text-[15px]">
          Indulge in sumptuous meals during your stay. The Golden Crown, Kandy
          serves a range of Asian cuisine as well as Western, bringing you the
          flavours from around the world.
        </p>
      </div>

      <section className="relative w-full h-[500px] overflow-hidden mt-10">
        {" "}
        {/* Section Image */}
        <img
          src="/images/dining-section.JPG"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        {/* Text Box */}
        <div
          className="absolute top-1/2 left-16 -translate-y-1/2 
  bg-white/80 backdrop-blur-sm p-10 max-w-[480px] text-black h-[250px]"
        >
          <h1 className="text-4xl font-light mb-6">DINING</h1>

          <p className="text-base leading-relaxed mt-2 mb-4 text-black text-justify">
            Indulge in sumptuous meals during your stay. The Golden Crown, Kandy
            serves a range of Asian cuisine as well as Western, bringing you the
            flavours from around the world.
          </p>
        </div>
      </section>

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

                    {isOpen ? (
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

      {/* ---------------------- Dining Gallery Slider ---------------------- */}
      <div className="dining-gallery my-16 w-full">
        <Slider {...settings}>
          {diningImages.map((img, index) => (
            <div key={index} className="w-full">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[600px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
