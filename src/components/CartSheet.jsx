import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Trash2, X } from "lucide-react";
import { fmt, FREE_SHIPPING_THRESHOLD } from "../data/products";
import { useCart } from "../store/cart";
import { Button, Sheet, SheetTrigger, SheetHeader, SheetTitle, SheetContent } from "./ui";

export default function CartSheet({ children }) {
  const { items, remove, total, count } = useCart();
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const closeSheet = () => setOpen(false);
  const remaining = FREE_SHIPPING_THRESHOLD - total;

  return (
    <Sheet open={open} setOpen={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full sm:max-w-md p-0 flex flex-col">
        <SheetHeader className="border-b border-zinc-200 px-6 py-5">
          <SheetTitle className="font-display text-2xl">
            Panier <span className="text-accent">({count})</span>
          </SheetTitle>
        </SheetHeader>
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-10 text-center">
            <ShoppingBag className="w-8 h-8 text-zinc-300" strokeWidth={1.5} />
            <p className="font-display text-2xl">Votre panier est vide</p>
            <p className="text-sm text-zinc-500 max-w-xs">
              Explorez la collection et trouvez la pièce qui racontera votre histoire.
            </p>
            <Button
              className="mt-2 h-12 px-8 bg-ink text-paper hover:bg-accent transition-colors duration-500"
              onClick={() => {
                closeSheet();
                nav("/boutique");
              }}
            >
              Découvrir la boutique
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-0 divide-y divide-zinc-200">
              {items.map((x, i) => (
                <div key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <Link to={`/produit/${x.product.id}`} onClick={closeSheet} className="shrink-0">
                    <img
                      src={x.product.img}
                      alt={x.product.name}
                      className="w-20 h-24 object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <p className="font-display text-base leading-snug">{x.product.name}</p>
                      <button
                        onClick={() => remove(i)}
                        aria-label="Retirer"
                        className="text-zinc-300 hover:text-accent transition-colors duration-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="label-caps text-zinc-400 mt-2">
                      Taille {x.size} · Qté {x.qty}
                    </p>
                    <p className="text-sm font-medium mt-2">{fmt(x.product.price * x.qty)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-zinc-200 px-6 py-5 space-y-4 bg-white">
              {remaining > 0 ? (
                <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-500">
                  Plus que <span className="text-accent font-semibold">{fmt(remaining)}</span> pour
                  la livraison offerte
                </p>
              ) : (
                <p className="text-[11px] uppercase tracking-[0.14em] text-accent">
                  Livraison offerte
                </p>
              )}
              <div className="flex justify-between text-sm">
                <span className="uppercase tracking-[0.14em] text-[11px] font-semibold">
                  Sous-total
                </span>
                <span className="font-semibold">{fmt(total)}</span>
              </div>
              <Button
                asChild
                className="w-full h-13 py-4 bg-ink text-paper hover:bg-accent transition-colors duration-500"
              >
                <Link to="/commande" onClick={closeSheet}>
                  Passer la commande
                </Link>
              </Button>
              <p className="label-caps text-zinc-400 text-center">
                Paiement à la livraison disponible
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
