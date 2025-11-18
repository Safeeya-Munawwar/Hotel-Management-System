import React from "react";

const ContactPage = () => {
  return (
    <div className="font-poppins bg-gray-50">
      {/* ---------------------- HERO HEADER ---------------------- */}
      <div
        className="w-full h-[380px] md:h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white relative"
        style={{ backgroundImage: "url('/images/header.PNG')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

        <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg border-b-4 border-yellow-500 pb-2">
          Contact Us
        </h1>

        {/* ---- BOOKING FORM BELOW HEADER ---- */}
        <div className="absolute -bottom-16 w-full px-5">
          <div className="bg-white text-black shadow-lg rounded-xl p-5 md:p-6 max-w-[1200px] mx-auto flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-col flex-1 min-w-[130px]">
              <label className="text-sm font-semibold text-yellow-500">Arrival</label>
              <input
                type="date"
                className="mt-1 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                defaultValue="2025-11-18"
              />
            </div>

            <div className="flex flex-col flex-1 min-w-[130px]">
              <label className="text-sm font-semibold text-yellow-500">Departure</label>
              <input
                type="date"
                className="mt-1 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                defaultValue="2025-11-19"
              />
            </div>

            <div className="flex flex-col flex-1 min-w-[130px]">
              <label className="text-sm font-semibold text-yellow-500">Promo Code</label>
              <input
                type="text"
                placeholder="Enter promo code"
                className="mt-1 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-col flex-1 min-w-[130px]">
              <label className="text-sm font-semibold text-yellow-500">Nationality</label>
              <select className="mt-1 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none">
                <option>Sri Lankan</option>
                <option>Non-Sri Lankan</option>
              </select>
            </div>

            <div className="flex-1 min-w-[130px]">
              <button className="w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-600 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100px]"></div>

      {/* ---------------------- DESCRIPTION ---------------------- */}
      <div className="text-center px-5 py-12 max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 border-t-2 border-yellow-500 pt-6">
          For inquiries and further information, please don't hesitate to get in touch with any
          one of our resorts. We will be happy to hear from you!
        </p>
      </div>

      {/* ---------------------- DIRECTIONS + MAP ---------------------- */}
      <div className="flex flex-wrap justify-center gap-8 px-6 py-10">
        {/* Directions Card */}
        <div className="w-full md:w-[450px] p-6 rounded-xl shadow-lg border border-yellow-500 hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-4 text-yellow-600 border-b-2 border-yellow-500 pb-1">
            Get Directions
          </h2>

          <label className="text-sm text-gray-700">From</label>
          <input
            type="text"
            placeholder="Enter your starting point"
            className="w-full mt-1 mb-4 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />

          <label className="text-sm text-gray-700">To</label>
          <input
            type="text"
            value="The Golden Crown Hotel"
            readOnly
            className="w-full mt-1 p-2 border border-gray-300 rounded bg-gray-100"
          />

          <button className="w-full mt-4 bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition">
            Get Directions
          </button>
        </div>

        {/* Google Map */}
        <div className="w-full md:w-[600px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Golden Crown Location"
            className="w-full h-[350px]"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.67499790258!2d80.66200707449717!3d7.27145341439564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366f2b3bb9dbd%3A0xbd8c7990c9e6a6b8!2sThe%20Golden%20Crown%20Hotel!5e0!3m2!1sen!2slk!4v1700000000000"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* ---------------------- IMAGE + INQUIRY FORM ---------------------- */}
      <div className="flex flex-wrap justify-center gap-10 px-6 py-16">
        {/* Image */}
        <div className="w-full md:w-[450px] rounded-xl overflow-hidden shadow-lg border-2 border-yellow-500">
          <img
            src="/images/contact-hotel.PNG"
            alt="Hotel"
            className="w-full object-cover"
          />
        </div>

        {/* Inquiry Form */}
        <div className="w-full md:w-[450px] p-6 rounded-xl shadow-lg border-2 border-yellow-500">
          <h2 className="text-xl font-semibold mb-6 text-yellow-600 border-b-2 border-yellow-500 pb-1">
            Send us your inquiries
          </h2>

          <form className="space-y-4">
            <select className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500">
              <option>Mr</option>
              <option>Mrs</option>
              <option>Miss</option>
              <option>Ms</option>
            </select>

            <input
              type="text"
              placeholder="Your Name *"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="email"
              placeholder="Your Email *"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
            />

            <textarea
              rows="4"
              placeholder="Your Comments *"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
            ></textarea>

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              <p>
                *I consent to my personal data being stored. See our
                <span className="text-blue-600 cursor-pointer"> Privacy Policy.</span>
              </p>
            </div>

            <button className="w-full bg-yellow-500 text-black py-2 rounded font-semibold hover:bg-yellow-600 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
