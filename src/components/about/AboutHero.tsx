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
    image: "/about/slider1.png",
    text: "Founded by Balachandra Nayak, the garage was built on a simple foundation: handling every vehicle with patience, technical expertise, and meticulous attention to detail. ",
  },
  {
    id: 2,
    image: "/about/slider2.png",
    text: "Over the years, that commitment earned the trust of customers, and Car Impact steadily grew into a name people could rely on. As more premium vehicles found their way onto the roads of Mangaluru, so did the demand for a service centre equipped to care for them.",
  },
  {
    id: 3,
    image: "/about/slider3.png",
    text: "In response to this changing landscape, B&C CARMAX was established in 2019, bringing the same dedication and quality workmanship for luxury and high-performance vehicles. ",
  },
  {
    id: 4,
    image: "/about/slider4.png",
    text: "Today, Balachandra and his son, Chirag Nayak, continue that legacy from a modern facility in Yekkur, Mangaluru. With plans underway to expand into additional locations, the goal is to make trusted automotive care more accessible to vehicle owners across the region. ",
  },
];

export default function AboutHero() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="relative pt-32 pb-16 bg-[#1D1D1B] text-white overflow-hidden flex flex-col">
      <div className="container mx-auto px-4 lg:px-20 mb-8 md:mb-16">
        {/* Header Section */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-start md:items-center"
          >
            <Typography variant="mainheading" className="mb-4 text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-left md:text-center">
              <SplitText text="About B&C Carmax" tag="span" textAlign="inherit" delay={30} useScrollTrigger={false} />
            </Typography>
            <div className="flex flex-col items-start md:items-center mt-6 text-gray-300 text-sm md:text-[20px] max-w-2xl mx-auto font-sans font-light leading-relaxed text-left md:text-center">
              <SplitText 
                text="It began over 25 years ago in Puttur with a humble workshop named Car Impact." 
                tag="p" 
                textAlign="inherit" 
                delay={20} 
                useScrollTrigger={false} 
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timeline Carousel Section */}
      <div className="relative w-full flex-grow flex flex-col justify-center">
        <div className="w-full pl-4 lg:pl-20">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1.15}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 30 },
              1024: { slidesPerView: 1.5, spaceBetween: 60 },
              1280: { slidesPerView: 1.5, spaceBetween: 80 },
            }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onBreakpoint={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onUpdate={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="w-full !overflow-visible relative z-10"
          >
            {timelineData.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="flex flex-col h-full w-full relative">
                  
                  {/* Top: Image Section */}
                  <div className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full flex items-end pb-4 md:pb-12">
                    <div className="w-full md:w-[92%] h-full relative">
                      {/* Image container with rounded-sm overflow-hidden */}
                      <motion.div
                        className="w-full h-full relative rounded-sm overflow-hidden shadow-2xl bg-zinc-800 z-10"
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: index * 0.15 }}
                      >
                        <Image
                          src={item.image}
                          alt={`History slide ${item.id}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </motion.div>

                      {/* The Line (Only on the first slide, sibling to the image container so it is not clipped) */}
                      {index === 0 && (
                        <motion.div
                          className="absolute left-full top-1/2 -translate-y-1/2 h-[1px] z-0 pointer-events-none origin-left w-[500vw]"
                          style={{
                            background: "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 100%)",
                            backgroundSize: "200% 100%",
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ 
                            scaleX: 1,
                            backgroundPosition: ["200% 0%", "-200% 0%"]
                          }}
                          transition={{
                            scaleX: { duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 },
                            backgroundPosition: { duration: 8, ease: "linear", repeat: Infinity }
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Bottom: Text Section (Staggered to the right end of the image container on desktop, left-aligned full-width on mobile) */}
                  <div className="h-auto min-h-[120px] w-full pt-4 md:pt-12 relative">
                    <div className="w-full md:w-[92%] flex justify-start md:justify-end">
                      <div className="w-full md:w-[45%]">
                        <SplitText
                          text={item.text}
                          tag="p"
                          className="text-[#e4e4e7] text-[14px] md:text-[16px] font-light leading-relaxed"
                          textAlign="left"
                          delay={15}
                          splitType="words"
                          useScrollTrigger={true}
                        />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Controls */}
        <div className="container mx-auto px-4 lg:px-20 mt-1 md:mt-8 flex justify-center md:justify-end">
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              disabled={isBeginning}
              className={`w-[50px] h-[50px] flex items-center justify-center rounded-full border transition-colors bg-transparent group ${
                isBeginning
                  ? "border-white/10 text-white/30 cursor-not-allowed pointer-events-none opacity-40"
                  : "border-white/20 hover:border-white text-white cursor-pointer"
              }`}
              aria-label="Previous slide"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`transition-transform ${
                  isBeginning 
                    ? "text-white/20" 
                    : "text-white/70 group-hover:text-white group-hover:-translate-x-1"
                }`}
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              disabled={isEnd}
              className={`w-[50px] h-[50px] flex items-center justify-center rounded-full border transition-colors bg-transparent group ${
                isEnd
                  ? "border-white/10 text-white/30 cursor-not-allowed pointer-events-none opacity-40"
                  : "border-white/20 hover:border-white text-white cursor-pointer"
              }`}
              aria-label="Next slide"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`transition-transform ${
                  isEnd 
                    ? "text-white/20" 
                    : "text-white/70 group-hover:text-white group-hover:translate-x-1"
                }`}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
