"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SubService } from "@/data/servicesData";
import Typography from "./Typography";

interface SubServicesListProps {
  subServices: SubService[];
  onOpenBooking: () => void;
}

export default function SubServicesList({ subServices, onOpenBooking }: SubServicesListProps) {
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden border-b border-zinc-900">
      {/* Blended low-opacity car background watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.22]">
        <Image
          src="/services/commonservicebg.webp"
          alt="Blended background vehicle contour"
          fill
          className="object-cover object-center filter grayscale brightness-75 contrast-125"
          quality={95}
          priority
        />
        {/* Vignette gradients to blend into section boundaries */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" />
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] rounded-full bg-zinc-950/10 blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="space-y-20 lg:space-y-18 ">
          {subServices.map((sub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center"
            >
              {/* Sub-service Image - slightly rounded corners */}
              <div className="w-full md:w-1/2 aspect-[16/10] sm:aspect-[16/9] relative overflow-hidden rounded-md bg-zinc-900 border border-zinc-800/40 group">
                <Image
                  src={sub.image}
                  alt={sub.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              </div>

              {/* Sub-service Content */}
              <div className="w-full md:w-1/2 flex flex-col items-start pl-0 md:pl-6 lg:pl-10">
                {/* Title in clean sans-serif/medium font as seen in photo */}
                <h3 className="text-white text-2xl sm:text-3xl font-be-vietnam font-light mb-3 tracking-wide">
                  {sub.title}
                </h3>

                {/* Subtitle/Description in clean small sans-serif */}
                <Typography variant="description" className="">
                  {sub.description}
                </Typography>
                {/* Booking Button matching design */}
                <button
                  onClick={onOpenBooking}
                  className="group flex items-center justify-center gap-1.5 bg-white text-black px-5 py-2.5 text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-colors duration-300 cursor-pointer rounded-xs mt-5"
                >
                  Book Service Slot
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
