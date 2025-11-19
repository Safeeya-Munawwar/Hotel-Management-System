import React from "react";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";

export default function Stay() {
  return (
    <section className=" py-10 bg-white">
      <h2 className="text-center text-4xl font-serif mb-10  tracking-wide">
        Stay Connected
      </h2>

      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-2">

        {/* LEFT IMAGE */}
        <div className="h-[480px] w-full gap-2">
          <img src="/s1.jpg" className="w-full h-full object-cover" alt="" />
        </div>

        {/* RIGHT GRID */}
        <div className="col-span-2 grid grid-cols-2 grid-rows-2 h-[480px] gap-2">

          {/* TOP LEFT */}
          <div className="relative overflow-hidden">
            <img src="/s2.jpg" className="w-full h-full object-cover" alt="" />
            <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white px-2 py-1 text-[11px] flex justify-between">
              <span>We offer the best suite accommodation & extensive range of banqueting facilities.</span>
              <span className="text-sm">📸</span>
            </div>
          </div>

          {/* TOP RIGHT */}
          <div className="bg-[#00A8FF] text-white p-3 text-[11px] leading-relaxed flex flex-col justify-between">
            <p>
              I stayed here overnight and it was my first time. Rooms were spotless. 
              The buffet dinner was fantastic and tasted best Sri Lankan foods…
            </p>
            <div className="text-right mt-2">
              <FaTwitter className="text-lg" />
            </div>
          </div>

          {/* BOTTOM LEFT */}
          <div className="bg-[#008F7A] text-white p-3 text-[11px] leading-relaxed flex flex-col justify-between">
            <p>
              Net Lanka Hotel, located at the heart of Hill Capital Kandy,
              is luxurious and a breathtaking hotel set amidst lush paddy fields..
            </p>
            <div className="text-right mt-2">
              <FaTripadvisor className="text-lg" />
            </div>
          </div>

          {/* BOTTOM RIGHT */}
          <div className="relative overflow-hidden">
            <img src="/s3.jpg" className="w-full h-full object-cover" alt="" />
            <div className="absolute bottom-0 left-0 w-full bg-[#006EB8] text-white px-2 py-1 text-[11px] flex justify-between">
              <span>Help local children in need make their wishes come true!</span>
              <FaFacebookF className="text-sm" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
