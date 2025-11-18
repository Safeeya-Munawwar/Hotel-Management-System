import React from 'react'

export default function OfferSection() {
  return (
    <section className="w-full bg-white py-20">
      <h2 className="text-center text-4xl font-serif mb-16">
        Special Offers
      </h2>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
        
        {/* LEFT TEXT */}
        <div className="bg-[#f0f0f0] px-20 py-24 flex flex-col justify-center">
          <h3 className="text-2xl font-serif mb-6">
            International Dinner Buffet
          </h3>

          <p className="text-gray-700 leading-7 mb-8 w-[80%]">
            Enjoy a fantastic dinner buffet at The Golden Crown, Kandy
            which is now being the Talk of the Town...
          </p>

          <a href="#" className="underline mb-10 text-gray-600">
            Read More
          </a>

          <button className="bg-[#C7A348] text-black px-8 py-3 text-sm tracking-wider w-fit">
            BOOK NOW
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/offer.jpg"
            className="w-full h-full object-cover"
            alt="Dinner Offer"
          />
        </div>

      </div>
      <div className="w-full flex justify-center mt-12">
  <a
    href="/offers"
    className="text-gray-700 tracking-widest text-sm border border-gray-400 px-10 py-3 hover:bg-gray-100 transition"
  >
    ALL OFFERS
  </a>
</div>

    </section>
  );
}

