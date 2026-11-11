import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building,
  Truck,
  Briefcase,
  ClipboardList,
  MessageSquare,
  Users,
  CheckCircle,
  Handshake,
} from "lucide-react";
import { siteConfig } from "@/data/company";

export const metadata: Metadata = {
  title: "Partnerships — Franchise & Distribution",
  description:
    "Explore franchise, PCD, distribution, and business partnership opportunities with Chavi Pharmaceuticals.",
  openGraph: {
    title: `Partnerships | ${siteConfig.name}`,
    description:
      "Franchise, distribution and business partnership opportunities.",
  },
};

const partnershipTypes = [
  {
    icon: Building,
    title: "Franchise / PCD",
    description:
      "Explore PCD franchise opportunities with Chavi Pharmaceuticals. We work with franchise partners to bring quality healthcare products to markets across India.",
    highlights: [
      "Growing product portfolio",
      "Marketing and promotional support",
      "Quality-oriented products",
      "Transparent business terms",
    ],
  },
  {
    icon: Truck,
    title: "Distribution",
    description:
      "Interested distributors can connect with us to discuss distribution opportunities. We value reliable distribution partnerships that ensure timely product availability.",
    highlights: [
      "Multiple therapeutic categories",
      "Dependable supply chain",
      "Business growth support",
      "Professional communication",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Partnerships",
    description:
      "We are open to exploring business partnerships that align with our quality-first approach and contribute to better healthcare outcomes.",
    highlights: [
      "Flexible partnership models",
      "Quality-focused collaboration",
      "Long-term relationship focus",
      "Growth-oriented approach",
    ],
  },
];

const processSteps = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Submit Enquiry",
    description: "Fill out our partnership enquiry form with your details.",
  },
  {
    step: 2,
    icon: MessageSquare,
    title: "Discuss Requirements",
    description: "Our team connects with you to understand your needs.",
  },
  {
    step: 3,
    icon: Users,
    title: "Portfolio & Territory Discussion",
    description: "Explore product range and territory opportunities.",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Verification & Onboarding",
    description: "Complete the verification process and begin onboarding.",
  },
  {
    step: 5,
    icon: Handshake,
    title: "Partnership",
    description: "Start your partnership with Chavi Pharmaceuticals.",
  },
];

export default function PartnershipsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            {"Let's Build a Stronger Healthcare Network Together."}
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Explore franchise, distribution, and business partnership
            opportunities with Chavi Pharmaceuticals.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {partnershipTypes.map((type) => (
              <div
                key={type.title}
                className="p-8 rounded-2xl bg-background border border-border-light hover:border-teal/20 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                  <type.icon className="w-6 h-6 text-teal" />
                </div>
                <h2 className="font-display font-bold text-xl text-navy mb-3">
                  {type.title}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-text-muted"
                    >
                      <CheckCircle className="w-4 h-4 text-green shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 rounded-full mb-5">
              <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                Process
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
              How It Works
            </h2>
            <p className="text-text-muted text-base max-w-lg mx-auto">
              A straightforward path from enquiry to partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative">
                <div className="text-center p-6 rounded-2xl bg-white border border-border-light">
                  <div className="w-10 h-10 rounded-full bg-navy text-white font-display font-bold text-sm flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <step.icon className="w-6 h-6 text-teal mx-auto mb-3" />
                  <h3 className="font-display font-semibold text-sm text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Arrow connector */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5">
              Ready to start your partnership?
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-8">
              Submit a partnership enquiry and our team will connect with you to
              discuss opportunities.
            </p>
            <Link
              href="/contact?type=franchise"
              className="inline-flex items-center px-8 py-4 bg-white text-navy font-bold rounded-xl hover:bg-white/90 transition-all group"
            >
              Start Partnership Enquiry
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
