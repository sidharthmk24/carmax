"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Project {
  id: number;
  image: string;
  className: string;
  hasPlay: boolean;
  position: "left" | "center" | "right";
  parallaxSpeed: number; // 0–1 — how far the image drifts inside its frame while scrolling
}

// Column offsets are % values (not rem) on purpose: a percentage margin-top
// resolves against the item's own column width, so these exact proportions
// (measured from the reference photo) hold true at every screen size instead
// of only matching at one fixed viewport width.
const projects: Project[] = [
  {
    id: 1,
    image:
      "/landingpage/gallery1.png",
    className: "md:mt-0",
    hasPlay: false,
    position: "left",
    parallaxSpeed: 0.12,
  },
  {
    id: 2,
    image:
      "/landingpage/gallery2.png",
    className: "md:mt-[117%]",
    hasPlay: false,
    position: "center",
    parallaxSpeed: 0.18,
  },
  {
    id: 3,
    image:
      "/landingpage/gallery3.png",
    className: "md:mt-[41.5%]",
    hasPlay: true,
    position: "right",
    parallaxSpeed: 0.15,
  },
];

// Parent container handles the strict "one by one" staggering sequence
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

// Dynamic clip-path logic for the specific reveal directions — unchanged, it's already right
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
        if (!el) return;
        const speed = projects[i].parallaxSpeed;

        // Image drifts within its own frame as the card crosses the viewport.
        // The wrapper is oversized (see JSX) so this never exposes empty edges.
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
      id="gallery"
      className="py-24 bg-black overflow-hidden min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-orbitron text-white tracking-wide mb-6">
            Glimpses from Our Workshop
          </h2>

          <button
            onClick={() => alert("Redirecting to full gallery...")}
            className="group flex items-center gap-2 px-6 py-2.5 border border-white hover:bg-white hover:text-black text-white font-medium text-sm transition-colors duration-300 cursor-pointer"
          >
            View our Gallery
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
        </motion.div>

        {/* Staggered Gallery Grid — clip-path intro (unchanged) + GSAP scroll parallax */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 pb-32"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={getClipVariants(project.position)}
              className={`relative aspect-[5/3] w-full overflow-hidden ${project.className} group`}
            >
              {/* Parallax wrapper — oversized on top/bottom so the scroll-driven
                  translate never reveals empty space at the frame's edges */}
              <div
                ref={(el) => {
                  parallaxRefs.current[i] = el;
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
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-500 cursor-pointer">
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}