"use client";

import React from "react";
import { motion } from "framer-motion";
import Typography from "../Typography";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 bg-[#1D1D1B] text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20 ">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="mainheading" className="mb-4 text-4xl sm:text-5xl md:text-6xl font-normal ">
              About B&C Carmax
            </Typography>
            <div className="flex flex-col items-center mt-6 mb-2 text-gray-300 text-sm md:text-[20px] max-w-2xl mx-auto font-sans font-light">
              <p>It began over 25 years ago in Puttur 
 </p>
              <p>with a humble workshop named Car Impact.</p>
            </div>
          </motion.div>
        </div>

        {/* Media Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video md:aspect-[21/9] bg-white rounded-sm mb-12 relative overflow-hidden"
        >
          {/* Placeholder for video/image. Currently white as per the design mock. */}
        </motion.div>

        {/* Bottom Text and Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-end justify-between gap-6"
        >
          <div className="max-w-3xl">
            <Typography variant="description" className="text-left text-gray-300">
              Founded by Balachandra Nayak, the garage was built on a simple foundation: handling every vehicle with patience, technical expertise, and meticulous attention to detail. 
            </Typography>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
             <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.95618 1.00001L0.999661 8.73361L7.95618 16.4672M0.999661 8.73361L17.6953 8.73362" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            </button>
            <button className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
             <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7391 16.4672L17.6957 8.73361L10.7391 1M17.6957 8.73361L1 8.73361" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
