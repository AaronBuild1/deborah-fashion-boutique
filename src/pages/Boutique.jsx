import { useState, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../data/products";
import { Button, Input, Select } from "../components/ui";
import ProductCard from "../components/ProductCard";

function useQuery() {
  const location = useLocation();
  return useMemo(() => new URLSearchParams(location.search), [location.search]);
}

export default function Boutique() {
  const q = useQuery();
  const nav = useNavigate();
  const cat = q.get("cat") || "Tous";
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const products = useMemo(() => {
    let list = PRODUCTS.filter(
      (p) =>
        (cat === "Tous" || p.category === cat) &&
        p.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [cat, search, sort]);

  return (
    <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-12 md:py-16">
      <div className="animate-fadeup">
        <p className="label-caps text-zinc-400">
          <Link to="/" className="hover:text-accent transition-colors duration-300">
            Accueil
          </Link>{" "}
          / Boutique{cat !== "Tous" ? ` / ${cat}` : ""}
        </p>
        <h1 className="font-display text-4xl md:text-6xl mt-4">
          {cat === "Tous" ? "La Boutique" : cat}
        </h1>
        <p className="text-zinc-500 text-sm mt-3">
          {products.length} pièce{products.length > 1 ? "s" : ""} — prix en dollars
          américains
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8 md:mt-10 pb-6 border-b border-zinc-200 justify-between">
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => nav(`/boutique${c === "Tous" ? "" : "?cat=" + c}`, { replace: true })}
              className={`label-caps px-4 py-2.5 whitespace-nowrap border transition-colors duration-300 ${
                cat === c
                  ? "bg-ink text-paper border-ink"
                  : "bg-transparent text-ink/70 border-zinc-300 hover:border-ink hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex gap-3 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" strokeWidth={1.5} />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher..."
              className="pl-9 w-44"
            />
          </div>
          <Select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Trier">
            <option value="featured">Populaires</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
          </Select>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-display text-3xl">Aucune pièce trouvée</p>
          <p className="text-zinc-500 text-sm mt-3">
            Essayez une autre catégorie ou modifiez votre recherche.
          </p>
          <Button
            asChild
            className="mt-8 h-12 px-8 bg-ink text-paper hover:bg-accent transition-colors duration-500"
          >
            <Link to="/boutique">Voir toute la boutique</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 mt-10 md:mt-14">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}
