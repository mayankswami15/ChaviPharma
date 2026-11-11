"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/products/product-card";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 rounded-full mb-5">
              <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                Featured Products
              </span>
            </div>
            <h2
              id="featured-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-navy mb-2"
            >
              Quality Healthcare Products
            </h2>
            <p className="text-text-muted text-base sm:text-lg max-w-lg">
              Explore our featured range of pharmaceutical products.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-semibold text-teal hover:text-teal-dark transition-colors group shrink-0"
          >
            View All Products
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
