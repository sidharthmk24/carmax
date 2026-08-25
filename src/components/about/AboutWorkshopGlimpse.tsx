"use client";

import React from "react";
import { motion } from "framer-motion";
import Typography from "../Typography";
import { Play } from "lucide-react";
import Image from "next/image";

export default function AboutWorkshopGlimpse() {
  return (
    <section className=" py-18 md:py-22 bg-[#1D1D1B] text-white">
      <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
        
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="subheading" className="text-center font-normal  mb-4">
              Glimpses from Our Workshop
            </Typography>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-video md:aspect-[21/9] bg-[#1a1a1a] rounded-sm overflow-hidden group cursor-pointer"
        >
          {/* Placeholder Background */}
          <Image 
            src="/about/placeholder.png" 
            alt="Workshop Glimpse" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f97316]/20 to-transparent opacity-50"></div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#f97316]/80">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-2" />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
