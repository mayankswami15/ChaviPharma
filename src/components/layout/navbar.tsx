"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { company } from "@/data/company";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      {showBanner && (
        <div className="relative bg-navy text-white text-center py-2.5 px-4 text-sm z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
            <p className="font-medium">
              {company.opportunity}
              <Link
                href="/partnerships"
                className="ml-2 inline-flex items-center underline underline-offset-2 hover:text-green-light transition-colors font-semibold"
              >
                Enquire Now →
              </Link>
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Chavi Pharmaceutical"
                width={180}
                height={50}
                className="h-10 sm:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-teal bg-teal/5"
                      : "text-text hover:text-teal hover:bg-teal/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/partnerships"
                className="hidden lg:inline-flex items-center px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-colors"
              >
                Partner With Us
              </Link>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
