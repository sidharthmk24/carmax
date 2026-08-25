"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import TimedCarousel from "@/components/TimedCarousel";
import ViewGallery from "@/components/ViewGallery";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FooterScroll from "@/components/FooterScroll";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-[#1D1D1B] text-white flex flex-col font-sans select-none overflow-x-clip scroll-smooth">
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
        {/* <CTASection /> */}
      </main>

      {/* Scrollytelling — sits below the footer in z-stack */}
      <div className="relative" style={{ zIndex: 1 }}>
        <FooterScroll onOpenBooking={openBooking} />
      </div>

      {/* Footer */}
      <div
        className="relative"
        style={{ zIndex: 20, marginTop: "-2px" }}
      >
        <Footer  onOpenBooking={openBooking} />
      </div>

      {/* Booking Dialogue Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}

