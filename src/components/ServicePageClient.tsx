"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import ViewGallery from "@/components/ViewGallery";
import BookingModal from "@/components/BookingModal";
import ServiceHero from "@/components/ServiceHero";
import SubServicesList from "@/components/SubServicesList";
import ServiceBenefits from "@/components/ServiceBenefits";
import { ServiceData } from "@/data/servicesData";

interface ServicePageClientProps {
  service: ServiceData;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-[#1D1D1B] text-white flex flex-col font-sans select-none overflow-x-clip scroll-smooth">
      {/* Navbar Header */}
      <Header onOpenBooking={openBooking} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <ServiceHero
          title={service.title}
          subtitle={service.subtitle}
          heroImage={service.heroImage}
        />

        {/* 2. Sub-Services Detailed Section */}
        {service.subServices && service.subServices.length > 0 && (
          <SubServicesList
            subServices={service.subServices}
            onOpenBooking={openBooking}
          />
        )}

        {/* 3. Benefits & Values Section */}
        {service.benefits && service.benefits.length > 0 && (
          <ServiceBenefits
            benefitsTitle={service.benefitsTitle}
            benefits={service.benefits}
          />
        )}

        {/* 4. Glimpses from Our Workshop (Gallery Section) */}
        {service.showGallery !== false && <ViewGallery />}

        {/* 5. Shared Service CTA */}
        <ServiceCTA onOpenBooking={openBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={openBooking} />

      {/* Booking Dialogue Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
