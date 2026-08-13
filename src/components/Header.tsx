"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Top Line matching the reference image */}
        <div className="w-full border-t border-white/20 mb-4 transition-opacity duration-300"></div>

        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <a href="#home" className="flex items-center cursor-pointer transition-opacity hover:opacity-80">
            <img 
              src="/svgs/logo.svg" 
              alt="Carmax Logo" 
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 text-[15px] text-white/90">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </a>
                <span className="text-white/30 select-none">|</span>
              </React.Fragment>
            ))}
            
            {/* Visit Shop Link with Icon */}
            <a
              href="#shop"
              className="flex items-center hover:text-white transition-colors duration-200 tracking-wide group"
            >
              <ShoppingCart size={16} className="mr-2 text-white/70 group-hover:text-white transition-colors" />
              Visit Shop
            </a>
          </nav>

          {/* Book Service Button (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={onOpenBooking}
              className="group flex items-center justify-center gap-1.5 bg-white text-black px-5 py-2.5 text-[15px] font-semibold hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            >
              Book Service Slot
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 p-1 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black border-b border-zinc-900 absolute top-full left-0 right-0 py-6 px-6 space-y-6 shadow-2xl">
          <nav className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center text-lg font-medium text-white/80 hover:text-white transition-colors"
            >
              <ShoppingCart size={20} className="mr-2" />
              Visit Shop
            </a>
          </nav>
          
          <div className="pt-4 border-t border-zinc-800">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 text-base font-semibold hover:bg-gray-100 transition-colors"
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
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}