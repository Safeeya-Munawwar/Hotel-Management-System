import React from "react";
import { ChevronDown } from "lucide-react";

export default function Booking() {
  return (
    <div className="w-full bg-black text-white py-5 px-10 flex justify-center">
      <div className="flex items-center gap-10 text-sm tracking-wide">

        {/* ARRIVAL */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-300">ARRIVAL</span>
          <div className="flex items-center gap-3">
            <span className="text-sm">NOV 18</span>
            <ChevronDown size={18} />
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-10 bg-gray-700"></div>

        {/* DEPARTURE */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-300">DEPARTURE</span>
          <div className="flex items-center gap-3">
            <span className="text-sm">NOV 19</span>
            <ChevronDown size={18} />
          </div>
        </div>

        <div className="w-[1px] h-10 bg-gray-700"></div>

        {/* PROMO CODE */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-300">PROMO CODE</span>
          <input
            type="text"
            placeholder="Enter Code"
            className="bg-transparent border-b border-gray-600 focus:outline-none text-sm"
          />
        </div>

        <div className="w-[1px] h-10 bg-gray-700"></div>

        {/* NATIONALITY */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-300">NATIONALITY</span>
          <div className="flex items-center gap-3">
            <span className="text-sm">NON-SRI LANKAN</span>
            <ChevronDown size={18} />
          </div>
        </div>

        {/* BOOK NOW button */}
        <button className="bg-[#C9A227] px-8 py-3 text-black font-semibold text-sm tracking-wide hover:bg-[#d5b54c] transition">
          BOOK NOW
        </button>

      </div>
    </div>
  );
}
