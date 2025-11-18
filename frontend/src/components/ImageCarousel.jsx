import React, { useState } from "react";

export default function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
      <img src={images[current]} alt="hotel" className="w-full h-full object-cover" />
      <button onClick={prev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-40 px-3 py-1 rounded-full hover:bg-opacity-70">‹</button>
      <button onClick={next} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-40 px-3 py-1 rounded-full hover:bg-opacity-70">›</button>
    </div>
  );
}
