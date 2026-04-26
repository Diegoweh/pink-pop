"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProductCard, { CATEGORY_LABELS } from "@/app/components/ProductCard";
import type { GroupedProduct } from "@/lib/grouped-products";

export default function CollectionGallery({ products }: { products: GroupedProduct[] }) {
  const [activeCategory, setActiveCategory] = useState("Todo");

  const categories = [
    "Todo",
    ...Array.from(new Set(products.map((p) => p.categoria.trim()))),
  ];

  const filtered =
    activeCategory === "Todo"
      ? products
      : products.filter((p) => p.categoria.trim() === activeCategory);

  return (
    <>
      <div className="flex flex-wrap items-center gap-8 mb-16 border-b border-[color:var(--border)] pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="relative text-[11px] font-semibold tracking-[0.3em] uppercase transition-colors duration-200"
            style={{
              color:
                activeCategory === cat ? "var(--foreground)" : "var(--subtle)",
            }}
          >
            {cat === "Todo" ? "Todo" : (CATEGORY_LABELS[cat.trim()] ?? cat)}
            {activeCategory === cat && (
              <motion.span
                layoutId="cat-underline"
                className="absolute -bottom-[25px] left-0 right-0 h-px bg-[color:var(--accent)]"
              />
            )}
          </button>
        ))}
        <span className="ml-auto text-[10px] tracking-[0.2em] uppercase text-[color:var(--subtle)]">
          {filtered.length} productos
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
