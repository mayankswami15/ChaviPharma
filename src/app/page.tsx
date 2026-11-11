import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { AboutPreview } from "@/components/home/about-preview";
import { CategoryGrid } from "@/components/home/category-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyChavi } from "@/components/home/why-chavi";
import { PartnershipCTA } from "@/components/home/partnership-cta";
import { company, siteConfig } from "@/data/company";

export default function HomePage() {
  return (
    <>
      {/* Organization JSON-LD — only verified information */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: company.name,
            url: siteConfig.url,
            description: siteConfig.description,
            address: {
              "@type": "PostalAddress",
              streetAddress: `${company.address.line1}, ${company.address.line2}`,
              addressLocality: company.address.city,
              addressRegion: company.address.state,
              postalCode: company.address.pincode,
              addressCountry: company.address.country,
            },
          }),
        }}
      />
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyChavi />
      <PartnershipCTA />
    </>
  );
}
