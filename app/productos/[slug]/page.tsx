import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getProductBySlug, getGroupedProducts } from '@/lib/grouped-products';
import VariantSelector from './VariantSelector';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

const SITE_URL = 'https://www.pinkpop.com.mx';

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

  const title = `${product.producto} — ${product.marca}`;
  const description = `${product.producto} de ${product.marca}. ${product.categoria} premium disponible en ${product.variants.length} ${product.variants.length === 1 ? 'tono' : 'tonos'}. Compra en Pink Pop con envíos en México.`;
  const image = product.defaultImage
    ? `${SITE_URL}${product.defaultImage}`
    : `${SITE_URL}/p-logo.png`;
  const url = `/productos/${product.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      title: `${title} | Pink Pop`,
      description,
      url,
      images: [{ url: image, alt: `${product.producto} de ${product.marca}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Pink Pop`,
      description,
      images: [image],
    },
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

  const prices = product.variants.map((v) => v.precio);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const inStock = product.variants.some((v) => v.stock > 0);
  const image = product.defaultImage
    ? `${SITE_URL}${product.defaultImage}`
    : `${SITE_URL}/p-logo.png`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.producto,
    description: `${product.producto} de ${product.marca}. ${product.categoria} premium.`,
    brand: { '@type': 'Brand', name: product.marca },
    category: product.categoria,
    image,
    sku: product.slug,
    offers:
      minPrice === maxPrice
        ? {
            '@type': 'Offer',
            price: minPrice,
            priceCurrency: 'MXN',
            availability: inStock
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
            url: `${SITE_URL}/productos/${product.slug}`,
          }
        : {
            '@type': 'AggregateOffer',
            lowPrice: minPrice,
            highPrice: maxPrice,
            priceCurrency: 'MXN',
            offerCount: product.variants.length,
            availability: inStock
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
            url: `${SITE_URL}/productos/${product.slug}`,
          },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
