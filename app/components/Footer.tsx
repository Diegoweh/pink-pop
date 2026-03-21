"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const footerLinks = {
  Tienda: ["Skincare", "Labios", "Ojos", "Rostro", "Sets de Regalo"],
  Empresa: ["Sobre Nosotros", "Empleos", "Prensa", "Blog"],
  Soporte: ["Preguntas Frecuentes", "Contacto", "Devoluciones", "Rastrear Pedido"],
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      id="contact"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #fce4ec 0%, #f8bbd0 100%)" }}
    >
      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #e91e63, #ad1457)" }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Únete a la Familia Pink Pop 🌸
        </h2>
        <p className="text-pink-100 mb-8 max-w-md mx-auto" style={{ fontFamily: "var(--font-lato)" }}>
          Suscríbete para recibir ofertas exclusivas, consejos de belleza y acceso anticipado a los nuevos lanzamientos.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto justify-center">
          <input
            type="email"
            placeholder="tu@correo.com"
            className="flex-1 px-5 py-3 rounded-full text-sm outline-none border-2 border-transparent focus:border-pink-200"
            style={{
              background: "rgba(255,255,255,0.95)",
              color: "#880e4f",
              fontFamily: "var(--font-lato)",
            }}
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 6px 24px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap"
            style={{
              background: "#fff",
              color: "#c2185b",
              fontFamily: "var(--font-lato)",
            }}
          >
            Suscribirme ✨
          </motion.button>
        </div>
      </motion.div>

      {/* Footer links */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🌸</span>
            <span
              className="text-xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#880e4f" }}
            >
              Pink Pop
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#9c4062", fontFamily: "var(--font-lato)" }}>
            Belleza creada con amor, ciencia y mucha magia rosa.
          </p>
          <div className="flex gap-3 mt-5">
            {["Instagram", "TikTok", "Pinterest"].map((social) => (
              <motion.button
                key={social}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ background: "linear-gradient(135deg, #f48fb1, #c2185b)" }}
                title={social}
              >
                {social[0]}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        {Object.entries(footerLinks).map(([category, links], ci) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + ci * 0.1 }}
          >
            <h4
              className="font-bold text-sm mb-4 uppercase tracking-wide"
              style={{ color: "#880e4f", fontFamily: "var(--font-lato)" }}
            >
              {category}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4, color: "#c2185b" }}
                    className="text-sm transition-colors"
                    style={{ color: "#9c4062", fontFamily: "var(--font-lato)" }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-6 px-6 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-6xl mx-auto"
        style={{ borderColor: "#f8bbd0" }}
      >
        <p className="text-xs" style={{ color: "#9c4062", fontFamily: "var(--font-lato)" }}>
          © 2026 Pink Pop Cosmetics. Todos los derechos reservados.
        </p>
        <p className="text-xs" style={{ color: "#c2185b", fontFamily: "var(--font-lato)" }}>
          Hecho con 💕 para amantes de la belleza en todo el mundo
        </p>
      </div>
    </footer>
  );
}
