import React from "react";
import { FaRulerCombined, FaUserFriends, FaBed } from "react-icons/fa";

const roomList = [
  "Deluxe Room",
  "Deluxe Premium",
  "Junior Suite",
  "Premier Suite",
  "Presidential & Crown Suite",
];

export default function Accommodation() {
  return (
    <section className="relative w-full">

      {/* Page title above the hero (keeps navbar overlap behavior if required) */}
      <h1 className="text-center font-serif text-4xl text-black/95 pt-6 pb-4 tracking-wide">
        Accommodation
      </h1>

      {/* Hero / background */}
      <div
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/room.jpg')" }}
      >
        {/* soft overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Centered content row: left list + right card */}
        <div className="absolute inset-0 flex items-center justify-between px-16 z-10">
          {/* Left column: fixed width so lines and text align consistently */}
          <div className="w-[30%]">
            <ul className="flex flex-col justify-center h-full space-y-6">
              {roomList.map((r, idx) => (
                <li key={r} className="flex items-center gap-6">
                  {/* long thin line - same length for every item */}
                  <span className="w-20 h-[1px] bg-white/90 inline-block"></span>

                  {/* label — use consistent baseline alignment */}
                  <button
                    className={`text-white text-xl font-light tracking-wide text-left`}
                    aria-current={idx === 0 ? "true" : undefined}
                  >
                    {r}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle spacer (flex-grow) keeps both sides away from edges on very wide screens */}
          <div className="flex-1" />

          {/* Right card: fixed width and vertically centered */}
          <div className="w-[420px]">
            <div className="bg-white/95 shadow-xl px-10 py-12 border border-gray-200">
              <h2 className="font-serif text-2xl text-gray-900 mb-5">Deluxe Room</h2>

              <p className="text-gray-700 text-[15px] leading-relaxed mb-8">
                Immerse in the relaxation offered at the fully equipped Deluxe room
                with modern furnishing. The room offers the choice between a plush
                king-sized bed or twin beds.
              </p>

              {/* Icons row */}
              <div className="flex items-center justify-start gap-12 text-gray-700 mb-6">
                <div className="flex flex-col items-center">
                  <FaRulerCombined className="text-xl mb-1" />
                  <span className="text-xs">43 m²</span>
                </div>

                <div className="flex flex-col items-center">
                  <FaUserFriends className="text-xl mb-1" />
                  <span className="text-xs">3 Adults</span>
                </div>

                <div className="flex flex-col items-center">
                  <FaBed className="text-xl mb-1" />
                  <span className="text-xs">Double Bed</span>
                </div>
              </div>

              <a href="#read-more" className="text-sm underline text-gray-800 mb-6 inline-block">
                Read More
              </a>

              <button className="mt-2 w-[150px] py-3 bg-[#c8b04c] hover:bg-[#b89f3d] text-white font-semibold text-sm mx-auto block">
  BOOK NOW
</button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
