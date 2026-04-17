"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Flower2 } from "lucide-react";

const links = ["Nosotros", "Productos", "Galería", "Opiniones", "Contacto"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 60], ["rgba(255,245,247,0)", "rgba(255,245,247,0.95)"]);
  const shadow = useTransform(scrollY, [0, 60], ["0 0 0 rgba(0,0,0,0)", "0 2px 20px rgba(200,100,130,0.12)"]);

  return (
    <motion.header
      style={{ backgroundColor: bg, boxShadow: shadow }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <Flower2 size={24} style={{ color: "#e91e63" }} strokeWidth={1.5} />
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "#c2185b" }}
          >
            Pink Pop
          </span>
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="text-sm font-medium tracking-wide transition-colors duration-200"
              style={{ color: "#9c4062", fontFamily: "var(--font-lato)" }}
              whileHover={{ color: "#c2185b", y: -1 }}
            >
              {link}
            </motion.a>
          ))}
          <motion.a
            href="#products"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #f48fb1, #c2185b)", fontFamily: "var(--font-lato)" }}
          >
            Comprar
          </motion.a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
            className="w-6 h-0.5 rounded-full block"
            style={{ background: "#c2185b" }}
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="w-6 h-0.5 rounded-full block"
            style={{ background: "#c2185b" }}
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
            className="w-6 h-0.5 rounded-full block"
            style={{ background: "#c2185b" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden"
        style={{ background: "rgba(255,245,247,0.97)" }}
      >
        <nav className="flex flex-col px-6 pb-6 gap-4 pt-2">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-base font-medium py-1 border-b"
              style={{ color: "#9c4062", borderColor: "#fce4ec", fontFamily: "var(--font-lato)" }}
            >
              {link}
            </a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
