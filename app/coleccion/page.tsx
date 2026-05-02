import { getGroupedProducts } from "@/lib/grouped-products";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CollectionGallery from "./CollectionGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colección completa de maquillaje y cosméticos",
  description:
    "Explora toda nuestra colección de cosméticos premium: labiales, rubores, sombras, bases y más, de marcas reconocidas. Envíos en México.",
  alternates: { canonical: "/coleccion" },
  openGraph: {
    title: "Colección completa | Pink Pop",
    description:
      "Catálogo completo de maquillaje premium seleccionado por Pink Pop.",
    url: "/coleccion",
    type: "website",
  },
};

export default function ColeccionPage() {
  const products = getGroupedProducts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-32 px-8 lg:px-12 bg-[color:var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-[color:var(--accent)] mb-6">
              Catálogo completo
            </p>
            <h1 className="text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-[color:var(--foreground)]">
              Colección
            </h1>
          </div>

          <CollectionGallery products={products} />
        </div>
      </main>
      <Footer />
    </>
  );
}
