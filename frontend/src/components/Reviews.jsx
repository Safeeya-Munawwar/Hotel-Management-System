import React from "react";

const reviews = [
  {
    title: "Great Hotel !",
    text: "The service! The staff went out of their way to make us comfortable and happy. Thanks for the big...",
    name: "Erwin",
    country: "Swaziland",
  },
  {
    title: "Amazing",
    text: "We had our wedding at the hotel. And I must say the food was out of this world!! We stayed one night at...",
    name: "Jani Liyanage",
    country: "Sri Lanka",
  },
  {
    title: "Luxurious hotel",
    text: "Lavish and luxurious hotel with great service. Buffet has both Western and Sri Lankan food with...",
    name: "Francesca",
    country: "United Kingdom",
  },
  {
    title: "Best hotels I have ever stayed in",
    text: "The best hotel I stayed in Sri Lanka. The rooms were much larger than usual. The food was fantastic. Ever...",
    name: "Rahul Kalaiselvan",
    country: "Cameroon",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-4xl font-serif mb-16 tracking-wide">
        Guest Reviews
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Card */}
            <div className="relative border border-gray-300 px-6 py-10 text-center shadow-sm">
              <h3 className="font-serif text-xl mb-4">{review.title}</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {review.text}
              </p>

              {/* Speech bubble arrow */}
              <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-300 rotate-45"></div>
            </div>

            {/* Name + Country */}
            <div className="mt-6 text-center">
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-500 text-sm">{review.country}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
