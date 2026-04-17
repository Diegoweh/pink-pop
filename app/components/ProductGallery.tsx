"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
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
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group rounded-3xl overflow-hidden cursor-pointer"
      style={{
        boxShadow: hovered
          ? "0 20px 50px rgba(194,24,91,0.2)"
          : "0 4px 20px rgba(194,24,91,0.08)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Product image */}
      <div className="relative h-56 overflow-hidden bg-pink-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Add to cart overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => addItem(product, 1)}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold whitespace-nowrap"
            style={{
              background: "rgba(136,14,79,0.9)",
              fontFamily: "var(--font-lato)",
              backdropFilter: "blur(4px)",
            }}
          >
            <ShoppingBag size={14} />
            Agregar al Carrito
          </button>
        </motion.div>
      </div>

      {/* Product info */}
      <div
        className="p-5"
        style={{ background: "linear-gradient(135deg, #fff5f7, #fce4ec)" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-0.5"
          style={{ color: "#f06292", fontFamily: "var(--font-lato)" }}
        >
          {product.brand}
        </p>
        <p
          className="text-xs font-medium uppercase tracking-widest mb-2"
          style={{ color: "#ad1457", fontFamily: "var(--font-lato)", opacity: 0.7 }}
        >
          {categoryLabel}
        </p>
        <h3
          className="font-bold text-base mb-1 leading-snug"
          style={{ fontFamily: "var(--font-playfair)", color: "#880e4f" }}
        >
          {product.name}
        </h3>
        <p
          className="text-xs mb-3 leading-relaxed line-clamp-2"
          style={{ color: "#9c4062", fontFamily: "var(--font-lato)" }}
        >
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "#c2185b" }}
          >
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product, 1)}
            className="rounded-full border border-pink-300 px-3 py-1 text-xs font-semibold text-pink-700 transition hover:bg-pink-600 hover:text-white hover:border-pink-600"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            + Carrito
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
    <section
      id="gallery"
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg, #fff5f7 0%, #fce4ec 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          id="products"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#ad1457", fontFamily: "var(--font-lato)" }}
          >
            Nuestra Colección
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#880e4f" }}
          >
            Galería de Productos
          </h2>
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "#9c4062", fontFamily: "var(--font-lato)" }}
          >
            Cada producto es un pequeño frasco de felicidad — creado para hacerte sentir hermosa, por dentro y por fuera.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTER_CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "var(--font-lato)",
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, #e91e63, #c2185b)"
                    : "rgba(255,255,255,0.7)",
                color: activeCategory === cat ? "#fff" : "#9c4062",
                border:
                  activeCategory === cat ? "2px solid transparent" : "2px solid #f8bbd0",
                boxShadow:
                  activeCategory === cat ? "0 4px 16px rgba(194,24,91,0.3)" : "none",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
