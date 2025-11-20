import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams } from "react-router-dom";
import Booking from "../../components/Booking";

export default function WeddingReservation() {
  const { slug } = useParams();
  const [showText, setShowText] = useState(false);
  const formRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ------------------ WEDDING DATA ------------------
  const weddingData = useMemo(() => ({
    grand: {
      name: "Grand Ballroom",
      headerImage: "/images/grand-ballroom.JPG",
      tagline: "Reservation...",
      image: "/images/grand-ballroom.JPG",
    },
    crown: {
      name: "Crown Court",
      headerImage: "/images/crown-court.PNG",
      tagline: "Reservation...",
      image: "/images/crown-court.PNG",
    },
    windsor: {
      name: "Windsor Ballroom",
      headerImage: "/images/windsor-ballroom.jpg",
      tagline: "Reservation...",
      image: "/images/windsor-ballroom.jpg",
    },
    lavo: {
      name: "LAVO",
      headerImage: "/images/lavo.PNG",
      tagline: "Reservation...",
      image: "/images/lavo.PNG",
    },
  }), []);

  const allWeddings = useMemo(() => Object.values(weddingData), [weddingData]);

  // ------------------ HALL OPTIONS ------------------
  const hallOptions = useMemo(() => [
    { value: "grand", label: "Grand Ballroom" },
    { value: "crown", label: "Crown Court" },
    { value: "windsor", label: "Windsor Ballroom" },
    { value: "lavo", label: "LAVO" },
  ], []);

  // ------------------ IMAGE SLIDER FOR COMMON FORM ------------------
  useEffect(() => {
    if (!slug) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % allWeddings.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [slug, allWeddings.length]);

  // ------------------ SHOW TEXT ON HERO ------------------
  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // ------------------ FORM DATA ------------------
  const [formData, setFormData] = useState({
    hall: "",
    title: "",
    name: "",
    email: "",
    telephone: "",
    occasionDate: "",
    guests: "",
    message: "",
    accommodation: false,
    consent: false,
  });

  // Pre-fill hall if slug exists
  useEffect(() => {
    if (slug) {
      const hall = hallOptions.find((h) => h.value === slug);
      setFormData((prev) => ({ ...prev, hall: hall?.label || "" }));
    } else {
      setFormData((prev) => ({ ...prev, hall: "" }));
    }
  }, [slug, hallOptions]);

  // ... rest of your code remains exactly the same


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("You must consent to data processing.");
      return;
    }
    console.log(formData);
    alert("Inquiry submitted successfully!");
    // TODO: send formData to backend API
  };

  const wedding = slug ? weddingData[slug] : allWeddings[currentImageIndex];

  return (
    <div className="font-poppins bg-white text-[#222]">
      {/* ======================= HERO HEADER ======================= */}
      <div
        className="w-full h-[400px] md:h-[560px] bg-cover bg-center relative flex items-center justify-center text-white transition-all duration-700"
        style={{
          backgroundImage: `url('${wedding.headerImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div
          className={`absolute bottom-10 right-10 w-[440px] bg-black/80 text-white p-6 backdrop-blur-sm shadow-lg flex items-center justify-end transition-all duration-700 ease-out ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-2xl leading-snug text-right mr-4">
            {wedding.name} <br />
            {wedding.tagline}
          </h2>
          <div className="w-[2px] bg-white h-12"></div>
        </div>
      </div>

      {/* ======================= BOOKING FORM ======================= */}
      <Booking />

      <div className="py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Reservation {slug ? `- ${weddingData[slug].name}` : ""}
        </h1>
      </div>

      <div
        ref={formRef}
        className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* ---------------- Left Side Image ---------------- */}
        <div className="flex-1">
          <img
            src={wedding.image}
            alt={wedding.name}
            className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-700"
          />
        </div>

        {/* ---------------- Right Side Form ---------------- */}
        <div className="flex-1">
          {/* Hall Selection for general form */}
          {!slug && (
            <div className="mb-4">
              <label className="block mb-1 font-medium">Select Hall *</label>
              <select
                name="hall"
                value={formData.hall}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select a hall</option>
                {hallOptions.map((hall) => (
                  <option key={hall.value} value={hall.label}>
                    {hall.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Show hall for slug-specific form */}
          {slug && formData.hall && (
            <p className="mb-4 text-gray-700 text-lg">
              Booking for: <strong>{formData.hall}</strong>
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-6 rounded shadow-lg"
          >
            {/* Title */}
            <div>
              <label className="block mb-1 font-medium">Title</label>
              <select
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select</option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">E-mail *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Telephone */}
            <div>
              <label className="block mb-1 font-medium">Telephone number</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Occasion Date */}
            <div>
              <label className="block mb-1 font-medium">Occasion date *</label>
              <input
                type="date"
                name="occasionDate"
                value={formData.occasionDate}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block mb-1 font-medium">
                Number of guests *
              </label>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Message */}
            <div className="flex-1">
              <label className="block mb-1 font-medium">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 h-full resize-none"
                placeholder="Type your message here*"
              />
            </div>

            {/* Accommodation */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="accommodation"
                checked={formData.accommodation}
                onChange={handleChange}
                className="mt-1"
              />
              <label className="text-sm text-gray-600">
                I would like to have accommodation facilities
              </label>
            </div>

            {/* Consent */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1"
                required
              />
              <label className="text-sm text-gray-600">
                I consent to my personal data being stored and processed for the
                purposes of processing my inquiry. For more information view our{" "}
                <a href="/privacy-policy" className="underline text-[#D4AF37]">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#D4AF37] text-white font-semibold rounded hover:bg-yellow-700 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
