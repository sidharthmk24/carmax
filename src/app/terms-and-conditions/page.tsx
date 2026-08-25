"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Typography from "@/components/Typography";

export default function TermsAndConditions() {
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
          Terms &amp; Conditions
        </Typography>

        <p className="text-gray-500 text-xs md:text-sm mb-12 tracking-widest font-mono">
          Last Updated: March 06, 2026
        </p>

        <div className="space-y-16 text-gray-300 font-light text-sm md:text-[15px] leading-relaxed tracking-wider max-w-4xl">
          
          <div className="space-y-4 text-base">
            <p>
              Welcome to B &amp; C Carmax. By accessing our website, submitting service enquiries, or using our automotive services, you agree to comply with the following Terms and Conditions. These terms are designed to ensure transparency, service quality, and a smooth experience for all customers.
            </p>
          </div>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">1. Company Overview</h3>
            <div className="space-y-4">
              <p>
                B &amp; C Carmax is a premium automotive service provider based in Mangalore, Karnataka, offering professional services including mechanical repairs, engine and transmission overhaul, detailing, accident repair, vehicle upgrades, and related automotive services.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">2. Service Enquiries &amp; Appointments</h3>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-400 pl-2">
                <li>Requests submitted through the website, WhatsApp, phone, or social media are considered service enquiries only.</li>
                <li>A service appointment is confirmed only after verification and confirmation by the Carmax team.</li>
                <li>Estimated timelines provided are indicative and may vary depending on vehicle condition, parts availability, and service complexity.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">3. Vehicle Inspection &amp; Service Approval</h3>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-400 pl-2">
                <li>All vehicles undergo an initial inspection before work begins.</li>
                <li>Service estimates provided are based on preliminary diagnosis.</li>
                <li>If additional repairs are identified during servicing, customer approval will be obtained before proceeding.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">4. Pricing &amp; Payments</h3>
            <div className="space-y-4">
              <p>All service prices are quoted in Indian Rupees (INR).</p>
              <p className="font-medium text-white mt-2">Final billing may vary depending on:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 pl-4">
                <li>Parts required</li>
                <li>Additional labour</li>
                <li>Additional repairs discovered during service</li>
              </ul>
              <p className="pt-2">Full payment must be completed before vehicle delivery, unless otherwise agreed.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">5. Pickup &amp; Drop Service</h3>
            <div className="space-y-4">
              <p>B &amp; C Carmax may provide pickup and drop services depending on location and service type.</p>
              <p className="font-medium text-white mt-2">Customers must ensure:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 pl-4">
                <li>The vehicle is legally roadworthy.</li>
                <li>Personal belongings are removed before pickup.</li>
              </ul>
              <p className="pt-2">B &amp; C Carmax is not responsible for loss or damage to personal items left inside the vehicle.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">6. Customer Responsibilities</h3>
            <div className="space-y-4">
              <p className="font-medium text-white">Customers are required to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-gray-400 pl-2">
                <li>Provide accurate information regarding vehicle condition.</li>
                <li>Inform the service team about previous repairs or existing issues.</li>
                <li>Follow recommended maintenance guidelines after service completion.</li>
              </ul>
              <p className="pt-2">Failure to disclose known issues may affect service outcomes.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">7. Liability Disclaimer</h3>
            <div className="space-y-4">
              <p className="font-medium text-white">While every effort is made to ensure professional and safe servicing:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 pl-2">
                <li>B &amp; C Carmax is not responsible for pre-existing vehicle defects not identified during inspection.</li>
                <li>Delays caused by third-party suppliers, spare parts availability, or unforeseen technical issues are beyond our control.</li>
                <li>Customers are responsible for any damage caused by misuse of the vehicle after service completion.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">8. Website Use</h3>
            <div className="space-y-4">
              <p className="font-medium text-white">By using this website, you agree that:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 pl-2">
                <li>The information provided is for general informational purposes only.</li>
                <li>You will not attempt unauthorized access to the website or its systems.</li>
                <li>You will not misuse website forms or communication channels.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">9. Intellectual Property</h3>
            <div className="space-y-4">
              <p>All content on this website, including:</p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-400 pl-2 list-disc list-inside my-2">
                <li>Logos</li>
                <li>Images</li>
                <li>Videos</li>
                <li>Text</li>
                <li>Graphics</li>
              </ul>
              <p>are the intellectual property of B &amp; C Carmax and may not be copied, reproduced, or distributed without written permission.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">10. External Platforms</h3>
            <div className="space-y-4">
              <p>Our website may link to external platforms including:</p>
              <ul className="list-disc list-inside space-y-1.5 text-gray-400 pl-2">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Google Business</li>
              </ul>
              <p className="pt-2">We are not responsible for the privacy practices or content of these third-party platforms.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">11. Governing Law</h3>
            <div className="space-y-4">
              <p>
                These Terms &amp; Conditions are governed by the laws of India, and any disputes shall fall under the jurisdiction of the courts in Mangalore, Karnataka.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-normal text-white border-b border-white/10 pb-3">12. Contact Information</h3>
            <div className="space-y-4">
              <p>For any queries regarding these Terms &amp; Conditions, please contact:</p>
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
                    +91 9900 478 121
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
