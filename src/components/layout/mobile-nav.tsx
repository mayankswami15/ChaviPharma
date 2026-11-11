"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 text-navy" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50 animate-fade-in"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sheet */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-border">
            <span className="font-display font-bold text-lg text-navy">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 p-5 space-y-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors",
                  pathname === link.href
                    ? "text-teal bg-teal/5"
                    : "text-text hover:text-teal hover:bg-teal/5"
                )}
              >
                {link.label}
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="p-5 border-t border-border">
            <Link
              href="/partnerships"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full px-6 py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-colors"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
