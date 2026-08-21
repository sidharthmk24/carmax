"use client";

import React from "react";
import { motion } from "framer-motion";
import Typography from "../Typography";
import { Play } from "lucide-react";
import Image from "next/image";

export default function AboutTestimonial() {
  return (
    <section className="py-20 bg-[#1D1D1B] text-white">
      <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
        
        {/* Top divider */}
        <div className="w-full border-t border-white/10 mb-12"></div>

        <div className="flex flex-col items-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="subheading" className="text-center font-normal mb-4">
              Hear from the Newest Generation
            </Typography>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full  mx-auto aspect-video bg-[#1a1a1a] rounded-md overflow-hidden group cursor-pointer"
        >
          {/* Placeholder Background */}
          <Image 
            src="/landingpage/reviewbg.webp" 
            alt="Testimonial Video" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-[#1D1D1B]/10 group-hover:bg-[#1D1D1B]/20 transition-colors duration-300"></div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/30">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-2" />
            </div>
          </div>
        </motion.div>

        {/* Bottom divider */}
        <div className="w-full border-t border-white/10 mt-16"></div>
        
      </div>
    </section>
  );
}
