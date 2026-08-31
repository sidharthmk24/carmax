"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Typography from "./Typography";
import SplitText from "./shared/SplitText";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceHeroSwiper() {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      title: "Engine & Transmission",
      image: "/landingpage/service1.webp",
      slug: "engine-transmission",
    },
    {
      title: "Brakes, AC & Suspension",
      image: "/landingpage/service2.webp",
      slug: "brakes-ac-suspension",
    },
    {
      title: "Vehicle Body & Accident Repairs",
      image: "/landingpage/service3.webp",
      slug: "vehicle-body-accident-repairs",
    },
    {
      title: "Paint & Exterior Care",
      image: "/landingpage/service4.webp",
      slug: "paint-exterior-care",
    },
    {
      title: "Performance & Upgrades",
      image: "/landingpage/newservice5.png",
      slug: "performance-upgrades",
    },
    {
      title: "Customer Support Services",
      image: "/landingpage/service6.webp",
      slug: "customer-support",
    },
  ];

  return (
    <section 
      className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex flex-col justify-between"
      style={{
        background: "linear-gradient(180deg, #1D1D1B 15%, #FE6700 100%)"
      }}
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        
        {/* Header Title */}
        <div className="mb-10 md:mb-6">
          <SplitText
            text={
              <Typography 
                variant="subheading" 
                className="text-white text-4xl sm:text-5xl lg:text-6xl font-orbitron"
              >
                Our Services
              </Typography>
            }
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
          />
        </div>

        {/* Swiper Carousel */}
        <div className="w-full relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={8}
            slidesPerView={1.3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl,
              nextEl,
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== "boolean") {
                const navigation = swiper.params.navigation;
                if (navigation) {
                  navigation.prevEl = prevEl;
                  navigation.nextEl = nextEl;
                }
              }
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 34,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 34,
              },
              1280: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 34,
              },
            }}
            className="w-full !overflow-visible"
          >
            {services.map((service, i) => {
              const shouldAnimate = isMobile
                ? i === 0 || i === 1 || i === services.length - 1
                : i < 4;

              const delay = isMobile
                ? i === 0
                  ? 0.1
                  : 0.25
                : i * 0.1;

              return (
                <SwiperSlide key={i} className="h-auto flex items-center justify-center">
                  {({ isActive }) => (
                    <div
                      className={`w-full transition-all duration-500 ease-out ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-[0.85] opacity-40 md:scale-100 md:opacity-100"
                      }`}
                    >
                      <Link href={`/services/${service.slug}`}>
                        <motion.div
                          initial={shouldAnimate ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={
                            shouldAnimate
                              ? {
                                  duration: 0.6,
                                  delay: delay,
                                  ease: "easeOut",
                                }
                              : { duration: 0 }
                          }
                          className="group relative w-full aspect-[9/14] sm:h-[520px] rounded-sm md:rounded-sm overflow-hidden cursor-pointer bg-transparent"
                          style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)", transform: "translateZ(0)" }}
                        >
                          {/* Background Image */}
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className={`object-fill transition-transform duration-700 ${
                              isActive
                                ? "scale-105 md:scale-100 md:group-hover:scale-105"
                                : "group-hover:scale-105"
                            }`}
                            unoptimized
                          />

                          {/* Default Dark Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 z-10" />

                          {/* Hover/Active Orange Overlay */}
                          {/* <div
                            className={`absolute inset-0 bg-[#FE6700]/90 transition-opacity duration-500 z-20 ${
                              isActive
                                ? "opacity-100 md:opacity-0 md:group-hover:opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                          /> */}

                          {/* Content Container */}
                          <div className="absolute inset-0 z-30 p-6 sm:p-8 flex flex-col justify-between">
                            {/* Bottom Text Content */}
                            <div className="mt-auto">
                              <Typography
                                variant="smallhead"
                                className={`text-white leading-tight md:mb-2 pr-4 transition-transform duration-500 font-thin ${
                                  isActive
                                    ? "translate-y-[-4px] md:translate-y-0 md:group-hover:translate-y-[-4px]"
                                    : "group-hover:translate-y-[-4px]"
                                }`}
                              >
                                {service.title}
                              </Typography>

                              <div
                                className={`inline-flex items-center text-[13px] border-b pb-[2px] transition-all duration-300 ${
                                  isActive
                                    ? "text-white border-white"
                                    : "text-white/90 border-white/50 group-hover:text-white group-hover:border-white"
                                }`}
                              >
                                <span className="mr-1">Explore Service</span>
                                <ChevronRight size={14} className="mt-[2px]" />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Carousel Navigation Buttons centered below Swiper on mobile, left on desktop */}
        <div className="flex items-center justify-center md:justify-start gap-4 mt-10 md:mt-12 z-20">
          <button
            ref={setPrevEl}
            className="w-12 h-12 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            aria-label="Previous service"
          >
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.95618 0.999946L0.999661 8.30429L7.95618 15.6086M0.999661 8.30429L17.6953 8.3043" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            ref={setNextEl}
            className="w-12 h-12 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            aria-label="Next service"
          >
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7391 15.6087L17.6957 8.30435L10.7391 1M17.6957 8.30435L1 8.30435" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
