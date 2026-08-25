"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Typography from "@/components/Typography";
import SplitText from "@/components/shared/SplitText";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  heroImage: string;
}

export default function ServiceHero({ title, subtitle, heroImage }: ServiceHeroProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative h-screen min-h-[500px] flex flex-col justify-end bg-cover bg-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Top dark gradient to melt with Header and Bottom dark gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/30 to-black z-10" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 lg:px-20 relative z-20 w-full flex-grow flex flex-col justify-end pb-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          <SplitText
            text={
              <Typography
                variant="mainheading"
                className="text-white font-orbitron text-center md:text-left leading-tight"
              >
                {title}
              </Typography>
            }
            className="text-2xl font-semibold w-full"
            delay={60}
            duration={0.7}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign={isMobile ? "center" : "left"}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 md:mt-2 max-w-3xl flex flex-col items-center md:items-start"
          >
            <Typography
              variant="description"
              className="text-white/90 text-center md:text-left text-sm sm:text-base leading-relaxed max-w-xl md:max-w-2xl"
            >
              {subtitle}
            </Typography>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator */}
      <div className="relative z-20 w-full container mx-auto px-4 sm:px-6 lg:px-20 pb-10 flex items-center justify-end">
        <motion.button
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="group hidden md:flex items-center gap-2 text-white/90 hover:text-orange-500 transition-colors duration-300 font-medium text-sm tracking-wide cursor-pointer select-none"
        >
          <span>Scroll to Discover</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
