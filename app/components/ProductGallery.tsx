"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { products, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

const CATEGORY_LABELS: Record<string, string> = {
  blush: "Rostro",
  foundation: "Rostro",
  cushion: "Rostro",
  palette: "Rostro",
  lipstick: "Labios",
};

const FILTER_CATEGORIES = ["Todo", "Rostro", "Labios"];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const categoryLabel = CATEGORY_LABELS[product.category] ?? product.category;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--accent-soft)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-x-0 bottom-0 p-4"
        >
          <button
            onClick={() => addItem(product, 1)}
            className="w-full py-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-white bg-[color:var(--foreground)] hover:bg-[color:var(--accent)] transition-colors duration-300"
          >
            Añadir al carrito
          </button>
        </motion.div>
      </div>

      <div className="pt-6 pb-2">
        <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[color:var(--subtle)] mb-2">
          {product.brand} · {categoryLabel}
        </p>
        <h3 className="text-base font-normal tracking-tight text-[color:var(--foreground)] leading-snug mb-3">
          {product.name}
        </h3>
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-medium text-[color:var(--foreground)]">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product, 1)}
            className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors duration-200"
          >
            Añadir —
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState("Todo");
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  const filtered =
    activeCategory === "Todo"
      ? products
      : products.filter((p) => CATEGORY_LABELS[p.category] === activeCategory);

  return (
    <section id="gallery" className="py-32 px-8 lg:px-12 bg-[color:var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20"
          id="products"
        >
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-[color:var(--accent)] mb-6">
              Productos destacados
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-[color:var(--foreground)]">
              Maquillaje premium para comprar con confianza.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[color:var(--muted)]">
            Encuentra una selección cuidada de productos de belleza de alta calidad,
            elegidos para ofrecer buen acabado, presencia y valor en cada compra.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center gap-8 mb-16 border-b border-[color:var(--border)] pb-6">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative text-[11px] font-semibold tracking-[0.3em] uppercase transition-colors duration-200"
              style={{
                color:
                  activeCategory === cat
                    ? "var(--foreground)"
                    : "var(--subtle)",
              }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span
                  layoutId="cat-underline"
                  className="absolute -bottom-[25px] left-0 right-0 h-px bg-[color:var(--accent)]"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
