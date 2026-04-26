'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import type { GroupedProduct, GroupedVariant } from '@/lib/grouped-products';
import type { Product } from '@/lib/products';

export default function VariantSelector({ product }: { product: GroupedProduct }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { addItem } = useCart();

  const tonoParam = searchParams.get('tono');
  const selectedVariant: GroupedVariant =
    product.variants.find((v) => v.tono === tonoParam) ?? product.variants[0];

  function selectTono(tono: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tono', tono);
    router.push(`${pathname}?${params}`, { scroll: false });
  }

  function handleAddToCart() {
    const cartProduct: Product = {
      id: product.slug,
      name: product.producto,
      brand: product.marca,
      price: selectedVariant.precio,
      image: selectedVariant.imagePath || product.defaultImage,
      category: product.categoria,
    };
    addItem(cartProduct, 1, selectedVariant.id, selectedVariant.tono);
  }

  const currentImage = selectedVariant.imagePath || product.defaultImage;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[color:var(--accent-soft)]">
        {currentImage ? (
          <Image
            src={currentImage}
            alt={`${product.producto} — ${selectedVariant.tono}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-6xl font-light text-[color:var(--subtle)]">
              {product.producto[0]}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col pt-2 lg:pt-4">
        <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-[color:var(--accent)] mb-3">
          {product.marca}
        </p>
        <h1 className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-[color:var(--foreground)] mb-3">
          {product.producto}
        </h1>
        <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--subtle)] mb-8">
          {product.categoria}
        </p>

        <p className="text-2xl font-light text-[color:var(--foreground)] mb-10">
          ${selectedVariant.precio.toFixed(2)}{' '}
          <span className="text-xs font-normal text-[color:var(--muted)]">MXN</span>
        </p>

        {product.variants.length > 1 && (
          <div className="mb-10">
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[color:var(--muted)] mb-4">
              Tono:{' '}
              <span className="text-[color:var(--foreground)]">{selectedVariant.tono}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => selectTono(v.tono)}
                  className={`px-4 py-2 text-[10px] font-semibold tracking-[0.2em] uppercase border transition-colors ${
                    v.id === selectedVariant.id
                      ? 'border-[color:var(--foreground)] text-[color:var(--foreground)]'
                      : 'border-[color:var(--border)] text-[color:var(--subtle)] hover:border-[color:var(--foreground)] hover:text-[color:var(--foreground)]'
                  }`}
                >
                  {v.tono}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedVariant.stock > 0 && selectedVariant.stock <= 3 && (
          <p className="text-[10px] tracking-[0.25em] uppercase text-[color:var(--accent)] mb-6">
            Solo {selectedVariant.stock} disponibles
          </p>
        )}

        <button
          onClick={handleAddToCart}
          disabled={selectedVariant.stock === 0}
          className="w-full py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white bg-[color:var(--foreground)] hover:bg-[color:var(--accent)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed mt-auto"
        >
          {selectedVariant.stock === 0 ? 'Agotado' : 'Añadir al carrito'}
        </button>

        {product.variants.length === 1 && (
          <p className="mt-4 text-[10px] text-center tracking-[0.25em] uppercase text-[color:var(--subtle)]">
            Tono: {selectedVariant.tono}
          </p>
        )}
      </div>
    </div>
  );
}
