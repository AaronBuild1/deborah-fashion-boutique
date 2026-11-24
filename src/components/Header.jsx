import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../store/cart";
import CartSheet from "./CartSheet";

const NAV = [
  ["Accueil", "/"],
  ["Boutique", "/boutique"],
  ["Nouveautés", "/boutique?cat=Robes"],
  ["À propos", "/a-propos"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink text-paper text-center py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.28em]">
        Livraison offerte dès 100 000 CDF — Kinshasa & Goma
      </div>
      <div className="bg-paper/95 backdrop-blur border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center gap-6">
          <button
            className="md:hidden -ml-1 p-1"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link to="/" className="font-display text-2xl md:text-3xl tracking-tight shrink-0">
            Deborah<span className="text-accent">.</span>
          </Link>

          <nav
            className={`${
              open
                ? "absolute top-full left-0 w-full bg-paper border-b border-zinc-200 px-6 py-8 flex flex-col gap-6"
                : "hidden md:flex items-center gap-8"
            }`}
            onClick={() => setOpen(false)}
          >
            {NAV.map(([l, to]) => (
              <Link
                key={l}
                to={to}
                className="label-caps text-ink/70 hover:text-accent transition-colors duration-300"
              >
                {l}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4 md:gap-6">
            <button
              className="hidden sm:block text-ink/60 hover:text-accent transition-colors duration-300"
              aria-label="Rechercher"
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button
              className="hidden sm:block text-ink/60 hover:text-accent transition-colors duration-300"
              aria-label=" Favoris"
            >
              <Heart className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <CartSheet>
              <button className="inline-flex items-center gap-2 label-caps text-ink hover:text-accent transition-colors duration-300">
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
                <span className="hidden sm:inline">Panier</span>
                <span>({count})</span>
              </button>
            </CartSheet>
          </div>
        </div>
      </div>
    </header>
  );
}
