"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/* â”€â”€â”€ Reusable smooth custom dropdown â”€â”€â”€ */
interface CustomSelectProps {
  placeholder: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}

function CustomSelect({ placeholder, options, value, onChange, required }: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full select-none">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between px-3 py-2.5 bg-white border text-sm transition-colors cursor-pointer ${
          open ? "border-zinc-600" : "border-zinc-300 hover:border-zinc-400"
        } ${value ? "text-zinc-900" : "text-zinc-400"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="ml-2 flex-shrink-0 text-zinc-500"
        >
          <ChevronDown size={14} />
        </motion.span>
      </button>

      {/* Hidden native input for form validation */}
      {required && (
        <input
          type="text"
          required
          readOnly
          value={value}
          tabIndex={-1}
          className="absolute inset-0 opacity-0 pointer-events-none"
          aria-hidden
        />
      )}

      {/* Smooth dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -6, scaleY: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute z-50 left-0 right-0 top-[calc(100%+2px)] bg-white border border-zinc-200 shadow-xl max-h-52 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {options.map((opt) => (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 text-sm transition-colors cursor-pointer ${
                    value === opt
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-800 hover:bg-zinc-100"
                  }`}
                >
                  {opt}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* â”€â”€â”€ Data â”€â”€â”€ */
const carManufacturers = [
  "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti",
  "Cadillac", "Chevrolet", "Dodge", "Ferrari", "Ford", "Honda",
  "Hyundai", "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover",
  "Lexus", "Maserati", "McLaren", "Mercedes-Benz", "Nissan", "Porsche",
  "Range Rover", "Rolls-Royce", "Subaru", "Tesla", "Toyota", "Volkswagen",
];

const modelYears = ["2020", "2021", "2022", "2023", "2024", "2025", "2026"];

const requiredServices = [
  "Engine & Transmission",
  "Brakes, Suspension & AC Repair",
  "Body & Accident Repairs",
  "Paint & Exterior Care",
  "Performance & Upgrades",
  "Customer Support Services",
];

/* â”€â”€â”€ Main modal â”€â”€â”€ */
export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    manufacturer: "",
    modelNumber: "",
    registrationNumber: "",
    requiredService: "",
    comments: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const wordCount = formData.comments.trim().split(/\s+/).filter(Boolean).length;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 400);
  };

  const inputClass =
    "w-full px-3 py-2.5 bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-600 transition-colors";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Blurred dark backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* White Modal */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 bg-white w-full max-w-4xl max-h-[92vh] overflow-y-auto no-scrollbar shadow-2xl"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="px-10 py-10">

                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <h2 className="text-[38px] font-bold font-orbitron text-zinc-900 leading-tight">
                    Book Service Slot
                  </h2>
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="text-zinc-500 hover:text-zinc-900 transition-colors text-xl leading-none cursor-pointer mt-0.5"
                  >
                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 1L1 15M14 15L1 1" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    </svg>

                  </button>
                </div>

                {/* â”€â”€ Personal Details â”€â”€ */}
                <div className="mb-7">
                  <h3 className="text-xl font-bold font-orbitron text-zinc-900 border-b border-zinc-300 pb-2 mb-5">
                    Personal Details
                  </h3>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* â”€â”€ Car Details â”€â”€ */}
                <div className="mb-7">
                  <h3 className="text-xl font-bold font-orbitron text-zinc-900 border-b border-zinc-300 pb-2 mb-5">
                    Car Details
                  </h3>

                  {/* Row 1: Manufacturer + Model Year */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <CustomSelect
                      placeholder="Car Manufacturer"
                      options={carManufacturers}
                      value={formData.manufacturer}
                      onChange={(val) => setFormData({ ...formData, manufacturer: val })}
                    />
                    <CustomSelect
                      placeholder="Model Number"
                      options={modelYears}
                      value={formData.modelNumber}
                      onChange={(val) => setFormData({ ...formData, modelNumber: val })}
                    />
                  </div>

                  {/* Row 2: Registration + Required Service */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      type="text"
                      placeholder="Registration Number"
                      value={formData.registrationNumber}
                      onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                      className={inputClass}
                    />
                    <CustomSelect
                      placeholder="Required Service *"
                      options={requiredServices}
                      value={formData.requiredService}
                      onChange={(val) => setFormData({ ...formData, requiredService: val })}
                      required
                    />
                  </div>

                  {/* Comments textarea with word counter */}
                  <div className="relative">
                    <textarea
                      rows={4}
                      placeholder="Comments or Special requirements"
                      value={formData.comments}
                      onChange={(e) => {
                        const words = e.target.value.trim().split(/\s+/).filter(Boolean);
                        if (words.length <= 250 || e.target.value.length < formData.comments.length) {
                          setFormData({ ...formData, comments: e.target.value });
                        }
                      }}
                      className="w-full px-3 pt-2.5 pb-6 bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                    />
                    <span className="absolute bottom-2 right-3 text-[10px] text-zinc-400 pointer-events-none">
                      {wordCount}/250 words
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-2">
                  <button
                    type="submit"
                    className="px-14 py-3 bg-zinc-900 hover:bg-black text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 px-10 text-center space-y-4"
              >
                <CheckCircle size={56} className="text-zinc-900" />
                <h3 className="text-xl font-bold text-zinc-900">
                  Booking Request Sent!
                </h3>
                <p className="text-zinc-500 text-sm max-w-xs">
                  Thank you,{" "}
                  <span className="text-zinc-900 font-semibold">{formData.name}</span>.
                  We&apos;ve received your request and will be in touch shortly.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-10 py-2.5 bg-zinc-900 hover:bg-black text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
