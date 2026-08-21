"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import BusinessHours from "@/components/BusinessHours";

export default function ContactUsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-[#1D1D1B] text-white flex flex-col font-sans select-none overflow-x-clip scroll-smooth">
      {/* Navbar Header */}
      <Header onOpenBooking={openBooking} />

      <main className="flex-grow pt-16">
        {/* Contact Page Subsections */}
        <ContactForm />
        <ContactInfo />
        <BusinessHours />
      </main>

      {/* Footer */}
      <Footer variant="ash" />

      {/* Booking Dialogue Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
