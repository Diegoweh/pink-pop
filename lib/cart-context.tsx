'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { Product } from './products';

export type CartItem = {
  product: Product;
  variantId?: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, quantity?: number, variantId?: string) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

function itemKey(productId: string, variantId?: string) {
  return variantId ? `${productId}__${variantId}` : productId;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product: Product, quantity = 1, variantId?: string) => {
    setItems((prev) => {
      const key = itemKey(product.id, variantId);
      const existing = prev.find((i) => itemKey(i.product.id, i.variantId) === key);
      if (existing) {
        return prev.map((i) =>
          itemKey(i.product.id, i.variantId) === key
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, variantId, quantity }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, variantId?: string) => {
    const key = itemKey(productId, variantId);
    setItems((prev) => prev.filter((i) => itemKey(i.product.id, i.variantId) !== key));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number, variantId?: string) => {
    const key = itemKey(productId, variantId);
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => itemKey(i.product.id, i.variantId) !== key));
    } else {
      setItems((prev) =>
        prev.map((i) =>
          itemKey(i.product.id, i.variantId) === key ? { ...i, quantity } : i
        )
      );
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, isOpen, openCart, closeCart, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
