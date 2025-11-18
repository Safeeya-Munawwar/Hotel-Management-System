import React, { useEffect, useState } from "react";

export default function HeroVideo() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500); // delay effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[650px] overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Bottom Right Text */}
      <div
        className={`
          absolute bottom-10 right-10 max-w-[380px] 
          bg-black/50 text-white p-5 
          backdrop-blur-sm shadow-lg border border-white/10
          transition-all duration-700 ease-out
          ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}
      >
        <h2 className="text-xl leading-snug font-light">
          Five Star Heaven Of Modern<br />
          Luxury And Historic Charms...
        </h2>
      </div>
    </section>
  );
}
