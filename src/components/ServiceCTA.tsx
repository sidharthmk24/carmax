"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typography from "./Typography";
import SplitText from "./shared/SplitText";

interface ServiceCTAProps {
  onOpenBooking: () => void;
}

export default function ServiceCTA({ onOpenBooking }: ServiceCTAProps) {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[800px] flex items-start pt-16 sm:pt-24 md:pt-32 overflow-hidden">
      
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          // Ensure image_7a8904.jpg is placed in your /public folder
          src="/services/commoncta.webp" 
          alt="Premium BMW Showcase"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Subtle gradient overlay to ensure text readability if the image compresses */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
        
        {/* Text content container positioned on the left */}
        <div className="flex flex-col items-start max-w-xl">
          
          <SplitText
            text={
              <Typography
                variant="subheading"
                className="text-white leading-[1.2] tracking-wide font-light font-orbitron text-4xl sm:text-5xl md:text-[3.5rem]"
              >
                Experience a
                <br />
                Higher Standard
              </Typography>
            }
            className="font-semibold"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 mb-10 max-w-md"
          >
            <p className="text-white/90 font-sans font-light text-sm sm:text-base leading-relaxed tracking-wide">
              We prioritize technical perfection over turnover speed, ensuring your vehicle leaves our care better than the day it was built.
            </p>
          </motion.div>

          {/* Pixel-perfect Button Match */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={onOpenBooking}
            className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-[15px] font-semibold hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
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
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </motion.button>
          
        </div>
      </div>
    </section>
  );
}