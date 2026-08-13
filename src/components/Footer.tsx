"use client";

import Image from "next/image";
import React from "react";

export default function Footer() {
  const navLinks = [
    { name: "Services", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const serviceLinks = [
    { name: "Engine & Transmission", href: "#" },
    { name: "Brakes, Suspension & AC Repair", href: "#" },
    { name: "Body & Accident Repairs", href: "#" },
    { name: "Paint & Exterior Care", href: "#" },
    { name: "Performance & Upgrades", href: "#" },
    { name: "Customer Support Services", href: "#" },
  ];

  return (
    <footer className="bg-black pt-20 pb-10 font-sans border-t border-zinc-900">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8">
          
          {/* Left Column: Brand & Button */}
          <div className="flex flex-col items-start">
            {/* Custom Logo Construction matching image */}
            <a href="#home" className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-opacity">
             <Image src='/svgs/ftrlogo.svg' width={64} height={34} alt="Logo" className="h-10 w-50" ></Image>
            </a>

            {/* Book Service Button */}
            <button className="mt-10 group flex items-center justify-center gap-3 border border-zinc-700 bg-transparent text-white px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
              Book Service Slot
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
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>

          {/* Middle Columns: Links */}
          <div className="flex flex-col sm:flex-row gap-16 md:gap-24 lg:mr-24">
            
            {/* Navigation Column */}
            <div>
              <h3 className="text-zinc-500 text-sm mb-5">
                Navigation
              </h3>
              <ul className="space-y-3.5">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-zinc-300 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-zinc-500 text-sm mb-5">
                Services
              </h3>
              <ul className="space-y-3.5">
                {serviceLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-zinc-300 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Social Icons */}
          <div className="flex items-center gap-4 lg:mt-4">
            {/* WhatsApp Outline */}
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>
              </svg>
            </a>
            {/* Instagram Outline */}
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* LinkedIn Outline */}
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="mt-20 pt-8 border-t border-zinc-800">
          <p className="text-zinc-500 text-xs">
            &reg; 2026-27 B&C Carmax.
          </p>
        </div>

      </div>
    </footer>
  );
}