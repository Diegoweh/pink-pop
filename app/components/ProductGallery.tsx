"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import type { GroupedProduct } from "@/lib/grouped-products";

const PREVIEW_COUNT = 8;

export default function ProductGallery({ products }: { products: GroupedProduct[] }) {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  const featured = products
    .filter((p) => p.defaultImage)
    .slice(0, PREVIEW_COUNT);

  return (
    <section id="products" className="py-32 px-8 lg:px-12 bg-[color:var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20"
        >
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-[color:var(--accent)] mb-6">
              Selección destacada
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-[color:var(--foreground)]">
              Maquillaje premium para comprar con confianza.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[color:var(--muted)]">
            Una muestra de nuestra colección completa — productos de alta calidad
            seleccionados por su acabado, presencia y valor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 mb-20">
          {featured.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/coleccion"
            className="px-12 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--foreground)] border border-[color:var(--foreground)] hover:bg-[color:var(--foreground)] hover:text-white transition-colors duration-300"
          >
            Ver colección completa — {products.length} productos
          </Link>
        </div>
      </div>
    </section>
  );
}
