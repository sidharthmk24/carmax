"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { motion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./shared/SplitText";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgParallaxRef = useRef<HTMLDivElement>(null);
  const cardParallaxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Background car image — slow classic parallax drift as the section scrolls
      if (bgParallaxRef.current) {
        gsap.fromTo(
          bgParallaxRef.current,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      // Parallax speed for 6 video thumbnail cards
      const speeds = [0.1, 0.14, 0.1, 0.14, 0.1, 0.14];
      cardParallaxRefs.current.forEach((el, i) => {
        if (!el) return;
        const speed = speeds[i] ?? 0.1;
        gsap.fromTo(
          el,
          { yPercent: -speed * 100 },
          {
            yPercent: speed * 100,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="relative w-full min-h-screen bg-[#1D1D1B] overflow-x-clip flex items-center py-12 md:py-24"
    >
      {/* Full-bleed background car image, with the gradient layered ON TOP of it */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgParallaxRef}
          className="absolute inset-x-0 w-full"
          style={{ top: "-8%", height: "116%" }}
        >
          <Image
            src="/landingpage/reviewbg.webp"
            alt="Sleek black sports car"
            fill
            className="object-cover object-[78%_60%] hidden md:block"
            unoptimized
            priority
          />          <Image
            src="/landingpage/reviewmobilebg.png"
            alt="Sleek black sports car"
            fill
            className="object-cover object-[78%_60%] md:hidden"
            unoptimized
            priority
          />
          
        </div>

        {/* Left-to-right fade so the text/card side stays legible over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto w-full px-4 lg:px-20 flex flex-col md:flex-row items-start justify-between">
        
        {/* Right Side: Sticky Typography & CTA (Order 1 on mobile) */}
        <div className="w-full md:w-[35%] md:sticky md:top-32 h-fit flex flex-col items-start text-left mb-5 md:mb-0 md:pl-10 relative z-20 order-1 md:order-2">
          <SplitText
            text={"Customer\nReviews"}
            tag="h2"
            className="text-[30px] sm:text-[30px] md:text-[45px] font-normal font-orbitron text-white leading-tight pb-2 tracking-tight whitespace-pre-line"
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

          <button
            className="group flex items-center gap-2 px-4 py-2 border border-white/40 hover:bg-white hover:text-black text-white font-medium text-sm transition-colors duration-300 cursor-pointer mt-6 md:mt-8"
          >
            View Gallery
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Left Side: Long Scrollable Staggered Video Grid (Desktop Only) */}
        <div className="hidden md:flex gap-6 sm:gap-16 w-full md:w-[58%] relative order-2 md:order-1 pb-16 md:pb-32">
          {/* Column 1 (Three stacked videos) */}
          <div className="flex flex-col gap-10 sm:gap-[7.5rem] w-1/2">
            <VideoCard
              variants={cardVariants}
              aspect="aspect-[3/4]"
              speed={0.1}
              parallaxRef={(el) => {
                cardParallaxRefs.current[0] = el;
              }}
            />
            <VideoCard
              variants={cardVariants}
              aspect="aspect-[3/4]"
              speed={0.1}
              parallaxRef={(el) => {
                cardParallaxRefs.current[2] = el;
              }}
            />
            <VideoCard
              variants={cardVariants}
              aspect="aspect-[3/4]"
              speed={0.1}
              parallaxRef={(el) => {
                cardParallaxRefs.current[4] = el;
              }}
            />
          </div>

          {/* Column 2 (Three taller, shifted stacked videos) */}
          <div className="flex flex-col gap-10 sm:gap-[7.5rem] w-1/2 md:translate-y-24">
            <VideoCard
              variants={cardVariants}
              aspect="aspect-[3/4]"
              speed={0.14}
              parallaxRef={(el) => {
                cardParallaxRefs.current[1] = el;
              }}
            />
            <VideoCard
              variants={cardVariants}
              aspect="aspect-[3/4]"
              speed={0.14}
              parallaxRef={(el) => {
                cardParallaxRefs.current[3] = el;
              }}
            />
            <VideoCard
              variants={cardVariants}
              aspect="aspect-[3/4]"
              speed={0.14}
              parallaxRef={(el) => {
                cardParallaxRefs.current[5] = el;
              }}
            />
          </div>
        </div>

        {/* Mobile Video Swiper (Mobile Only) */}
        <div className="flex flex-col md:hidden w-full relative order-3 mt-4">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1.3}
            centeredSlides={true}
            spaceBetween={8}
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
            className="w-full !overflow-visible"
          >
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <SwiperSlide key={i} className="h-auto flex items-center justify-center">
                {({ isActive }) => (
                  <div
                    className={`relative aspect-[7/12] w-full rounded-md overflow-hidden transition-all duration-500 shadow-2xl ${
                      isActive ? "scale-100 opacity-100" : "scale-[0.85] opacity-40"
                    }`}
                  >
                    <video
                      src="/video/cta.mp4"
                      muted
                      loop
                      playsInline
                      autoPlay={isActive}
                      className="w-full h-full object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div
                      className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-7 h-7 ml-0.5 opacity-90"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Swiper Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8 z-20">
            <button
              ref={setPrevEl}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white transition-all duration-300 z-10 cursor-pointer hover:bg-white/10"
            >
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.95618 0.999946L0.999661 8.30429L7.95618 15.6086M0.999661 8.30429L17.6953 8.3043" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              ref={setNextEl}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white transition-all duration-300 z-10 cursor-pointer hover:bg-white/10"
            >
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7391 15.6087L17.6957 8.30435L10.7391 1M17.6957 8.30435L1 8.30435" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for the Video Thumbnail Cards
interface VideoCardProps {
  variants: Variants;
  aspect: string; // Tailwind aspect-[w/h] class — side cards vs. the taller hero card
  speed: number; // 0–1, how far the thumbnail drifts inside its frame while scrolling
  parallaxRef: (el: HTMLDivElement | null) => void;
}

function VideoCard({ variants, aspect, speed, parallaxRef }: VideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const pct = (video.currentTime / video.duration) * 100;
    setProgress(pct || 0);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    video.currentTime = percentage * video.duration;
    setProgress(percentage * 100);
  };

  return (
    <motion.div
      ref={containerRef}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      className={`relative ${aspect} w-full max-w-[280px] rounded-sm overflow-hidden bg-zinc-900 group cursor-pointer shadow-2xl border border-white/10`}
    >
      {/* Parallax wrapper */}
      <div
        ref={parallaxRef}
        className="absolute left-0 w-full"
        style={{
          top: `-${speed * 100}%`,
          height: `${100 + speed * 200}%`,
        }}
      >
        <video
          ref={videoRef}
          src="/video/cta.mp4"
          muted
          loop
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Control Bar Overlay - Fades in on Hover */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        
        {/* Progress Bar (Clickable/Seekable) */}
        <div 
          onClick={handleProgressClick}
          className="w-full h-1 bg-white/20 rounded-full cursor-pointer relative mb-3 overflow-hidden"
        >
          <div 
            className="h-full bg-orange-500 rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Buttons Row */}
        <div className="flex items-center justify-between">
          <button 
            onClick={togglePlay}
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-white flex items-center justify-center"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button 
            onClick={toggleMute}
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-white flex items-center justify-center"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="1" y1="1" x2="23" y2="23"></line>
                <path d="M9 9v6a3 3 0 0 0 3 3h1.586l4.707 4.707A1 1 0 0 0 20 22V4a1 1 0 0 0-1.707-.707L13.586 8H12a3 3 0 0 0-3 3z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}