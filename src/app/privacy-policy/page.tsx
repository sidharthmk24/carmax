"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Typography from "@/components/Typography";

export default function PrivacyPolicy() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-[#1D1D1B] text-white flex flex-col font-sans select-none overflow-x-clip scroll-smooth">
      {/* Navbar Header */}
      <Header onOpenBooking={openBooking} />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 sm:px-12 lg:px-20 pt-32 pb-24 ">
        <Typography 
          variant="mainheading" 
          className="text-[40px] md:text-[60px] font-orbitron font-normal mb-2 leading-none tracking-tight"
        >
          Privacy Policy
        </Typography>

        <p className="text-gray-500 text-xs md:text-sm mb-12 tracking-widest font-mono">
          Effective Date: March 06, 2026 | Last Updated: March 06, 2026
        </p>

        <div className="space-y-16 text-gray-300 font-light text-sm md:text-[15px] leading-relaxed tracking-wider max-w-4xl">
          
          <div className="space-y-4 text-base">
            <p>
              At B & C Carmax, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website, services, or communication channels.
            </p>
          </div>

          <section className="space-y-6">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">1. Information We Collect</h3>
            <div className="space-y-6">
              <p>When you contact us or request services, we may collect the following information:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-white font-medium text-base">Contact Information</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
                    <li>Name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Address or location</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-white font-medium text-base">Vehicle Information</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
                    <li>Vehicle make and model</li>
                    <li>Vehicle registration number</li>
                    <li>Service history and repair details</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-white font-medium text-base">Service Information</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
                    <li>Service requests</li>
                    <li>Appointment details</li>
                    <li>Customer feedback</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-white font-medium text-base">Technical Information</h4>
                  <p className="text-gray-400 text-sm">When you visit our website, we may collect:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Cookie data</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">2. How We Use Your Information</h3>
            <div className="space-y-4">
              <p>We use your information to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-gray-400 pl-2">
                <li>Respond to service enquiries</li>
                <li>Schedule and manage vehicle servicing</li>
                <li>Communicate service updates</li>
                <li>Improve customer service and operations</li>
                <li>Send service reminders or updates</li>
                <li>Maintain service records</li>
              </ul>
              <p className="pt-2">We may also use anonymized data to improve our services and website experience.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">3. Data Sharing</h3>
            <div className="space-y-4">
              <p>B & C Carmax does not sell or rent your personal information.</p>
              <p>Your information may only be shared with:</p>
              <ul className="list-disc list-inside space-y-1.5 text-gray-400 pl-2">
                <li>Authorized service staff</li>
                <li>Technology partners supporting our website or CRM systems</li>
                <li>Government authorities when legally required</li>
              </ul>
              <p className="pt-2">All such parties are expected to maintain confidentiality.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">4. Cookies &amp; Website Tracking</h3>
            <div className="space-y-4">
              <p>Our website may use cookies to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-gray-400 pl-2">
                <li>Improve browsing experience</li>
                <li>Analyze website traffic</li>
                <li>Remember user preferences</li>
              </ul>
              <p className="pt-2">You can disable cookies through your browser settings, but this may affect website functionality.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">5. Data Security</h3>
            <div className="space-y-4">
              <p>We implement reasonable security measures to protect customer information, including:</p>
              <ul className="list-disc list-inside space-y-1.5 text-gray-400 pl-2">
                <li>Restricted access to customer records</li>
                <li>Secure communication systems</li>
                <li>Regular monitoring of digital platforms</li>
              </ul>
              <p className="pt-2">However, no internet transmission can be guaranteed to be completely secure.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">6. Your Rights</h3>
            <div className="space-y-4">
              <p>In accordance with applicable data protection regulations, including India’s Digital Personal Data Protection (DPDP) Act, you may:</p>
              <ul className="list-disc list-inside space-y-1.5 text-gray-400 pl-2">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data where applicable</li>
                <li>Withdraw consent for marketing communication</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">7. Data Retention</h3>
            <div className="space-y-4">
              <p>We retain customer information only for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-gray-400 pl-2">
                <li>Provide services</li>
                <li>Maintain service history</li>
                <li>Comply with legal or accounting requirements</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">8. Updates to This Policy</h3>
            <div className="space-y-4">
              <p>B & C Carmax reserves the right to update this Privacy Policy periodically. Any updates will be posted on this page.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">9. Contact Us</h3>
            <div className="space-y-4">
              <p>For any privacy-related queries, please contact:</p>
              <div className="bg-white/5 border border-white/10 p-6 rounded-md space-y-2 max-w-md mt-4">
                <p className="font-semibold text-white text-base">B &amp; C Carmax</p>
                <p className="text-gray-400 text-sm">Mangalore, Karnataka</p>
                <div className="h-[1px] bg-white/10 my-3"></div>
                <p className="text-sm">
                  <span className="text-gray-400">Email:</span>{" "}
                  <a href="mailto:carmaxmlr003@gmail.com" className="text-white hover:underline hover:text-white/80 transition-colors">
                    carmaxmlr003@gmail.com
                  </a>
                </p>
                <p className="text-sm">
                  <span className="text-gray-400">Phone:</span>{" "}
                  <a href="tel:+919900478121" className="text-white hover:underline hover:text-white/80 transition-colors">
                    +91 9900478121
                  </a>
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer variant="ash" onOpenBooking={openBooking} />

      {/* Booking Dialogue Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
