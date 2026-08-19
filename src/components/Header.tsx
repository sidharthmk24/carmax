"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import Typography from "./Typography";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface HeaderProps {
  onOpenBooking: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 25 } 
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { ease: "easeInOut" as const, duration: 0.2 } 
  },
};

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  const isHome = pathname === "/";

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

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const pct = (currentScrollY / totalScroll) * 100;
        setScrollProgress(pct);
      } else {
        setScrollProgress(0);
      }
    };

    // Calculate initial progress
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const getHref = (href: string) => {
    if (isHome) return href;
    return href.startsWith("#") ? `/${href}` : href;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 font-sans pointer-events-none transition-all duration-300 ${
          (isScrolled || isMobileMenuOpen) && (isVisible || isMobileMenuOpen)
            ? "bg-[#1D1D1B]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
      
      {/* Pinned Scroll Progress Bar at the top of the header container */}
      <div 
        className={`max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-auto ${
          isScrolled || isMobileMenuOpen ? "pt-4" : "pt-6"
        }`}
      >
        <div className="w-full h-[1px] bg-white/20 relative overflow-hidden">
          <div 
            className="h-full bg-white" 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Sliding Navigation Content Wrapper */}
      <div 
        className={`w-full transition-all duration-300 pointer-events-auto ${
          isVisible || isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${
          isScrolled || isMobileMenuOpen ? "pt-4 pb-4" : "pt-4 pb-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href={isHome ? "#home" : "/"} className="flex items-center cursor-pointer transition-opacity hover:opacity-80">
            <Image
            height={40}
            width={40} 
              src="/svgs/logo.svg" 
              alt="Carmax Logo" 
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 text-[15px] text-white/90">
            
            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className="flex items-center gap-1 hover:text-white transition-colors duration-200 tracking-wide cursor-pointer py-2"
              >
                    <Typography variant="description" className="hover:text-white font-light transition-colors duration-200 tracking-wider">Services</Typography>
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 mt-1 w-72 bg-[#1D1D1B]/95 border border-zinc-800/80 backdrop-blur-md rounded-sm py-2.5 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 before:absolute before:content-[''] before:block before:top-[-10px] before:left-0 before:right-0 before:h-[10px] before:bg-transparent">
                {servicesData.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-zinc-900/60 hover:border-l-2 hover:border-orange-500 hover:pl-3.5 transition-all duration-200 font-sans"
                  >
                    <Typography variant="description" className="hover:text-white font-light transition-colors duration-200 tracking-wider">{service.title}</Typography>
                  </Link>
                ))}
              </div>
            </div>
            
            <span className="text-white/30 select-none">|</span>

            <Link
              href="/gallery"
              className="hover:text-white font-light transition-colors duration-200 tracking-wider"
            >
              <Typography variant="description" className="hover:text-white font-light transition-colors duration-200 tracking-wider">Gallery</Typography>
            </Link>
            <span className="text-white/30 select-none">|</span>

            <Link
              href={getHref("about")}
              className="hover:text-white transition-colors duration-200 tracking-wide"
            >
              <Typography variant="description" className="hover:text-white font-light transition-colors duration-200 tracking-wider">About Us</Typography>

            </Link>
            <span className="text-white/30 select-none">|</span>

            <Link
              href="/contact-us"
              className="hover:text-white transition-colors duration-200 tracking-wide"
            >
              <Typography variant="description" className="hover:text-white font-light transition-colors duration-200 tracking-wider">Contact Us</Typography>

            </Link>
            <span className="text-white/30 select-none">|</span>
            
            {/* Visit Shop Link with Icon */}
            <Link
              href={getHref("#shop")}
              className="flex items-center hover:text-white transition-colors duration-200 tracking-wide group"
            >
              <ShoppingCart size={16} className="mr-2 text-white/70 group-hover:text-white transition-colors" />
              <Typography variant="description" className="hover:text-white font-light transition-colors duration-200 tracking-wider">Visit Shop</Typography>

            </Link>
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
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white hover:text-gray-300 p-1 focus:outline-none cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>

        </div>
      </div>
    </div>
  </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 z-[100] bg-black/60 backdrop-blur-3xl flex flex-col pt-0 pb-0 overflow-hidden font-sans pointer-events-auto"
          >
            {/* Top Line & Close Button */}
            <motion.div variants={itemVariants} className="w-full border-t border-white/20 pt-6 flex justify-center mb-10 relative">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gray-300 focus:outline-none cursor-pointer transition-transform hover:scale-110"
                aria-label="Close menu"
              >
                <X size={32} strokeWidth={1} />
              </button>
            </motion.div>

            <nav className="flex flex-col space-y-8 px-12 py-6 flex-grow">
              <motion.div variants={itemVariants}>
                <Link
                  href="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[30px] font-light tracking-wide text-white hover:text-gray-300 transition-colors block"
                >
                  Services
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  href="/gallery"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[30px] font-light tracking-wide text-white hover:text-gray-300 transition-colors block"
                >
                  Gallery
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  href={getHref("about")}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[30px] font-light tracking-wide text-white hover:text-gray-300 transition-colors block"
                >
                  About Us
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  href="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[30px] font-light tracking-wide text-white hover:text-gray-300 transition-colors block"
                >
                  Contact Us
                </Link>
              </motion.div>
            </nav>
            
            <motion.div variants={itemVariants} className="mt-auto w-full flex flex-col">
              <div className="w-full h-[1px] bg-white/20"></div>
              
              <Link
                href={getHref("#shop")}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-5 text-xl font-light tracking-wide text-white hover:text-gray-300 transition-colors"
              >
                <ShoppingCart size={22} strokeWidth={1.5} className="mr-3" />
                Visit Shop
              </Link>
              
              <div className="w-full h-[1px] bg-white/20"></div>
              
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center w-full py-5 text-xl font-light tracking-wide text-white hover:text-gray-300 transition-colors cursor-pointer"
              >
                Book Service Slot
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-3"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}