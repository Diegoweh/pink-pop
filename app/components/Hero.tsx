"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-[color:var(--background)] pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[11px] font-medium tracking-[0.4em] uppercase text-[color:var(--accent)] mb-8"
          >
            Selección premium — MMXXVI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.02em] text-[color:var(--foreground)] mb-10"
          >
            Belleza.
            <br />
            Calidad <span className="italic font-extralight">real</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-lg text-base leading-relaxed text-[color:var(--muted)] mb-12"
          >
            Seleccionamos maquillaje de alta calidad para quienes buscan buen rendimiento,
            acabados elegantes y productos confiables en cada compra. Pink Pop vende
            piezas destacadas de marcas reconocidas, listas para elevar tu rutina.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center px-10 py-4 text-xs font-semibold tracking-[0.25em] uppercase text-white bg-[color:var(--foreground)] hover:bg-[color:var(--accent)] transition-colors duration-300"
            >
              Explorar la colección
            </a>
            <a
              href="#standards"
              className="inline-flex items-center justify-center px-10 py-4 text-xs font-semibold tracking-[0.25em] uppercase text-[color:var(--foreground)] border border-[color:var(--border-strong)] hover:border-[color:var(--foreground)] transition-colors duration-300"
            >
              Por qué elegirnos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg border-t border-[color:var(--border)] pt-8"
          >
            {[
              { value: "120", label: "Productos" },
              { value: "32", label: "Marcas destacadas" },
              { value: "04", label: "Categorías" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-light tracking-tight text-[color:var(--foreground)]">
                  {stat.value}
                </p>
                <p className="text-[10px] mt-2 tracking-[0.3em] uppercase text-[color:var(--subtle)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full aspect-[3/4] bg-[color:var(--accent-soft)]">
            <div className="absolute inset-8 border border-[color:var(--border-strong)]" />
            <div className="absolute inset-0 flex items-center justify-center p-16">
              <Image
                src="/p-logo.png"
                alt="Monograma de Pink Pop"
                width={220}
                height={220}
                className="w-48 h-auto opacity-80"
                priority
              />
            </div>
            <p className="absolute bottom-6 left-6 text-[10px] font-medium tracking-[0.3em] uppercase text-[color:var(--muted)]">
              Pink Pop Tienda de Belleza
            </p>
            <p className="absolute bottom-6 right-6 text-[10px] font-medium tracking-[0.3em] uppercase text-[color:var(--muted)]">
              Est. MMXX
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
