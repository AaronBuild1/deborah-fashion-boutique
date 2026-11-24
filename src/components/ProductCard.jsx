import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { fmt, promoLabel } from "../data/products";

export default function ProductCard({ p }) {
  const label = promoLabel(p);

  return (
    <Link to={`/produit/${p.id}`} className="group block">
      <div className="relative overflow-hidden bg-zinc-100 aspect-[3/4]">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {label && (
          <span
            className={`label-caps absolute top-0 left-0 px-3 py-2 ${
              p.oldPrice ? "bg-accent text-paper" : "bg-paper/95 text-ink"
            }`}
          >
            {label}
          </span>
        )}
        <button
          onClick={(e) => e.preventDefault()}
          aria-label="Ajouter aux favoris"
          className="absolute top-3 right-3 bg-paper/90 p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <Heart className="w-4 h-4" strokeWidth={1.5} />
        </button>
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="bg-ink/90 text-paper label-caps text-center py-3.5">
            Voir le produit
          </div>
        </div>
      </div>
      <div className="pt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="label-caps text-zinc-400">{p.category}</p>
          <h3 className="font-display text-base md:text-xl leading-snug mt-1.5 group-hover:text-accent transition-colors duration-500">
            {p.name}
          </h3>
          <div className="flex gap-1.5 mt-2.5">
            {p.colors.map((c) => (
              <span
                key={c}
                className="w-3 h-3 rounded-full border border-zinc-300"
                style={{ background: c }}
              />
            ))}
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-sm font-medium">{fmt(p.price)}</p>
          {p.oldPrice && (
            <p className="text-xs text-zinc-400 line-through mt-0.5">{fmt(p.oldPrice)}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
