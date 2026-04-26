"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "Colección", href: "/coleccion" },
  { label: "Nosotros", href: "/#about" },
  { label: "Calidad", href: "/#standards" },
  { label: "Opiniones", href: "/#testimonials" },
  { label: "Contacto", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(250,250,248,0)", "rgba(250,250,248,0.92)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(230,228,224,0)", "rgba(230,228,224,1)"]);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderBottomColor: border }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center py-4">
          <Image
            src="/p-logo.png"
            alt="Pink Pop"
            width={40}
            height={40}
            priority
            className="h-8 w-auto"
          />
          <span className="ml-3 text-sm font-medium tracking-[0.3em] uppercase text-[color:var(--foreground)]">
            Pink Pop
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-[0.2em] uppercase text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/coleccion"
            className="px-6 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-white bg-[color:var(--foreground)] hover:bg-[color:var(--accent)] transition-colors duration-300"
          >
            Comprar
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir o cerrar menú"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
            className="w-6 h-px block bg-[color:var(--foreground)]"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="w-6 h-px block bg-[color:var(--foreground)]"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
            className="w-6 h-px block bg-[color:var(--foreground)]"
          />
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden bg-[color:var(--surface)] border-t border-[color:var(--border)]"
      >
        <nav className="flex flex-col px-8 py-8 gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-[0.2em] uppercase text-[color:var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
