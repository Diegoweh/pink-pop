"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const footerLinks = {
  Colección: ["Rostro", "Labios", "Paletas", "Ediciones"],
  Tienda: ["Nosotros", "Marcas", "Novedades", "Opiniones"],
  Cliente: ["Consultas", "Servicios", "Envíos", "Devoluciones"],
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer id="contact" ref={ref} className="bg-[color:var(--surface)] border-t border-[color:var(--border)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-8 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start border-b border-[color:var(--border)]"
      >
        <div>
          <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-[color:var(--accent)] mb-6">
            Mantente al tanto
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-[color:var(--foreground)] max-w-lg">
            Recibe novedades, productos destacados y selecciones especiales de maquillaje de alta calidad.
          </h2>
        </div>
        <div className="w-full max-w-md">
          <label className="block text-[11px] font-medium tracking-[0.3em] uppercase text-[color:var(--muted)] mb-4">
            Correo electrónico
          </label>
          <div className="flex border-b border-[color:var(--foreground)] pb-3">
            <input
              type="email"
              placeholder="name@domain.com"
              className="flex-1 bg-transparent text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--subtle)] outline-none"
            />
            <button className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[color:var(--foreground)] hover:text-[color:var(--accent)] transition-colors">
              Suscribirse
            </button>
          </div>
          <p className="mt-4 text-xs text-[color:var(--subtle)]">
            La suscripción es privada y puede cancelarse en cualquier momento.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20 grid grid-cols-2 md:grid-cols-4 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-2 md:col-span-1"
        >
          <div className="flex items-center mb-6">
            <Image
              src="/p-logo.png"
              alt="Pink Pop"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
            <span className="ml-3 text-sm font-medium tracking-[0.3em] uppercase text-[color:var(--foreground)]">
              Pink Pop
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[color:var(--muted)] max-w-xs">
            Tienda especializada en maquillaje de alta calidad, con una selección cuidada
            para comprar mejor y elegir con confianza.
          </p>
        </motion.div>

        {Object.entries(footerLinks).map(([category, links], ci) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 + ci * 0.08 }}
          >
            <h4 className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[color:var(--foreground)] mb-6">
              {category}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[color:var(--subtle)]">
            © MMXXVI Pink Pop — Todos los derechos reservados
          </p>
          <div className="flex gap-8">
            {["Instagram", "Diario", "Privacidad"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] tracking-[0.2em] uppercase text-[color:var(--subtle)] hover:text-[color:var(--foreground)] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
