'use client';

import { useCart } from '@/lib/cart-context';
import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCartButton() {
  const { openCart, itemCount } = useCart();

  return (
    <button
      onClick={openCart}
      aria-label={`Abrir carrito: ${itemCount} ${itemCount === 1 ? 'artículo' : 'artículos'}`}
      className="fixed bottom-8 right-8 z-30 flex h-14 w-14 items-center justify-center bg-[color:var(--foreground)] text-white shadow-lg transition hover:bg-[color:var(--accent)] active:scale-95"
    >
      <ShoppingBag size={20} strokeWidth={1.5} />

      <AnimatePresence>
        {itemCount > 0 && (
          <motion.span
            key="badge"
            className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--accent)] text-[10px] font-semibold text-white"
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
