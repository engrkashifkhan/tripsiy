import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(285.12deg,#FFF8EF_28.12%,#F8E0B0_71.88%)] text-black py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* ---------- COLUMN 1: LOGO + DESCRIPTION ---------- */}
        <div>
           <img src="/logo.png" alt="logo" className="w-28 h-28 object-contain" />
          <p className="  text-sm leading-relaxed">
           Your trusted travel partner for unforgettable adventures.
          </p>
        </div>

        {/* ---------- COLUMN 2: QUICK LINKS ---------- */}
        <div className="">
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 t text-sm text-gray-600">
            <li className=" cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className=" cursor-pointer">Services</li>
            <li className="cursor-pointer">Packages</li>
            <li className=" cursor-pointer">Destination</li>
            <li className=" cursor-pointer">Contacts</li>
          </ul>
        </div>

        {/* ---------- COLUMN 3: CONTACT US ---------- */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-xl" />
              <p className="text-sm">123 Street, Karachi, Pakistan</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl" />
              <p className="text-sm">+92 300 1234567</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl" />
              <p className="text-sm">travel@example.com</p>
            </div>

          </div>
        </div>

        {/* ---------- COLUMN 4: FOLLOW US ---------- */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>

          <div className="flex items-center gap-5 text-2xl">

            <a href="#" className="hover:text-green-400">
              <FaWhatsapp className="text-[rgba(244,156,11,1)]"/>
            </a>

            <a href="#" className="hover:text-blue-500">
              <FaFacebookF className="text-[rgba(244,156,11,1)]" />
            </a>

            <a href="#" className="hover:text-red-400">
              <FaEnvelope className="text-[rgba(244,156,11,1)]" />
            </a>

          </div>
        </div>
      </div>

      {/* COPYRIGHT AREA */}
      <div className="text-center text-gray-700 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Travel Agency — All Rights Reserved.
      </div>
    </footer>
  );
}
