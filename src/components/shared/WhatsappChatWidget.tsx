"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function WhatsappChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || "";

  // Hide widget on legal pages
  if (pathname.includes("/privacy-policy") || pathname.includes("/terms-and-conditions")) {
    return null;
  }

  const handleChat = (topic: string) => {
    const number = "919900478121";
    const message = encodeURIComponent(`Hi! I would like to enquire about ${topic}.`);
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
    setIsOpen(false);
  };

  const options = [
    { label: "General Inquiry", topic: "General Services" },
    { label: "Book a Service Slot", topic: "Booking a Service Slot" },
    { label: "Body & Accident Repair", topic: "Body & Accident Repair" },
    { label: "Performance & Upgrades", topic: "Performance & Upgrades" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="mb-4 flex w-[340px] flex-col overflow-hidden rounded-2xl bg-[#efeae2] shadow-2xl transition-all duration-300 border border-zinc-200">
          {/* Header */}
          <div className="flex items-center gap-3 bg-[#075E54] p-4 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1.5 shadow-sm">
              <Image
                src="/svgs/logo.svg"
                alt="B&C Carmax Logo"
                width={32}
                height={32}
                className="h-auto w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-base font-bold leading-tight text-white">B&C Carmax</h3>
              <p className="text-xs text-white/80">Typically replies instantly</p>
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex flex-col gap-3 p-4">
            {/* Chat Bubble */}
            <div className="max-w-[90%] rounded-b-xl rounded-tr-xl bg-white p-3 text-sm text-gray-800 shadow-sm">
              <p className="mb-1 text-xs font-semibold text-[#128C7E]">B&C Carmax</p>
              Hi there! 👋 <br />
              Welcome to B&C Carmax. How can we help you with your car today?
            </div>

            {/* Action Buttons Container */}
            <div className="mt-2 flex flex-col gap-2">
              {options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChat(option.topic)}
                  className="w-full rounded-xl bg-white py-3 px-4 text-left text-sm font-medium text-gray-700 shadow-sm border border-zinc-100 transition-all hover:bg-zinc-50 hover:text-[#FE6700] hover:border-zinc-200 flex items-center justify-between group"
                >
                  <span>{option.label}</span>
                  <span className="text-zinc-400 group-hover:translate-x-0.5 group-hover:text-[#FE6700] transition-all duration-200 text-xs">
                    ➔
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Green Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] active:scale-95"
        aria-label="Open WhatsApp Chat"
      >
        {isOpen ? (
          // Close Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          // WhatsApp Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        )}
      </button>
    </div>
  );
}
