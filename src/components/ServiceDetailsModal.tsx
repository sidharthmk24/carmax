"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    image: string;
    description: string;
    subServices: string[];
  } | null;
}

export default function ServiceDetailsModal({
  isOpen,
  onClose,
  service,
}: ServiceDetailsModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen && service) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, service]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-[6px]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[700px] bg-zinc-950 rounded-[20px] overflow-hidden shadow-2xl my-8 border border-zinc-900/30"
          >
            {/* Top Image Section */}
            <div className="relative aspect-[16/10] w-full bg-zinc-900 select-none">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-w-768px) 100vw, 700px"
                className="object-cover"
              />
              
              {/* Close Button ("x") */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-5 right-5 z-50 text-white/90 hover:text-white transition-opacity opacity-80 hover:opacity-100 cursor-pointer p-1"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Bottom Content Section with rich gradient */}
            <div className="relative px-8 md:px-10 py-10 pb-12 bg-gradient-to-b from-[#0c0805] via-[#1a0e05] to-[#b84a00] text-white">
              {/* Service Title */}
              <h3 className="text-2xl md:text-[27px] font-semibold text-[#FAF8F5] leading-tight tracking-wide">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="mt-6 text-[#d4c8c0] text-[15px] leading-[1.65] font-light">
                {service.description}
              </p>

              {/* Sub-services header */}
              <p className="mt-5 text-[#d4c8c0] text-[15px] font-medium">
                We can help with:
              </p>

              {/* Bullet-point sub-services */}
              <ul className="mt-3 space-y-2.5 pl-1.5">
                {service.subServices.map((subService, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-[#d4c8c0] text-[15px] font-light"
                  >
                    <span className="mr-3 select-none text-white/80">•</span>
                    <span>{subService}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
