import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF size={20} />, url: "https://facebook.com" },
    { icon: <FaInstagram size={20} />, url: "https://instagram.com" },
    { icon: <FaTwitter size={20} />, url: "https://twitter.com" },
    { icon: <FaYoutube size={20} />, url: "/" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div className="space-y-4">
          <Link to="/">
            <img src="/images/logo.PNG" alt="Hotel Logo" className="h-12 w-auto" />
          </Link>
          <p className="text-sm leading-relaxed">
            The Golden Crown, Kandy offers a 5‑star luxury experience in the hill capital of Sri Lanka. Enjoy our elegant rooms, fine dining, wellness and outstanding views.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1 grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Explore</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/rooms" className="hover:text-white transition-colors">Rooms & Suites</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Policies</h3>
            <ul className="space-y-1">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact + Social */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-semibold">Contact Us</h3>
          <p className="text-sm leading-relaxed">
            322, Udagama, Ampitiya,<br />
            Kandy, Sri Lanka<br />
            Phone: +94 81 22 44 000<br />
            Email: info@thegoldencrownhotel.com
          </p>
          <div className="flex space-x-4 mt-2 text-gray-300">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} The Golden Crown, Kandy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
