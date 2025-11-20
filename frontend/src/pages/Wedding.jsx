import React, { useEffect, useState } from "react";
import Booking from "../components/Booking";
import { Link } from "react-router-dom";

export default function Wedding() {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setShowText(true), 500);
      return () => clearTimeout(timer);
    }, []);

    const images = [
        "/images/grand-ballroom.jpg",
        "/images/windsor-ballroom.jpg",
        "/images/lavo.PNG",
        "/images/crown-court.PNG",
      ];

      const [current, setCurrent] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => (prev + 1) % images.length);
        }, 4000); // every 4 seconds
    
        return () => clearInterval(interval);
      }, );

      const [showOverlay, setShowOverlay] = useState(false); // <-- add this

      const [activeHall, setActiveHall] = useState("grand");
      const [showGallery, setShowGallery] = useState(false);
const [galleryIndex, setGalleryIndex] = useState(0);


  const halls = [
    {
      id: "grand",
      title: "Grand Ballroom",
      img: "https://www.thegoldencrownhotel.com/images/site-specific/golden_crown/weddings/grand-ballroom-1.jpg",
      caption: "The Golden Crown Hotel - Grand Ballroom",
      desc: `The largest 'pillar-less' banquet hall in Kandy, the Grand Ballroom offers your guests an uninterrupted view of the interior. The 8-meter high, four sectioned high ceiling feature thousand-crystal chandeliers.`,
      capacity: "2000",
      sqm: "1057",
      height: "8 m",
      facilities: [
        "Day-use room",
        "Personal Banquet Coordinator",
        "Mic and podium",
        "36,000 shades of lights to match the theme",
        "Bandstand and dance floor",
        "Bottle of sparkling wine, fruit basket and a cake for a wedding over 350 persons",
        "A traditional oil lamp, registration table, table for cake structure and chair covers with bows",
        "LED screen",
      ],
    },
    {
      id: "crown",
      title: "Crown Court",
      img: "https://www.thegoldencrownhotel.com/images/site-specific/golden_crown/weddings/crown-court-2024.png",
      caption: "The Golden Crown Hotel - Crown Court",
      desc: `The Crown Court is characterized by smooth Corinthian pillars, high ceilings, and crystal chandeliers. The extensive hall can also be partitioned as per your requirements.`,
      capacity: "350",
      sqm: "469",
      height: "8 m",
      facilities: [
        "Day-use room",
        "Personal Banquet Coordinator",
        "Photoshoot venues – rooftop, Infinity Pool, automated Dancing Water Fountain, outdoor backgrounds",
        "Mic and podium",
        "36,000 shades of lights to match the theme",
        "Bandstand and dance floor",
        "Bottle of sparkling wine, fruit basket and a cake for a wedding over 350 persons",
        "A traditional oil lamp, registration table, table for cake structure and chair covers with bows",
        "LED screen",
      ],
    },
    {
      id: "windsor",
      title: "Windsor Ballroom",
      img: "https://www.thegoldencrownhotel.com/images/site-specific/golden_crown/weddings/windsor-ballroom-1.jpg",
      caption: "The Golden Crown Hotel - Windsor Ballroom",
      desc: `The Windsor thematic ballroom is a delightful union of ultra-modernist architecture juxtaposed with traditional motifs to create a unique banquet hall. The reception hall can also be partitioned to provide more intimacy.`,
      capacity: "350",
      sqm: "472",
      height: "5 m",
      facilities: [
        "Day-use room",
        "Personal Banquet Coordinator",
        "Photoshoot venues – rooftop, Infinity Pool, automated Dancing Water Fountain, outdoor backgrounds",
        "Mic and podium",
        "36,000 shades of lights to match the theme",
        "Bandstand and dance floor",
        "Bottle of sparkling wine, fruit basket and a cake for a wedding over 350 persons",
        "A traditional oil lamp, registration table, table for cake structure and chair covers with bows",
        "LED screen",
      ],
    },
    {
      id: "lavo",
      title: "LAVO",
      img: "https://www.thegoldencrownhotel.com/images/site-specific/golden_crown/weddings/lavo-2024.png",
      caption: "The Golden Crown Hotel - Lavo",
      desc: `Situated at the topmost floor of the hotel, Lavo is an exclusive venue to host your parties, cocktail events, dinners and corporate functions. LAVO can entertain guests with its live band and a DJ.`,
      capacity: "175",
      sqm: "11000",
      height: "5 m",
      facilities: [
        "Flexible seating arrangements.",
        "Expansive lounge area.",
        "180° view of the mountains.",
        "Horizontal paneling & exquisitely coved wooden doors.",
        "4 sectioned high ceiling with chandeliers.",
        "Fully animated inlaid lighting system of over 36,000 hues to match the themes of functions.",
      ],
    },
  ];

  // ✅ ADD THIS RIGHT HERE
