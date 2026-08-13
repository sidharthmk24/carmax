"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

      // Video thumbnails — smaller drift inside their own frame, same technique as the gallery
      const speeds = [0.1, 0.1, 0.14];
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
      className="relative w-full min-h-screen bg-black overflow-hidden flex items-center py-24"
    >
      {/* Full-bleed background car image, with the gradient layered ON TOP of it */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgParallaxRef}
          className="absolute inset-x-0 w-full"
          style={{ top: "-8%", height: "116%" }}
        >
          <Image
            // Replace with your actual black car transparent PNG/Image
            src="/landingpage/reviewbg.png"
            alt="Sleek black sports car"
            fill
            className="object-cover object-[78%_60%]"
            unoptimized
            priority
          />
        </div>

        {/* Radial glow, matching the warm backlight behind the car */}
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 75% 50%, rgba(220, 60, 10, 0.35) 0%, rgba(120, 20, 0, 0.55) 32%, rgba(0, 0, 0, 0.9) 68%, rgba(0, 0, 0, 1) 100%)",
          }}
        /> */}

        {/* Left-to-right fade so the text/card side stays legible over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Staggered Video Thumbnail Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex gap-6 sm:gap-16 w-full md:w-[55%] relative"
        >
          {/* Column 1 (Two stacked videos) */}
          <div className="flex flex-col gap-10 sm:gap-[7.5rem] w-1/2">
            <VideoCard
              variants={cardVariants}
              aspect="aspect-[11/12]"
              speed={0.1}
              parallaxRef={(el) => {
                cardParallaxRefs.current[0] = el;
              }}
            />
            <VideoCard
              variants={cardVariants}
              aspect="aspect-[11/12]"
              speed={0.1}
              parallaxRef={(el) => {
                cardParallaxRefs.current[1] = el;
              }}
            />
          </div>

          {/* Column 2 (One taller, centered "hero" video) */}
          <div className="flex flex-col justify-center w-1/2">
            <VideoCard
              variants={cardVariants}
              aspect="aspect-[4/7]"
              speed={0.14}
              parallaxRef={(el) => {
                cardParallaxRefs.current[2] = el;
              }}
            />
          </div>
        </motion.div>

        {/* Right Side: Typography & CTA */}
        <div className="w-full md:w-[40%] flex flex-col items-start md:items-start text-left mt-16 md:mt-0 md:pl-10 relative z-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-[4rem] font-light font-orbitron text-white leading-[1.1] tracking-wide drop-shadow-lg"
          >
            Customer
            <br />
            Reviews
          </motion.h2>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group flex items-center gap-2 mt-6 text-white font-medium text-sm sm:text-base transition-all duration-300 hover:text-orange-400"
          >
            Visit Our Instagram Page
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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
          </motion.a>
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
  return (
    <motion.div
      variants={variants}
      className={`relative ${aspect} w-full max-w-[280px] rounded-sm overflow-hidden bg-zinc-900 group cursor-pointer shadow-2xl border border-white/10`}
    >
      {/* Parallax wrapper — oversized so the scroll-driven translate never exposes empty edges */}
      <div
        ref={parallaxRef}
        className="absolute left-0 w-full"
        style={{
          top: `-${speed * 100}%`,
          height: `${100 + speed * 200}%`,
        }}
      >
        <Image
          // Replace with your actual client video thumbnail
          src="/landingpage/review1.png"
          alt="Customer Review Video Thumbnail"
          fill
          className="object-fill object-top transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />
      </div>

      {/* Play Button Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/5 group-hover:bg-black/20 transition-colors duration-300">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 sm:w-8 sm:h-8 text-black/80 ml-1"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}