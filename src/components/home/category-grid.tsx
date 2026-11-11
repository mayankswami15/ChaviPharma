"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";



export function CategoryGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 rounded-full mb-5">
            <span className="text-xs font-semibold text-teal uppercase tracking-wider">
              Product Range
            </span>
          </div>
          <h2
            id="categories-heading"
            className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4"
          >
            Our Healthcare Portfolio
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
            A growing range of pharmaceutical and healthcare products across
            multiple therapeutic categories.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, i) => {
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={`/products?category=${category.slug}`}
                  className="group block bg-white rounded-2xl border border-border-light overflow-hidden hover:shadow-lg hover:border-teal/20 transition-all"
                >
                  {/* Image Area */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-teal/5 to-green/5 relative overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-semibold text-base text-navy group-hover:text-teal transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-xs text-text-muted bg-background px-2 py-1 rounded-md">
                        {category.productCount} Products
                      </span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-teal group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
