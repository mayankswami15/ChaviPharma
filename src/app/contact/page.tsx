import type { Metadata } from "next";
import { MapPin, Clock, Mail, Phone, MessageCircle } from "lucide-react";
import { company, siteConfig } from "@/data/company";
import { isVerified } from "@/lib/utils";
import { ContactFormWrapper } from "./contact-form-wrapper";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Chavi Pharmaceuticals for product, franchise, distribution, or general business enquiries.",
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description:
      "Get in touch with Chavi Pharmaceuticals for business enquiries.",
  },
};

function getWhatsAppUrl() {
  const msg = encodeURIComponent(company.whatsappMessage);
  return `https://wa.me/91${company.whatsapp}?text=${msg}`;
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Have a question or ready to start a conversation? Reach out to us
            and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-2xl text-navy mb-6">
                Get in Touch
              </h2>
              <p className="text-text-muted text-base leading-relaxed mb-8">
                Whether you&apos;re interested in our products, franchise
                opportunities, distribution partnerships, or simply have a
                question — we&apos;re here to help.
              </p>

              <div className="space-y-5">
                {/* Address with Integrated Side Map */}
                <div className="p-4 rounded-xl bg-background border border-border-light">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-teal" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-display font-semibold text-sm text-navy">
                          Office Address
                        </h3>
                        <a
                          href="https://maps.google.com/?q=Shreenath+Estate+Shahwadi+Ahmedabad"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-teal hover:text-teal-dark transition-colors inline-flex items-center gap-0.5"
                        >
                          View Map ↗
                        </a>
                      </div>
                      <p className="text-sm text-text-muted leading-relaxed mb-3">
                        {company.address.full}
                      </p>
                    </div>
                  </div>

                  {/* Compact Side Map */}
                  <div className="rounded-lg overflow-hidden border border-border-light relative h-44 w-full mt-1">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5591596027953!2d72.58202197560958!3d22.966457079212955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8f63f12ea53f%3A0x996cb37ba9b1467b!2sShreenath%20Estate%20Shahwadi!5e0!3m2!1sen!2sin!4v1794426158594!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="w-full h-full"
                      title="Chavi Pharmaceuticals Location"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border-light">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-navy mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-sm text-teal hover:text-teal-dark transition-colors"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border-light">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-navy mb-1">
                      Phone
                    </h3>
                    <div className="flex flex-col gap-1">
                      <a
                        href={`tel:+91${company.phone}`}
                        className="text-sm text-teal hover:text-teal-dark transition-colors"
                      >
                        +91 {company.phone}
                      </a>
                      {isVerified(company.phoneSecondary) && (
                        <a
                          href={`tel:+91${company.phoneSecondary}`}
                          className="text-sm text-teal hover:text-teal-dark transition-colors"
                        >
                          +91 {company.phoneSecondary}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/20 hover:border-[#25D366]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-navy mb-1">
                      WhatsApp Inquiry
                    </h3>
                    <p className="text-sm text-text-muted">
                      Chat with us instantly on WhatsApp
                    </p>
                  </div>
                </a>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border-light">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-navy mb-1">
                      Business Hours
                    </h3>
                    <p className="text-sm text-text-muted font-medium">
                      {company.businessHours}
                    </p>
                  </div>
                </div>

                {/* Follow Social Media */}
                {isVerified(company.socialLinks.instagram) && (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border-light">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#E1306C]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm text-navy mb-1">
                        Follow Our Social Media
                      </h3>
                      <a
                        href={company.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-teal hover:text-teal-dark transition-colors inline-flex items-center gap-1"
                      >
                        @chavipharmaceuticalpvt
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-6 sm:p-8 rounded-2xl bg-background border border-border-light">
                <h2 className="font-display font-bold text-xl text-navy mb-2">
                  Send Us an Enquiry
                </h2>
                <p className="text-sm text-text-muted mb-6">
                  Fill out the form below and our team will respond as soon as
                  possible.
                </p>
                <ContactFormWrapper />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
