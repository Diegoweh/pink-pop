'use client';

import { useCart } from '@/lib/cart-context';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          <motion.aside
            key="drawer"
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <header className="flex items-center justify-between border-b border-pink-100 px-6 py-5">
              <h2 className="font-(family-name:--font-playfair) text-xl font-semibold text-neutral-800">
                Tu carrito
              </h2>
              <button
                onClick={closeCart}
                className="rounded-full p-2 text-neutral-500 transition hover:bg-pink-50 hover:text-pink-600"
                aria-label="Cerrar carrito"
              >
                <X size={20} />
              </button>
            </header>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 text-neutral-400">
                <ShoppingBag size={48} strokeWidth={1} />
                <p className="text-sm">Tu carrito está vacío</p>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-pink-50 overflow-y-auto px-6">
                  {items.map((item) => {
                    const { product, variantId, quantity } = item;
                    const variant = product.variants?.find((v) => v.id === variantId);
                    return (
                      <li key={`${product.id}__${variantId ?? ''}`} className="flex gap-4 py-5">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-pink-50">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>

                        <div className="flex flex-1 flex-col gap-1">
                          <p className="text-xs font-medium uppercase tracking-widest text-pink-400">
                            {product.brand}
                          </p>
                          <p className="text-sm font-medium leading-snug text-neutral-800">
                            {product.name}
                            {variant && (
                              <span className="ml-1 text-xs text-neutral-400">— {variant.name}</span>
                            )}
                          </p>
                          <p className="text-sm font-semibold text-neutral-700">
                            ${product.price.toFixed(2)}
                          </p>

                          <div className="mt-1 flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1, variantId)}
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-pink-200 text-neutral-600 transition hover:border-pink-400 hover:text-pink-600"
                              aria-label="Reducir cantidad"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-6 text-center text-sm font-medium text-neutral-700">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1, variantId)}
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-pink-200 text-neutral-600 transition hover:border-pink-400 hover:text-pink-600"
                              aria-label="Aumentar cantidad"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={() => removeItem(product.id, variantId)}
                          className="self-start p-1 text-neutral-300 transition hover:text-pink-500"
                          aria-label="Eliminar producto"
                        >
                          <X size={16} />
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="border-t border-pink-100 px-6 py-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-neutral-500">Subtotal</span>
                    <span className="text-lg font-semibold text-neutral-800">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <button className="w-full rounded-full bg-pink-500 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-pink-600 active:scale-95">
                    Finalizar compra
                  </button>
                  <button
                    onClick={closeCart}
                    className="mt-2 w-full rounded-full py-3 text-sm text-neutral-500 transition hover:text-pink-500"
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
