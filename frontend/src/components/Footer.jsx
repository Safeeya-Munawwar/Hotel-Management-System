import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 pt-12 pb-6 font-poppins">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Awards */}
        <div className="flex flex-col items-center space-y-4">
          <img src="/logo.PNG" alt="The Golden Crown Logo" className="w-32" />
          <div className="flex flex-wrap justify-center gap-4">
            <img src="/images/award1.png" alt="Award 1" className="w-12 h-12 object-contain" />
            <img src="/images/award2.png" alt="Award 2" className="w-12 h-12 object-contain" />
            <img src="/images/award3.png" alt="Award 3" className="w-12 h-12 object-contain" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-semibold mb-4">Net Lanka Hotel, Kandy</h4>
          <ul className="space-y-2 text-gray-400 text-sm text-center md:text-left">
            <li className="hover:text-white cursor-pointer">Rooms & Suites</li>
            <li className="hover:text-white cursor-pointer">Offers</li>
            <li className="hover:text-white cursor-pointer">Discover Us</li>
            <li className="hover:text-white cursor-pointer">Our Hotels</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Sitemap</li>
          </ul>
        </div>

    {/* Social Links */}
<div className="flex flex-col items-center md:items-start space-y-3">
  <h4 className="text-white font-semibold mb-4">Follow Us</h4>

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 hover:text-white"
  >
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 hover:bg-blue-600 transition-colors">
      <FaFacebookF className="w-5 h-5 text-white" />
    </div>
    <span className="text-sm">Facebook</span>
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 hover:text-white"
  >
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 hover:bg-pink-500 transition-colors">
      <FaInstagram className="w-5 h-5 text-white" />
    </div>
    <span className="text-sm">Instagram</span>
  </a>

  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 hover:text-white"
  >
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 hover:bg-blue-400 transition-colors">
      <FaTwitter className="w-5 h-5 text-white" />
    </div>
    <span className="text-sm">Twitter</span>
  </a>

  <a
    href="https://tiktok.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 hover:text-white"
  >
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 hover:bg-black transition-colors">
      <FaTiktok className="w-5 h-5 text-white" />
    </div>
    <span className="text-sm">TikTok</span>
  </a>
</div>


        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-400 text-center md:text-left">
            322, Udagama, Ampitiya,<br />
            Kandy, Sri Lanka.<br />
            <span className="block mt-2">+94 81 22 44 000</span>
          </p>

          <h4 className="text-white font-semibold mt-6 mb-2">Reservations Team</h4>
          <p className="text-sm text-gray-400 text-center md:text-left">
            +94 117 743 900<br />
            <a href="mailto:reservations@thegoldenhospitality.com" className="hover:underline">
              reservations@thegoldenhospitality.com
            </a>
          </p>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />

      {/* Footer Bottom */}
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs space-y-2 md:space-y-0">
        <p>© 2025 Net Lanka Hotel. All rights reserved.</p>
        <p>Website Design, Development & Hosting by NetIT Technology</p>
      </div>
    </footer>
  );
}
