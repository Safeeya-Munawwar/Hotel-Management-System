import React from "react";
import { 
  FaDollarSign, 
  FaBuilding, 
  FaUsers, 
  FaAward, 
  FaSpa, 
  FaCouch 
} from "react-icons/fa";

const leftFeatures = [
  { icon: <FaDollarSign />, text: "Best rate guaranteed" },
  { icon: <FaBuilding />, text: "Spacious rooms" },
  { icon: <FaUsers />, text: "Best MICE provider" },
];

const rightFeatures = [
  { icon: <FaAward />, text: "Highest view score" },
  { icon: <FaCouch />, text: "Most modern & comfortable facilities" },
  { icon: <FaSpa />, text: "Spa & Wellness" },
];

export default function WhyBookWithUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">

        {/* Heading */}
        <h2 className="text-4xl font-serif mb-8">
          Why Book with Us
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-16">
          Our 90 rooms with 18 suites, are designed with your comfort in mind and are furnished with modern amenities.
          Mouthwatering aromas waft through the air at our chic all-day dining restaurant, coffee shop, bar or the poolside.
        </p>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

  {/* Left column */}
  <div className="space-y-8">
    {leftFeatures.map((item, i) => (
      <div key={i} className="flex items-center gap-4">
        <div className="text-2xl">{item.icon}</div>

        <div className="flex flex-col w-full">
          <span className="text-left md:text-justify">{item.text}</span>
          <div className="w-32 border-b border-gray-300 mt-1 md:self-stretch md:w-full"></div>
        </div>
      </div>
    ))}
  </div>

  {/* Right column */}
  <div className="space-y-8">
    {rightFeatures.map((item, i) => (
      <div key={i} className="flex items-center gap-4">
        <div className="text-2xl">{item.icon}</div>

        <div className="flex flex-col w-full">
          <span className="text-left md:text-justify">{item.text}</span>
          <div className="w-32 border-b border-gray-300 mt-1 md:self-stretch md:w-full"></div>
        </div>
      </div>
    ))}
  </div>

</div>


        {/* Link */}
        <a 
          href="#more" 
          className="inline-block mt-12 text-sm underline text-gray-700"
        >
          Find Out More
        </a>

      </div>
    </section>
  );
}
