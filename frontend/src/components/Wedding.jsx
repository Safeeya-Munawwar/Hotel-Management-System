import React, { useState } from "react";
import { FaUsers, FaBed, FaTv } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function WeddingSection() {
  const order = ["grand", "crown", "windsor"];

  const halls = {
    grand: {
      title: "The Grand Ballroom",
      text:
        "The largest 'pillar-less' banquet hall in Kandy, the Grand Ballroom offers your guests an uninterrupted view of the interior. The 8-meter high, four sectioned high ceiling feature thousand-crystal chandeliers.",
      img: "/w1.jpg",
      icons: [
        { icon: <FaUsers />, label: "Max 2000\nppl" },
        { icon: <FaBed />, label: "Day Use\nRoom" },
        { icon: <FaTv />, label: "LED\nScreen" },
      ],
    },
    crown: {
      title: "The Crown Court",
      text:
        "The Crown Court is characterized by smooth Corinthian pillars, high ceilings, and crystal chandeliers. The extensive hall can also be partitioned as per your requirements.",
      img: "/w2.jpg",
      icons: [
        { icon: <FaUsers />, label: "Max 350\nppl" },
        { icon: <FaBed />, label: "Day Use\nRoom" },
        { icon: <FaTv />, label: "LED\nScreen" },
      ],
    },
    windsor: {
      title: "Windsor",
      text:
        "The Windsor hall offers an elegant setting with luxurious detailing, ideal for intimate gatherings and mid-scale events.",
      img: "/w3.jpg",
      icons: [
        { icon: <FaUsers />, label: "Max 500\nppl" },
        { icon: <FaBed />, label: "Day Use\nRoom" },
        { icon: <FaTv />, label: "LED\nScreen" },
      ],
    },
  };

  const [active, setActive] = useState("grand");

  const goNext = () => {
    const idx = order.indexOf(active);
    const next = order[(idx + 1) % order.length];
    setActive(next);
  };

  const goPrev = () => {
    const idx = order.indexOf(active);
    const prev = order[(idx - 1 + order.length) % order.length];
    setActive(prev);
  };

  const current = halls[active];

  return (
    <section className="relative w-full bg-white overflow-hidden mt-16">
             {/* Heading */}
        <h2 className="text-4xl font-serif mb-8 text-center">
          Weddings
        </h2>
      {/* BACKGROUND IMAGE */}
      <div className="w-full h-[90vh]">
        <img
          src={current.img}
          className="w-full h-full object-cover"
          alt={current.title}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 bg-white shadow-xl p-10 w-[420px] rounded-md">
        <h2 className="text-2xl font-serif mb-4">{current.title}</h2>
        <p className="text-gray-700 text-sm leading-6 mb-6">{current.text}</p>

        <div className="grid grid-cols-3 text-center gap-4 mb-6 text-gray-700">
          {current.icons.map((i, idx) => (
            <div key={idx}>
              <div className="text-xl mx-auto mb-1">{i.icon}</div>
              <p className="text-xs whitespace-pre-line">{i.label}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Link to="#" className="underline text-sm font-medium">
            Read More
          </Link>
          <button className="bg-yellow-500 text-white px-5 py-2 text-sm font-semibold rounded">
            INQUIRE NOW
          </button>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-sm py-4 flex items-center justify-center relative text-sm">
        {/* LEFT ARROW */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center text-lg hover:bg-yellow-500 hover:text-white transition border border-black"
        >
          &#8592;
        </button>

        {/* NAV ITEMS */}
        <div className="flex items-center gap-14">
          {order.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className="relative pb-1 transition-all font-medium"
            >
              {halls[key].title.replace(/^The /, "")}
              {active === key && (
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-yellow-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center text-lg hover:bg-yellow-500 hover:text-white transition border border-black"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
