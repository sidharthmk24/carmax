"use client";

import React from "react";
import { motion } from "framer-motion";
import Typography from "../Typography";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AboutLocation() {
  return (
    <section className="pb-20 bg-[#1D1D1B] text-white">
      <div className="container mx-auto px-4 lg:px-20 ">
        
        {/* Top divider */}
        <div className="w-full border-t border-white/10 mb-12"></div>

        <div className="flex flex-col items-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="subheading" className="text-center font-normal mb-4">
              Visit Our Workshop
            </Typography>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Real Google Maps Iframe */}
          <div className="w-full max-w-5xl aspect-[4/3] md:aspect-[21/9] bg-[#1a1a1a] rounded-xl overflow-hidden relative">
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
          </div>
          
          {/* External Links */}
          <div className="flex flex-row items-center justify-center gap-4 mt-8">
            <span className="text-white text-[14px] font-sans font-medium tracking-wide">Visit Us</span>
            <Link
              href="https://maps.app.goo.gl/2L4Jc4r8aR6sXwVz9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors tracking-wide"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-[14px] font-sans underline decoration-white/20 underline-offset-4">Google Maps</span>
            </Link>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
