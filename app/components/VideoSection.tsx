"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="video"
      ref={ref}
      className="py-32 px-8 lg:px-12 bg-[color:var(--background)]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-[color:var(--accent)] mb-6">
            En movimiento
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-[color:var(--foreground)]">
            La esencia de Pink Pop, en imagen.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative w-full aspect-video overflow-hidden bg-[color:var(--accent-soft)]"
        >
          <video
            src="/video/pink-pop.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-6 border border-white/20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
