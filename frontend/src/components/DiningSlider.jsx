import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// -------------------------
// RESTAURANT DATA
// -------------------------
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
      "Sip a cup of artisan tea or coffee at the roof top garden while enjoying the fresh breeze.",
    hours: "3:00 PM to 7:00 PM",
    slug: "high-tea",
  },
  {
    name: "In Room Dining",
    image: "/images/dining-inroom.jpg",
    description:
      "For a more intimate dining experience, request in-room dining and our team will deliver your food right to your doorstep.",
    hours: "24 Hours",
    slug: "in-room-dining",
  },
  {
    name: "Sky Lounge",
    image: "/images/sky-lounge-header.JPG",
    description:
      "Enjoy panoramic city views and a sophisticated menu at our rooftop Sky Lounge.",
    hours: "5:00 PM to 1:00 AM",
    slug: "sky-lounge",
  },
];

// -------------------------
// OPEN / CLOSE CHECKER
// -------------------------
function isRestaurantOpen(hours) {
  if (hours.toLowerCase() === "24 hours") return true;

  const [openTime, closeTime] = hours.split(" to ");
  const now = new Date();

  const parseTime = (timeStr) => {
    const [time, meridian] = timeStr.trim().split(" ");
    let [h, m] = time.split(":").map(Number);

    if (meridian === "PM" && h !== 12) h += 12;
    if (meridian === "AM" && h === 12) h = 0;

    return { hours: h, minutes: m };
  };

  const { hours: openH, minutes: openM } = parseTime(openTime);
  const { hours: closeH, minutes: closeM } = parseTime(closeTime);

  const openDate = new Date();
  openDate.setHours(openH, openM, 0);

  const closeDate = new Date();
  closeDate.setHours(closeH, closeM, 0);

  return now >= openDate && now <= closeDate;
}

// -------------------------
// MAIN COMPONENT
// -------------------------
export default function DiningSlider() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [navReady, setNavReady] = useState(false);
  const navigate = useNavigate();

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // Navigation mount fix
  useEffect(() => setNavReady(true), []);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [navReady]);

  return (
    <div className="relative w-full py-20">
      {/* HEADING */}
      <h2 className="text-4xl font-serif mb-10 text-center">Wine & Dine</h2>

      <div className="px-12 lg:px-20">
        {navReady && (
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation]}
            slidesPerView={3}
            centeredSlides
            spaceBetween={20}
            loop
            loopedSlides={restaurants.length}
            speed={600}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
            onRealIndexChange={(s) => setActiveIndex(s.realIndex + 1)}
          >
            {restaurants.map((item) => (
              <SwiperSlide key={item.slug}>
                {({ isActive }) => (
                  <div
                    className={`relative h-[580px] group overflow-hidden transition-all duration-700 ${
                      isActive ? "-mt-12" : "mt-12"
                    }`}
                  >
                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
                    />

                    {/* TITLE */}
                    <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl font-semibold drop-shadow-xl">
                      {item.name}
                    </p>

                    {/* HOVER CARD */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/70 backdrop-blur-sm border border-gray-300 w-[80%] px-10 py-12 text-center shadow-md opacity-0 translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 pointer-events-auto">
                        <h2 className="text-3xl font-semibold mb-4">
                          {item.name}
                        </h2>

                        <p className="text-gray-700 mb-6">{item.description}</p>

                        {/* OPEN / CLOSED */}
                        <p className="text-black font-medium mb-2">
                          Opening Hours
                        </p>
                        <p className="text-gray-700 mb-4">
                          <span className="inline-flex items-center gap-2">
                            ⏱ {item.hours} -
                            <span
                              className={
                                isRestaurantOpen(item.hours)
                                  ? "text-green-600"
                                  : "text-red-600"
                              }
                            >
                              {isRestaurantOpen(item.hours) ? "Open" : "Closed"}
                            </span>
                          </span>
                        </p>

                        {/* DETAILS PAGE */}
                        <p
                          onClick={() => navigate(`/restaurants/${item.slug}`)}
                          className="underline text-gray-800 block mb-6 cursor-pointer"
                        >
                          Find Out More
                        </p>

                        {/* RESERVATION PAGE */}
                        <button
                          onClick={() => navigate(`/reservation/${item.slug}`)}
                          className="bg-[#c3a24c] text-white px-8 py-3 uppercase tracking-wider"
                        >
                          Make a Reservation
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center gap-6 -mt-20 z-20 mb-5">
        <button
          ref={prevRef}
          className="w-12 h-12 flex items-center justify-center border border-black rounded-full text-xl"
        >
          ‹
        </button>

        <span className="text-gray-700 text-lg tracking-widest">
          {activeIndex.toString().padStart(2, "0")} /{" "}
          {restaurants.length.toString().padStart(2, "0")}
        </span>

        <button
          ref={nextRef}
          className="w-12 h-12 flex items-center justify-center border border-black rounded-full text-xl"
        >
          ›
        </button>
      </div>
    </div>
  );
}
