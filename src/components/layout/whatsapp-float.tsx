"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export function WhatsAppFloat() {
  const msg = encodeURIComponent(company.whatsappMessage);
  const url = `https://wa.me/91${company.whatsapp}?text=${msg}`;

  return (
    <aside aria-label="WhatsApp Contact">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 sm:right-6 z-[60] group block select-none"
        style={{
          bottom: "max(1.25rem, calc(1.25rem + env(safe-area-inset-bottom, 0px)))",
        }}
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          {/* Subtle pulse ring */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
          {/* Main button */}
          <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 flex items-center justify-center hover:bg-[#20BD5A] hover:scale-105 active:scale-95 transition-all duration-200">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
        </div>
        {/* Tooltip on hover (desktop only) */}
        <div className="hidden sm:block absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-navy text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          WhatsApp Inquiry
          <div className="absolute top-full right-4 -mt-1 w-2 h-2 bg-navy rotate-45" />
        </div>
      </a>
    </aside>
  );
}
