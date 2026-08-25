"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BookingModal from "./BookingModal";
import Button from "./shared/Button";

interface FooterProps {
  variant?: "black" | "ash";
  onOpenBooking?: () => void;
}

export default function Footer({ variant = "black", onOpenBooking }: FooterProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      setIsBookingOpen(true);
    }
  };
  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    // { name: "Shop", href: "/#shop" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const serviceLinks = [
    { name: "Engine & Transmission", href: "/services/engine-transmission" },
    { name: "Brakes, Suspension & AC Repair", href: "/services/brakes-ac-suspension" },
    { name: "Body & Accident Repairs", href: "/services/vehicle-body-accident-repairs" },
    { name: "Paint & Exterior Care", href: "/services/paint-exterior-care" },
    { name: "Performance & Upgrades", href: "/services/performance-upgrades" },
    { name: "Customer Support Services", href: "/services/customer-support" },
  ];

  return (
    <footer className={`${variant === "ash" ? "bg-[#1D1D1B]" : "bg-[#000000]"} pt-20 pb-10 font-sans border-t border-zinc-900`}>
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          
          {/* Left Column: Brand & Button */}
          <div className="flex flex-col items-start gap-8 w-full lg:w-auto">
            <Link href="/" className="flex items-center cursor-pointer hover:opacity-90 transition-opacity duration-200">
              <Image
                src="/svgs/ftrlogo.svg"
                width={210}
                height={42}
                alt="B&C Carmax"
                className="h-auto w-auto"
                priority
              />
            </Link>

            {/* Book Service Slot Button — solid border, sharp corners, hover invert */}
            <Button
              variant="outlined"
              onClick={handleBookClick}
              className="w-full lg:w-auto tracking-wider"
              rightIcon={
                <span className="text-white group-hover:text-black inline-flex items-center transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-colors transition-transform duration-300">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.429 9.23488L10.227 0.951625L1.94376 0.749594M10.227 0.951625L0.529551 10.6491" stroke="white" stroke-width="1.5"/>
</svg>

                </span>
              }
            >
              Book Service Slot
            </Button>
          </div>

          {/* Middle Columns: Nav + Services */}
          <div className="flex flex-col sm:flex-row gap-16 md:gap-24 lg:gap-32">
            {/* Navigation Column */}
            <div className="flex flex-col items-start">
              <h3 className="text-zinc-500 text-sm font-normal mb-5">
                Navigation
              </h3>
              <ul className="space-y-3.5">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-zinc-300 hover:text-[#FE6700] transition-colors duration-200 text-sm font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div className="flex flex-col items-start">
              <h3 className="text-zinc-500 text-sm font-normal mb-5">
                Services
              </h3>
              <ul className="space-y-3.5">
                {serviceLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-zinc-300 hover:text-[#FE6700] transition-colors duration-200 text-sm font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Social Icons without circular boundaries */}
          <div className="flex items-center gap-6 lg:pt-1">
            {/* WhatsApp */}
            <a
              href="#"
              aria-label="WhatsApp"
              className="text-zinc-400 hover:text-[#FE6700] transition-colors duration-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/carmaxmlr/?hl=en"
              aria-label="Instagram"
              className="text-zinc-400 hover:text-[#FE6700] transition-colors duration-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

           
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-zinc-500 text-sm font-light tracking-wide">
            &reg; 2026-27 B&amp;C Carmax.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-zinc-500 hover:text-[#FE6700] text-sm font-light tracking-wide transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-zinc-500 hover:text-[#FE6700] text-sm font-light tracking-wide transition-colors duration-200">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
      {!onOpenBooking && (
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      )}
    </footer>
  );
}