"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { GroupedProduct } from "@/lib/grouped-products";

export function getDisplayPrice(product: GroupedProduct): string {
  const prices = product.variants.map((v) => v.precio);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max ? `$${min.toFixed(2)}` : `Desde $${min.toFixed(2)}`;
}

export const CATEGORY_LABELS: Record<string, string> = {
  LABIALES: "Labios",
  BASE: "Bases",
  RUBOR: "Rubor",
  POLVO: "Polvo",
  "SOMBRAS ": "Ojos",
  SOMBRAS: "Ojos",
  CORRECTOR: "Corrector",
  DELINEADOR: "Delineador",
  CEJAS: "Cejas",
  MASCARA: "Máscara",
  "SPRA FIJADOR": "Fijador",
  "SPRAY FIJADOR": "Fijador",
  AMUSE: "Amuse",
};

export default function ProductCard({
  product,
  index,
}: {
  product: GroupedProduct;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  const displayCategory = CATEGORY_LABELS[product.categoria] ?? product.categoria;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group flex flex-col"
    >
      <Link href={`/productos/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--accent-soft)]">
          {product.defaultImage ? (
            <Image
              src={product.defaultImage}
              alt={product.producto}
              fill
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-light text-[color:var(--subtle)]">
                {product.producto[0]}
              </span>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 bottom-0 p-4"
          >
            <div className="w-full py-3 text-center text-[11px] font-semibold tracking-[0.25em] uppercase text-white bg-[color:var(--foreground)]">
              Ver producto
            </div>
          </motion.div>
        </div>

        <div className="pt-6 pb-2">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[color:var(--subtle)] mb-2">
            {product.marca} · {displayCategory}
          </p>
          <h3 className="text-base font-normal tracking-tight text-[color:var(--foreground)] leading-snug mb-3">
            {product.producto}
          </h3>
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-[color:var(--foreground)]">
              {getDisplayPrice(product)}
            </span>
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[color:var(--muted)]">
              {product.variants.length > 1 ? `${product.variants.length} tonos` : "—"}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
