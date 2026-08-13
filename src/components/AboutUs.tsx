"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typography from "./Typography";

export default function AboutUs() {
  const content = {
    badge: "About Us",
    heading: "A Pursuit of Perfection",
    body: "Built on 25 years of engineering excellence, B&C Carmax has evolved from a trusted name in Puttur to Mangalore’s destination for premium automotive care. We go beyond repairs. With global expertise from Dubai to KSA and precision tooling from Germany and Italy, we preserve your vehicle at its peak.",
  };

  return (
    <section id="about" className="relative min-h-[90vh] flex flex-col justify-end bg-[#0a0a0a] overflow-hidden text-white">
      {/* Background Texture with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landingpage/aboutbg.png" // Placeholder for the specific background texture
          alt="A stylized macro photo of a textured automotive cooling fin pattern, heavily filtered with a rich orange to black gradient, as seen in image_0.png"
          fill
          className="object-fill object-center"
          quality={100}
          priority
        />
        {/* Dark to transparent overlay from top and bottom to create text-readable zone in the center-bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
      </div>

      {/* Main Content Container - Bottom Aligned */}
      <div className="relative z-20 container mx-auto px-4  lg:px-20 w-full pb-[10vh]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-250 flex flex-col items-start gap-0"
        >
          {/* Badge Button with arrow */}
          <button
            type="button"
            className="inline-flex items-center gap-2 px-3 py-2 border border-white/20 bg-none backdrop-blur-sm hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all cursor-pointer "
          >
            <Typography
              variant="btn"
              className="text-white/90  font-medium "
            >
              {content.badge}
            </Typography>
            <span className="text-sm inline-flex items-center">
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75056 15.3146L16.7148 8.00214L9.75056 0.689636M16.7148 8.00214L0.000555558 8.00214" stroke="white" strokeWidth="2"/>
              </svg>
            </span>
          </button>

          {/* Main Heading */}
          <Typography variant="subheading" className="text-white leading-[1.1] mt-6 mb-5 uppercase tracking-tight">
            {content.heading}
          </Typography>

          {/* White Horizontal Divider Line */}
          <div className="w-full border-b border-white/40 mb-6" />

          {/* Body Text */}
         <Typography variant="description" className="text-white leading-[1.1] mt-6 mb-5 uppercase tracking-tight max-w-lg">
           {content.body}
          </Typography>


        </motion.div>
      </div>
    </section>
  );
}