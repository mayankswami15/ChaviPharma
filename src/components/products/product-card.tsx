import Link from "next/link";
import Image from "next/image";
import { type Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-border-light overflow-hidden hover:shadow-lg hover:border-teal/20 transition-all h-full flex flex-col relative cursor-pointer">
      {/* Stretched link to make whole card clickable */}
      <Link
        href={`/products/${product.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View details for ${product.name}`}
      />

      {/* Image */}
      <div className="aspect-square bg-gradient-to-br from-background to-teal/5 relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-2 py-0.5 bg-white/90 backdrop-blur text-navy text-[10px] font-semibold rounded-md capitalize">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-sm text-navy mb-1 group-hover:text-teal transition-colors">
          {product.name}
        </h3>
        <p className="text-[11px] text-text-muted mb-2">{product.dosageForm}</p>
        <p className="text-xs text-text-muted leading-relaxed mb-4 flex-1">
          {product.shortDescription}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto relative z-20">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-navy border border-border rounded-lg hover:border-teal hover:text-teal transition-colors"
          >
            View Details
          </Link>
          <Link
            href={`/contact?product=${product.slug}`}
            className="flex-1 inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-white bg-navy rounded-lg hover:bg-navy-light transition-colors"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
