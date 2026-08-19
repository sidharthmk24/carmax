"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <section className="bg-[#1D1D1B] text-white relative pb-0 pt-0">
      {/* Title & Contact Links Container */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-white text-xl sm:text-2xl font-sans font-normal mb-8 tracking-wide text-center">
          Get In Touch
        </h2>

        {/* Contact Links Bar */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-12 text-[11px] sm:text-xs font-sans text-white mb-16 text-center tracking-wide">
          <div className="flex items-center gap-2">
            <span className="text-white">Visit Us</span>
            <a
              href="https://maps.app.goo.gl/2L4Jc4r8aR6sXwVz9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 hover:text-white transition-colors"
            >
              7 Google Maps
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white">Call Us</span>
            <a
              href="tel:+917845304515" 
              className="text-zinc-400 hover:text-white transition-colors"
            >
              +91 78453 04515
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white">Email Us</span>
            <a
              href="mailto:service@carmax.in" 
              className="text-zinc-400 hover:text-white transition-colors"
            >
              service@carmax.in
            </a>
          </div>
        </div>
      </div>

      {/* Map Container - Full Screen Width */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-[350px] sm:h-[450px] md:h-[500px] relative overflow-hidden"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.967812165036!2d74.8465942!3d12.8454238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a5cb3c82d5f%3A0xe54b9d031522f6d2!2sB%26C%20Carmax!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="B&C Carmax Location Map"
          className="w-full h-full"
        />
      </motion.div>
    </section>
  );
}
