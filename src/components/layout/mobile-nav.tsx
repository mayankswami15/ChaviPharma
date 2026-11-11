"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu className="w-6 h-6 text-navy" />
      </button>

      {/* Render drawer directly on document.body to escape header backdrop-blur & stacking context */}
      {mounted &&
        createPortal(
          <div
            className={cn(
              "fixed inset-0 z-[100] transition-opacity duration-300",
              open
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none invisible"
            )}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Solid Drawer Sheet */}
            <div
              className={cn(
                "absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col z-10",
                open ? "translate-x-0" : "translate-x-full"
              )}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-border bg-white">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src="/images/logo.png"
                    alt="Chavi Pharmaceutical"
                    width={140}
                    height={40}
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-navy"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <nav
                className="flex-1 p-5 space-y-1.5 overflow-y-auto bg-white"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors",
                      pathname === link.href
                        ? "text-teal bg-teal/10 font-semibold"
                        : "text-text hover:text-teal hover:bg-teal/5"
                    )}
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </Link>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="p-5 border-t border-border bg-white">
                <Link
                  href="/partnerships"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-colors shadow-sm"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
