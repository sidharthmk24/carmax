"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface LandingHeaderProps {
  onOpenBooking: () => void;
}

export default function LandingHeader({ onOpenBooking }: LandingHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > 60 && currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-[#1D1D1B]/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Top Line matching the reference image */}
        <div className="w-full border-t border-white/20 mb-4 transition-opacity duration-300"></div>

        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center cursor-pointer transition-opacity hover:opacity-80">
            <img 
              src="/svgs/logo.svg" 
              alt="Carmax Logo" 
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>

          {/* Book Service Button */}
          <div>
            <button
              onClick={onOpenBooking}
              className="group flex items-center justify-center gap-1.5 bg-white text-black px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-[15px] font-semibold hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            >
              Book Service Slot
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="miter"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
