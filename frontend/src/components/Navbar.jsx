import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Clock, MapPin, Phone, Menu } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import WeatherWidget from "./WeatherWidget";

export default function Navbar() {
  const location = useLocation();
  const [time, setTime] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Live Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ROOMS & SUITES", path: "/rooms" },
    { name: "OFFERS", path: "/offers" },
    { name: "DINING", path: "/dining" },
    { name: "WEDDINGS", path: "/weddings" },
    { name: "FACILITIES", path: "/facilities" },
    { name: "THINGS TO DO", path: "/things-to-do" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`w-full fixed top-0 z-50 font-poppins transition-all duration-500 ${
          scrolled ? "bg-black shadow-md" : "bg-transparent/5"
        }`}
      >
        {/* ========== 2-COLUMN WRAPPER ========== */}
        <div
          className={`flex items-center justify-between px-20 transition-all duration-500 ${
            scrolled ? "py-2" : "py-2"
          }`}
        >
          {/* LEFT — LOGO */}
          <div
            className={`transition-all duration-500 ${
              scrolled ? "w-20 py-2" : "w-36 py-4"
            }`}
          >
            <img src="/logo.png" alt="Logo" className="w-full" />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-end">

            {/* ---------- TOP INFO BAR ---------- */}
            <div
              className={`flex items-center gap-6 text-white text-[12px] tracking-wide transition-all duration-500 ${
                scrolled
                  ? "opacity-0 h-0 overflow-hidden"
                  : "opacity-100 py-2"
              }`}
            >
              <span className="flex items-center gap-2">
                <Clock size={14} /> {time}
              </span>

              <span className="flex items-center gap-2">
                <WeatherWidget city="Kandy,LK" />
              </span>

              <span className="flex items-center gap-2 whitespace-nowrap">
                <MapPin size={14} /> 322, Udagama, Ampitiya Rd, Kandy 20000
              </span>

              <span className="flex items-center gap-2">
                <Phone size={14} /> +94 81 224 4000
              </span>

              <div className="w-7 h-7 border border-white rounded-full flex items-center justify-center">
                <FaFacebookF size={13} />
              </div>

              <div className="w-7 h-7 border border-white rounded-full flex items-center justify-center">
                <FaInstagram size={13} />
              </div>
            </div>

            {/* ---------- NAV ROW ---------- */}
            <div className="flex items-center gap-8">

           <nav className={`flex text-sm tracking-[0.12em] text-white transition-all duration-500 ${
  scrolled ? "gap-4" : "gap-8"
}`}>
  {navLinks.map((link) => {
    const isActive = location.pathname === link.path;
    return (
      <Link
        key={link.name}
        to={link.path}
        className="relative hover:text-gold transition"
      >
        {link.name}
        {isActive && (
          <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-6 h-[2px] bg-white"></span>
        )}
      </Link>
    );
  })}
</nav>


            <Link
  to="/booking"
  className={`bg-[#C7A348] text-black px-5 py-2 text-sm tracking-wider rounded-sm transition-all duration-500 ${
    scrolled
      ? "opacity-100 scale-100"
      : "opacity-0 scale-75 pointer-events-none absolute -right-20"
  }`}
>
  RESERVE NOW
</Link>


              {/* HAMBURGER MENU */}
              <Menu
                size={30}
                className="text-white cursor-pointer"
                onClick={() => setSidebarOpen(true)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ================= RIGHT SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-white text-black z-[999] shadow-xl transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end px-6 py-6">
          <button onClick={() => setSidebarOpen(false)}>
            <span className="text-3xl font-light">✕</span>
          </button>
        </div>

        <div className="flex justify-center mb-10">
          <img src="/logo.png" alt="Logo" className="w-40" />
        </div>

        <div className="flex flex-col gap-6 px-10 text-[15px]">
  <a href="/discover-us" className="hover:text-gold transition">DISCOVER US</a>
  <a href="/our-hotels" className="hover:text-gold transition">OUR HOTELS</a>
  <a href="/spa-wellness" className="hover:text-gold transition">SPA & WELLNESS</a>
  <a href="/meetings-events" className="hover:text-gold transition">MEETINGS & EVENTS</a>
  <a href="/guest-reviews" className="hover:text-gold transition">GUEST REVIEWS</a>
  <a href="/gallery" className="hover:text-gold transition">GALLERY</a>
  <a href="/faq" className="hover:text-gold transition">FAQ</a>
</div>


        <div className="px-10 mt-12">
          <p className="font-semibold mb-4">Follow us</p>
          <div className="flex gap-5">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400">
              <FaFacebookF size={15} />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400">
              <FaInstagram size={15} />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400">
              <FaTwitter size={15} />
            </div>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}
