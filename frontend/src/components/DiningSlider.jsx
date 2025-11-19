import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const items = [
  { id: 1, img: "/inroom.jpg", title: "In Room Dining", desc: "For a more intimate dining experience, request in-room dining and our team will deliver your food right to your doorstep." },
  { id: 2, img: "/savana.jpg", title: "Savana", desc: "Experience fine dining with an elegant atmosphere and world-class cuisine." },
  { id: 3, img: "/long.jpg", title: "Long Bar", desc: "Relax with premium drinks and a comfortable lounge ambiance." },
  { id: 4, img: "/feature.jpg", title: "High Tea", desc: "Relax with premium drinks and a comfortable lounge ambiance." },
  { id: 5, img: "/treat.png", title: "Treat", desc: "Relax with premium drinks and a comfortable lounge ambiance." },
];

export default function DiningSlider() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [navReady, setNavReady] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // Ensure navigation buttons are attached after mount
  useEffect(() => {
    setNavReady(true);
  }, []);

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
           {/* Heading */}
        <h2 className="text-4xl font-serif mb-8 text-center">
          Wine & Dine
        </h2>
      <div className="px-12 lg:px-20">
        {navReady && (
          <Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  modules={[Navigation]}
  slidesPerView={3}
  centeredSlides
  spaceBetween={20}
  loop
  loopedSlides={items.length} // <-- add this
  speed={600}
  breakpoints={{
    640: { slidesPerView: 1, centeredSlides: true },
    1024: { slidesPerView: 3, centeredSlides: true },
  }}
  onRealIndexChange={(s) => setActiveIndex(s.realIndex + 1)}
>

            {items.map((item) => (
              <SwiperSlide key={item.id}>
                {({ isActive }) => (
                  <div
                    className={`relative h-[580px] group overflow-hidden transition-all duration-700 ${
                      isActive ? "-mt-12" : "mt-12"
                    }`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
                    />
                    <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl font-semibold drop-shadow-xl">
                      {item.title}
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/70 backdrop-blur-sm border border-gray-300 w-[80%] px-10 py-12 text-center shadow-md opacity-0 translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out pointer-events-auto">
                        <h2 className="text-3xl font-semibold mb-4">{item.title}</h2>
                        <p className="text-gray-700 mb-6">{item.desc}</p>
                        <p className="text-black font-medium mb-2">Opening Hours</p>
                        <p className="text-gray-700 mb-4">
                          <span className="inline-flex items-center gap-2">
                            <span>⏱</span> 8:00 AM to 12:00 AM -{" "}
                            <span className="text-red-500">Closed</span>
                          </span>
                        </p>
                        <a href="#" className="underline text-gray-800 block mb-6">
                          Find Out More
                        </a>
                        <button className="bg-[#c3a24c] text-white px-8 py-3 uppercase tracking-wider">
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

      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center gap-6 -mt-20 z-20 mb-5 ">
        <button ref={prevRef} className="w-12 h-12 flex items-center justify-center border border-black rounded-full text-xl">
          ‹
        </button>
        <span className="text-gray-700 text-lg tracking-widest">
          {activeIndex.toString().padStart(2, "0")} / {items.length.toString().padStart(2, "0")}
        </span>
        <button ref={nextRef} className="w-12 h-12 flex items-center justify-center border border-black rounded-full text-xl">
          ›
        </button>
      </div>
    </div>
  );
}
