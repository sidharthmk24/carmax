"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "@/components/Typography";
import SplitText from "@/components/shared/SplitText";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleModel: "",
    vehicleBrand: "",
    serviceRequired: "",
    message: "",
    acceptPrivacy: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptPrivacy) {
      alert("Please accept the privacy policy to submit.");
      return;
    }
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        vehicleModel: "",
        vehicleBrand: "",
        serviceRequired: "",
        message: "",
        acceptPrivacy: false,
      });
    }, 600);
  };

  const servicesList = [
    "Engine & Transmission Service",
    "Brakes, AC & Suspension Repairs",
    "Vehicle Body & Accident Repairs",
    "Paint & Exterior Care / Detailing",
    "Performance Upgrades & ECU Tuning",
    "Customer Support / General Enquiry",
  ];

  return (
    <section className="py-20 bg-[#1D1D1B] text-white relative overflow-hidden">
      <div className=" mx-auto max-w-6xl px-6 lg:px-8 w-full relative z-10 flex flex-col items-center">
        {/* Main Heading */}
        <SplitText
          text={
            <Typography
              variant="mainheading"
              className="text-white text-center  font-orbitron"
            >
              Built Around Your Drive
            </Typography>
          }
          className="font-semibold text-center mb-4"
          delay={50}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl text-center mb-16"
        >
          <p className="text-zinc-400 font-sans font-light text-sm sm:text-base leading-relaxed tracking-wide">
            From everyday maintenance to performance upgrades, we make every interaction smooth, reliable, and built around your needs.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl bg-zinc-900 border border-zinc-800 p-8 rounded-sm text-center flex flex-col items-center gap-4"
          >
            <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-orbitron text-xl font-medium text-white">Enquiry Received</h3>
            <p className="text-zinc-400 text-sm font-sans leading-relaxed">
              Thank you for contacting B&C Carmax. Our technical team will review your enquiry and get back to you shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-white text-black px-5 py-2 text-xs font-semibold hover:bg-zinc-200 transition-colors"
            >
              Submit Another Enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="w-full space-y-6 sm:space-y-8"
          >
            {/* Row 1: Name and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex flex-col">
                <label className="text-xs text-zinc-400 font-sans mb-2 font-medium">
                  Name <span className="text-[#ff5e00]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent border border-zinc-800 focus:border-zinc-500 focus:outline-none text-white px-4 py-3.5 text-sm font-sans font-light rounded-none transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-zinc-400 font-sans mb-2 font-medium">
                  Phone <span className="text-[#ff5e00]">*</span>
                </label>
                <div className="flex border border-zinc-800 focus-within:border-zinc-500 transition-colors bg-transparent">
                  <div className="flex items-center justify-center pl-4 pr-3 py-3.5 text-zinc-400 text-sm font-sans font-light border-r border-zinc-800 select-none">
                    +91
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-transparent w-full focus:outline-none text-white px-4 py-3.5 text-sm font-sans font-light rounded-none"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex flex-col">
                <label className="text-xs text-zinc-400 font-sans mb-2 font-medium">
                  Email <span className="text-[#ff5e00]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-transparent border border-zinc-800 focus:border-zinc-500 focus:outline-none text-white px-4 py-3.5 text-sm font-sans font-light rounded-none transition-colors"
                />
              </div>
              <div className="hidden md:block"></div>
            </div>

            {/* Row 3: Vehicle Details */}
            <div className="flex flex-col">
              <label className="text-xs text-zinc-400 font-sans mb-2 font-medium">
                Vehicle Details <span className="text-[#ff5e00]">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <input
                  type="text"
                  required
                  placeholder="Enter your Vehicle Model"
                  value={formData.vehicleModel}
                  onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                  className="bg-transparent border border-zinc-800 focus:border-zinc-500 focus:outline-none text-white px-4 py-3.5 text-sm font-sans font-light rounded-none transition-colors"
                />
                <input
                  type="text"
                  required
                  placeholder="Enter your Vehicle Brand"
                  value={formData.vehicleBrand}
                  onChange={(e) => setFormData({ ...formData, vehicleBrand: e.target.value })}
                  className="bg-transparent border border-zinc-800 focus:border-zinc-500 focus:outline-none text-white px-4 py-3.5 text-sm font-sans font-light rounded-none transition-colors"
                />
              </div>
            </div>

            {/* Row 4: Service / Product Required */}
            <div className="flex flex-col relative z-20">
              <label className="text-xs text-zinc-400 font-sans mb-2 font-medium">
                Service / Product Required <span className="text-[#ff5e00]">*</span>
              </label>
              
              <div className="relative w-full">
                {/* Hidden input for HTML5 Validation */}
                <input 
                  type="text" 
                  required 
                  value={formData.serviceRequired} 
                  onChange={() => {}} 
                  className="absolute opacity-0 w-0 h-0 pointer-events-none" 
                  tabIndex={-1} 
                />

                {/* Custom Dropdown Trigger */}
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full bg-transparent border flex justify-between items-center px-4 py-3.5 text-sm font-sans font-light transition-colors cursor-pointer ${
                    isDropdownOpen ? "border-zinc-500" : "border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  <span className={formData.serviceRequired ? "text-white" : "text-zinc-500"}>
                    {formData.serviceRequired || "Select Service / Product you Require"}
                  </span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a1a1aa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </motion.svg>
                </div>

                {/* Animated Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 w-full mt-1 bg-[#151514] border border-zinc-800 shadow-xl z-50 py-2 max-h-60 overflow-y-auto"
                    >
                      {servicesList.map((service, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setFormData({ ...formData, serviceRequired: service });
                            setIsDropdownOpen(false);
                          }}
                          className="px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 cursor-pointer transition-colors"
                        >
                          {service}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Row 5: Message */}
            <div className="flex flex-col">
              <label className="text-xs text-zinc-400 font-sans mb-2 font-medium">
                Message <span className="text-[#ff5e00]">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-transparent border border-zinc-800 focus:border-zinc-500 focus:outline-none text-white px-4 py-3.5 text-sm font-sans font-light rounded-none transition-colors resize-none"
              />
            </div>

            {/* Privacy note */}
            <div className="text-center pt-4">
              <p className="text-zinc-500 font-sans font-light text-[11px] sm:text-xs leading-relaxed max-w-2xl mx-auto">
                We&apos;re committed to your privacy. B&C Carmax uses the information you provide to contact you about our relevant content and services. For more information, check out our{" "}
                <a href="#" className="underline text-zinc-400 hover:text-white transition-colors">Privacy Policy</a>.
              </p>
            </div>

            {/* Acceptance Checkbox */}
            <div className="flex items-center justify-center gap-2.5">
              <input
                type="checkbox"
                id="acceptPrivacy"
                required
                checked={formData.acceptPrivacy}
                onChange={(e) => setFormData({ ...formData, acceptPrivacy: e.target.checked })}
                className="w-4 h-4 rounded-none border border-zinc-800 bg-transparent text-white focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#ff5e00]"
              />
              <label htmlFor="acceptPrivacy" className="text-xs sm:text-sm text-zinc-400 font-sans font-light cursor-pointer hover:text-zinc-300 transition-colors">
                I accept the <span className="underline">Privacy Policy</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="bg-white text-black hover:bg-gray-200 transition-colors px-6 py-2.5 text-sm font-bold tracking-wide rounded-none cursor-pointer"
              >
                Send Enquiry
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
