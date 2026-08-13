"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative w-full h-screen min-h-[600px] flex items-start pt-24 sm:pt-32 md:pt-40 bg-cover bg-center bg-no-repeat overflow-hidden"
      // Make sure image_bdd3fb.jpg is placed in your public folder for this path to work
      style={{ backgroundImage: "url('/landingpage/ctabg.png')" }} 
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          {/* Typography matching the geometric/tech style in the image */}
          <h2 className="text-white text-4xl sm:text-5xl md:text-[3.5rem] font-light font-orbitron leading-[1.3] tracking-wide mb-8">
            Your one stop shop for
            <br />
            360 Car Solutions
          </h2>

          {/* Button exact match: White background, sharp corners, black text with top-right arrow */}
          <button
            onClick={() => alert("Booking module opening...")}
            className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-3 font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-300"
          >
            Book Service Slot
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}