"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Sophia Martínez",
    role: "Editora general, París",
    review:
      "Me gustó que la tienda no solo se ve bien: también reúne productos realmente buenos. Se nota una curaduría enfocada en calidad y no en llenar catálogo.",
    product: "Silky Blush — Rose Abricot",
  },
  {
    name: "Emma Chen",
    role: "Directora creativa",
    review:
      "La selección se siente premium. Es fácil encontrar productos con buen color, buen acabado y marcas que transmiten confianza.",
    product: "Labial Velvet Matte",
  },
  {
    name: "Isabelle Dumont",
    role: "Maquilladora editorial",
    review:
      "Valoro mucho comprar en un sitio donde la selección ya filtra por calidad. Eso ahorra tiempo y da más seguridad al elegir.",
    product: "Base profesional",
  },
  {
    name: "Luna Park",
    role: "Directora de belleza",
    review:
      "Pink Pop se siente como una tienda que entiende bien el producto: vende maquillaje atractivo, bien presentado y con nivel.",
    product: "Paleta Queen Iconic",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-32 px-8 lg:px-12 bg-[color:var(--background)]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-[color:var(--accent)] mb-6">
            Lo que opinan
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-[color:var(--foreground)] max-w-2xl">
            Una tienda elegida por quienes valoran la calidad.
          </h2>
        </motion.div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-t border-[color:var(--border)] pt-16"
        >
          <p className="text-2xl md:text-3xl font-light leading-[1.4] tracking-tight text-[color:var(--foreground)] max-w-3xl mb-12">
            &ldquo;{t.review}&rdquo;
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm font-medium text-[color:var(--foreground)]">
                {t.name}
              </p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[color:var(--subtle)] mt-1">
                {t.role} — {t.product}
              </p>
            </div>

            <div className="flex items-center gap-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Ver testimonio ${i + 1}`}
                  className="text-[11px] font-medium tracking-[0.3em] transition-colors"
                  style={{
                    color:
                      active === i
                        ? "var(--foreground)"
                        : "var(--subtle)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
