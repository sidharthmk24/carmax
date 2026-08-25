"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "./Typography";
import SplitText from "./shared/SplitText";
import Button from "./shared/Button";
import CompareSlider from "./shared/CompareSlider";

interface ServiceTab {
  name: string;
  slug: string;
  beforeImg?: string;
  afterImg?: string;
}

const serviceTabs: ServiceTab[] = [
  {
    name: "Engine & Transmission",
    slug: "engine-transmission",
    beforeImg: "/services/engineafter.png",
     afterImg: "/services/enginebefore.png",
  },
  {
    name: "Brakes, AC & Suspension",
    slug: "brakes-ac-suspension",
    beforeImg: "/services/glimpses2.png",
  },
  {
    name: "Vehicle Body & Accident Repairs",
    slug: "vehicle-body-accident-repairs",
    beforeImg: "/services/glimpses3.png",
  },
  {
    name: "Paint & Exterior Care",
    slug: "paint-exterior-care",
    beforeImg: "/services/redcarafter.png",
    afterImg: "/services/redcarbefore.png",
  },
  {
    name: "Performance & Upgrades",
    slug: "performance-upgrades",
    beforeImg: "/services/glimpses5.png",
  },
];

export default function GlimpsesServices() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = serviceTabs[activeTabIdx];

  const handlePrev = () => {
    setActiveTabIdx((prev) => (prev === 0 ? serviceTabs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTabIdx((prev) => (prev === serviceTabs.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="glimpses-services" className="relative py-10 md:py-20 bg-[#000000] overflow-hidden min-h-screen flex items-center">
      
      {/* Full-bleed background car image, matching other pages */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <Image
          src="/services/commonservicebg.webp"
          alt="Background Car"
          fill
          className="object-fill  hidden md:block "
          unoptimized
          priority
        />
        <Image
          src="/services/commonservicebg.webp"
          alt="Background Car Mobile"
          fill
          className="object-fill md:hidden "
          unoptimized
          priority
        />
        {/* Subtle vignette/gradient over background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[black]" />
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 md:gap-0">
          <SplitText
            text={
              <Typography variant="subheading" className="text-white tracking-tight ">
                Glimpses from Our Workshop
              </Typography>
            }
            className="text-2xl font-semibold w-full text-left"
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

          <Link href="/gallery" className="hidden lg:block self-start md:self-auto">
            <Button
              variant="outlined"
              className="whitespace-nowrap uppercase tracking-wider"
              rightIcon={
                <span className="text-white group-hover:text-black inline-flex items-center transform group-hover:translate-x-1 transition-colors transition-transform duration-300">
                  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.75056 15.3147L16.7148 8.00217L9.75056 0.689666M16.7148 8.00217L0.000555558 8.00217" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </span>
              }
            >
              View our Gallery
            </Button>
          </Link>
        </div>

        {/* Core Layout: Side Tabs + Split Image Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start ">
          
          {/* Left Column: Interactive Navigation List (Desktop Only) */}
          <div className="lg:col-span-4 flex flex-col gap-7 items-start hidden lg:flex">
            {serviceTabs.map((tab, idx) => {
              const isActive = idx === activeTabIdx;
              return (
                <button
                  key={tab.slug}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`relative flex items-center text-left font-sans text-xl tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive ? "text-white font-medium pl-6" : "text-zinc-500 hover:text-zinc-300 pl-6"
                  }`}
                >
                  {/* Vertical white indicator line */}
                  {isActive && (
                    <motion.div
                      layoutId="serviceActiveLine"
                      className="absolute left-0 top-1 bottom-1 w-[3px] bg-white"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Typography variant="description">{tab.name}</Typography>
                </button>
              );
            })}
          </div>

          {/* Right Column: Before/After Split Image */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-zinc-900 border border-white/10 shadow-2xl select-none">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTabIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full flex"
                >
                  <div className="relative w-full h-full overflow-hidden">
                    {activeTab.beforeImg && activeTab.afterImg ? (
                      <CompareSlider
                        beforeImage={activeTab.beforeImg}
                        afterImage={activeTab.afterImg}
                        alt={activeTab.name}
                        alwaysAnimateInView={true}
                      />
                    ) : (
                      <Image
                        src={activeTab.beforeImg || activeTab.afterImg || ""}
                        alt={activeTab.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    )}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Title Display */}
            <div className="block lg:hidden mt-2">
              <Typography variant="description" className="text-white text-2xl font-light font-sans tracking-wide">
                {activeTab.name}
              </Typography>
            </div>

            {/* Desktop Navigation Arrows (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-3 self-center lg:self-start mt-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 text-white/60 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                aria-label="Previous glimpses service"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 text-white/60 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                aria-label="Next glimpses service"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Mobile-Only Bottom Navigation & Action Button */}
            <div className="flex lg:hidden items-center justify-between w-full mt-4">
              <Link href="/gallery" className="shrink-0">
                <Button
                  variant="outlined"
                  className="whitespace-nowrap uppercase tracking-wider"
                  rightIcon={
                    <span className="text-white group-hover:text-black inline-flex items-center transform group-hover:translate-x-1 transition-colors transition-transform duration-300">
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99665 12.5173L13.7109 6.51733L7.99665 0.517333M13.7109 6.51733L-0.00334827 6.51733" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </span>
                  }
                >
                  View our Gallery
                </Button>
              </Link>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-white/40 text-white/80 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                  aria-label="Previous glimpses service"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-white/40 text-white/80 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                  aria-label="Next glimpses service"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
