"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🌿",
    title: "100% Natural",
    desc: "Formulado con extractos botánicos puros, libre de parabenos, sulfatos y químicos agresivos.",
  },
  {
    icon: "🐰",
    title: "Libre de Crueldad",
    desc: "Nunca testado en animales. Nuestro ritual de belleza cuida a cada ser vivo del planeta.",
  },
  {
    icon: "♻️",
    title: "Empaque Eco",
    desc: "Empaques reciclables y biodegradables para que tu rutina de belleza le devuelva algo a la tierra.",
  },
  {
    icon: "💎",
    title: "Testado por Dermatólogos",
    desc: "Probado y aprobado clínicamente para todo tipo de piel, incluida la piel sensible y reactiva.",
  },
];

function FeatureCard({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(194,24,91,0.12)" }}
      className="flex flex-col items-center text-center p-8 rounded-3xl border"
      style={{
        background: "linear-gradient(135deg, #fff0f5, #fce4ec)",
        borderColor: "#f8bbd0",
      }}
    >
      <motion.span
        className="text-5xl mb-4"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.span>
      <h3
        className="text-lg font-bold mb-2"
        style={{ fontFamily: "var(--font-playfair)", color: "#880e4f" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#9c4062", fontFamily: "var(--font-lato)" }}>
        {desc}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6" style={{ background: "#fff5f7" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#ad1457", fontFamily: "var(--font-lato)" }}
          >
            Por qué Pink Pop
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "#880e4f" }}
          >
            Hecho con Amor y Ciencia
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
