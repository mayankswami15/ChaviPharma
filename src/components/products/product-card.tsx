import Link from "next/link";
import Image from "next/image";
import { type Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-300/90 shadow-sm hover:shadow-xl hover:border-teal/50 transition-all duration-300 h-full flex flex-col relative cursor-pointer overflow-hidden">
      {/* Stretched link to make whole card clickable */}
      <Link
        href={`/products/${product.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View details for ${product.name}`}
      />

      {/* Image Stage Container with subtle border */}
      <div className="aspect-square bg-slate-50/90 border-b border-slate-200/80 relative overflow-hidden flex items-center justify-center p-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/95 backdrop-blur text-navy text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-200 shadow-xs">
          {product.category}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col bg-white">
        <h3 className="font-display font-bold text-base text-navy mb-1.5 group-hover:text-teal transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="mb-2">
          <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-teal/10 text-teal-dark">
            {product.dosageForm}
          </span>
        </div>
        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4 flex-1 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Actions - z-20 so buttons remain directly clickable */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-slate-100 relative z-20">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-navy bg-slate-50 border border-slate-300 rounded-lg hover:border-teal hover:text-white hover:bg-teal transition-colors"
          >
            View Details
          </Link>
          <Link
            href={`/contact?product=${product.slug}`}
            className="flex-1 inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-white bg-navy rounded-lg hover:bg-navy-light transition-colors shadow-xs"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
