"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Typography from "../Typography";
import SplitText from "../shared/SplitText";

const timelineData = [
  {
    id: 1,
    image: "/about/slider1.webp",
    text: "Founded by Balachandra Nayak, the garage was built on a simple foundation: handling every vehicle with patience, technical expertise, and meticulous attention to detail.",
  },
  {
    id: 2,
    image: "/about/slider2.webp",
    text: "Over the years, that commitment earned the trust of customers, and Car Impact steadily grew into a name people could rely on. As more premium vehicles found their way onto the roads of Mangaluru, so did the demand for a service centre equipped to care for them.",
  },
  {
    id: 3,
    image: "/about/slider3.webp",
    text: "In response to this changing landscape, B&C CARMAX was established in 2019, bringing the same dedication and quality workmanship for luxury and high-performance vehicles.",
  },
  {
    id: 4,
    image: "/about/slider4.webp",
    text: "Today, Balachandra and his son, Chirag Nayak, continue that legacy from a modern facility in Yekkur, Mangaluru. With plans underway to expand into additional locations, the goal is to make trusted automotive care more accessible to vehicle owners across the region.",
  },
];

export default function AboutHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateNavigationState = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setProgress(swiper.progress || 0);
  };

  // Progress percentage spans from the first card (25%) smoothly up to 100% as you swipe through the 4 cards
  const progressPercent = Math.min(
    100,
    Math.max(
      100 / timelineData.length,
      ((progress * (timelineData.length - 1) + 1) / timelineData.length) * 100
    )
  );

  return (
    <section className="relative w-full min-h-screen bg-[#1D1D1B] text-white flex flex-col justify-between pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden select-none">
      
      {/* Header Section */}
      <div className="w-full px-6 md:px-16 lg:px-24 mb-6 md:mb-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center max-w-3xl"
        >
          <Typography
            variant="mainheading"
            className="text-4xl sm:text-5xl md:text-[54px] lg:text-[58px] font-normal tracking-wide text-white"
          >
            <SplitText
              text="About B&C Carmax"
              tag="span"
              textAlign="center"
              delay={30}
              useScrollTrigger={false}
            />
          </Typography>

          <div className="mt-4 text-[#a1a1aa] text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-md mx-auto">
            <SplitText
              text="It began over 25 years ago in Puttur with a humble workshop named Car Impact."
              tag="p"
              textAlign="center"
              delay={20}
              useScrollTrigger={false}
            />
          </div>
        </motion.div>
      </div>

      {/* Main Carousel Area with Horizontal Moving Axis Line */}
      <div className="relative w-full flex-grow flex flex-col justify-center">
        
        {/* Single Horizontal Axis Line starting from first card and progressing with swipe */}
        <div 
          className="absolute left-6 md:left-16 lg:left-24 right-0 top-[42%] md:top-[44%] h-[1px] z-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div 
            className="h-[1px] bg-white/30 transition-[width] duration-200 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="w-full pl-6 md:pl-16 lg:pl-24">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1.12}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 1.25, spaceBetween: 40 },
              1024: { slidesPerView: 1.6, spaceBetween: 60 },
              1280: { slidesPerView: 1.72, spaceBetween: 70 },
              1536: { slidesPerView: 1.85, spaceBetween: 80 },
            }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              updateNavigationState(swiper);
            }}
            onSlideChange={updateNavigationState}
            onProgress={(swiper, prog) => {
              setProgress(prog);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSetTranslate={(swiper) => {
              setProgress(swiper.progress || 0);
            }}
            onBreakpoint={updateNavigationState}
            onUpdate={updateNavigationState}
            className="w-full !overflow-visible relative z-10"
          >
            {timelineData.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="flex flex-col w-full">
                  
                  {/* Slide Image */}
                  <motion.div
                    className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] md:aspect-[16/10] bg-[#1d1d1d] overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.25, 1, 0.5, 1],
                      delay: index * 0.1,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={`B&C Carmax history step ${item.id}`}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1280px) 60vw, 50vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </motion.div>

                  {/* Slide Sub-Description (Staggered Right on Desktop) */}
                  <div className="w-full pt-6 md:pt-8 flex justify-end">
                    <div className="w-full md:w-[72%] lg:w-[62%]">
                      <SplitText
                        text={item.text}
                        tag="p"
                        className="text-[#cccccc] text-xs sm:text-[13px] md:text-[14px] lg:text-[15px] font-light leading-[1.7] tracking-normal"
                        textAlign="left"
                        delay={12}
                        splitType="words"
                        useScrollTrigger={false}
                      />
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Bottom Navigation Controls */}
      <div className="w-full px-6 md:px-16 lg:px-24 mt-4 md:mt-6 flex justify-end items-center">
        <div className="flex items-center gap-3">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            disabled={isBeginning}
            className={`w-10 h-10 md:w-11 md:h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
              isBeginning
                ? "border-white/10 text-white/20 cursor-not-allowed"
                : "border-white/30 hover:border-white text-white/80 hover:text-white cursor-pointer"
            }`}
            aria-label="Previous slide"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => swiperInstance?.slideNext()}
            disabled={isEnd}
            className={`w-10 h-10 md:w-11 md:h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
              isEnd
                ? "border-white/10 text-white/20 cursor-not-allowed"
                : "border-white/30 hover:border-white text-white/80 hover:text-white cursor-pointer"
            }`}
            aria-label="Next slide"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
}