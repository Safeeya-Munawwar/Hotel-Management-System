import React, { useState } from "react";

const locations = [
  {
    title: "Giragama Tea Plantation",
    text: "The Giragama Tea Plantation dates back centuries. Visitors can observe the processing facility and become more familiar with the types of teas and how the grading takes place.",
    img: "/e1.jpg",
  },
  {
    title: "Degaldoruwa Temple",
    text: "Degaldoruwa Temple is a historic Buddhist temple known for its frescoes and tranquil setting.",
    img: "/e2.jpg",
  },
  {
    title: "Lankathilaka Temple",
    text: "Lankathilaka Temple is a magnificent example of Kandyan architecture with beautiful murals.",
    img: "/e4.jpg",
  },
  {
    title: "Victoria Golf Course",
    text: "Victoria Golf Course offers a scenic and challenging course set amidst rolling hills and tea plantations.",
    img: "/e5.jpg",
  },
  {
    title: "Embakke Devalaya",
    text: "Embakke Devalaya is a historic temple with rich cultural heritage.",
    img: "/e6.jpg",
  },
  {
    title: "Bahirawakanda Temple",
    text: "Bahirawakanda Temple offers panoramic views of Kandy and a giant Buddha statue.",
    img: "/e7.jpg",
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  const goNext = () => setActive((prev) => (prev + 1) % locations.length);
  const goPrev = () => setActive((prev) => (prev - 1 + locations.length) % locations.length);

  const current = locations[active];

  return (
   <><div className=" mt-24">
              {/* Heading */}
        <h2 className="text-4xl font-serif mb-8 text-center">
          Experience with Us
        </h2>
   </div>
    <section
      className="w-full h-[650px] relative flex items-center justify-start"
      style={{
        backgroundImage: `url(${current.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >  <h2 className="text-4xl font-serif mb-8 text-center">
          Experience with Us
        </h2>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Left Side Boxes (nav + content) */}
      <div className="absolute left-16 top-1/2 -translate-y-1/2 flex gap-4">
        {/* Navigation Box */}
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg w-72 h-96 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            {locations.map((loc, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`text-left py-2 px-3 rounded transition-all duration-300 ${
                  active === idx
                    ? "font-bold border-l-4 border-black text-gray-900"
                    : "opacity-70 hover:opacity-100 text-gray-700"
                }`}
              >
                {loc.title}
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-between mt-4">
            <button
              onClick={goPrev}
              className="text-black w-10 h-10 flex items-center justify-center hover:bg-gray-600 rounded-sm transition"
            >
              &#8593;
            </button>
            <button
              onClick={goNext}
              className="text-black w-10 h-10 flex items-center justify-center hover:bg-gray-600  rounded-sm transition"
            >
              &#8595;
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg w-72 h-96 shadow-lg">
          <h2 className="text-2xl font-serif mb-4">{current.title}</h2>
          <p className="text-gray-700 text-sm leading-6">{current.text}</p>
        </div>
      </div>
    </section></>
  );
}
