"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "\"I've used several vehicle service providers over the years, but Carmax stands out for its reliability and attention to detail. The staff kept me informed at every stage, and the quality of service exceeded my expectations. Highly recommended.\"",
    author: "- Rahul Sharma, Bengaluru",
  },
  {
    quote:
      "\"One-stop shop for any car troubles in Mangaluru. Their technical team is great with premium cars and very transparent about what parts need changing. Excellent and prompt service with utmost honesty.\"",
    author: "- Sumit Kumar, Bejai",
  },
  {
    quote:
      "\"They did a highly professional job. The seat cover fitting job was absolutely flawless. The time was quick, the staff was extremely polite, and the final look gives the car all the premium feel I wanted.\"",
    author: "- Augustine Furtado, Mangaluru",
  },
  {
    quote:
      "\"Superb experience at Carmax. The transparency in billing and the sheer technical expertise of the mechanics gives you total peace of mind for luxury vehicles.\"",
    author: "- Vikram Shenoy, Udupi",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#000000] overflow-hidden flex flex-col justify-center py-24">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services/commonservicebg.webp"
          alt="Dark sports car background"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        {/* Gradient overlay to make text readable and blend edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/50 via-transparent to-[#000000]/80" />
      </div>

      <div className="relative z-10 w-full pl-6 lg:pl-20 max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pr-6 lg:pr-20 mb-12 lg:mb-16">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-orbitron font-normal tracking-wide">
            Hear from our Customers
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4 mt-6 sm:mt-0">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-zinc-500 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white transition-all cursor-pointer bg-black/20 backdrop-blur-sm"
              aria-label="Previous Testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-zinc-500 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white transition-all cursor-pointer bg-black/20 backdrop-blur-sm"
              aria-label="Next Testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pr-6 lg:pr-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex-none w-[320px] md:w-[400px] lg:w-[450px] aspect-[4/3] sm:aspect-auto border border-white/30 bg-black/10 backdrop-blur-sm p-8 sm:p-10 flex flex-col justify-between snap-start"
            >
              <p className="text-zinc-200 font-sans font-light text-[15px] sm:text-base leading-relaxed tracking-wide mb-12">
                {testimonial.quote}
              </p>
              <p className="text-zinc-400 font-sans font-light text-sm sm:text-base">
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