const activeHallData = halls.find((h) => h.id === activeHall);

  return (
    <div className="font-poppins bg-white text-[#222]">

      {/* ---------------------------- HERO HEADER ---------------------------- */}
      <div className="relative w-full h-[400px] md:h-[560px] overflow-hidden">

        {/* Background images stacked */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Floating Text Box */}
        <div
          className={`
            absolute bottom-10 right-10 w-[440px]
            bg-black/80 text-white p-6
            backdrop-blur-sm shadow-lg
            flex items-center justify-end
            transition-all duration-700 ease-out
            ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          <h2 className="text-2xl leading-snug text-right mr-4">
            Let Us Give Your Dream Day <br />
            A New Wing...
          </h2>

          {/* Vertical Line */}
          <div className="w-[2px] bg-white h-12"></div>
        </div>
      </div>

      {/* ---------------------------- BOOKING FORM ---------------------------- */}
      <Booking />
    

    <div className="w-full text-center mt-10 px-4">
        {" "}
        <h2 className="text-3xl font-semibold tracking-wide">Weddings</h2>
        <p className="text-gray-700 mt-6 leading-relaxed max-w-3xl mx-auto text-[15px]">
          Our four banquet halls — Grand Ballroom, Crown Court, Windsor Ballroom, and
          LAVO — are the perfect venues to host your wedding. Our chefs will delight your
          guests with a selection of Western and Asian cuisine.
        </p>
      </div>

{/* ----------------- BANQUET HALLS SECTION ----------------- */}
{/* ----------------- BANQUET HALLS SECTION ----------------- */}
<section className="mt-16 mb-20">

  {/* Title */}
  <h2 className="text-3xl font-semibold text-center mb-8">Banquet Halls</h2>

  {/* Main Container */}
  <div className="flex bg-gray-100 rounded shadow-md h-[650px] overflow-hidden">

    {/* LEFT SIDE – Hall Selection Tabs */}
    <div className="w-1/4 flex flex-col justify-center items-center relative">
      {/* Vertical Line */}
      <div className="absolute left-4 top-0 h-full w-[2px] bg-gray-300"></div>

      <nav className="space-y-6">
        {halls.map((h) => (
          <button
            key={h.id}
            onClick={() => setActiveHall(h.id)}
            className="relative flex items-center gap-4 group"
          >
            {/* Dot Indicator */}
            <div
              className={`w-4 h-4 rounded-full border-2 absolute -left-[20px] transition-all
                ${activeHall === h.id ? "bg-yellow-500 border-yellow-500" : "bg-white border-gray-400"}
              `}
            ></div>

            {/* Text */}
            <span
              className={`text-left text-[15px] transition-all duration-300
                ${activeHall === h.id ? "text-[#222] font-semibold" : "text-gray-500"}
              `}
            >
              {h.title}
            </span>
          </button>
        ))}
      </nav>
    </div>

{/* RIGHT SIDE – Image with Overlay */}
<div className="w-3/4 relative flex h-full">
  {/* Hall Image as background */}
  <img
    src={activeHallData.img}
    alt={activeHallData.title}
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Base Overlay (Left) */}
  <div className="w-2/5 bg-white/60 backdrop-blur-md p-8 flex flex-col justify-center rounded-l shadow-md z-10">
    <h3 className="text-2xl font-semibold mb-6">{activeHallData.title}</h3>
    <p className="text-gray-700 leading-relaxed mb-8">{activeHallData.desc}</p>

    <div className="flex flex-row gap-6 mb-8">
      <button
        onClick={() => setShowOverlay(true)}
        className="underline text-gray-700 hover:text-black"
      >
        Read More
      </button>
      <button
  type="button"
  className="underline text-gray-700 hover:text-black"
  onClick={() => {
    setShowGallery(true);
    setGalleryIndex(0); // start from first image
  }}
>
  More Images & Videos
</button>


    </div>

    <div className="grid grid-cols-3 gap-6 mb-8">
      <div>
        <h4 className="text-xl font-semibold">{activeHallData.capacity}</h4>
        <p className="text-sm text-gray-600">Max Capacity</p>
      </div>
      <div>
        <h4 className="text-xl font-semibold">{activeHallData.sqm}</h4>
        <p className="text-sm text-gray-600">Square Metres</p>
      </div>
      <div>
        <h4 className="text-xl font-semibold">{activeHallData.height}</h4>
        <p className="text-sm text-gray-600">Height Clearance</p>
      </div>
    </div>

    <a
  href="/images/floor-plan.pdf"
  download
  className="underline text-gray-700 hover:text-black mb-6"
>
  Download Floor Plan
</a>

        {/* ✅ Dynamic INQUIRE NOW Button */}
        <button
          onClick={() =>
            window.location.href = `/wedding-reservation/${activeHallData.id}`
          }
          className="bg-[#D4AF37] text-white px-6 py-3 font-medium tracking-wide shadow hover:bg-yellow-700"
        >
          INQUIRE NOW
        </button>

  </div>

{/* Right Overlay (Side by Side) */}
{showOverlay && (
  <div className="w-2/5 bg-white/60 backdrop-blur-md p-8 flex flex-col justify-start rounded-r shadow-lg z-20 transition-transform duration-500">
    {/* Close Button */}
    <button
      onClick={() => setShowOverlay(false)}
      className="self-end text-gray-500 hover:text-gray-800 text-xl font-bold"
    >
      &times;
    </button>

    <h3 className="text-2xl font-semibold mb-6">
      {activeHallData.title} - Services & Facilities
    </h3>

    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {activeHallData.facilities.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
)}

{showGallery && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    {/* Close button */}
    <button
      onClick={() => setShowGallery(false)}
      className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
    >
      &times;
    </button>

    {/* Left arrow */}
    <button
      onClick={() => setGalleryIndex((prev) => (prev - 1 + images.length) % images.length)}
      className="absolute left-4 text-white text-4xl font-bold z-50"
    >
      &#8592;
    </button>

    {/* Right arrow */}
    <button
      onClick={() => setGalleryIndex((prev) => (prev + 1) % images.length)}
      className="absolute right-4 text-white text-4xl font-bold z-50"
    >
      &#8594;
    </button>

    {/* Image */}
    <img
      src={images[galleryIndex]}
      alt={`Gallery ${galleryIndex + 1}`}
      className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
    />
  </div>
)}

</div>

    </div>
    </section>


{/* ----------------- Types of Weddings Section ----------------- */}
<section className="mb-12 px-6 lg:px-16">

  {/* Section Title */}
  <h2 className="text-3xl font-semibold text-center mb-8">
    Types of Weddings at The Golden Crown
  </h2>

  <div className="bg-white p-6 shadow overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-3">
      
      {/* Left Side – Image (2/3 width) */}
      <div className="lg:col-span-2 relative h-96 lg:h-auto">
        <img 
          src="https://www.thegoldencrownhotel.com/images/site-specific/golden_crown/weddings/indoor-weddings.jpg" 
          alt="Indoor weddings" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side – Text and Button (1/3 width) */}
      <div className="flex flex-col justify-center items-start p-8 text-left">
  <h3 className="text-2xl font-semibold mb-6">Indoor Weddings</h3>
  <p className="text-gray-700 leading-relaxed mb-8">
    Spacious and modern, the wedding halls are the ideal backdrop to make your special day magical. Whether you
    are having an indoor or a traditional wedding, the architecture and interior of our banquet halls will perfectly complement your theme.
    The breathtaking views of the surrounding landscape are ideal to host an outdoor wedding. With the impressive infinity pool area,
    lobby with elaborate carvings and other picturesque locations, The Golden Crown, Kandy will provide glamorous backgrounds for your photos.
    The banquet hall layout you have in mind will surely add glamour to the event.
  </p>

  <Link
  to="/wedding-reservation"  // this points to WeddingReservation.jsx
  className="px-6 py-3 bg-[#D4AF37] text-white font-medium rounded shadow hover:bg-amber-700 transition"
>
  INQUIRE NOW
</Link>


</div>


    </div>
  </div>
</section>


    </div>
  );
}
