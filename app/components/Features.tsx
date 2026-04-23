"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    number: "01",
    title: "Selección de calidad",
    desc: "Elegimos productos por su desempeño, textura, pigmentación y acabado para ofrecer opciones que sí cumplen lo que prometen.",
  },
  {
    number: "02",
    title: "Marcas reconocidas",
    desc: "Trabajamos con referencias valoradas por su calidad y presentación, para que encuentres piezas confiables en un solo lugar.",
  },
  {
    number: "03",
    title: "Compra con criterio",
    desc: "La tienda está organizada para ayudarte a comparar, descubrir y comprar maquillaje premium con más claridad y menos ruido.",
  },
  {
    number: "04",
    title: "Experiencia premium",
    desc: "Cuidamos la presentación, la selección y el detalle para que comprar productos de belleza de alta calidad sea simple y agradable.",
  },
];

function FeatureCard({
  number,
  title,
  desc,
  index,
}: {
  number: string;
  title: string;
  desc: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group border-t border-[color:var(--border)] pt-8"
    >
      <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[color:var(--accent)] mb-6">
        {number}
      </p>
      <h3 className="text-xl font-light tracking-tight text-[color:var(--foreground)] mb-4">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[color:var(--muted)]">
        {desc}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="standards" className="py-32 px-8 lg:px-12 bg-[color:var(--background)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-[color:var(--accent)] mb-6">
            Nuestra propuesta
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-[color:var(--foreground)]">
            Una tienda enfocada en vender calidad.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
