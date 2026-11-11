"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-teal/10 to-navy/5 relative">
              <Image
                src="/images/about/office.jpg"
                alt="Professional healthcare workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl bg-green/10 -z-10" aria-hidden="true" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 rounded-full mb-5">
              <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                About Us
              </span>
            </div>

            <h2
              id="about-heading"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-navy leading-tight mb-5"
            >
              A growing pharmaceutical partner with a{" "}
              <span className="text-teal">quality-first mindset.</span>
            </h2>

            <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
              Chavi Pharmaceuticals is building a growing portfolio of healthcare
              products with a focus on quality, dependable business
              relationships, and responsive partner support.
            </p>

            {/* Mission/Vision Mini-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-background border border-border-light">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-teal" />
                  <h3 className="font-display font-semibold text-sm text-navy">
                    Our Mission
                  </h3>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  To provide quality healthcare products through trusted
                  partnerships and responsive business practices.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-border-light">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-green" />
                  <h3 className="font-display font-semibold text-sm text-navy">
                    Our Vision
                  </h3>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  To grow as a dependable pharmaceutical partner recognized for
                  quality and commitment.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all hover:shadow-lg hover:shadow-navy/20 group"
            >
              About Chavi
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
