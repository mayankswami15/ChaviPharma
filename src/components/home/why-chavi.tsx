"use client";

import {
  Shield,
  TrendingUp,
  Handshake,
  Truck,
  MessageSquare,
  Presentation,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Shield,
    title: "Quality Mindset",
    description:
      "A quality-focused approach to the product portfolio, with commitment to WHO & GMP standards.",
    highlighted: true,
  },
  {
    icon: TrendingUp,
    title: "Growing Portfolio",
    description:
      "A developing range of pharmaceutical and healthcare products across multiple therapeutic categories.",
    highlighted: false,
  },
  {
    icon: Handshake,
    title: "Partnership Focus",
    description:
      "Built around long-term business relationships with transparent communication.",
    highlighted: false,
  },
  {
    icon: Truck,
    title: "Distribution Opportunities",
    description:
      "Support for suitable franchise and distribution partners across territories.",
    highlighted: false,
  },
  {
    icon: MessageSquare,
    title: "Responsive Communication",
    description:
      "Simple and direct business enquiry process with timely follow-up.",
    highlighted: false,
  },
  {
    icon: Presentation,
    title: "Professional Presentation",
    description:
      "Clear product information and business communication materials.",
    highlighted: false,
  },
];

export function WhyChavi() {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Headline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 rounded-full mb-5">
              <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2
              id="why-heading"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-navy leading-tight mb-5"
            >
              Why partner with{" "}
              <span className="text-teal">Chavi Pharmaceuticals?</span>
            </h2>
            <p className="text-text-muted text-base leading-relaxed">
              We bring together quality products, dependable partnerships, and a
              commitment to growth — creating value for every partner in the
              healthcare ecosystem.
            </p>
          </motion.div>

          {/* Right Benefits List */}
          <div className="lg:col-span-3 space-y-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`flex items-start gap-4 p-5 rounded-2xl transition-all ${
                  benefit.highlighted
                    ? "bg-navy text-white shadow-lg shadow-navy/10"
                    : "bg-white border border-border-light hover:border-teal/20 hover:shadow-sm"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    benefit.highlighted
                      ? "bg-white/15"
                      : "bg-gradient-to-br from-teal/10 to-green/10"
                  }`}
                >
                  <benefit.icon
                    className={`w-5 h-5 ${
                      benefit.highlighted ? "text-green-light" : "text-teal"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`font-display font-semibold text-sm mb-1 ${
                      benefit.highlighted ? "text-white" : "text-navy"
                    }`}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      benefit.highlighted ? "text-white/70" : "text-text-muted"
                    }`}
                  >
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
