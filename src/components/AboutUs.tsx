"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SplitText from "./shared/SplitText";
import Button from "./shared/Button";

export default function AboutUs() {
  const content = {
    badge: "About Us",
    heading: "A Pursuit of Perfection",
    body: "Built on 25 years of engineering excellence, B&C Carmax has evolved from a trusted name in Puttur to Mangalore’s destination for premium automotive care. We go beyond repairs. With global expertise from Dubai to KSA and precision tooling from Germany and Italy, we preserve your vehicle at its peak.",
  };

  return (
    <section id="about" className="relative min-h-[100vh] flex flex-col justify-end bg-[#1D1D1B] overflow-hidden text-white">
      {/* Background Texture with Gradient Overlays */}
      <div className="absolute inset-0 z-0 ">
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
      <div className="relative z-20 container mx-auto px-4 lg:px-20 w-full md:pb-[6vh] pb-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="w-full flex flex-col items-start gap-4 md:gap-8"
        >
          {/* Main Heading */}
          <div className="w-full">
            <SplitText
              text={content.heading}
              tag="h2"
              className="text-[30px] sm:text-[30px] md:text-[45px] font-normal font-orbitron text-white leading-tight"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
              textAlign="left"
            />
          </div>

          {/* White Horizontal Divider Line */}
          <div className="w-full border-b border-white/40 mb-1 hidden md:block" />

          {/* Bottom Row: Text (Left) and Button (Right) */}
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-10">
            {/* Body Text */}
            <div className="w-full">
              <SplitText
                text={content.body}
                tag="p"
                className="text-[#c8c8c8] md:text-white font-light font-be-vietnam  md:leading-[1.3]  max-w-xl"
                delay={30}
                duration={0.8}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-50px"
                textAlign="left"
                lastWordsCount={23}
              />
            </div>

            {/* Badge Button with arrow */}
            <div className="shrink-0 pt-2 md:pt-0">
              <Link href="/about">
                <Button 
                  variant="outlined" 
                  rightIcon={
                    <span className="text-white group-hover:text-black text-sm inline-flex items-center transform group-hover:translate-x-1 transition-all duration-300">
                      <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75056 15.3146L16.7148 8.00214L9.75056 0.689636M16.7148 8.00214L0.000555558 8.00214" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>
                  }
                >
                  {content.badge}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}