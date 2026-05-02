import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Features from "./components/Features";
import ProductGallery from "./components/ProductGallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { getGroupedProducts } from "@/lib/grouped-products";

export const metadata: Metadata = {
  title: "Pink Pop — Maquillaje y cosméticos premium en México",
  description:
    "Tienda de cosméticos premium en México. Maquillaje de marcas reconocidas como Charlotte Tilbury, Dior, NARS, Fenty Beauty y más. Envíos a todo el país.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const products = getGroupedProducts();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Pink Pop",
    description:
      "Tienda de cosméticos premium en México. Maquillaje seleccionado por rendimiento, acabado y confianza.",
    url: "https://www.pinkpop.com.mx",
    logo: "https://www.pinkpop.com.mx/p-logo.png",
    image: "https://www.pinkpop.com.mx/p-logo.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MX",
    },
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <Features />
        <ProductGallery products={products} />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
