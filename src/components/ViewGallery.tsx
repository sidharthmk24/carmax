"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./shared/SplitText";
import Button from "./shared/Button";
import Typography from "./Typography";

interface Project {
  id: number;
  image: string;
  hasPlay: boolean;
  position: "left" | "center" | "right";
  parallaxSpeed: number; // 0–1 — how far the image drifts inside its frame while scrolling
  className: string;      // Specific margin offsets to match the pixel-perfect design
  caption?: string;
}

// 6 workshop images: first 3 match the design photo perfectly, next 3 are staggered randomly
const projects: Project[] = [
  {
    id: 1,
    image: "/gallery/gal1.png",
    hasPlay: false,
    position: "left",
    parallaxSpeed: 0.12,
    className: "md:mt-0",
    caption: "Crystal clear headlights restored to a bright, sharp, showroom finish",
  },
  {
    id: 2,
    image: "/gallery/gal3.png",
    hasPlay: false,
    position: "center",
    parallaxSpeed: 0.18,
    className: "md:mt-[117%]",
    caption: "Premium exterior detailing with a glossy finish and professionally restored wheels.",
  },
  {
    id: 3,
    image: "/gallery/gal2.png",
    hasPlay: false, // play button overlay matching the photo
    position: "right",
    parallaxSpeed: 0.15,
    className: "md:mt-[41.5%]",
    caption: "Deep exterior detailing restores the paint’s gloss, sharpens the finish, and enhances the vehicle’s overall presence.",
  },
  {
    id: 4,
    image: "/gallery/gal4.png",
    hasPlay: false,
    position: "left",
    parallaxSpeed: 0.12,
    className: "md:mt-[120%]",
    caption: "Off road modifications with a rugged bumper, upgraded lighting, and all terrain tires for enhanced capability and a bold stance.",
  },
  {
    id: 5,
    image: "/gallery/gal5.png",
    hasPlay: false,
    position: "center",
    parallaxSpeed: 0.18,
    className: "md:mt-[110%]",
    caption: "Glossy exterior detailing with a deep polished finish, restoring the bodywork and enhancing the tail light clarity.",
  },
  {
    id: 6,
    image: "/gallery/gal6.png",
    hasPlay: false,
    position: "right",
    parallaxSpeed: 0.15,
    className: "md:mt-[135%]",
    caption: "Premium exterior detailing with a deep gloss finish, refined wheels, and enhanced overall appearance.",
  },
];



export default function ViewGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

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

      revealRefs.current.forEach((el, i) => {
        if (!el || !projects[i]) return;
        const pos = projects[i].position;
        let clipStart = "inset(0% 50% 0% 50%)";
        if (pos === "left") clipStart = "inset(0% 100% 0% 0%)";
        if (pos === "right") clipStart = "inset(0% 0% 0% 100%)";

        gsap.fromTo(
          el,
          { clipPath: clipStart },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.0, // Snappier duration
            ease: "power3.out", // Immediate start ease, no lag feeling
            scrollTrigger: {
              trigger: el,
              start: "top 85%", // Triggers slightly earlier
              toggleActions: "play none none none"
            }
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
    let initialClip = "inset(0% 50% 0% 50%)";
    if (project.position === "left") initialClip = "inset(0% 100% 0% 0%)";
    if (project.position === "right") initialClip = "inset(0% 0% 0% 100%)";

    return (
      <div key={project.id} className={`flex flex-col gap-4 ${project.className}`}>
        <div
          ref={(el) => {
            revealRefs.current[idx] = el;
          }}
          className={`relative aspect-[5/3] w-full overflow-hidden group shadow-lg`}
          style={{ clipPath: initialClip, willChange: "clip-path" }}
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
        </div>
        
        {project.caption && (
          <SplitText 
            text={project.caption}
            className="text-gray-300 font-light text-md md:text-lg leading-relaxed max-w-[95%] !text-left  "
            splitType="words"
            delay={40}
            duration={0.6}
            ease="power3.out"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
          />
        )}
      </div>
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

          <Link href="/gallery" className="mt-8 hidden md:block">
            <Button
              variant="outlined"
              rightIcon={
                <span className="text-white group-hover:text-black inline-flex items-center transform group-hover:translate-x-1 transition-colors transition-transform duration-300">
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99665 12.5173L13.7109 6.51733L7.99665 0.517333M13.7109 6.51733L-0.00334827 6.51733" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </span>
              }
            >
              View our Gallery
            </Button>
          </Link>
        </motion.div>

        {/* Staggered Masonry-style Floating Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-10 md:pb-0">
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
           <Link href="/gallery" className="mt-8 w-full">
            <Button
              variant="outlined"
              className="w-full"
              rightIcon={
                <span className="text-white group-hover:text-black inline-flex items-center transform group-hover:translate-x-1 transition-colors transition-transform duration-300">
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99665 12.5173L13.7109 6.51733L7.99665 0.517333M13.7109 6.51733L-0.00334827 6.51733" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </span>
              }
            >
              View our Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}