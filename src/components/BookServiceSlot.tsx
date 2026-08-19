"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Custom Dark Dropdown Component ─── */
interface DarkSelectProps {
  placeholder: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}

function DarkSelect({ placeholder, options, value, onChange, required }: DarkSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
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
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between px-4 py-3 bg-transparent border text-sm transition-colors cursor-pointer rounded-none text-left ${
          open ? "border-zinc-500" : "border-zinc-800 hover:border-zinc-700"
        } ${value ? "text-white" : "text-zinc-500"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <svg
          className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Hidden input for HTML5 form validation compatibility */}
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

      {/* Dropdown Options List */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 left-0 right-0 top-[calc(100%+4px)] bg-zinc-950 border border-zinc-850 shadow-2xl max-h-60 overflow-y-auto rounded-none [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-track]:bg-transparent"
          >
            {options.map((opt) => (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors cursor-pointer ${
                    value === opt
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
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

/* ─── Static Lists ─── */
const carManufacturers = [
  "Audi", "BMW", "Mercedes-Benz", "Porsche", "Lexus", "Jaguar", "Land Rover", "Tesla", "Toyota", "Ford"
];

const modelNumbers = [
  "3 Series", "5 Series", "7 Series", "A4", "A6", "A8", "C-Class", "E-Class", "S-Class", "911 Carrera", "Cayenne", "Macan", "Model 3", "Model Y"
];

const requiredServices = [
  "Engine & Transmission",
  "Brakes, Suspension & AC Repair",
  "Body & Accident Repairs",
  "Paint & Exterior Care",
  "Performance & Upgrades",
  "Customer Support Services"
];

/* ─── Main Component ─── */
export default function BookServiceSlot() {
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

  // Calculate word count
  const wordCount = formData.comments.trim().split(/\s+/).filter(word => word.length > 0).length;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCommentsChange = (val: string) => {
    const words = val.trim().split(/\s+/).filter(word => word.length > 0);
    if (words.length <= 250) {
      handleInputChange("comments", val);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful API submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 450);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-[#1D1D1B] text-white text-center flex flex-col items-center justify-center min-h-[500px] border-t border-zinc-900">
        <div className="max-w-md px-6">
          <svg className="w-16 h-16 text-white mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-3 uppercase tracking-wider text-white">Slot Requested</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8">
            We have received your slot request. Our service team will reach out to you shortly to confirm your booking details.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
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
            }}
            className="bg-white text-black font-semibold px-8 py-3 text-sm hover:bg-zinc-200 transition-colors duration-300 rounded-none cursor-pointer uppercase tracking-wider"
          >
            Book Another Slot
          </button>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full bg-transparent border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors rounded-none";

  return (
    <section className="py-20 w-full bg-[#1D1D1B]  relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold font-orbitron text-center mb-16 tracking-widest text-white uppercase">
          Book Service Slot
        </h2>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="relative space-y-12">

          {/* Personal Details Section */}
          <div className="relative">
            <h3 className="text-base sm:text-lg font-orbitron font-semibold uppercase tracking-wider text-white mb-2.5">
              Personal Details
            </h3>
            <div className="border-t border-zinc-800 w-full mb-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <input
                type="text"
                placeholder="Your Name *"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={inputClass}
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={inputClass}
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          {/* Car Details Section */}
          <div className="relative">
            <h3 className="text-base sm:text-lg font-orbitron font-semibold uppercase tracking-wider text-white mb-2.5">
              Car Details
            </h3>
            <div className="border-t border-zinc-800 w-full mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-5">
              <DarkSelect
                placeholder="Car Manufacturer"
                options={carManufacturers}
                value={formData.manufacturer}
                onChange={(val) => handleInputChange("manufacturer", val)}
              />
              <DarkSelect
                placeholder="Model Number"
                options={modelNumbers}
                value={formData.modelNumber}
                onChange={(val) => handleInputChange("modelNumber", val)}
              />
              <input
                type="text"
                placeholder="Registration Number"
                value={formData.registrationNumber}
                onChange={(e) => handleInputChange("registrationNumber", e.target.value)}
                className={inputClass}
              />
              <DarkSelect
                placeholder="Required Service *"
                options={requiredServices}
                value={formData.requiredService}
                onChange={(val) => handleInputChange("requiredService", val)}
                required
              />
            </div>

            {/* Comments Box with Top-Right Word Count */}
            <div className="relative mt-5">
              <textarea
                placeholder="Comments or Special requirements"
                value={formData.comments}
                onChange={(e) => handleCommentsChange(e.target.value)}
                rows={5}
                className="w-full bg-transparent border border-zinc-800 px-4 py-4 pt-8 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors resize-none rounded-none"
              />
              <div className="absolute top-3.5 right-4 text-[10px] text-zinc-500 font-sans tracking-wide select-none">
                {wordCount}/250 words
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-white text-black font-semibold px-12 py-3.5 text-sm hover:bg-zinc-200 transition-colors duration-300 rounded-none cursor-pointer uppercase tracking-wider"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
