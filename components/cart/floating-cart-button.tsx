'use client';

import { useCart } from '@/lib/cart-context';
import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCartButton() {
  const { openCart, itemCount } = useCart();

  return (
    <button
      onClick={openCart}
      aria-label={`Abrir carrito — ${itemCount} ${itemCount === 1 ? 'producto' : 'productos'}`}
      className="fixed bottom-8 right-8 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg shadow-pink-200 transition hover:bg-pink-600 hover:shadow-pink-300 active:scale-95"
    >
      <ShoppingBag size={22} />

      <AnimatePresence>
        {itemCount > 0 && (
          <motion.span
            key="badge"
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-pink-600 shadow"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 400 }}
          >
            {itemCount > 99 ? '99+' : itemCount}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
