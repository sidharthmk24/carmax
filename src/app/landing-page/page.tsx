"use client";

import React, { useState } from "react";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingModal from "@/components/BookingModal";
import ViewGallery from "@/components/ViewGallery";
import BookServiceSlot from "@/components/BookServiceSlot";
import LandingFooter from "@/components/LandingFooter";
import LandingHeader from "@/components/LandingHeader";
import AboutLocation from "@/components/about/AboutLocation";

export default function LandingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <main className="min-h-screen bg-[#1D1D1B] flex flex-col font-sans select-none overflow-x-clip scroll-smooth">
      <LandingHeader onOpenBooking={openBooking} />
      <Hero onOpenBooking={openBooking} />
      <Services page="landing-page" />
      <ViewGallery />
      
      <Testimonials />
      <AboutLocation/>
      <BookServiceSlot />

      <LandingFooter onOpenBooking={openBooking} />

      {/* Booking Dialogue Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </main>
  );
}