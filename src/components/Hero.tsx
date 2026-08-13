"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Typography from "@/components/Typography";
import Image from "next/image";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  } as const;

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services") || document.getElementById("about");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full object-cover z-0">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/showroom-bg.png"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-car-washing-and-polishing-process-42903-large.mp4"
            type="video/mp4"
          />
          <div className="absolute inset-0 bg-zinc-900" />
        </video> */}

        <Image src="/landingpage/herotest.png" alt="Car Background" fill className="object-fill h-full w-full" />
        {/* Dark overlay with linear gradient for high contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="flex-grow flex items-center w-full container mx-auto px-4  lg:px-20 py-28 md:py-36 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-left"
        >
          {/* mainheading — primary h1 */}
          <motion.div variants={itemVariants}>
            <Typography variant="mainheading" className="mb-6">
              Experience a Higher Standard
            </Typography>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Discover button (Bottom Right as per hero.png) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 flex justify-end">
        <motion.button
          onClick={scrollToServices}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="group flex items-center gap-2 text-white/90 hover:text-orange-500 transition-colors duration-300 font-medium text-sm tracking-wide cursor-pointer select-none"
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

