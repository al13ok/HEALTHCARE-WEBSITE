import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-2 text-sm flex justify-between items-center">
        <span>Phone: +91 9289062207</span>
        <span>Email: info@thenoidapulmonologist.com</span>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-20 py-4 bg-white shadow-md sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/vite.svg" alt="Logo" className="w-8 h-8" />
          <div className="text-left leading-tight">
            <h1 className="text-lg font-bold text-blue-900">
              Dr Saumya Shishir Agrawal
            </h1>
            <p className="text-xs text-gray-600 -mt-1">
              DNB, DM (AIIMS), MRCP(UK)
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-700 font-semibold">
          <li>
            <a href="#hero" className="hover:text-blue-600">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600">About Us</a>
          </li>
          <li>
            <a href="#speciality" className="hover:text-blue-600">Speciality</a>
          </li>
          <li>
            <a href="#blog" className="hover:text-blue-600">Blog</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">Contact Us</a>
          </li>
        </ul>

        {/* Appointment Button */}
        <a
          href="#appointment"
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 text-sm rounded hover:opacity-90"
        >
          Request Appointment →
        </a>
      </nav>
    </>
  );
};

export default Navbar;
