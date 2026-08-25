"use client";

import React from "react";
import Image from "next/image";
import { animate, useInView } from "framer-motion";

export interface CompareSliderProps {
  beforeImage: string;
  afterImage: string;
  isActive?: boolean; // Optional: animate only when active
  alt: string;
  alwaysAnimateInView?: boolean; // If true, ignore isActive and just animate on scroll
}

export default function CompareSlider({ 
  beforeImage, 
  afterImage, 
  isActive = true, 
  alt,
  alwaysAnimateInView = false
}: CompareSliderProps) {
  const [value, setValue] = React.useState(50);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const animationRef = React.useRef<any>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  
  React.useEffect(() => {
    let isCancelled = false;
    
    // Animate if it's active (or always animate in view) AND it just came into view
    const shouldAnimate = (alwaysAnimateInView || isActive) && isInView;

    if (shouldAnimate) {
      const sequence = async () => {
        await new Promise(r => setTimeout(r, 400));
        if (isCancelled) return;
        
        // Single fluid, minimal movement using keyframes
        animationRef.current = animate(value, [value, 55, 45, 50], { 
          duration: 1.8, 
          ease: "easeInOut",
          times: [0, 0.3, 0.7, 1],
          onUpdate: setValue 
        });
      };
      sequence();
    } else if (!isActive && !alwaysAnimateInView) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(50);
    }
    
    return () => {
      isCancelled = true;
      if (animationRef.current) animationRef.current.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, isInView, alwaysAnimateInView]);

  const handleInteraction = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (animationRef.current) animationRef.current.stop();
    setValue(Number(e.target.value));
  };

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden select-none group">
      {/* Before Image (Background) */}
      <Image src={beforeImage} alt={alt + " Before"} fill className="object-cover" quality={85} priority={isActive} unoptimized />
      
      {/* After Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ clipPath: `polygon(0 0, ${value}% 0, ${value}% 100%, 0 100%)` }}
      >
        <Image src={afterImage} alt={alt + " After"} fill className="object-cover" quality={85} priority={isActive} unoptimized />
      </div>

      {/* Before / After Labels */}
      <div className="absolute bottom-4 left-5 z-20 pointer-events-none drop-shadow-md">
        <span className="text-white text-[14px] md:text-[15px] font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Before
        </span>
      </div>
      <div className="absolute bottom-4 right-5 z-20 pointer-events-none drop-shadow-md">
        <span className="text-white text-[14px] md:text-[15px] font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          After
        </span>
      </div>

      {/* Visual Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white z-20 flex flex-col justify-end items-center pointer-events-none shadow-[0_0_12px_rgba(255,255,255,0.6)]"
        style={{ left: `${value}%`, transform: "translateX(-50%)" }}
      >
        {/* Tiny Square Handle at the bottom edge */}
        <div className="w-3.5 h-3.5 bg-white mb-0 shadow-[0_2px_8px_rgba(0,0,0,0.6)] relative">
          <div className="absolute inset-0 border border-black/10"></div>
        </div>
      </div>
      
      {/* Invisible Range Input for Interaction */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={value}
        onChange={handleInteraction}
        className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize appearance-none touch-pan-y [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[100px] [&::-webkit-slider-thumb]:h-[500px] [&::-moz-range-thumb]:w-[100px] [&::-moz-range-thumb]:h-[500px] [&::-moz-range-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-ew-resize"
        aria-label="Compare images slider"
      />
    </div>
  );
}
