"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(145deg, #fff0f5 0%, #fce4ec 50%, #f8bbd0 100%)" }}
    >
      {/* Floating blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-16 w-64 h-64 rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, #f48fb1, #e91e63)" }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 left-10 w-48 h-48 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #f8bbd0, #f06292)" }}
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full blur-2xl opacity-20"
        style={{ background: "radial-gradient(circle, #fce4ec, #ad1457)" }}
      />

      {/* Decorative petals */}
      {["🌸", "🌷", "💐", "🌺", "✨"].map((petal, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl select-none pointer-events-none"
          style={{
            top: `${[15, 70, 30, 80, 55][i]}%`,
            left: `${[8, 85, 90, 5, 50][i]}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        >
          {petal}
        </motion.span>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: "#ad1457", fontFamily: "var(--font-lato)" }}
        >
          Nueva Colección 2026 ✨
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-6xl md:text-8xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)", color: "#880e4f" }}
        >
          Belleza que{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #e91e63, #f48fb1, #ad1457)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Florece
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: "#9c4062", fontFamily: "var(--font-lato)" }}
        >
          Cosméticos de lujo creados con extractos botánicos y mucho amor. Revela tu resplandor natural
          con nuestra colección rosa — pura, suave e irresistiblemente hermosa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#products"
            whileHover={{ scale: 1.06, boxShadow: "0 8px 30px rgba(194,24,91,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full text-white font-semibold text-base shadow-lg"
            style={{
              background: "linear-gradient(135deg, #e91e63, #c2185b)",
              fontFamily: "var(--font-lato)",
            }}
          >
            Ver Colección
          </motion.a>
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full font-semibold text-base border-2"
            style={{
              color: "#c2185b",
              borderColor: "#f48fb1",
              fontFamily: "var(--font-lato)",
              background: "rgba(255,255,255,0.5)",
            }}
          >
            Ver Galería
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto"
        >
          {[
            { value: "50k+", label: "Clientas Felices" },
            { value: "120+", label: "Productos" },
            { value: "4.9★", label: "Calificación" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold" style={{ color: "#c2185b", fontFamily: "var(--font-playfair)" }}>
                {stat.value}
              </p>
              <p className="text-xs mt-1" style={{ color: "#9c4062", fontFamily: "var(--font-lato)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z"
            fill="#fff5f7"
          />
        </svg>
      </div>
    </section>
  );
}
