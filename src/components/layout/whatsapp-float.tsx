"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export function WhatsAppFloat() {
  const msg = encodeURIComponent(company.whatsappMessage);
  const url = `https://wa.me/91${company.whatsapp}?text=${msg}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:bg-[#20BD5A] hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-navy text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        WhatsApp Inquiry
        <div className="absolute top-full right-4 -mt-1 w-2 h-2 bg-navy rotate-45" />
      </div>
    </a>
  );
}
