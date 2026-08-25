"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import SplitText from "./shared/SplitText";

function ProgressSegment({
  progress,
  index,
  total,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const scaleX = useTransform(progress, [start, end], [0, 1], { clamp: true });

  return (
    <motion.div 
      variants={{
        hidden: { scaleX: 0, opacity: 0 },
        visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }
      }}
      style={{ originX: 0 }}
      className="relative w-full h-[1.5px] bg-white/20 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-white origin-left"
        style={{ scaleX, willChange: "transform" }}
      />
    </motion.div>
  );
}

function BackgroundLayer({
  step,
  index,
  isActive,
}: {
  step: { image: string; mobileImage: string; heading: string };
  index: number;
  isActive: boolean;
}) {
  return (
    <div
      className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out"
      style={{
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      {/* Desktop image */}
      <Image
        src={step.image}
        alt={step.heading}
        fill
        className="object-fill hidden md:block"
        priority={index === 0}
        sizes="100vw"
        unoptimized
      />
      {/* Mobile image */}
      <Image
        src={step.mobileImage}
        alt={step.heading}
        fill
        className="object-fill block md:hidden"
        priority={index === 0}
        sizes="100vw"
        unoptimized
      />
    </div>
  );
}

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const pendingStep = useRef<number | null>(null);
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const steps = [
    {
      num: "01",
      tabName: "Global Tooling",
      heading: "Global Tooling",
      description: "Every facility is equipped with specialized tech sourced from China, Taiwan, and Germany. ",
      image: "/landingpage/newcarousel1.png",
      mobileImage: "/landingpage/mobilecarousel1.webp",
    },
    {
      num: "02",
      tabName: "Uniformed Expertise",
      heading: "Uniformed Expertise",
      description: 'No matter which branch you visit, the technical "B&C Carmax Protocol" remains identical.',
      image: "/landingpage/newcarousel2.png",
      mobileImage: "/landingpage/mobilecarousel2.webp",
    },
    {
      num: "03",
      tabName: "Transparent Logistics",
      heading: "Transparent Logistics",
      description: "Free pickup and drop-off across Mangalore, ensuring your convenience is our priority.",
      image: "/landingpage/newcarousel3.png",
      mobileImage: "/landingpage/mobilecarousel3.webp",
    },
    {
      num: "04",
      tabName: "Standardised Quality",
      heading: "Standardised Quality",
      description: "Free pickup and drop-off across Mangalore, ensuring your convenience is our priority.",
      image: "/landingpage/newcarousel4.png",
      mobileImage: "/landingpage/mobilecarousel4.webp",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const commitStep = useCallback((step: number) => {
    setActiveStep((prev) => (prev !== step ? step : prev));
  }, []);

  useEffect(() => {
    const updateStep = (latest: number) => {
      let step = Math.floor(latest * steps.length);
      if (step >= steps.length) step = steps.length - 1;
      if (step < 0) step = 0;

      // Only reset the debounce timer when the target step actually changes,
      // so a settled scroll position commits fast but a fast flick through
      // multiple steps doesn't fire a remount for each one it passes.
      if (pendingStep.current === step) return;
      pendingStep.current = step;

      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => commitStep(step), 60);
    };

    updateStep(scrollYProgress.get());

    const unsubscribe = scrollYProgress.on("change", updateStep);
    return () => {
      unsubscribe();
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [scrollYProgress, steps.length, commitStep]);

  const handleTabClick = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const containerHeight = containerRef.current.offsetHeight;
    const scrollableDistance = containerHeight - window.innerHeight;

    const targetScroll =
      containerTop + (index / steps.length) * scrollableDistance + scrollableDistance / steps.length / 2;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const renderProgressSteps = () => (
    steps.map((step, idx) => {
      const isActive = idx === activeStep;
      return (
        <motion.div 
          key={idx} 
          variants={{
            hidden: {},
            visible: {}
          }}
          className="flex-1 flex flex-col gap-4 sm:gap-5"
        >
          <ProgressSegment progress={scaleX} index={idx} total={steps.length} />

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            onClick={() => handleTabClick(idx)}
            className={`hidden md:block text-left cursor-pointer transition-all duration-300 ${
              isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
            }`}
          >
            <div className="flex flex-col xl:flex-row xl:items-center gap-1 xl:gap-2">
              <span
                className={`font-semibold text-xs sm:text-[16px] transition-colors ${
                  isActive ? "text-white" : "text-gray-300"
                }`}
              >
                {step.num}
              </span>
              <span
                className={`block text-[11px] sm:text-[16px] tracking-wide transition-colors font-light ${
                  isActive ? "text-white" : "text-gray-300"
                }`}
              >
                {step.tabName}
              </span>
            </div>
          </motion.button>
        </motion.div>
      );
    })
  );

  return (
    <div ref={containerRef} id="why-choose-us" className="relative h-[400vh] bg-[#000000]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end">
        {steps.map((step, idx) => (
          <BackgroundLayer
            key={idx}
            step={step}
            index={idx}
            isActive={idx === activeStep}
          />
        ))}

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

        <div className="relative z-20 w-full container mx-auto px-4 sm:px-8 lg:px-20 pb-12 sm:pb-16 flex flex-col justify-end h-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mb-10 md:mb-14 sm:mb-20 max-w-xl min-h-[160px] flex flex-col justify-end"
          >
            <span className="block text-gray-300  font-be-vietnam  text-sm sm:text-[16px] font-medium md:font-light mb-8 md:mb-8">
              Why Choose Us
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
              >
                <SplitText
                  text={steps[activeStep].heading}
                  tag="h2"
                  className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-light font-be-vietnam text-white  pb-2 md:pb-3 mb-1 md:mb-2 "
                  delay={20}
                  duration={0.4}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  useScrollTrigger={false}
                  textAlign="left"
                />
                <SplitText
                  text={steps[activeStep].description}
                  tag="p"
                  className="text-white md:text-gray-300 font-light leading-relaxed text-[15px] sm:text-[18px]  max-w-md mt-2 md:mt-4 "
                  delay={20}
                  duration={0.4}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  useScrollTrigger={false}
                  textAlign="left"
                  lastWordsCount={8}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Desktop Version */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2, delayChildren: 0.1 }
              }
            }}
            className="hidden md:flex w-full gap-4 sm:gap-6"
          >
            {renderProgressSteps()}
          </motion.div>

          {/* Mobile Version */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2, delayChildren: 0.1 }
              }
            }}
            className="flex md:hidden w-full gap-4 sm:gap-6"
          >
            {renderProgressSteps()}
          </motion.div>
        </div>
      </div>
    </div>
  );
}