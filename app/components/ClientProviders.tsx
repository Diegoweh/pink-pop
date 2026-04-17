'use client';

import { CartProvider } from '@/lib/cart-context';
import CartDrawer from '@/components/cart/cart-drawer';
import FloatingCartButton from '@/components/cart/floating-cart-button';
import { ReactNode } from 'react';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
      <FloatingCartButton />
    </CartProvider>
  );
}
