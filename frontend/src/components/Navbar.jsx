// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Update live time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";
      setTime(`${hours}:${minutes} ${ampm}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { name: "HOME", path: "/" },
    { name: "ROOMS & SUITES", path: "/rooms" },
    { name: "OFFERS", path: "/offers" },
    { name: "DINING", path: "/dining" },
    { name: "WEDDINGS", path: "/weddings" },
    { name: "FACILITIES", path: "/facilities" },
    { name: "THINGS TO DO", path: "/things-to-do" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const sideLinks = [
    "Discover Us",
    "Our Hotels",
    "Spa & Wellness",
    "Meetings & Events",
    "Guest Reviews",
    "Gallery",
    "FAQ",
  ];

  return (
    <div className="fixed w-full z-50 top-0">
      {/* Top Info Bar */}
      <div
        className={`bg-black bg-opacity-70 text-white px-4 py-2 text-sm flex justify-between items-center transition-all duration-500 ${
          scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
          <div>⏱ {time}</div>
          <div>☁️ 26 ˚C</div>
          <div>📍 322, Udagama, Ampitiya Rd, Kandy 20000</div>
          <div>📞 +94 81 224 4000</div>
        </div>
        <div className="flex space-x-3 text-xs sm:text-sm">
          <FaFacebookF className="hover:text-yellow-500 transition" />
          <FaInstagram className="hover:text-yellow-500 transition" />
        </div>
      </div>

      {/* Main Navbar */}
      <nav
  className={`px-4 py-4 fixed w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-black shadow-md top-0"
      : "bg-transparent top-[40px]"
  }`}
>
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    {/* Logo */}
    <Link to="/">
      <img src="/images/logo.PNG" alt="Logo" className="h-12 w-auto" />
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-6 font-medium text-white">
      {menuLinks.map((link, idx) => (
        <Link
          key={idx}
          to={link.path}
          className="hover:text-gray-300 transition border-b-2 border-transparent hover:border-white pb-1"
        >
          {link.name}
        </Link>
      ))}

      {/* Right Sidebar Hamburger */}
      <button onClick={() => setSideOpen(true)}>
        <HiMenu size={28} />
      </button>
    </div>

    {/* Mobile Menu */}
    <div className="md:hidden flex items-center space-x-4">
      <button onClick={() => setSideOpen(true)}>
        <HiMenu size={28} />
      </button>

      <button onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu Dropdown */}
  {mobileOpen && (
    <div className="md:hidden bg-black bg-opacity-90 text-white px-4 pt-4 pb-4 space-y-2 mt-2">
      {menuLinks.map((link, idx) => (
        <Link
          key={idx}
          to={link.path}
          onClick={() => setMobileOpen(false)}
          className="block hover:text-gray-300"
        >
          {link.name}
        </Link>
      ))}
    </div>
  )}
</nav>


      {/* Right Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white text-black shadow-xl transform transition-transform duration-500 overflow-y-auto z-[200] ${
          sideOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setSideOpen(false)}
          className="absolute top-5 right-5 text-3xl text-gray-600 hover:text-black"
        >
          <HiX size={30} />
        </button>

        <div className="px-8 pt-16 pb-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src="/images/logo.PNG" alt="Golden Crown" className="h-14 object-contain" />
          </div>

          {/* Sidebar Links */}
          <div className="space-y-4 text-base tracking-wide">
            {sideLinks.map((item, idx) => (
              <div
                key={idx}
                className="hover:text-yellow-500 cursor-pointer transition font-medium"
              >
                {item.toUpperCase()}
              </div>
            ))}
          </div>

          {/* Follow Us */}
          <div className="mt-10 pb-6">
            <h3 className="text-lg font-semibold mb-3">
              Follow <span className="font-light">us</span>
            </h3>
            <div className="flex space-x-4 text-xl text-yellow-600">
              <FaFacebookF className="hover:text-yellow-500 transition" />
              <FaInstagram className="hover:text-yellow-500 transition" />
            </div>
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      {sideOpen && <div onClick={() => setSideOpen(false)} className="fixed inset-0 bg-black/50 z-[150]" />}
    </div>
  );
};

export default Navbar;
