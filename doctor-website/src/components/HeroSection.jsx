import React from "react";
import doctorImg from "../assets/dr.png";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-cyan-100 to-white py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            YOUR LUNGS DESERVE THE BEST
          </h1>
          <p className="text-gray-700 mb-6">
            LET'S HELP YOU BREATHE EASIER, TOGETHER. <br />
            <span className="font-semibold text-blue-600">
              "YOUR HEALTH, OUR MISSION"
            </span>
          </p>
          <a
            href="#appointment"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Request Appointment
          </a>
        </div>
        <img
          src={doctorImg}
          alt="Doctor"
          className="w-72 md:w-96 rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
