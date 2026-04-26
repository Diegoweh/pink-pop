'use client';

import { useCart, type CartItem } from '@/lib/cart-context';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP ?? '';

function buildWhatsAppMessage(items: CartItem[], subtotal: number): string {
  const lines = items.map((item) => {
    const { product, variantId, tono, quantity } = item;
    const variantLabel =
      tono
        ? ` (Tono: ${tono})`
        : variantId
          ? ` (${product.variants?.find((v) => v.id === variantId)?.name ?? ''})`
          : '';
    const lineTotal = (product.price * quantity).toFixed(2);
    return `${quantity} x ${product.name}${variantLabel} - $${lineTotal}`;
  });
  lines.push(`\nTotal: $${subtotal.toFixed(2)}`);
  return `Hola, me gustaría hacer el siguiente pedido:\n\n${lines.join('\n')}`;
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  function handleCheckout() {
    const msg = buildWhatsAppMessage(items, subtotal);
    const url = WHATSAPP_NUMBER
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
      : `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          <motion.aside
            key="drawer"
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[color:var(--surface)] shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <header className="flex items-center justify-between border-b border-[color:var(--border)] px-8 py-6">
              <h2 className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[color:var(--foreground)]">
                Carrito
              </h2>
              <button
                onClick={closeCart}
                className="p-1 text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]"
                aria-label="Cerrar carrito"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </header>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-[color:var(--subtle)]">
                <ShoppingBag size={36} strokeWidth={1} />
                <p className="text-[11px] tracking-[0.3em] uppercase">Tu carrito está vacío</p>
                <button
                  onClick={closeCart}
                  className="mt-2 text-[11px] font-semibold tracking-[0.3em] uppercase text-[color:var(--foreground)] border-b border-[color:var(--foreground)] pb-1 hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] transition-colors"
                >
                  Volver a la colección
                </button>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-[color:var(--border)] overflow-y-auto px-8">
                  {items.map((item) => {
                    const { product, variantId, tono, quantity } = item;
                    const variant = product.variants?.find((v) => v.id === variantId);
                    const displayTone = tono ?? variant?.name;
                    return (
                      <li key={`${product.id}__${variantId ?? ''}`} className="flex gap-5 py-6">
                        <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-[color:var(--accent-soft)]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>

                        <div className="flex flex-1 flex-col gap-1.5">
                          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[color:var(--subtle)]">
                            {product.brand}
                          </p>
                          <p className="text-sm font-normal leading-snug text-[color:var(--foreground)]">
                            {product.name}
                          </p>
                          {displayTone && (
                            <p className="text-[10px] tracking-[0.2em] uppercase text-[color:var(--muted)]">
                              Tono: {displayTone}
                            </p>
                          )}
                          <p className="text-sm font-medium text-[color:var(--foreground)]">
                            ${product.price.toFixed(2)}
                          </p>

                          <div className="mt-2 flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1, variantId)}
                              className="flex h-7 w-7 items-center justify-center border border-[color:var(--border-strong)] text-[color:var(--muted)] transition hover:border-[color:var(--foreground)] hover:text-[color:var(--foreground)]"
                              aria-label="Disminuir cantidad"
                            >
                              <Minus size={11} strokeWidth={1.5} />
                            </button>
                            <span className="w-5 text-center text-xs font-medium text-[color:var(--foreground)]">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1, variantId)}
                              className="flex h-7 w-7 items-center justify-center border border-[color:var(--border-strong)] text-[color:var(--muted)] transition hover:border-[color:var(--foreground)] hover:text-[color:var(--foreground)]"
                              aria-label="Aumentar cantidad"
                            >
                              <Plus size={11} strokeWidth={1.5} />
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={() => removeItem(product.id, variantId)}
                          className="self-start p-1 text-[color:var(--subtle)] transition hover:text-[color:var(--foreground)]"
                          aria-label="Eliminar"
                        >
                          <X size={14} strokeWidth={1.5} />
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="border-t border-[color:var(--border)] px-8 py-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-[color:var(--muted)]">Subtotal</span>
                    <span className="text-base font-medium text-[color:var(--foreground)]">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white bg-[color:var(--foreground)] hover:bg-[color:var(--accent)] transition-colors"
                  >
                    Finalizar por WhatsApp
                  </button>
                  <button
                    onClick={closeCart}
                    className="mt-3 w-full py-3 text-[11px] tracking-[0.3em] uppercase text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]"
                  >
                    Seguir comprando
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
