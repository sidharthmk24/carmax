"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import ServiceHeroSwiper from "@/components/ServiceHeroSwiper";
import GlimpsesServices from "@/components/GlimpsesServices";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ServiceCTA from "@/components/ServiceCTA";

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans select-none overflow-x-clip scroll-smooth">
      {/* Header navbar */}
      <Header onOpenBooking={openBooking} />

      {/* Main content */}
      <main className="flex-grow">
        {/* Swiper slider with amber radial backdrop */}
        <ServiceHeroSwiper />

        {/* Draggable before/after comparison slider */}
        <GlimpsesServices />

        {/* Bottom CTA Section with black BMW sedan */}
        {/* <ExperienceHigherStandard onOpenBooking={openBooking} /> */}
        <ServiceCTA onOpenBooking={openBooking}/>
      </main>

      {/* Footer */}
      <Footer onOpenBooking={openBooking} />

      {/* Booking Dialogue Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
