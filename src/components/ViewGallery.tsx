"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./shared/SplitText";
import Typography from "./Typography";

interface Project {
  id: number;
  image: string;
  hasPlay: boolean;
  position: "left" | "center" | "right";
  parallaxSpeed: number; // 0–1 — how far the image drifts inside its frame while scrolling
  className: string;      // Specific margin offsets to match the pixel-perfect design
}

// 6 workshop images: first 3 match the design photo perfectly, next 3 are staggered randomly
const projects: Project[] = [
  {
    id: 1,
    image: "/landingpage/gallery1.webp",
    hasPlay: false,
    position: "left",
    parallaxSpeed: 0.12,
    className: "md:mt-0",
  },
  {
    id: 2,
    image: "/landingpage/gallery2.webp",
    hasPlay: false,
    position: "center",
    parallaxSpeed: 0.18,
    className: "md:mt-[117%]",
  },
  {
    id: 3,
    image: "/landingpage/gallery3.webp",
    hasPlay: false, // play button overlay matching the photo
    position: "right",
    parallaxSpeed: 0.15,
    className: "md:mt-[41.5%]",
  },
  {
    id: 4,
    image: "/gallery/gallery1.png",
    hasPlay: false,
    position: "left",
    parallaxSpeed: 0.12,
    className: "md:mt-[120%]",
  },
  {
    id: 5,
    image: "/gallery/gallery2.png",
    hasPlay: false,
    position: "center",
    parallaxSpeed: 0.18,
    className: "md:mt-[110%]",
  },
  {
    id: 6,
    image: "/gallery/gallery3.png",
    hasPlay: false,
    position: "right",
    parallaxSpeed: 0.15,
    className: "md:mt-[135%]",
  },
];

// Dynamic clip-path logic for the specific reveal directions
const getClipVariants = (position: Project["position"]) => {
  const baseTransition = {
    duration: 1.2,
    ease: [0.77, 0, 0.175, 1] as [number, number, number, number],
  };

  switch (position) {
    case "left":
      return {
        hidden: { clipPath: "inset(0% 100% 0% 0%)" },
        visible: { clipPath: "inset(0% 0% 0% 0%)", transition: baseTransition },
      };
    case "right":
      return {
        hidden: { clipPath: "inset(0% 0% 0% 100%)" },
        visible: { clipPath: "inset(0% 0% 0% 0%)", transition: baseTransition },
      };
    case "center":
      return {
        hidden: { clipPath: "inset(0% 50% 0% 50%)" },
        visible: { clipPath: "inset(0% 0% 0% 0%)", transition: baseTransition },
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: baseTransition },
      };
  }
};

export default function ViewGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      parallaxRefs.current.forEach((el, i) => {
        if (!el || !projects[i]) return;
        const speed = projects[i].parallaxSpeed;

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

  // Split projects into 3 columns for staggered/floating desktop layout
  const col1 = [projects[0], projects[3]];
  const col2 = [projects[1], projects[4]];
  const col3 = [projects[2], projects[5]];

  const renderCard = (project: Project) => {
    const idx = projects.indexOf(project);
    return (
      <motion.div
        key={project.id}
        variants={getClipVariants(project.position)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className={`relative aspect-[5/3] w-full overflow-hidden group shadow-lg ${project.className}`}
      >
        {/* Parallax wrapper */}
        <div
          ref={(el) => {
            parallaxRefs.current[idx] = el;
          }}
          className="absolute left-0 w-full"
          style={{
            top: `-${project.parallaxSpeed * 100}%`,
            height: `${100 + project.parallaxSpeed * 200}%`,
          }}
        >
          <Image
            src={project.image}
            alt={`Workshop image ${project.id}`}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            unoptimized
          />
        </div>

        {/* Video Play Button Overlay */}
        {project.hasPlay && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#1D1D1B]/10 group-hover:bg-[#1D1D1B]/30 transition-colors duration-500 cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-8 h-8 sm:w-10 sm:h-10 ml-1 opacity-90"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="md:py-20 py-10 bg-[#000000] overflow-hidden min-h-screen"
    >
      <div className="container mx-auto px-4 lg:px-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mx-auto mb-12 md:mb-24 flex flex-col items-center justify-center"
        >
          <SplitText
            text={
              <Typography variant="subheading" className="text-white tracking-tight">
                Glimpses from Our Workshop
              </Typography>
            }
            className="text-2xl font-semibold w-full !text-left md:!text-center"
            delay={70}
            duration={0.7}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          <Link
            href="/gallery"
            className="group hidden md:flex items-center gap-2 px-6 py-2.5 border border-white/80 hover:bg-white hover:text-black text-white font-normal text-sm transition-colors duration-300 cursor-pointer mt-8"
          >
            View our Gallery 
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99665 12.5173L13.7109 6.51733L7.99665 0.517333M13.7109 6.51733L-0.00334827 6.51733" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </Link>
        </motion.div>

        {/* Staggered Masonry-style Floating Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-10 md:pb-32">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 md:gap-0">
            {col1.map((project) => renderCard(project))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 md:gap-0">
            {col2.map((project) => renderCard(project))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 md:gap-0">
            {col3.map((project) => renderCard(project))}
          </div>
        </div>

        {/* Mobile Full-width Button */}
        <div className="flex md:hidden w-full pb-6">
          <Link
            href="/gallery"
            className="group flex w-full items-center justify-center gap-2 py-4 px-6 border border-white/80 hover:bg-white hover:text-black text-white font-normal text-sm transition-colors duration-300 cursor-pointer"
          >
            View our Gallery 
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99665 12.5173L13.7109 6.51733L7.99665 0.517333M13.7109 6.51733L-0.00334827 6.51733" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}