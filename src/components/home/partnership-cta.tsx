"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function PartnershipCTA() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="partnership-cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-navy rounded-3xl px-8 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24 text-center"
        >
          {/* Decorative molecular pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <svg className="absolute top-0 left-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 400">
              <circle cx="100" cy="80" r="6" fill="white" />
              <circle cx="200" cy="120" r="4" fill="white" />
              <circle cx="300" cy="60" r="5" fill="white" />
              <circle cx="400" cy="140" r="7" fill="white" />
              <circle cx="500" cy="90" r="4" fill="white" />
              <circle cx="600" cy="130" r="6" fill="white" />
              <circle cx="700" cy="70" r="5" fill="white" />
              <circle cx="150" cy="250" r="5" fill="white" />
              <circle cx="350" cy="280" r="4" fill="white" />
              <circle cx="550" cy="260" r="6" fill="white" />
              <circle cx="650" cy="300" r="4" fill="white" />
              <line x1="100" y1="80" x2="200" y2="120" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="200" y1="120" x2="300" y2="60" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="300" y1="60" x2="400" y2="140" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="400" y1="140" x2="500" y2="90" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="500" y1="90" x2="600" y2="130" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="600" y1="130" x2="700" y2="70" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="150" y1="250" x2="350" y2="280" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="350" y1="280" x2="550" y2="260" stroke="white" strokeWidth="1" opacity="0.5" />
            </svg>
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-green/10 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              id="partnership-cta-heading"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5"
            >
              Your next healthcare partnership could start here.
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-10 max-w-lg mx-auto">
              Connect with Chavi Pharmaceuticals for product, franchise and
              distribution enquiries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/partnerships"
                className="inline-flex items-center px-8 py-4 bg-white text-navy font-bold rounded-xl hover:bg-white/90 transition-all hover:shadow-xl group"
              >
                Start Partnership Enquiry
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white/25 text-white font-semibold rounded-xl hover:border-white/50 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
