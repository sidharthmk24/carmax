"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, animate, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Typography from "@/components/Typography";
import SplitText from "@/components/shared/SplitText";
import CompareSlider from "@/components/shared/CompareSlider";
import { Benefit } from "@/data/servicesData";

interface ServiceBenefitsProps {
  benefitsTitle?: string;
  benefits?: Benefit[];
}
export default function ServiceBenefits({ benefitsTitle = "Benefits", benefits = [] }: ServiceBenefitsProps) {
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);

  const activeImage = benefits[activeBenefitIndex]?.image || "/landingpage/carousel1.webp";

  return (
    <section className="py-16 md:py-24 bg-stone-50 relative">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Mobile Layout (lg:hidden) */}
        <div className="block lg:hidden w-full">
          {/* Title */}
          <div className="mb-6">
            <SplitText
              text={
                <Typography
                  variant="subheading"
                  className="!text-black !font-semibold font-orbitron leading-tight text-3xl mb-0"
                >
                  {benefitsTitle}
                </Typography>
              }
              className="text-2xl font-semibold"
              delay={50}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </div>

          {/* Card containing Image, Title, Description, and Progress Navigation */}
          {benefits.length > 0 && (
            <div className="flex flex-col w-full">
              {/* Image Container */}
              <div className="relative w-full aspect-[5/3] rounded-lg overflow-hidden bg-zinc-200">
                {benefits.map((benefit, idx) => {
                  const isActive = activeBenefitIndex === idx;
                  return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      pointerEvents: isActive ? "auto" : "none",
                      zIndex: isActive ? 10 : 0 
                    }}
                  >
                    {benefit.compareImage ? (
                      <CompareSlider 
                        beforeImage={benefit.compareImage}
                        afterImage={benefit.image}
                        isActive={isActive}
                        alt={benefit.title || benefitsTitle || "Benefit"}
                      />
                    ) : (
                      <Image
                        src={benefit.image || "/landingpage/carousel1.webp"}
                        alt={benefit.title || benefitsTitle || "Benefit"}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        quality={85}
                        priority={idx === 0} // Preload the first image
                      />
                    )}
                  </motion.div>
                )})}
              </div>

              {/* Active Benefit Title & Description Container */}
              <div className="min-h-[140px] flex flex-col justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBenefitIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <h3 className="text-xl font-semibold text-black leading-tight">
                      {benefits[activeBenefitIndex]?.title}
                    </h3>
                    
                    <p className="mt-2 text-zinc-700 text-[14px] sm:text-base font-light leading-relaxed max-w-xl">
                      {benefits[activeBenefitIndex]?.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Bar: Progress Line & Arrows */}
              <div className="flex items-center justify-between mt-6 w-full pb-2">
                {/* Progress Bar Indicators */}
                <div className="relative w-40 sm:w-48 h-[2px] bg-zinc-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#ff5e00] rounded-full transition-all duration-300 ease-out"
                    style={{
                      width: `${((activeBenefitIndex + 1) / benefits.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Prev/Next Navigation Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setActiveBenefitIndex((prev) => 
                        prev === 0 ? benefits.length - 1 : prev - 1
                      );
                    }}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 hover:border-black active:scale-95 text-zinc-700 hover:text-black transition-all duration-300 cursor-pointer bg-white"
                    aria-label="Previous benefit"
                  >
                    <ArrowLeft className="w-4.5 h-4.5" />
                  </button>
                  <button
                    onClick={() => {
                      setActiveBenefitIndex((prev) => 
                        (prev + 1) % benefits.length
                      );
                    }}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 hover:border-black active:scale-95 text-zinc-700 hover:text-black transition-all duration-300 cursor-pointer bg-white"
                    aria-label="Next benefit"
                  >
                    <ArrowRight className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Layout (lg:grid) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Interactive Tabs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <SplitText
              text={
                <Typography
                  variant="subheading"
                  className="!text-black !font-semibold font-orbitron mb-8"
                >
                  {benefitsTitle}
                </Typography>
              }
              className="text-2xl font-semibold"
              delay={50}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />

            <div className="w-full divide-y divide-zinc-200">
              {benefits.map((benefit, index) => {
                const isActive = index === activeBenefitIndex;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveBenefitIndex(index)}
                    className="cursor-pointer group flex flex-col items-start w-full py-3.5"
                  >
                    {/* Tab Title */}
                    <div
                      className={`flex items-stretch gap-2.5 text-base sm:text-lg transition-all duration-300 ${
                        isActive ? "text-black font-semibold" : "text-zinc-800 font-medium hover:text-black"
                      }`}
                    >
                      {isActive && (
                        <span
                          className="w-[6px] shrink-0"
                          style={{ background: "linear-gradient(to bottom, #FF9E42, #F6032C)" }}
                        />
                      )}
                      <span>{benefit.title}</span>
                    </div>

                    {/* Tab Description (Accordion style) */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pl-[19px] mt-1.5 pr-4 text-zinc-600 font-sans font-light text-sm sm:text-base leading-relaxed">
                            {benefit.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Transitioning Image */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full aspect-[5/3] rounded-md overflow-hidden bg-zinc-200">
              {benefits.map((benefit, idx) => {
                const isActive = activeBenefitIndex === idx;
                return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.97,
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    pointerEvents: isActive ? "auto" : "none",
                    zIndex: isActive ? 10 : 0
                  }}
                >
                  {benefit.compareImage ? (
                    <CompareSlider 
                      beforeImage={benefit.compareImage}
                      afterImage={benefit.image}
                      isActive={isActive}
                      alt={benefit.title || benefitsTitle || "Benefit"}
                    />
                  ) : (
                    <>
                      <Image
                        src={benefit.image || "/landingpage/carousel1.webp"}
                        alt={benefit.title || benefitsTitle || "Benefit"}
                        fill
                        sizes="50vw"
                        className="object-cover"
                        quality={85}
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-transparent pointer-events-none" />
                    </>
                  )}
                </motion.div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}