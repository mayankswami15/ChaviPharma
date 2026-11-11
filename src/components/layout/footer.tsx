import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { company, siteConfig } from "@/data/company";
import { NAV_LINKS } from "@/lib/constants";
import { categories } from "@/data/categories";
import { isVerified } from "@/lib/utils";

function getWhatsAppUrl() {
  const msg = encodeURIComponent(company.whatsappMessage);
  return `https://wa.me/91${company.whatsapp}?text=${msg}`;
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-5">
              <Image
                src="/images/logo.png"
                alt="Chavi Pharmaceutical"
                width={180}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-6">
              {siteConfig.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-teal shrink-0" />
                <span>{company.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail className="w-4 h-4 text-teal shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/70">
                <Phone className="w-4 h-4 text-teal shrink-0" />
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:+91${company.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    +91 {company.phone}
                  </a>
                  {isVerified(company.phoneSecondary) && (
                    <>
                      <span className="text-white/30">|</span>
                      <a
                        href={`tel:+91${company.phoneSecondary}`}
                        className="hover:text-white transition-colors"
                      >
                        +91 {company.phoneSecondary}
                      </a>
                    </>
                  )}
                </div>
              </div>
              {/* WhatsApp */}
              <div className="flex items-center gap-2.5 text-sm text-white/70">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +91 {company.whatsapp}
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-xs text-white/50 font-semibold uppercase tracking-wider mb-3">
                Follow Our Social Media
              </p>
              <div className="flex items-center gap-3">
                {isVerified(company.socialLinks.instagram) && (
                  <a
                    href={company.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                )}
                {/* WhatsApp icon */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25D366]/30 flex items-center justify-center transition-colors"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-sm mb-4 text-white/90">
              Company
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-display font-semibold text-sm mb-4 text-white/90">
              Products
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partnership */}
          <div>
            <h3 className="font-display font-semibold text-sm mb-4 text-white/90">
              Partnerships
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/partnerships"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Franchise / PCD
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Distribution
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Business Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {currentYear} {company.name} All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
