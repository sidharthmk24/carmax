"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import TimedCarousel from "@/components/TimedCarousel";
import ViewGallery from "@/components/ViewGallery";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans select-none overflow-x-clip scroll-smooth">
      {/* Navbar Header */}
      <Header onOpenBooking={openBooking} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onOpenBooking={openBooking} />
        <AboutUs />
        <Services />
        <TimedCarousel />
        <ViewGallery />
        <Reviews />
        <CTASection />
      </main>

      {/* Footer details */}
      <Footer />

      {/* Booking Dialogue Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}

