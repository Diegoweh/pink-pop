"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = ["Todo", "Skincare", "Labios", "Ojos", "Rostro"];

const products = [
  {
    id: 1,
    name: "Sérum Rosa Resplandor",
    category: "Skincare",
    price: "$48",
    badge: "Más Vendido",
    gradient: "linear-gradient(135deg, #f8bbd0, #e91e63)",
    emoji: "🌹",
    desc: "Hidratación 24h con extracto de rosa mosqueta",
  },
  {
    id: 2,
    name: "Set de Labios Velvet",
    category: "Labios",
    price: "$36",
    badge: "Nuevo",
    gradient: "linear-gradient(135deg, #f48fb1, #ad1457)",
    emoji: "💋",
    desc: "Acabado mate de larga duración, 12 tonos",
  },
  {
    id: 3,
    name: "Hidratante Perla",
    category: "Skincare",
    price: "$55",
    badge: null,
    gradient: "linear-gradient(135deg, #fce4ec, #f48fb1)",
    emoji: "🫧",
    desc: "Extracto de perla para una piel luminosa y radiante",
  },
  {
    id: 4,
    name: "Paleta Bloom Blush",
    category: "Rostro",
    price: "$42",
    badge: "Nuevo",
    gradient: "linear-gradient(135deg, #ffcdd2, #e91e63)",
    emoji: "🌺",
    desc: "6 tonos botánicos de rubor para cada look",
  },
  {
    id: 5,
    name: "Sombras Silk Quad",
    category: "Ojos",
    price: "$39",
    badge: null,
    gradient: "linear-gradient(135deg, #f8bbd0, #c2185b)",
    emoji: "✨",
    desc: "Pigmento sedoso que dura todo el día y la noche",
  },
  {
    id: 6,
    name: "Base Glow Melocotón",
    category: "Rostro",
    price: "$52",
    badge: "Más Vendido",
    gradient: "linear-gradient(135deg, #ffccbc, #f06292)",
    emoji: "🍑",
    desc: "Cobertura buildable con protección SPF 30",
  },
  {
    id: 7,
    name: "Gloss de Cereza",
    category: "Labios",
    price: "$22",
    badge: null,
    gradient: "linear-gradient(135deg, #ffcdd2, #b71c1c)",
    emoji: "🍒",
    desc: "Brillo jugoso con complejo de péptidos voluminizadores",
  },
  {
    id: 8,
    name: "Máscara Amplificadora",
    category: "Ojos",
    price: "$28",
    badge: "Nuevo",
    gradient: "linear-gradient(135deg, #f8bbd0, #880e4f)",
    emoji: "🦋",
    desc: "Fórmula voluminizadora para pestañas dramáticas",
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

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
      {/* Product visual */}
      <div
        className="relative h-56 flex items-center justify-center overflow-hidden"
        style={{ background: product.gradient }}
      >
        {product.badge && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ background: "rgba(136,14,79,0.85)", fontFamily: "var(--font-lato)" }}
          >
            {product.badge}
          </motion.span>
        )}

        <motion.span
          animate={{ scale: hovered ? 1.3 : 1, rotate: hovered ? 10 : 0 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="text-8xl drop-shadow-lg select-none"
        >
          {product.emoji}
        </motion.span>

        {/* Add to cart overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <button
            className="px-6 py-2 rounded-full text-white text-sm font-semibold whitespace-nowrap"
            style={{
              background: "rgba(136,14,79,0.9)",
              fontFamily: "var(--font-lato)",
              backdropFilter: "blur(4px)",
            }}
          >
            Agregar al Carrito 🛒
          </button>
        </motion.div>
      </div>

      {/* Product info */}
      <div
        className="p-5"
        style={{ background: "linear-gradient(135deg, #fff5f7, #fce4ec)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#f06292", fontFamily: "var(--font-lato)" }}>
          {product.category}
        </p>
        <h3
          className="font-bold text-base mb-1"
          style={{ fontFamily: "var(--font-playfair)", color: "#880e4f" }}
        >
          {product.name}
        </h3>
        <p className="text-xs mb-3 leading-relaxed" style={{ color: "#9c4062", fontFamily: "var(--font-lato)" }}>
          {product.desc}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#c2185b" }}>
            {product.price}
          </span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-xs" style={{ color: "#f06292" }}>★</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState("Todo");
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  const filtered = activeCategory === "Todo"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg, #fff5f7 0%, #fce4ec 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
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
          <p className="max-w-xl mx-auto text-base" style={{ color: "#9c4062", fontFamily: "var(--font-lato)" }}>
            Cada producto es un pequeño frasco de felicidad — creado para hacerte sentir hermosa, por dentro y por fuera.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "var(--font-lato)",
                background: activeCategory === cat
                  ? "linear-gradient(135deg, #e91e63, #c2185b)"
                  : "rgba(255,255,255,0.7)",
                color: activeCategory === cat ? "#fff" : "#9c4062",
                border: activeCategory === cat ? "2px solid transparent" : "2px solid #f8bbd0",
                boxShadow: activeCategory === cat ? "0 4px 16px rgba(194,24,91,0.3)" : "none",
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
