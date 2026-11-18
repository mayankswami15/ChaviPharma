import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  Shield,
  TrendingUp,
  Handshake,
  ArrowRight,
  GraduationCap,
  Award,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Chavi Pharmaceuticals — a growing pharmaceutical company focused on quality healthcare products and long-term partnerships.",
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      "A growing pharmaceutical partner with a quality-first mindset.",
  },
};

const values = [
  {
    icon: Shield,
    title: "Quality",
    description:
      "Commitment to quality standards in every product and every process.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "Transparent and honest business practices with every partner.",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "Healthcare products developed with the well-being of patients in mind.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Continuous portfolio expansion and capability building.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            About Chavi Pharmaceuticals
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            A growing pharmaceutical partner with a quality-first mindset,
            focused on dependable business relationships.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal/10 to-green/5 border border-border-light overflow-hidden relative">
                <Image
                  src="/images/about/office.jpg"
                  alt="Professional healthcare workspace"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 rounded-full mb-5">
                <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy leading-tight mb-5">
                Building quality healthcare,{" "}
                <span className="text-teal">one partnership at a time.</span>
              </h2>
              <p className="text-text-muted text-base leading-relaxed mb-4">
                Chavi Pharmaceuticals Pvt. Ltd. is a pharmaceutical company based
                in Ahmedabad, Gujarat, focused on developing and marketing a
                growing range of healthcare products with a commitment to quality
                standards.
              </p>
              <p className="text-text-muted text-base leading-relaxed">
                With a quality-oriented approach to product development and a
                focus on building long-term business relationships, Chavi
                Pharmaceuticals works with franchise and distribution partners to
                bring healthcare products to patients across the healthcare
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-teal" />
              </div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">
                Our Mission
              </h2>
              <p className="text-text-muted text-base leading-relaxed">
                To provide quality healthcare products through trusted
                partnerships and responsive business practices, contributing to
                better health outcomes across the communities we serve.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-green" />
              </div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">
                Our Vision
              </h2>
              <p className="text-text-muted text-base leading-relaxed">
                To grow as a dependable pharmaceutical partner recognized for
                quality, commitment, and a professional approach to healthcare
                business across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder / CEO */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-teal uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy mt-1.5 mb-2">
              Meet Our Founder
            </h2>
            <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto">
              Guiding Chavi Pharmaceuticals with a vision for quality and trusted partnerships.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-background border border-border shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-[250px_1fr] items-center">
                {/* Photo Side */}
                <div className="p-6 sm:p-7 flex flex-col items-center text-center bg-white border-b md:border-b-0 md:border-r border-border h-full justify-center">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-border-light shadow-md mb-3.5">
                    <Image
                      src="/images/about/founder.jpg"
                      alt="Sumit Kumar Swami — Founder & CEO of Chavi Pharmaceuticals"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 144px, 144px"
                    />
                  </div>
                  <h3 className="font-display font-bold text-lg text-navy">
                    Sumit Kumar Swami
                  </h3>
                  <p className="text-teal font-semibold text-xs tracking-wide uppercase mt-0.5">
                    Founder & CEO
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-background border border-border rounded-md text-xs font-medium text-navy shadow-2xs">
                      <GraduationCap className="w-3.5 h-3.5 text-teal" />
                      B.Pharma
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-background border border-border rounded-md text-xs font-medium text-navy shadow-2xs">
                      <Award className="w-3.5 h-3.5 text-teal" />
                      Age 26
                    </span>
                  </div>
                </div>

                {/* Bio Side */}
                <div className="p-6 sm:p-8 lg:p-9 flex flex-col justify-center">
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-3.5">
                    Sumit Kumar Swami is the Founder & CEO of Chavi Pharmaceuticals Pvt. Ltd. A pharmacy graduate holding a{" "}
                    <strong className="text-navy font-semibold">
                      Bachelor of Pharmacy (B.Pharma) from Rai University, Ahmedabad
                    </strong>
                    , he established the enterprise with a focused commitment to quality-oriented healthcare formulations and long-term business integrity.
                  </p>
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                    Under his active leadership, Chavi Pharmaceuticals is steadily expanding its portfolio of tablets, capsules, syrups, and topical formulations manufactured in alignment with WHO & GMP standards. At 26, his hands-on approach and pharmaceutical expertise drive the company&apos;s growth while providing dependable support to franchise and distribution partners across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
              Our Values
            </h2>
            <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
              The principles that guide our approach to pharmaceutical
              business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display font-semibold text-base text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Philosophy */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-12 h-12 text-teal mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5">
              Quality Philosophy
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
              Chavi Pharmaceuticals positions itself around WHO & GMP standards,
              with a focus on quality-oriented product development and
              manufacturing practices. Our commitment to quality is reflected in
              every product in our portfolio.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-navy font-bold rounded-xl hover:bg-white/90 transition-all group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
