"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Microscope } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-white to-teal/5">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-teal/[0.04] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-green/[0.04] blur-3xl" />
        {/* Molecular pattern dots */}
        <svg className="absolute top-20 right-1/4 opacity-[0.06]" width="200" height="200" viewBox="0 0 200 200">
          <circle cx="40" cy="40" r="4" fill="currentColor" className="text-teal" />
          <circle cx="100" cy="30" r="3" fill="currentColor" className="text-teal" />
          <circle cx="160" cy="50" r="5" fill="currentColor" className="text-teal" />
          <circle cx="70" cy="100" r="3" fill="currentColor" className="text-teal" />
          <circle cx="140" cy="110" r="4" fill="currentColor" className="text-teal" />
          <circle cx="50" cy="160" r="3" fill="currentColor" className="text-teal" />
          <circle cx="120" cy="170" r="5" fill="currentColor" className="text-teal" />
          <line x1="40" y1="40" x2="100" y2="30" stroke="currentColor" strokeWidth="1" className="text-teal" opacity="0.3" />
          <line x1="100" y1="30" x2="160" y2="50" stroke="currentColor" strokeWidth="1" className="text-teal" opacity="0.3" />
          <line x1="70" y1="100" x2="140" y2="110" stroke="currentColor" strokeWidth="1" className="text-teal" opacity="0.3" />
          <line x1="50" y1="160" x2="120" y2="170" stroke="currentColor" strokeWidth="1" className="text-teal" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                Trusted Pharma Partner
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[56px] text-navy leading-[1.1] mb-6">
              Quality Healthcare.{" "}
              <span className="bg-gradient-to-r from-teal to-green bg-clip-text text-transparent">
                Trusted Partnerships.
              </span>
            </h1>

            <p className="text-text-muted text-lg sm:text-xl leading-relaxed max-w-lg mb-8">
              Chavi Pharmaceuticals is a growing pharmaceutical company focused
              on quality-oriented healthcare products and long-term partnerships
              across the healthcare ecosystem.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all hover:shadow-lg hover:shadow-navy/20 group"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/partnerships"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-navy/15 text-navy font-semibold rounded-xl hover:border-teal hover:text-teal transition-all"
              >
                Become a Partner
              </Link>
            </div>

            {/* Trust micro-copy */}
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal" />
                <span>WHO & GMP Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <Microscope className="w-4 h-4 text-teal" />
                <span>Quality Focused</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-teal/10 to-green/10">
              <Image
                src="/images/hero/hero.jpg"
                alt="Pharmaceutical laboratory with scientific equipment"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-white rounded-xl shadow-lg shadow-navy/8 p-4 border border-border-light"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-navy">
                    QUALITY FIRST
                  </p>
                  <p className="text-xs text-text-muted">
                    Healthcare-focused portfolio
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 -right-4 sm:top-6 sm:-right-6 bg-white rounded-xl shadow-lg shadow-navy/8 p-4 border border-border-light"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-navy">
                    PARTNERSHIPS
                  </p>
                  <p className="text-xs text-text-muted">
                    Franchise & Distribution
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
