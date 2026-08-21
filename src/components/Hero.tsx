"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Typography from "@/components/Typography";
import Image from "next/image";
import SplitText from "./shared/SplitText";

interface HeroProps {
  onOpenBooking: () => void;
}

const CAROUSEL_IMAGES = [
  {
    desktop: "/landingpage/herotest2.png",
    mobile: "/landingpage/mobilecarousel1.webp",
  },
  {
    desktop: "/landingpage/herotest.webp",
    mobile: "/landingpage/mobilecarousel2.webp",
  }
];

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function Hero({ onOpenBooking }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {CAROUSEL_IMAGES.map((img, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className="absolute inset-0 w-full h-full"
              style={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 1 : 0,
                transform: isActive ? "scale(1.05)" : "scale(1)",
                transition: "opacity 1.5s ease-in-out, transform 6s ease-out",
              }}
            >
              <Image
                src={img.desktop}
                alt={`Car Background ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover h-full w-full md:block hidden"
              />
              <Image
                src={img.mobile}
                alt={`Car Background Mobile ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover h-full w-full md:hidden block"
              />
            </div>
          );
        })}

        {/* Dark overlay with linear gradient for high contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30 z-10" />
      </div>

      {/* Hero Content */}
      <div className="flex-grow flex items-end md:items-center w-full container mx-auto px-4 lg:px-20 pt-28 pb-12 md:py-36 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-3xl text-left"
        >
          {/* mainheading — primary h1 */}
          <motion.div variants={itemVariants}>
            {/* <Typography variant="mainheading" className="mb-6">
              Experience a Higher Standard
            </Typography> */}

            <SplitText
              text={<>
                <Typography variant="mainheading" className="">
                  Experience a Higher Standard
                </Typography>
              </>}
              className="text-2xl font-semibold"
              delay={70}
              duration={0.7}
              ease="power3.out"
              splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            {/* Mobile Book Service Button */}
            <motion.button
              onClick={() => onOpenBooking?.()}
              className="mt-8 flex w-full md:hidden items-center justify-center gap-2 bg-white text-black py-4 px-6 font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Book Service Slot <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar: Navigation Lines & Scroll Indicator */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-20 pb-10 flex items-center justify-between">
        {/* Carousel Indicators */}
        <div className="flex gap-2 sm:gap-3 md:z-20">
          {CAROUSEL_IMAGES.map((_, idx) => {
            const isActive = idx === currentIndex;
            const isPast = idx < currentIndex;

            // Determine progress scale targets
            const initialScale = isPast ? 1 : 0;
            const animateScale = (isActive || isPast) ? 1 : 0;
            const duration = isActive ? 5 : 0;

            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`group relative h-4 flex items-center cursor-pointer transition-all duration-500 ease-in-out ${
                  isActive ? "w-14 sm:w-24" : "w-8 sm:w-12"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {/* Progress Bar Track */}
                <div className="w-full h-[1.5px] bg-white/20 group-hover:bg-white/40 transition-colors duration-300 relative overflow-hidden">
                  <motion.div
                    key={`${idx}-${currentIndex}`} // Force remount to reset animations correctly on wrap-around
                    className="absolute inset-y-0 left-0 bg-white origin-left"
                    initial={{ scaleX: initialScale }}
                    animate={{ scaleX: animateScale }}
                    transition={{ duration, ease: "linear" }}
                    style={{ width: "100%", originX: 0 }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Scroll to Discover button (Bottom Right as per hero.png) */}
        <motion.button
          onClick={scrollToServices}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="group hidden md:flex items-center gap-2 text-white/90 hover:text-orange-500 transition-colors duration-300 font-medium text-sm tracking-wide cursor-pointer select-none ml-auto"
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

