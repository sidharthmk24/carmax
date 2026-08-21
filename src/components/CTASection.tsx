"use client";

import React from "react";
import { motion } from "framer-motion";
import Typography from "./Typography";
import SplitText from "./shared/SplitText";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative w-full h-screen min-h-[600px] flex items-start pt-24 sm:pt-32 md:pt-40 bg-cover bg-center bg-no-repeat overflow-hidden"
      // Make sure image_bdd3fb.jpg is placed in your public folder for this path to work
      style={{ backgroundImage: "url('/landingpage/ctabg.webp')" }} 
    >
      <div className=" mx-auto px-6 lg:px-20 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          {/* Typography matching the geometric/tech style in the image */}
           <SplitText
              text={<>
                 <Typography variant="subheading" className="text-white ">
            Your one stop shop for
            <br />
            360 Car Solutions
          </Typography>
              </>}
              className="text-2xl font-semibold"
              delay={70}
              duration={0.7}
              ease="power3.out"
              splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="left"
/>


          {/* Button exact match: White background, sharp corners, black text with top-right arrow */}
          <button
            // onClick={() => alert("Booking module opening...")}
            className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-3 font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-300 mt-4 cursor-pointer"
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
              className="transition-transform duration-300 "
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