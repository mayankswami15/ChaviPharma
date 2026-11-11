"use client";

import { Shield, Briefcase, Package, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: Shield,
    title: "Quality-Focused Products",
    description: "Commitment to WHO & GMP standards in every product.",
  },
  {
    icon: Package,
    title: "Professional Healthcare Portfolio",
    description: "A growing range across multiple therapeutic segments.",
  },
  {
    icon: Briefcase,
    title: "Franchise & Distribution",
    description: "Opportunities for PCD franchise and distribution partners.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description: "Built around dependable, lasting business relationships.",
  },
];

export function TrustStrip() {
  return (
    <section className="relative -mt-6 z-10 px-4 sm:px-6 lg:px-8" aria-label="Key strengths">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-border-light p-5 shadow-sm hover:shadow-md hover:border-teal/20 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal/10 to-green/10 flex items-center justify-center shrink-0 group-hover:from-teal/20 group-hover:to-green/20 transition-colors">
                  <item.icon className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-navy mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
