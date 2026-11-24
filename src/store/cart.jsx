import React, { createContext, useContext, useState } from "react";
import { Check } from "lucide-react";

const CartCtx = createContext(null);
export function useCart() {
  return useContext(CartCtx);
}

export function StoreProvider({ children }) {
  const [items, setItems] = useState([]); // {product, size, color, qty}
  const [toast, setToast] = useState(null);

  const add = (product, size, color, qty = 1) => {
    setItems((prev) => {
      const i = prev.findIndex(
        (x) => x.product.id === product.id && x.size === size && x.color === color
      );
      if (i >= 0) {
        const c = [...prev];
        c[i] = { ...c[i], qty: c[i].qty + qty };
        return c;
      }
      return [...prev, { product, size, color, qty }];
    });
    setToast(`${product.name} ajoutée au panier`);
    setTimeout(() => setToast(null), 2500);
  };

  const remove = (idx) => setItems((prev) => prev.filter((_, i) => i !== idx));
  const total = items.reduce((s, x) => s + x.product.price * x.qty, 0);
  const count = items.reduce((s, x) => s + x.qty, 0);

  return (
    <CartCtx.Provider value={{ items, add, remove, total, count, toast }}>
      {children}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-ink text-paper text-[11px] uppercase tracking-[0.14em] px-6 py-3.5 shadow-xl flex items-center gap-3 animate-fadeup">
          <Check className="w-4 h-4 text-accent" /> {toast}
        </div>
      )}
    </CartCtx.Provider>
  );
}
