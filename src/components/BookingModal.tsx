"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Mail, Phone, Car, CheckCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    timeSlot: "",
    vehicleModel: "",
    vehicleYear: "",
    instructions: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset form when modal is closed or opened
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        timeSlot: "",
        vehicleModel: "",
        vehicleYear: "",
        instructions: "",
      });
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  const services = [
    "Exterior Detailing",
    "Interior Detailing",
    "Ceramic Coating",
    "Paint Correction",
    "Full Detail Package",
  ];

  const timeSlots = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-zinc-950 border border-zinc-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative z-10 font-sans text-white no-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 transition-colors p-1 rounded-full bg-zinc-900 hover:bg-zinc-800 cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold font-orbitron text-white tracking-wide">
                    BOOK YOUR APPOINTMENT
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Fill out the form below to schedule your premium car detailing service.
                  </p>
                </div>

                {/* Section 1: Personal Details */}
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-wider text-orange-500 font-semibold font-orbitron border-b border-zinc-800 pb-1">
                    1. Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Section 2: Service Details */}
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-wider text-orange-500 font-semibold font-orbitron border-b border-zinc-800 pb-1">
                    2. Service & Scheduling
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select Detailing Service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-zinc-950">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Time Slot Selection */}
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 flex items-center gap-1.5">
                      <Clock size={14} /> Select Preferred Time Slot:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={`px-4 py-2 text-xs font-semibold rounded transition-all border cursor-pointer ${
                            formData.timeSlot === slot
                              ? "bg-orange-500 text-black border-orange-500 shadow-md shadow-orange-500/20"
                              : "bg-zinc-900 text-white border-zinc-800 hover:border-orange-500 hover:text-orange-500"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 3: Vehicle Info */}
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-wider text-orange-500 font-semibold font-orbitron border-b border-zinc-800 pb-1">
                    3. Vehicle Information
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 relative">
                      <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="text"
                        placeholder="Vehicle Make & Model (e.g. Audi R8)"
                        required
                        value={formData.vehicleModel}
                        onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Year"
                        required
                        min="1950"
                        max="2027"
                        value={formData.vehicleYear}
                        onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                        className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 4: Special Instructions */}
                <div className="space-y-2">
                  <label className="text-xs text-gray-400">Special Instructions / Requirements (Optional):</label>
                  <textarea
                    rows={3}
                    placeholder="Any special instructions or detailing requirements..."
                    value={formData.instructions}
                    onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                    className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-black font-bold font-orbitron rounded-md transition-all uppercase tracking-wider text-sm shadow-lg shadow-orange-500/20 cursor-pointer"
                >
                  Confirm Appointment
                </button>
              </form>
            ) : (
              /* Success view state */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center space-y-4"
              >
                <CheckCircle size={64} className="text-orange-500" />
                <h3 className="text-2xl font-bold font-orbitron tracking-wide text-white">
                  BOOKING REQUEST SENT!
                </h3>
                <p className="text-gray-400 text-sm max-w-md">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. We have received your booking request for a <span className="text-white font-semibold">{formData.service}</span> on <span className="text-white font-semibold">{formData.date}</span>.
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Our team will contact you at {formData.phone} shortly to confirm your time slot.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black rounded transition-all font-bold font-orbitron text-xs tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
