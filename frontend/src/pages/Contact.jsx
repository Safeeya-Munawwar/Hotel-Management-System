import React from "react";

const ContactPage = () => {
  return (
    <div className="font-poppins bg-gray-50">
      {/* ---------------------- HERO HEADER ---------------------- */}
      <div
        className="w-full h-[380px] bg-cover bg-center flex flex-col items-center justify-center text-white relative"
        style={{ backgroundImage: "url('/images/header.PNG')" }}
      >
        <h1 className="text-5xl font-bold drop-shadow-lg border-b-4 border-yellow-500 pb-2">
          Contact Us
        </h1>

        {/* ---- BOOKING FORM BELOW HEADER ---- */}
        <div className="absolute -bottom-12 w-full px-5">
          <div className="bg-black text-white shadow-xl rounded-lg p-4 max-w-[1200px] mx-auto flex flex-wrap items-center gap-3">
            
            {/* Arrival */}
            <div className="flex flex-col flex-1 min-w-[120px]">
              <label className="text-sm font-semibold text-yellow-500">Arrival</label>
              <input
                type="date"
                className="mt-1 p-2 rounded border border-gray-600 text-black"
                defaultValue="2025-11-18"
              />
            </div>

            {/* Departure */}
            <div className="flex flex-col flex-1 min-w-[120px]">
              <label className="text-sm font-semibold text-yellow-500">Departure</label>
              <input
                type="date"
                className="mt-1 p-2 rounded border border-gray-600 text-black"
                defaultValue="2025-11-19"
              />
            </div>

            {/* Promo Code */}
            <div className="flex flex-col flex-1 min-w-[120px]">
              <label className="text-sm font-semibold text-yellow-500">Promo Code</label>
              <input
                type="text"
                placeholder="Enter promo code"
                className="mt-1 p-2 rounded border border-gray-600 text-black"
              />
            </div>

            {/* Nationality */}
            <div className="flex flex-col flex-1 min-w-[120px]">
              <label className="text-sm font-semibold text-yellow-500">Nationality</label>
              <select className="mt-1 p-2 rounded border border-gray-600 text-black">
                <option>Sri Lankan</option>
                <option>Non-Sri Lankan</option>
              </select>
            </div>

            {/* Book Now Button */}
            <div className="flex-1 min-w-[120px]">
              <button className="w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-600 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing below form */}
      <div className="h-[100px]"></div>

      {/* ---------------------- DESCRIPTION ---------------------- */}
      <div className="text-center px-5 py-12">
        <p className="text-lg max-w-2xl mx-auto border-t-2 border-yellow-500 pt-6 text-gray-700">
          For inquiries and further information, please don't hesitate to get in touch
          with any one of our resorts. We will be happy to hear from you!
        </p>
      </div>

      {/* ---------------------- DIRECTIONS + MAP ---------------------- */}
      <div className="flex flex-wrap justify-center gap-8 px-6 py-10">
        {/* Left - Get Directions */}
        <div className="w-full md:w-[450px] border-2 border-yellow-500 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-yellow-600 border-b-2 border-yellow-500 pb-1">
            Get Directions
          </h2>

          <label className="text-sm text-gray-700">From</label>
          <input
            type="text"
            placeholder="Enter your starting point"
            className="w-full mt-1 mb-4 p-2 border border-gray-400 rounded"
          />

          <label className="text-sm text-gray-700">To</label>
          <input
            type="text"
            value="The Golden Crown Hotel"
            readOnly
            className="w-full mt-1 p-2 border border-gray-400 rounded bg-gray-100"
          />

          <button className="w-full mt-4 bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition">
            Get Directions
          </button>
        </div>

        {/* Right - Google Map */}
        <div className="w-full md:w-[600px]">
          <iframe
            title="Golden Crown Location"
            className="w-full h-[350px] rounded-lg shadow"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.67499790258!2d80.66200707449717!3d7.27145341439564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366f2b3bb9dbd%3A0xbd8c7990c9e6a6b8!2sThe%20Golden%20Crown%20Hotel!5e0!3m2!1sen!2slk!4v1700000000000"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* ---------------------- IMAGE + INQUIRY FORM ---------------------- */}
      <div className="flex flex-wrap justify-center gap-10 px-6 py-16">
        {/* Image */}
        <div className="w-full md:w-[450px]">
          <img
            src="/images/contact-hotel.PNG"
            alt="Hotel"
            className="w-full rounded-lg shadow-lg border-2 border-yellow-500"
          />
        </div>

        {/* Inquiry Form */}
        <div className="w-full md:w-[450px] border-2 border-yellow-500 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-yellow-600 border-b-2 border-yellow-500 pb-1">
            Send us your inquiries
          </h2>

          <label className="text-sm text-gray-700">Title</label>
          <select className="w-full mt-1 p-2 border border-gray-400 rounded mb-3">
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
            <option>Ms</option>
          </select>

          <label className="text-sm text-gray-700">Name *</label>
          <input
            type="text"
            placeholder="Type your name here *"
            className="w-full mt-1 p-2 border border-gray-400 rounded mb-3"
          />

          <label className="text-sm text-gray-700">Email *</label>
          <input
            type="email"
            placeholder="Type your email here *"
            className="w-full mt-1 p-2 border border-gray-400 rounded mb-3"
          />

          <label className="text-sm text-gray-700">Comments *</label>
          <textarea
            rows="4"
            placeholder="Type your comments here *"
            className="w-full mt-1 p-2 border border-gray-400 rounded mb-3"
          ></textarea>

          <div className="text-sm flex items-start gap-2 mb-4">
            <input type="checkbox" />
            <p className="text-gray-600">
              *I consent to my personal data being stored. See our
              <span className="text-blue-600 cursor-pointer"> Privacy Policy.</span>
            </p>
          </div>

          <button className="w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
