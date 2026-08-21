"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Typography from "./Typography";
import SplitText from "./shared/SplitText";

export default function AboutUs() {
  const content = {
    badge: "About Us",
    heading: "A Pursuit of Perfection",
    body: "Built on 25 years of engineering excellence, B&C Carmax has evolved from a trusted name in Puttur to Mangalore’s destination for premium automotive care. We go beyond repairs. With global expertise from Dubai to KSA and precision tooling from Germany and Italy, we preserve your vehicle at its peak.",
  };

  return (
    <section id="about" className="relative min-h-[90vh] flex flex-col justify-end bg-[#1D1D1B] overflow-hidden text-white">
      {/* Background Texture with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landingpage/aboutbg.webp" // Placeholder for the specific background texture
          alt="A stylized macro photo of a textured automotive cooling fin pattern, heavily filtered with a rich orange to black gradient, as seen in image_0.png"
          fill
          className="object-fill object-center hidden md:block"
          quality={100}
          priority
        />
         <Image
          src="/landingpage/aboutmobilebg.webp" // Placeholder for the specific background texture
          alt="A stylized macro photo of a textured automotive cooling fin pattern, heavily filtered with a rich orange to black gradient, as seen in image_0.png"
          fill
          className="object-fill object-center md:hidden block"
          quality={100}
          priority
        />
        {/* Dark to transparent overlay from top and bottom to create text-readable zone in the center-bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
      </div>

      {/* Main Content Container - Bottom Aligned */}
      <div className="relative z-20 container mx-auto px-4  lg:px-20 w-full md:pb-[10vh] pb-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-250 flex flex-col items-start gap-0"
        >
          {/* Badge Button with arrow */}
          <div className="order-3 md:order-1 mt-2 md:mt-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-4 py-3 md:px-3 md:py-2 border border-white/30 md:border-white/20 bg-black/20 md:bg-transparent backdrop-blur-md md:backdrop-blur-sm hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all cursor-pointer"
            >
              <Typography
                variant="btn"
                className="text-white/90 font-medium text-base md:text-sm"
              >
                {content.badge}
              </Typography>
              <span className="text-sm inline-flex items-center">
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75056 15.3146L16.7148 8.00214L9.75056 0.689636M16.7148 8.00214L0.000555558 8.00214" stroke="white" strokeWidth="2"/>
                </svg>
              </span>
            </Link>
          </div>

          {/* Main Heading */}
          <div className="order-1 md:order-2">
            <SplitText
              text={content.heading}
              tag="h2"
              className="text-[30px] sm:text-[30px] md:text-[45px] font-normal font-orbitron text-white leading-tight pb-2 md:pb-3 md:mt-6 mb-0 md:mb-5"
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
          </div>

          {/* White Horizontal Divider Line */}
          <div className="w-full border-b border-white/40 mb-6 hidden md:block order-3" />

          {/* Body Text */}
          <div className="order-2 md:order-4 mt-2 md:mt-0">
            <SplitText
              text={content.body}
              tag="p"
              className="text-gray-200 md:text-white font-light font-sans leading-relaxed md:leading-[1.3] pb-2 tracking-wider md:mt-6 mb-2 md:mb-5 max-w-lg"
              delay={70}
              duration={0.7}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              lastWordsCount={23}
            />
          </div>


        </motion.div>
      </div>
    </section>
  );
}