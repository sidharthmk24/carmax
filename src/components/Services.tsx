"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Typography from "./Typography";
import SplitText from "./shared/SplitText";
import ServiceDetailsModal from "./ServiceDetailsModal";

export default function Services({ page }: { page?: string }) {
  const router = useRouter();
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    title: string;
    slug: string;
    image: string;
    description: string;
    subServices: string[];
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      title: "Engine & Transmission",
      slug: "engine-transmission",
      image: "/landingpage/service1.webp",
      description: "We handle the most demanding mechanical repairs with advanced tools, the right expertise, and a clear focus on long-term performance.",
      subServices: ["Mechanical Repairs", "Engine Overhaul", "Transmission Overhaul"],
    },
    {
      title: "Brakes, AC & Suspension",
      slug: "brakes-ac-suspension",
      image: "/landingpage/service2.webp",
      description: "Our comprehensive brake, suspension, and air conditioning services ensure a smooth, safe, and comfortable ride under any driving conditions.",
      subServices: ["Brake Service & Upgrades", "Suspension Repairs", "AC System Repairs"],
    },
    {
      title: "Vehicle Body & Accident Repairs",
      slug: "vehicle-body-accident-repairs",
      image: "/landingpage/service3.webp",
      description: "From minor dents to major structural restorations, we return your vehicle to factory specifications with absolute precision and care.",
      subServices: ["Accident Repairs", "Denting & Alignment", "Structural Restoration"],
    },
    {
      title: "Paint & Exterior Care",
      slug: "paint-exterior-care",
      image: "/landingpage/service4.webp",
      description: "Enhance and protect your vehicle's exterior with our premium painting services and advanced ceramic coatings that shield against the elements.",
      subServices: ["Automotive Paint Services", "Ceramic Detailing", "Exterior Polishing"],
    },
    {
      title: "Performance & Upgrades",
      slug: "performance-upgrades",
      image: "/landingpage/newservice5.png",
      description: "Unleash the full potential of your vehicle with custom tuning, software calibrations, and modern aesthetic modifications.",
      subServices: ["Programming & Tuning", "Vehicle Facelifts & Modifications", "Exhaust & Intake Upgrades"],
    },
    {
      title: "Customer Support Services",
      slug: "customer-support",
      image: "/landingpage/newservice6.png",
      description: "Enjoy stress-free servicing with our complimentary pickup and drop-off and dedicated 24/7 roadside assistance.",
      subServices: ["Free Pickup & Drop-off", "Roadside Assistance", "Service Consultation"],
    },
  ];

  const handleServiceClick = (service: typeof services[number]) => {
    if (page === "landing-page") {
      setSelectedService(service);
      setIsModalOpen(true);
    } else {
      router.push(`/services/${service.slug}`);
    }
  };

  return (
    // overflow-hidden on the section prevents horizontal scrolling when slides bleed out
    <section id="services" className="md:py-20 py-10 bg-[#000000] overflow-hidden relative">
      {/* Blended low-opacity car background watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none ">
        <Image
          src="/services/commonservicebg.webp"
          alt="Blended background vehicle contour"
          fill
          className="object-fill object-center  "
          quality={95}
          priority
        />
        {/* Vignette dark gradient from bottom to top (black to transparent) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-row items-center justify-between mb-8 md:mb-10">
         

           <SplitText
              text={<>
                  <Typography 
            variant="subheading" 
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-orbitron"
          >
            Our Services
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
/>

          {/* Desktop Navigation Placeholder */}
          <div className="hidden md:block w-[92px] h-10"></div>
        </div>

        {/* Swiper Carousel */}
        {/* !overflow-visible is the key class here. It allows the cards to bleed outside 
            the container to the right edge of the screen, but constraints the last slide 
            to the right padding of the parent div when fully scrolled. */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={8}
          slidesPerView={1.3}
          centeredSlides={true}
          loop={true}
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
          {services.map((service, index) => {
            const shouldAnimate = isMobile
              ? index === 0 || index === 1 || index === services.length - 1
              : index < 4;

            const delay = isMobile
              ? index === 0
                ? 0.1
                : 0.25
              : index * 0.1;

            return (
              <SwiperSlide key={index} className="h-auto flex items-center justify-center">
                {({ isActive }) => (
                  <div
                    className={`w-full transition-all duration-500 ease-out ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-[0.85] opacity-40 md:scale-100 md:opacity-100"
                    }`}
                  >
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
                      onClick={() => handleServiceClick(service)}
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
                    />

                    {/* Default Dark Overlay (for text readability) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 z-10" />

                    {/* Hover/Active Orange Overlay */}
                    <div
                      className={`absolute inset-0 bg-[#ff5e00]/90 transition-opacity duration-500 z-20 ${
                        isActive
                          ? "opacity-100 md:opacity-0 md:group-hover:opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />

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
                          className={`inline-flex items-center text-[13px] transition-all duration-300 ${
                            isActive
                              ? "text-white md:text-white/90 md:group-hover:text-white"
                              : "text-white/90 group-hover:text-white"
                          }`}
                        >
                          <span
                            className={`border-b pb-[2px] mr-1 ${
                              isActive
                                ? "border-white md:border-white/50 md:group-hover:border-white"
                                : "border-white/50 group-hover:border-white"
                            }`}
                          >
                            Explore Service
                          </span>
                          <ChevronRight size={14} className="mt-[2px]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
        </Swiper>

        {/* Custom Swiper Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8 md:mt-0 md:absolute md:top-2 md:right-4 lg:right-20 z-20">
          <button
            ref={setPrevEl}
            className="w-12 h-12 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-white md:border-zinc-600 text-white hover:border-white transition-all duration-300 z-10 disabled:opacity-30 disabled:hover:border-zinc-600 cursor-pointer"
            aria-label="Previous slide"
          >
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.95618 0.999946L0.999661 8.30429L7.95618 15.6086M0.999661 8.30429L17.6953 8.3043" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            ref={setNextEl}
            className="w-12 h-12 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-white md:border-zinc-600 text-white hover:border-white transition-all duration-300 z-10 disabled:opacity-30 disabled:hover:border-zinc-600 cursor-pointer"
            aria-label="Next slide"
          >
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7391 15.6087L17.6957 8.30435L10.7391 1M17.6957 8.30435L1 8.30435" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>

      <ServiceDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </section>
  );
}