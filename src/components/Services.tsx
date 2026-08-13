"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Typography from "./Typography";

export default function Services() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const services = [
    {
      title: "Engine & Transmission",
      image: "/landingpage/service1.png", // Replace with your actual image paths
    },
    {
      title: "Brakes, AC & Suspension",
      image: "/landingpage/service2.png",
    },
    {
      title: "Vehicle Body & Accident Repairs",
      image: "/landingpage/service3.png",
    },
    {
      title: "Paint & Exterior Care",
      image: "/landingpage/service4.png",
    },
    {
      title: "Performance & Upgrades",
      image: "/landingpage/service5.png",
    },
     {
      title: "Customer Support Services",
      image: "/landingpage/service6.png",
    },
  ];

  return (
    // overflow-hidden on the section prevents horizontal scrolling when slides bleed out
    <section id="services" className="py-20 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20">
        
        {/* Header Section */}
        <div className="flex flex-row items-center justify-between mb-10">
          <Typography 
            variant="subheading" 
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-orbitron uppercase tracking-wide"
          >
            Our Services
          </Typography>

          {/* Custom Swiper Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              ref={prevRef}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-600 text-white hover:border-white transition-all duration-300 z-10 disabled:opacity-30 disabled:hover:border-zinc-600 cursor-pointer"
              aria-label="Previous slide"
            >
             <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.95618 0.999946L0.999661 8.30429L7.95618 15.6086M0.999661 8.30429L17.6953 8.3043" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-600 text-white hover:border-white transition-all duration-300 z-10 disabled:opacity-30 disabled:hover:border-zinc-600 cursor-pointer"
              aria-label="Next slide"
            >
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7391 15.6087L17.6957 8.30435L10.7391 1M17.6957 8.30435L1 8.30435" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        {/* !overflow-visible is the key class here. It allows the cards to bleed outside 
            the container to the right edge of the screen, but constraints the last slide 
            to the right padding of the parent div when fully scrolled. */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={34}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              const navigation = swiper.params.navigation;
              if (navigation) {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
              }
            }
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full !overflow-visible"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="group relative w-full aspect-[3/4] sm:h-[520px] rounded-sm overflow-hidden cursor-pointer bg-zinc-900">
                
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Default Dark Overlay (for text readability) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 z-10" />

                {/* Hover Orange Overlay */}
                <div className="absolute inset-0 bg-[#ff5e00]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 " />

                {/* Content Container */}
                <div className="absolute inset-0 z-30 p-6 sm:p-8 flex flex-col justify-between">

                  {/* Bottom Text Content */}
                  <div className="mt-auto">
                    <Typography variant="smallhead" className="text-white leading-tight mb-4 pr-4 transition-transform duration-500 font-thin group-hover:translate-y-[-4px]">
                      {service.title}
                    </Typography>
                    
                    <div className="inline-flex items-center text-[13px] text-white/90 group-hover:text-white transition-all duration-300">
                      <span className="border-b border-white/50 group-hover:border-white pb-[2px] mr-1">
                        Explore Service
                      </span>
                      <ChevronRight size={14} className="mt-[2px]" />
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}