"use client";

import React from "react";
import { motion } from "framer-motion";
import Typography from "./Typography";

export default function BusinessHours() {
  const hours = [
    { day: "Mon", time: "9:00 AM - 7:00 PM" },
    { day: "Tue", time: "9:00 AM - 7:00 PM" },
    { day: "Wed", time: "9:00 AM - 7:00 PM" },
    { day: "Thu", time: "9:00 AM - 7:00 PM" },
    { day: "Fri", time: "9:00 AM - 7:00 PM" },
    { day: "Sat", time: "9:00 AM - 7:00 PM" },
    { day: "Sun", time: "Closed" },
  ];

  return (
    <section className="bg-[#1D1D1B] text-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center">
        
        <hr className="w-full border-t border-zinc-800 m-0" />

        <div className="py-20 w-full flex flex-col items-center">
          {/* Title */}
          <h2 className="text-white text-xl sm:text-2xl font-sans font-normal mb-12 tracking-wide text-center">
            Business Hours
          </h2>

          {/* Schedule Listing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="space-y-3 font-sans text-[11px] sm:text-xs">
              {hours.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-16 max-w-[400px] mx-auto"
                >
                  {/* Day name */}
                  <div className="text-left md:text-right text-zinc-300 font-light"><Typography variant="description" >{item.day}</Typography> </div>
                  {/* Opening Hours */}
                  <div className="text-left text-zinc-500 font-light"><Typography variant="description" >{item.time}</Typography></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <hr className="w-full border-t border-zinc-800 m-0" />
      </div>
    </section>
  );
}
