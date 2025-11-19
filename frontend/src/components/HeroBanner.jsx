import React from 'react'
export default function HeroBanner() {
  return (
    <section className="relative w-full h-[650px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/banner.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Box */}
      <div className="absolute top-1/2 right-16 -translate-y-1/2 
        bg-black/50 backdrop-blur-sm p-10 max-w-[480px] text-white"
      >
        <h1 className="text-4xl font-light mb-4">
          THE NET<br />LANKA, KANDY
        </h1>

        <p className="text-sm leading-relaxed mb-4 text-gray-200">
          The Net Lanka Hotel, Kandy offers you the opportunity to experience the
          quintessence of Sri Lankan hospitality...
        </p>

        <a href="/" className="underline text-sm hover:text-gold">
          Read More
        </a>
      </div>

    </section>
  );
}

