import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ShoppingBag, Truck, RefreshCw, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { getProduct, fmt, promoLabel } from "../data/products";
import { useCart } from "../store/cart";
import { Button } from "../components/ui";

export default function ProductPage() {
  const { id } = useParams();
  const p = getProduct(Number(id));
  const [selectedSize, setSize] = useState(null);
  const [selectedColor, setColor] = useState(null);
  const [imgIdx, setImgIdx] = useState(0);
  const { add } = useCart();
  const nav = useNavigate();

  if (!p)
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <p className="font-display text-3xl">Produit introuvable</p>
        <Button
          asChild
          className="mt-8 h-12 px-8 bg-ink text-paper hover:bg-accent transition-colors duration-500"
        >
          <Link to="/boutique">Retour à la boutique</Link>
        </Button>
      </div>
    );

  const size = selectedSize ?? p.sizes[0];
  const color = selectedColor ?? p.colors[0] ?? "#d0d5dd";
  const label = promoLabel(p);
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : null;

  return (
    <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-8 md:py-12">
      <nav className="label-caps text-zinc-400 animate-fadeup" aria-label="Fil d'Ariane">
        <Link to="/" className="hover:text-accent transition-colors duration-300">
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <Link to="/boutique" className="hover:text-accent transition-colors duration-300">
          Boutique
        </Link>
        <span className="mx-2">/</span>
        <Link
          to={`/boutique?cat=${encodeURIComponent(p.category)}`}
          className="hover:text-accent transition-colors duration-300"
        >
          {p.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{p.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-12">
        <div>
          <div className="relative overflow-hidden bg-cream-soft aspect-[3/4]">
            <img src={p.imgs[imgIdx] ?? p.img} alt={p.name} className="w-full h-full object-cover" />
            {label && (
              <span
                className={`label-caps absolute top-0 left-0 px-3 py-2 ${
                  p.oldPrice ? "bg-accent text-paper" : "bg-paper/95 text-ink"
                }`}
              >
                {label}
              </span>
            )}
          </div>
          <div className="flex gap-3 mt-4">
            {p.imgs.map((im, i) => (
              <button
                key={i}
                onClick={() => setImgIdx(i)}
                aria-label={`Photo ${i + 1}`}
                className={`overflow-hidden w-20 h-24 border transition-colors duration-300 ${
                  i === imgIdx ? "border-ink" : "border-zinc-200 hover:border-zinc-400"
                }`}
              >
                <img src={im} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="md:pt-4 animate-fadeup">
          <p className="label-caps text-zinc-400">
            {p.category} · Réf. {p.ref}
          </p>
          <h1 className="font-display text-3xl md:text-5xl leading-tight mt-3">{p.name}</h1>

          {p.trend && (
            <p className="inline-flex items-center gap-2 label-caps text-accent-dark mt-4 bg-cream px-3 py-2">
              <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} /> Tendance · {p.trend}
            </p>
          )}

          <div className="flex items-center gap-3 mt-6">
            <span className="text-2xl font-medium">{fmt(p.price)}</span>
            {p.oldPrice && <span className="line-through text-zinc-400">{fmt(p.oldPrice)}</span>}
            {discount && (
              <span className="label-caps bg-accent text-paper px-2 py-1">−{discount}%</span>
            )}
          </div>

          <p className="text-zinc-600 leading-relaxed mt-6 max-w-lg">{p.desc}</p>

          {p.colors.length > 1 && (
            <div className="mt-8">
              <p className="label-caps mb-3">Couleur</p>
              <div className="flex gap-2.5">
                {p.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    aria-label={`Couleur ${c}`}
                    className={`w-9 h-9 rounded-full border-2 transition-all duration-300 ${
                      color === c ? "border-accent scale-110" : "border-zinc-200 hover:border-zinc-400"
                    }`}
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <p className="label-caps mb-3">Taille</p>
            <div className="flex gap-2 flex-wrap">
              {p.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-5 py-3 border text-xs tracking-[0.14em] transition-colors duration-300 ${
                    size === s ? "bg-ink text-paper border-ink" : "border-zinc-300 hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-10">
            <Button
              onClick={() => add(p, size, color)}
              className="flex-1 h-14 py-4 bg-ink text-paper hover:bg-accent transition-colors duration-500"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} /> Ajouter au panier
            </Button>
            <Button
              onClick={() => nav("/commande")}
              aria-label="Acheter maintenant"
              className="h-14 px-6 border border-zinc-300 bg-transparent hover:border-ink"
            >
              <Heart className="w-4 h-4" strokeWidth={1.5} />
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 text-sm border-t border-zinc-200 pt-8">
            <div>
              <dt className="label-caps text-zinc-400">Matière</dt>
              <dd className="mt-1.5 text-zinc-700">{p.material}</dd>
            </div>
            <div>
              <dt className="label-caps text-zinc-400">Entretien</dt>
              <dd className="mt-1.5 text-zinc-700">{p.care}</dd>
            </div>
          </dl>

          <ul className="mt-8 space-y-4 text-sm text-zinc-600 border-t border-zinc-200 pt-8">
            <li className="flex gap-3 items-start">
              <Truck className="w-4 h-4 mt-0.5 text-accent shrink-0" strokeWidth={1.5} />
              Livraison 24-72h à Kinshasa et Goma, 5-7 jours en province
            </li>
            <li className="flex gap-3 items-start">
              <RefreshCw className="w-4 h-4 mt-0.5 text-accent shrink-0" strokeWidth={1.5} />
              Échange gratuit sous 14 jours si la taille ne convient pas
            </li>
            <li className="flex gap-3 items-start">
              <ShieldCheck className="w-4 h-4 mt-0.5 text-accent shrink-0" strokeWidth={1.5} />
              Paiement à la livraison, Mobile Money ou carte bancaire
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
