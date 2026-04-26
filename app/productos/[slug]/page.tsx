import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getProductBySlug, getGroupedProducts } from '@/lib/grouped-products';
import VariantSelector from './VariantSelector';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return getGroupedProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.producto} — ${product.marca} | Pink Pop`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-32 px-8 lg:px-12 bg-[color:var(--background)]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[color:var(--subtle)] mb-12">
            <a href="/" className="hover:text-[color:var(--foreground)] transition-colors">Inicio</a>
            {' '}·{' '}
            <a href="/coleccion" className="hover:text-[color:var(--foreground)] transition-colors">Productos</a>
            {' '}·{' '}
            <span className="text-[color:var(--foreground)]">{product.producto}</span>
          </p>

          <Suspense fallback={null}>
            <VariantSelector product={product} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
