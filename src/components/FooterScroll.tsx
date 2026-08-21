"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Typography from "@/components/Typography";
import SplitText from "@/components/shared/SplitText";

/* ─── Config ─── */
const TOTAL_FRAMES = 50;
const SECTION_H    = 400; // vh — long enough for a comfortable scroll through all 50 frames

function frameUrl(i: number) {
  return `/video/video-frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;
}

/* ─── CTA Overlay — identical to CTASection ─── */
function CTAOverlay({
  visible,
  onBook,
}: {
  visible: boolean;
  onBook?: () => void;
}) {
  return (
    <div
      className="absolute inset-0 z-10 flex items-start"
      style={{
        paddingTop: "clamp(6rem, 14vw, 10rem)",
        paddingLeft: "clamp(1.5rem, 5vw, 5rem)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.6s ease",
      }}
    >
      <div className="flex flex-col items-start">
        {/* Same SplitText + Typography as CTASection */}
        <SplitText
          key={String(visible)}
          text={
            <>
              <Typography variant="subheading" className="text-white">
                Your one stop  <br className=" md:hidden" /> shop for
                <br className="md:block hidden" />
                360 <br className=" md:hidden" /> Car Solutions
              </Typography>
            </>
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
          useScrollTrigger={false}
        />

        {/* Same button as CTASection */}
        <button
          onClick={onBook}
          className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-3 font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-300 mt-4 cursor-pointer"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s",
          }}
        >
          Book Service Slot
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ─── Main ─── */
export default function FooterScroll({ onOpenBooking }: { onOpenBooking?: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const imagesRef  = useRef<HTMLImageElement[]>([]);
  const frameRef   = useRef(0);
  const rafRef     = useRef<number | null>(null);

  const [loaded, setLoaded]   = useState(false);
  const [loadPct, setLoadPct] = useState(0);
  const [showCTA, setShowCTA] = useState(false);

  /* ── Framer scroll tracker ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* ── Draw a frame onto the canvas ── */
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img    = imagesRef.current[index];
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const cw  = canvas.width  / dpr;
    const ch  = canvas.height / dpr;
    const iw  = img.naturalWidth  || img.width;
    const ih  = img.naturalHeight || img.height;
    const sc  = Math.max(cw / iw, ch / ih);
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - iw * sc) / 2, (ch - ih * sc) / 2, iw * sc, ih * sc);
  }, []);

  /* ── HiDPI canvas resize ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width  = "100%";
      canvas.style.height = "100%";
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
      drawFrame(frameRef.current);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  /* ── Preload all frames ── */
  useEffect(() => {
    let done = 0;
    imagesRef.current = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const img = new Image();
      img.src = frameUrl(i);
      img.onload = img.onerror = () => {
        done++;
        setLoadPct(Math.round((done / TOTAL_FRAMES) * 100));
        if (done === TOTAL_FRAMES) {
          setLoaded(true);
          drawFrame(0);
        }
      };
      return img;
    });
  }, [drawFrame]);

  /* ── Scroll progress → frame index + CTA toggle ── */
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!loaded) return;

    // Drive canvas frame
    const target  = Math.round(latest * (TOTAL_FRAMES - 1));
    const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, target));
    if (clamped !== frameRef.current) {
      frameRef.current = clamped;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => drawFrame(clamped));
    }

    // Show CTA once user has scrolled past 35% (mid-animation)
    setShowCTA(latest >= 0.35);
  });

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${SECTION_H}vh` }}
      aria-label="B&C Carmax — Vehicle Restoration"
    >
      {/* Sticky canvas viewport */}
      <div
        className="sticky top-0 w-full overflow-hidden"
        style={{ height: "100vh", background: "#C07232" }}
      >

        

        {/* Canvas — draws the frame sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: "block" }}
        />

        {/* CTA — fades in after 80% scroll */}
        {loaded && <CTAOverlay visible={showCTA} onBook={onOpenBooking} />}

        {/* Scroll cue — visible at the very start */}
        {/* {loaded && !showCTA && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll to explore</p>
            <div className="w-px h-7 bg-white/30 animate-pulse" />
          </div>
        )} */}
      </div>
    </section>
  );
}
