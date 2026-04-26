import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGallery from "./components/ProductGallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { getGroupedProducts } from "@/lib/grouped-products";

export default function Home() {
  const products = getGroupedProducts();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductGallery products={products} />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
