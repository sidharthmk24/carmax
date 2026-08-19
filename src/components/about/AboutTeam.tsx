"use client";

import React from "react";
import { motion } from "framer-motion";
import Typography from "../Typography";

import Image from "next/image";

const teamMembers = Array(6).fill({
  name: "Mr. Balachandra Nayak",
  role: "Founder",
});

export default function AboutTeam() {
  return (
    <section className="py-2 bg-[#1D1D1B] text-white">
      <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
        
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="subheading" className="text-center font-normal mb-4">
              Meet the Team
            </Typography>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              {/* Image Placeholder */}
              <div className="w-[85%] md:w-[90%] aspect-square bg-[#1a1a1a] rounded-sm overflow-hidden relative">
                <Image 
                  src="/landingpage/aboutbg.webp" 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                />
              </div>
              
              <h3 className="font-sans font-normal text-white text-[15px] mt-4 mb-1 tracking-wide">
                {member.name}
              </h3>
              <p className="font-sans font-light text-[#a1a1aa] text-[13px] tracking-wide">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
