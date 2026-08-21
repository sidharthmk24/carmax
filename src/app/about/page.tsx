"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import AboutHero from "@/components/about/AboutHero";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutWorkshopGlimpse from "@/components/about/AboutWorkshopGlimpse";
import AboutTeam from "@/components/about/AboutTeam";
import AboutTestimonial from "@/components/about/AboutTestimonial";
import AboutLocation from "@/components/about/AboutLocation";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans select-none overflow-x-clip scroll-smooth">
      {/* Navbar Header */}
      <Header onOpenBooking={openBooking} />

      {/* Main Sections */}
      <main className="flex-grow pt-24">
        <AboutHero />
        <AboutFeatures />
        <AboutWorkshopGlimpse />
        <AboutTeam />
        <AboutTestimonial />
        <AboutLocation />
      </main>

      {/* Footer details */}
      <Footer />

      {/* Booking Dialogue Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
