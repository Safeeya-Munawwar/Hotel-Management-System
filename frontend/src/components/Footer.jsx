import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaStar } from "react-icons/fa";

const Footer = () => {
  const footerSections = [
    {
      title: "Support",
      links: [
        "Manage your trips",
        "Contact Customer Service",
        "Safety Resource Center",
      ],
    },
    {
      title: "Discover",
      links: [
        "Loyalty program",
        "Seasonal and holiday deals",
        "Travel articles",
        "Business booking",
        "Awards & Recognition",
        "Car rental",
        "Flight finder",
        "Restaurant reservations",
      ],
    },
    {
      title: "Terms & Policies",
      links: [
        "Privacy Notice",
        "Terms of Service",
        "Accessibility Statement",
        "Partner dispute",
        "Modern Slavery Statement",
        "Human Rights Statement",
      ],
    },
    {
      title: "Partners",
      links: [
        "Extranet login",
        "Partner help",
        "List your property",
        "Become an affiliate",
      ],
    },
    {
      title: "About",
      links: [
        "About Us",
        "How We Work",
        "Sustainability",
        "Press center",
        "Careers",
        "Investor relations",
        "Corporate contact",
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaYoutube />, url: "/" },
  ];

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-gray-300 pt-16">
      {/* Main Sections */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {footerSections.map((section, idx) => (
          <div
            key={idx}
            className="space-y-3 group transform transition duration-300 hover:-translate-y-1"
          >
            <h3 className="text-white font-semibold text-lg border-l-4 border-yellow-500 pl-2 group-hover:pl-4 transition-all">
              {section.title}
            </h3>
            <ul className="space-y-1 text-sm text-gray-400">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    className="hover:text-white hover:underline hover:translate-x-1 transition-all duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter + Social + Ratings */}
      <div className="mt-12 border-t border-gray-700 py-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* Newsletter */}
        <div className="flex-1 bg-gray-900/50 p-4 rounded-lg shadow-md">
          <h4 className="text-white font-semibold mb-2">Subscribe to our newsletter</h4>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l border border-gray-600 flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-r hover:bg-yellow-600 transition duration-300 shadow hover:shadow-lg">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 shadow-sm hover:shadow-md p-2 rounded-full bg-gray-800/40"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Badges / Ratings */}
        <div className="flex items-center gap-2 justify-center md:justify-end bg-gray-900/50 p-2 rounded-lg shadow-md">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500 animate-pulse" />
          ))}
          <span className="text-gray-400 ml-2 text-sm">5-star Luxury Hotel</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        <p>
          The Golden Crown, Kandy | &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
