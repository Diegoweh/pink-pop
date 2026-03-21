"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Sophia Martínez",
    handle: "@sophiaglows",
    avatar: "SM",
    color: "#f48fb1",
    review:
      "¡El Sérum Rosa Resplandor transformó completamente mi piel! Nunca me había sentido tan radiante y segura. Pink Pop es mi marca para siempre. 🌹",
    product: "Sérum Rosa Resplandor",
    stars: 5,
  },
  {
    name: "Emma Chen",
    handle: "@emmabelle",
    avatar: "EC",
    color: "#f06292",
    review:
      "El Set de Labios Velvet es absolutamente increíble. La fórmula es tan cómoda y los colores tienen una pigmentación brutal. ¡Lo amo, lo amo, lo amo! 💋",
    product: "Set de Labios Velvet",
    stars: 5,
  },
  {
    name: "Isabelle Dumont",
    handle: "@isabellebeauty",
    avatar: "ID",
    color: "#e91e63",
    review:
      "Por fin una base que combina con mi tono de piel y no se siente pesada. Glow Melocotón es todo lo que siempre quise en una base. ¡Una maravilla! 🍑",
    product: "Base Glow Melocotón",
    stars: 5,
  },
  {
    name: "Luna Park",
    handle: "@lunashine",
    avatar: "LP",
    color: "#c2185b",
    review:
      "La Paleta Bloom Blush me llena de alegría cada mañana. Los tonos son preciosos y la pigmentación es impresionante. ¡Totalmente vale la pena! 🌺",
    product: "Paleta Bloom Blush",
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 px-6 overflow-hidden"
      style={{ background: "#fff5f7" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#ad1457", fontFamily: "var(--font-lato)" }}
          >
            Opiniones
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "#880e4f" }}
          >
            Amado por Miles 💕
          </h2>
        </motion.div>

        {/* Main testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl p-8 md:p-12 mb-8 text-center"
          style={{
            background: "linear-gradient(135deg, #fce4ec, #fff0f5)",
            border: "2px solid #f8bbd0",
          }}
        >
          {/* Quote mark */}
          <span
            className="absolute top-6 left-8 text-7xl leading-none opacity-20 select-none"
            style={{ fontFamily: "var(--font-playfair)", color: "#c2185b" }}
          >
            "
          </span>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Avatar */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
              style={{ background: testimonials[active].color, fontFamily: "var(--font-lato)" }}
            >
              {testimonials[active].avatar}
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  style={{ color: "#f06292" }}
                >
                  ★
                </motion.span>
              ))}
            </div>

            {/* Review */}
            <p
              className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-6 italic"
              style={{ color: "#6d2a3e", fontFamily: "var(--font-lato)" }}
            >
              {testimonials[active].review}
            </p>

            {/* Name */}
            <p className="font-bold text-base" style={{ color: "#880e4f", fontFamily: "var(--font-playfair)" }}>
              {testimonials[active].name}
            </p>
            <p className="text-sm" style={{ color: "#f06292", fontFamily: "var(--font-lato)" }}>
              {testimonials[active].handle} · {testimonials[active].product}
            </p>
          </motion.div>
        </motion.div>

        {/* Dots / selector */}
        <div className="flex justify-center gap-3">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full transition-all duration-300"
              style={{
                width: active === i ? 32 : 12,
                height: 12,
                background: active === i ? "linear-gradient(135deg, #e91e63, #c2185b)" : "#f8bbd0",
              }}
              aria-label={`Ver opinión de ${t.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
