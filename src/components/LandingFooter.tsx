"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LandingFooterProps {
  onOpenBooking?: () => void;
}

export default function LandingFooter({ onOpenBooking }: LandingFooterProps) {
  return (
    <footer className="bg-[#1D1D1B] font-sans text-white border-t border-zinc-900 pt-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-row justify-between items-center pb-12">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer hover:opacity-90 transition-opacity">
          <Image 
            src='/svgs/ftrlogo.svg' 
            width={160} 
            height={50} 
            alt="B&C Carmax Logo" 
            className="h-10 md:h-12 w-auto" 
          />
        </Link>
        
        {/* Book Service Button */}
        <button 
          onClick={onOpenBooking}
          className="group flex items-center justify-center gap-2 border border-zinc-700 bg-transparent text-white px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
        >
          Book Service Slot
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </div>

      {/* Bottom Separator & Copyright */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-20 py-6">
          <p className="text-zinc-500 text-[10px] md:text-xs">
            &reg; 2026-27 B&C Carmax.
          </p>
        </div>
      </div>
    </footer>
  );
}
