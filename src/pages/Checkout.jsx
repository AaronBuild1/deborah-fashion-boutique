import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, ShoppingBag } from "lucide-react";
import { fmt, FREE_SHIPPING_THRESHOLD, SHIPPING_FEE } from "../data/products";
import { useCart } from "../store/cart";
import { Button, Input } from "../components/ui";

export default function Checkout() {
  const { items, total, remove } = useCart();
  const [done, setDone] = useState(false);

  if (items.length === 0 && !done)
    return (
      <div className="max-w-lg mx-auto px-5 py-24 text-center">
        <ShoppingBag className="w-8 h-8 text-zinc-300 mx-auto" strokeWidth={1.5} />
        <p className="font-display text-3xl mt-4">Votre panier est vide</p>
        <p className="text-zinc-500 text-sm mt-3">
          Ajoutez des pièces à votre panier avant de passer commande.
        </p>
        <Button
          asChild
          className="mt-8 h-12 px-8 bg-ink text-paper hover:bg-accent transition-colors duration-500"
        >
          <Link to="/boutique">Retourner à la boutique</Link>
        </Button>
      </div>
    );

  const shipping = total >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;

  if (done)
    return (
      <div className="max-w-lg mx-auto px-5 py-24 text-center">
        <div className="w-16 h-16 bg-ink flex items-center justify-center mx-auto">
          <Check className="w-7 h-7 text-cream" strokeWidth={1.5} />
        </div>
        <h1 className="font-display text-3xl md:text-4xl mt-8">Commande confirmée</h1>
        <p className="text-zinc-500 mt-4 leading-relaxed">
          Merci pour votre confiance. Un message WhatsApp de confirmation vous
          sera envoyé d'ici quelques minutes.
        </p>
        <Button
          asChild
          className="mt-10 h-12 px-8 bg-ink text-paper hover:bg-accent transition-colors duration-500"
        >
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    );

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-12 md:py-16 grid md:grid-cols-5 gap-10 md:gap-16">
      <div className="md:col-span-3">
        <p className="label-caps text-zinc-400">
          <Link to="/" className="hover:text-accent transition-colors duration-300">Accueil</Link> /{" "}
          <Link to="/boutique" className="hover:text-accent transition-colors duration-300">Boutique</Link> / Commande
        </p>
        <h1 className="font-display text-3xl md:text-5xl mt-4">Finaliser la commande</h1>
        <form
          className="space-y-4 mt-8 md:mt-10"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <Input required placeholder="Prénom" />
            <Input required placeholder="Nom" />
          </div>
          <Input type="tel" required placeholder="Numéro de téléphone (Mobile Money)" />
          <Input placeholder="E-mail (optionnel)" />
          <Input required placeholder="Ville (Kinshasa, Goma, Lubumbashi...)" />
          <Input required placeholder="Adresse / repère" />
          <div className="border border-zinc-300 p-5 space-y-3">
            <p className="label-caps mb-2">Mode de paiement</p>
            {[
              "Paiement à la livraison",
              "Mobile Money (M-Pesa / Orange / Airtel)",
              "Carte bancaire",
            ].map((m, i) => (
              <label
                key={m}
                className="flex items-center gap-3 text-sm text-zinc-600 cursor-pointer hover:text-ink transition-colors duration-300"
              >
                <input type="radio" name="paiement" defaultChecked={i === 0} className="accent-accent" />
                {m}
              </label>
            ))}
          </div>
          <Button
            type="submit"
            className="w-full h-14 py-4 bg-ink text-paper hover:bg-accent transition-colors duration-500"
          >
            Confirmer la commande — {fmt(total + shipping)}
          </Button>
          <p className="label-caps text-zinc-400 text-center">
            Livraison offerte dès $100 · Kinshasa
          </p>
        </form>
      </div>

      <div className="md:col-span-2 bg-white border border-zinc-200 p-6 md:p-8 h-fit md:sticky md:top-32">
        <p className="label-caps mb-6">Récapitulatif</p>
        <div className="space-y-0 divide-y divide-zinc-200">
          {items.map((x, i) => (
            <div key={i} className="flex gap-4 py-4 first:pt-0 group">
              <img src={x.product.img} alt="" className="w-16 h-20 object-cover" />
              <div className="flex-1 text-sm min-w-0">
                <p className="font-display text-base leading-snug">{x.product.name}</p>
                <p className="label-caps text-zinc-400 mt-1.5">
                  Taille {x.size} × {x.qty}
                </p>
                <p className="font-medium mt-1.5">{fmt(x.product.price * x.qty)}</p>
              </div>
              <button
                onClick={() => remove(i)}
                aria-label="Retirer"
                className="text-zinc-300 hover:text-accent transition-colors duration-300 self-start"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-200 pt-4 mt-4 space-y-2.5 text-sm">
          <div className="flex justify-between">
            <span className="text-zinc-500">Sous-total</span>
            <span>{fmt(total)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Livraison</span>
            <span>
              {shipping === 0 ? (
                <span className="text-accent font-medium">Offerte</span>
              ) : (
                fmt(shipping)
              )}
            </span>
          </div>
          <div className="flex justify-between font-medium text-base pt-3 border-t border-zinc-200">
            <span>Total</span>
            <span>{fmt(total + shipping)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
