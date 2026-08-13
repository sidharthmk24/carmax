"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, AnimatePresence, useTransform, MotionValue } from "framer-motion";

function ProgressSegment({ 
  progress, 
  index, 
  total 
}: { 
  progress: MotionValue<number>; 
  index: number; 
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const scaleX = useTransform(progress, [start, end], [0, 1], { clamp: true });

  return (
    <div className="relative w-full h-[1.5px] bg-white/20 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-white origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      tabName: "Global Tooling",
      heading: "Global Tooling",
      description: "Every facility is equipped with specialized tech sourced from China, Taiwan, and Germany.",
      image: "/landingpage/carousel1.png",
    },
    {
      num: "02",
      tabName: "Uniformed Expertise",
      heading: "Uniformed Expertise",
      description: 'No matter which branch you visit, the technical "B&C Carmax Protocol" remains identical.',
      image: "/landingpage/carousel2.png",
    },
    {
      num: "03",
      tabName: "Transparent Logistics",
      heading: "Transparent Logistics",
      description: "End-to-end tracking and real-time updates ensure your vehicle is always monitored during its care.",
      image: "/landingpage/carousel3.png",
    },
    {
      num: "04",
      tabName: "Standardised Quality",
      heading: "Standardised Quality",
      description: "Rigorous multi-point inspections guarantee that every service meets our uncompromising global standards.",
      image: "/landingpage/carousel4.png",
    },
  ];

  // Tracks the scroll progress specifically within the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring animation for the bottom progress line
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  // Update active text/image based on scroll percentage
  useEffect(() => {
    const updateStep = (latest: number) => {
      // Divide the scroll progress into equal segments
      let step = Math.floor(latest * steps.length);
      // Ensure we don't go out of bounds at exactly 100% scroll
      if (step >= steps.length) step = steps.length - 1;
      if (step < 0) step = 0;
      setActiveStep(step);
    };

    // Initialize with current scroll position
    updateStep(scrollYProgress.get());

    const unsubscribe = scrollYProgress.on("change", updateStep);
    return () => unsubscribe();
  }, [scrollYProgress, steps.length]);

  // Click handler for jumping directly to a tab via scrolling
  const handleTabClick = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const containerHeight = containerRef.current.offsetHeight;
    const scrollableDistance = containerHeight - window.innerHeight;
    
    // Scroll to the middle of the target section's segment
    const targetScroll = containerTop + (index / steps.length) * scrollableDistance + (scrollableDistance / steps.length / 2);
    
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <div ref={containerRef} id="why-choose-us" className="relative h-[400vh] bg-[#050505]">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end">
        
        {/* Background Images Crossfade */}
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0 z-0"
            initial={false}
            animate={{ 
              opacity: activeStep === idx ? 1 : 0,
              scale: activeStep === idx ? 1 : 1.05
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={step.image}
              alt={step.heading}
              fill
              className="object-fill"
              priority={idx === 0}
              unoptimized
            />
          </motion.div>
        ))}

        {/* Gradients for Text Legibility (adjusted to match the cinematic lighting) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

        {/* Content Wrap */}
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16 flex flex-col justify-end h-full">
          
          {/* Main Text Content */}
          <div className="mb-14 sm:mb-20 max-w-xl min-h-[160px] flex flex-col justify-end">
            
            <span className="block text-gray-300 font-orbitron tracking-wide text-xs sm:text-[13px] font-light mb-5">
              Why Choose Us
            </span>

            {/* Smooth transition for the text switching */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-normal font-orbitron text-white leading-[1.1] mb-5 tracking-wide">
                  {steps[activeStep].heading}
                </h2>
                <p className="text-gray-300 font-light leading-relaxed text-sm sm:text-[15px] max-w-md">
                  {steps[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Bar & Navigation Tabs */}
          <div className="flex w-full gap-4 sm:gap-6">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <div key={idx} className="flex-1 flex flex-col gap-4 sm:gap-5">
                  {/* Progress Segment */}
                  <ProgressSegment 
                    progress={scaleX} 
                    index={idx} 
                    total={steps.length} 
                  />
                  
                  {/* Tab Label */}
                  <button
                    onClick={() => handleTabClick(idx)}
                    className={`text-left cursor-pointer transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <div className="flex flex-col xl:flex-row xl:items-center gap-1 xl:gap-2">
                      <span className={`font-semibold text-xs sm:text-[13px] transition-colors ${
                        isActive ? "text-white" : "text-gray-300"
                      }`}>
                        {step.num}
                      </span>
                      <span className={`block text-[11px] sm:text-[13px] tracking-wide transition-colors font-light ${
                        isActive ? "text-white" : "text-gray-300"
                      }`}>
                        {step.tabName}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}