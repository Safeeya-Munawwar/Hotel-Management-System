import React, { useEffect, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Booking from "../components/Booking";

export default function ContactPage() {
  const [showText, setShowText] = useState(false);
  const imageRef = useRef(null);
  const formRef = useRef(null);
  const recaptchaRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }

    // Submit your form data here
    alert("Form submitted successfully!");
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-match image height to form height
  useEffect(() => {
    function matchHeight() {
      if (formRef.current && imageRef.current) {
        imageRef.current.style.height = `${formRef.current.offsetHeight}px`;
      }
    }

    matchHeight();
    window.addEventListener("resize", matchHeight);

    return () => window.removeEventListener("resize", matchHeight);
  }, []);

  return (
    <div className="font-poppins bg-white text-[#222]">

      {/* ---------------------------- HERO HEADER ---------------------------- */}
      <div
        className="w-full h-[400px] md:h-[560px] bg-cover bg-center relative flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/contact-header.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div
  className={`
    absolute bottom-10 right-10 w-[440px] 
    bg-black/80 text-white p-6 
    backdrop-blur-sm shadow-lg
    border-none
    flex items-center justify-end
    transition-all duration-700 ease-out
    ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
  `}
>
  {/* Text */}
  <h2 className="text-2xl leading-snug text-right mr-4">
    Stay Close, Stay Connected <br />
    With Us...
  </h2>

  {/* Vertical Line */}
  <div className="w-[2px] bg-white h-12"></div>
</div>

      </div>

      {/* ---------------------------- BOOKING FORM ---------------------------- */}
      <Booking />

      {/* ---------------------- CONTACT TITLE & DESCRIPTION ---------------------- */}
      <div className="w-full text-center mt-20 px-4">
        <h2 className="text-3xl font-semibold tracking-wide">Contact Us</h2>

        <p className="text-gray-700 mt-4 leading-relaxed max-w-3xl mx-auto text-[15px]">
          For inquiries and further information, please don't hesitate to get in touch
          with any one of our resorts. We will be happy to hear from you!
        </p>
      </div>

{/* ---------------------------- DIRECTIONS + MAP ---------------------------- */}
<div className="w-full max-w-[1400px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

  {/* LEFT SIDE – GET DIRECTIONS (reduced width) */}
  <div className="md:col-span-1 p-2 pr-6">
    <h3 className="text-lg font-medium tracking-wide mb-4">Get Directions</h3>

    <label className="text-sm text-gray-800">From</label>
    <input
      type="text"
      placeholder="From"
      className="w-full border border-gray-400 p-2 mt-1 mb-4 text-sm"
    />

    <label className="text-sm text-gray-800">To</label>
    <input
      type="text"
      value="The Golden Crown Hotel, Kandy"
      readOnly
      className="w-full border border-gray-400 p-2 mt-1 mb-4 text-sm bg-gray-100"
    />

    <button className="px-6 py-2 border border-gray-700 text-gray-800 text-sm hover:bg-gray-100 transition">
      Get Directions
    </button>
  </div>

  {/* RIGHT SIDE – MAP (increased width) */}
  <div className="md:col-span-2 h-[360px] w-full rounded overflow-hidden shadow-lg">
    <iframe
      title="Golden Crown Hotel Map"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.379661968886!2d80.66767947485667!3d7.078955816962108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3664c9f24275d%3A0xaa76b7e736d9193!2sThe%20Golden%20Crown%20Hotel!5e0!3m2!1sen!2slk!4v1701269500000&markers=7.078955816962108,80.6698683"
    ></iframe>
  </div>

</div>

{/* ---------------------- IMAGE + INQUIRY FORM ---------------------- */}
<div className="w-full max-w-[1400px] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

  {/* LEFT — IMAGE (Auto height) */}
  <div ref={imageRef} className="w-full rounded overflow-hidden">
    <img
      src="/images/contact-form.JPG"
      className="w-full h-full object-cover"
      alt="Hotel"
    />
  </div>

  {/* RIGHT — FORM */}
<div ref={formRef} className="bg-white border border-gray-300 p-6 text-base">
      <h3 className="text-2xl font-medium mb-6 tracking-wide">Send Us Your Inquiries</h3>

      <select className="w-full border border-gray-400 p-3 mb-4">
        <option>Mr</option>
        <option>Mrs</option>
        <option>Ms</option>
        <option>Miss</option>
      </select>

      <input
        type="text"
        placeholder="Your name here *"
        className="w-full border border-gray-400 p-3 mb-4"
      />

      <input
        type="email"
        placeholder="Your email here *"
        className="w-full border border-gray-400 p-3 mb-4"
      />

      <textarea
        placeholder="Type your comments here *"
        rows="5"
        className="w-full border border-gray-400 p-3 mb-4"
      ></textarea>

      <div className="flex items-start mt-2 mb-4">
        <input type="checkbox" className="mt-1 mr-2" />
        <p className="text-sm text-gray-700 leading-snug">
          I consent to my personal data being stored and processed for the purposes
          of processing my inquiry. For more information view our Privacy Policy.
        </p>
      </div>

{/* I’m not a robot CAPTCHA */}
<div className="mb-4 flex justify-center">
  <ReCAPTCHA
    ref={recaptchaRef}
    sitekey="YOUR_RECAPTCHA_SITE_KEY"
  />
</div>

<button
  onClick={handleSubmit}
  className="mt-4 w-full md:w-auto px-8 py-3 bg-[#c9a654] text-white text-sm tracking-wide hover:bg-[#b6984f] transition"
>
  SUBMIT
</button>

    </div>
</div>

{/* Include reCAPTCHA script in your index.html or _document.js */}
<script src="https://www.google.com/recaptcha/api.js" async defer></script>


      <div className="mb-20"></div> {/* Extra spacing before footer */}

    </div>
  );
}
