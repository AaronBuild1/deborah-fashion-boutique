import React, { useState, useMemo } from "react";
import { MemoryRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { ShoppingBag, Search, Menu, Heart, Star, Truck, ShieldCheck, RefreshCw, Instagram, Facebook, Mail, ChevronRight, Check, Trash2, X } from "lucide-react";
/* --- Composants UI locaux (sans dependance shadcn) --- */
const SheetCtx = React.createContext(null);

function Button({ className = "", asChild, children, ...props }) {
  const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${children.props.className || ""} ${base} ${className}`,
    });
  }
  return <button className={`${base} ${className}`} {...props}>{children}</button>;
}

function Badge({ className = "", children, ...props }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`} {...props}>
      {children}
    </span>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${className}`}
      {...props}
    />
  );
}

function useSheetClose() {
  const { setOpen } = React.useContext(SheetCtx);
  return () => setOpen(false);
}

function Sheet({ children }) {
  const [open, setOpen] = useState(false);
  return <SheetCtx.Provider value={{ open, setOpen }}>{children}</SheetCtx.Provider>;
}

function SheetTrigger({ asChild, children }) {
  const { setOpen } = React.useContext(SheetCtx);
  return React.cloneElement(React.Children.only(children), {
    onClick: (e) => { children.props.onClick && children.props.onClick(e); setOpen(true); },
  });
}

function SheetHeader({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function SheetTitle({ className = "", children }) {
  return <h2 className={className}>{children}</h2>;
}

function SheetContent({ className = "", children }) {
  const { open, setOpen } = React.useContext(SheetCtx);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[90]">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <div className={`absolute right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-xl flex flex-col animated-drawer ${className}`}>
        <button onClick={() => setOpen(false)} className="absolute top-4 right-4 z-10 text-zinc-500 hover:text-zinc-900">
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

/* ------------------------- Data ------------------------- */
const IMG = (id, w = 600, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const PRODUCTS = [
  {
    id: 1, name: "Robe Wax Élégance", category: "Robes", price: 45000, oldPrice: 55000,
    rating: 4.9, reviews: 32, badge: "Best-seller",
    colors: ["#b45309", "#1e1b4b", "#be123c"],
    desc: "Robe midi en wax authentique, coupe cintrée à la taille, manches légères bouffantes. Confectionnée à Kinshasa dans un atelier partenaire.",
    img: IMG("1583391733956-6c78276477e2"),
    imgs: [IMG("1583391733956-6c78276477e2"), IMG("1595777457583-95e059d581b8")]
  },
  {
    id: 2, name: "Ensemble Satin Luna", category: "Ensembles", price: 62000, oldPrice: null,
    rating: 4.8, reviews: 19, badge: null,
    colors: ["#111827", "#7c3aed", "#d97706"],
    desc: "Ensemble deux pièces en satin fluide : chemisier à col montant et pantalon large taille haute. Parfait pour les soirées.",
    img: IMG("1594633312681-425c7b97ccd1"),
    imgs: [IMG("1594633312681-425c7b97ccd1"), IMG("1596783074918-c84cb06531ca")]
  },
  {
    id: 3, name: "Trench Beige Kin", category: "Manteaux", price: 89000, oldPrice: 105000,
    rating: 4.7, reviews: 11, badge: "-15%",
    colors: ["#d6c5a8", "#78716c"],
    desc: "Trench long ceinturé, tissu déperlant léger, doublure satinée. L'indispensable de la saison des pluies.",
    img: IMG("1539109136881-3be0616acf4b"),
    imgs: [IMG("1539109136881-3be0616acf4b"), IMG("1525507119028-ed4c629a60a3")]
  },
  {
    id: 4, name: "Combinaison Braise", category: "Combinaisons", price: 54000, oldPrice: null,
    rating: 4.9, reviews: 27, badge: "Nouveau",
    colors: ["#b91c1c", "#0f172a", "#a16207"],
    desc: "Combinaison courte à bretelles réglables, décolleté carré, poche latérale. Élégante du bureau au dîner.",
    img: IMG("1515372039744-b8f02a3ae446"),
    imgs: [IMG("1515372039744-b8f02a3ae446"), IMG("1496747611176-843222e1e57c")]
  },
  {
    id: 5, name: "Chemisier Soie Étoile", category: "Hauts", price: 32000, oldPrice: null,
    rating: 4.6, reviews: 40, badge: null,
    colors: ["#f8fafc", "#c084fc", "#334155"],
    desc: "Chemisier fluide en soie mélangée, boutons nacrés, coupe légèrement oversize.",
    img: IMG("1485968579580-b6d095142e6e"),
    imgs: [IMG("1485968579580-b6d095142e6e"), IMG("1490481651871-ab68de25d43d")]
  },
  {
    id: 6, name: "Jupe Longue Bogolan", category: "Jupes", price: 38000, oldPrice: 45000,
    rating: 4.8, reviews: 23, badge: "Best-seller",
    colors: ["#292524", "#b45309", "#166534"],
    desc: "Jupe longue portefeuille en bogolan, taille élastiquée confort, fente latérale.",
    img: IMG("1583496661160-fb5886a13d44"),
    imgs: [IMG("1583496661160-fb5886a13d44"), IMG("1529139574466-a303027c1d8b")]
  },
  {
    id: 7, name: "Tailleur Orange Sunrise", category: "Ensembles", price: 75000, oldPrice: null,
    rating: 5.0, reviews: 8, badge: "Nouveau",
    colors: ["#ea580c", "#171717", "#fbbf24"],
    desc: "Blazer + pantalon cigarette, épaules structurées, doublure imprimée. Look power.",
    img: IMG("1581044777550-4cfa60707c03"),
    imgs: [IMG("1581044777550-4cfa60707c03"), IMG("1509631179647-0177331693ae")]
  },
  {
    id: 8, name: "Robe Soirée Nuit Africaine", category: "Robes", price: 98000, oldPrice: 120000,
    rating: 4.9, reviews: 15, badge: "Édition limitée",
    colors: ["#111827", "#7e22ce"],
    desc: "Robe longue dos nu, tissu plissé effet métallique, mémoire de forme.",
    img: IMG("1566174053879-31528523f9ae"),
    imgs: [IMG("1566174053879-31528523f9ae"), IMG("1595777457583-95e059d581b8")]
  },
];

const CATEGORIES = ["Tous", "Robes", "Ensembles", "Manteaux", "Combinaisons", "Hauts", "Jupes"];

const fmt = (n) => new Intl.NumberFormat("fr-CD").format(n) + " CDF";
const CURRENCY_NOTE = "Prix indicatifs en francs congolais";

/* ------------------------- Store (cart) ------------------------- */
const CartCtx = React.createContext(null);
function useCart() { return React.useContext(CartCtx); }

function StoreProvider({ children }) {
  const [items, setItems] = useState([]); // {product, size, color, qty}
  const [toast, setToast] = useState(null);
  const add = (product, size, color, qty = 1) => {
    setItems((prev) => {
      const i = prev.findIndex((x) => x.product.id === product.id && x.size === size && x.color === color);
      if (i >= 0) { const c = [...prev]; c[i] = { ...c[i], qty: c[i].qty + qty }; return c; }
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
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-zinc-900 text-white text-sm px-5 py-3 rounded-full shadow-xl flex items-center gap-2 animate-in">
          <Check className="w-4 h-4 text-emerald-400" /> {toast}
        </div>
      )}
    </CartCtx.Provider>
  );
}

/* ------------------------- Cart drawer ------------------------- */
function CartSheet({ children }) {
  const { items, remove, total } = useCart();
  const nav = useNavigate();
  const closeSheet = useSheetClose();
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full sm:max-w-md p-0 flex flex-col">
        <SheetHeader className="border-b p-5">
          <SheetTitle className="font-serif text-xl">Votre panier</SheetTitle>
        </SheetHeader>
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-zinc-500 p-8 text-center">
            <ShoppingBag className="w-10 h-10" />
            <p>Votre panier est vide.</p>
            <Button className="bg-rose-600 hover:bg-rose-700 rounded-full" onClick={() => { closeSheet(); nav("/"); }}>Découvrir la boutique</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((x, i) => (
                <div key={i} className="flex gap-3">
                  <img src={x.product.img} alt="" className="w-20 h-24 object-cover rounded-lg" />
                  <div className="flex-1">
                    <div className="flex justify-between gap-2">
                      <p className="text-sm font-medium">{x.product.name}</p>
                      <button onClick={() => remove(i)} className="text-zinc-400 hover:text-rose-600"><Trash2 className="w-4 h-4" /></button>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">Taille {x.size} · Qté {x.qty}</p>
                    <p className="text-sm font-semibold mt-1 text-rose-700">{fmt(x.product.price * x.qty)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t p-5 space-y-3">
              <div className="flex justify-between text-sm"><span>Sous-total</span><span className="font-semibold">{fmt(total)}</span></div>
              <div className="flex justify-between text-sm"><span>Livraison</span><span className="text-emerald-600 font-medium">Offerte dès 100 000</span></div>
              <Button asChild className="w-full h-12 bg-zinc-900 hover:bg-zinc-800 rounded-full text-base">
                <Link to="/commande" onClick={closeSheet}>Passer la commande</Link>
              </Button>
              <p className="text-[11px] text-zinc-400 text-center">Paiement à la livraison disponible (maquette)</p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

/* ------------------------- Header ------------------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="bg-rose-700 text-white text-center text-xs py-1.5 tracking-wide">
        Livraison gratuite à Kinshasa dès 100 000 CDF
      </div>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        <button className="md:hidden" onClick={() => setOpen(!open)}><Menu /></button>
        <Link to="/" className="font-serif text-2xl tracking-tight">Deborah<span className="text-rose-600">.</span>fashion</Link>
        <nav className={`md:flex items-center gap-6 text-sm ${open ? "absolute top-full left-0 w-full bg-white border-b p-5 flex flex-col" : "hidden ml-6"}`} onClick={() => setOpen(false)}>
          {[["Accueil", "/"], ["Boutique", "/boutique"], ["Nouveautés", "/boutique?cat=Tous"], ["À propos", "/a-propos"]].map(([l, to]) => (
            <Link key={l} to={to} className="hover:text-rose-600">{l}</Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <button className="hidden sm:block text-zinc-500"><Search className="w-5 h-5" /></button>
          <button className="text-zinc-500"><Heart className="w-5 h-5" /></button>
          <CartSheet>
            <button className="relative text-zinc-700">
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-[10px] w-5 h-5 px-1 rounded-full flex items-center justify-center">{count}</span>
              )}
            </button>
          </CartSheet>
        </div>
      </div>
    </header>
  );
}

/* ------------------------- Footer ------------------------- */
function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <p className="font-serif text-xl text-white mb-2">Deborah<span className="text-rose-500">.</span>fashion</p>
          <p className="text-zinc-400">Mode femme africaine contemporaine. Goma · Kinshasa, RDC.</p>
          <div className="flex gap-3 mt-4">
            <Instagram className="w-4 h-4 text-zinc-500" />
            <Facebook className="w-4 h-4 text-zinc-500" />
            <Mail className="w-4 h-4 text-zinc-500" />
          </div>
        </div>
        <div>
          <p className="text-white font-medium mb-3">Boutique</p>
          <ul className="space-y-2 text-zinc-400">
            {["Robes", "Ensembles", "Manteaux", "Jupes"].map((c) => (
              <li key={c}><Link to={`/boutique?cat=${c}`} className="hover:text-rose-400">{c}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-medium mb-3">Aide</p>
          <ul className="space-y-2 text-zinc-400">
            <li>Livraison & retours</li><li>Guide des tailles</li><li>Contact WhatsApp</li><li>FAQ</li>
          </ul>
        </div>
        <div>
          <p className="text-white font-medium mb-3">Newsletter</p>
          <p className="text-zinc-400 mb-3">-10% sur votre première commande.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Votre e-mail" className="bg-zinc-900 border-zinc-800 text-white" />
            <Button className="bg-rose-600 hover:bg-rose-700">Ok</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-500">
        © 2026 Deborah Fashion Boutique — Maquette de démonstration
      </div>
    </footer>
  );
}

/* ------------------------- Product card ------------------------- */
function ProductCard({ p }) {
  return (
    <Link to={`/produit/${p.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-zinc-100 aspect-[3/4]">
        <img src={p.img} alt={p.name} loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
        {p.badge && <Badge className="absolute top-3 left-3 bg-white text-zinc-900 hover:bg-white">{p.badge}</Badge>}
        <button onClick={(e) => e.preventDefault()} className="absolute top-3 right-3 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
          <Heart className="w-4 h-4" />
        </button>
        <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition">
          <div className="bg-zinc-900/90 text-white text-xs text-center rounded-full py-2.5">Voir le produit</div>
        </div>
      </div>
      <div className="pt-3 px-1">
        <p className="text-[11px] uppercase tracking-wider text-zinc-400">{p.category}</p>
        <p className="font-medium mt-0.5">{p.name}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold text-rose-700">{fmt(p.price)}</span>
          {p.oldPrice && <span className="text-xs line-through text-zinc-400">{fmt(p.oldPrice)}</span>}
        </div>
        <div className="flex gap-1.5 mt-2">
          {p.colors.map((c) => <span key={c} className="w-3.5 h-3.5 rounded-full border border-zinc-300" style={{ background: c }} />)}
        </div>
      </div>
    </Link>
  );
}

/* ------------------------- Pages ------------------------- */
function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          <div className="flex items-center px-6 md:px-16 py-16 md:py-0 bg-gradient-to-br from-rose-50 to-white">
            <div>
              <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100 rounded-full">Collection 2026</Badge>
              <h1 className="font-serif text-4xl md:text-6xl leading-tight mt-4 text-zinc-900">
                L'élégance femme,<br /><span className="text-rose-600 italic">debout à Kin.</span>
              </h1>
              <p className="text-zinc-600 mt-4 max-w-md">
                Robes, ensembles et pièces signature cousus avec soin. Mode africaine contemporaine, livrée partout en RDC.
              </p>
              <div className="flex gap-3 mt-7">
                <Button asChild className="h-12 px-8 bg-zinc-900 hover:bg-zinc-800 rounded-full">
                  <Link to="/boutique">Explorer la boutique</Link>
                </Button>
                <Button asChild variant="outline" className="h-12 px-8 rounded-full border-zinc-300">
                  <Link to="/boutique?cat=Robes">Nouveautés</Link>
                </Button>
              </div>
              <div className="flex gap-6 mt-10 text-sm text-zinc-500">
                <span className="flex items-center gap-1.5"><Truck className="w-4 h-4" /> Livraison RDC</span>
                <span className="flex items-center gap-1.5"><RefreshCw className="w-4 h-4" /> Retours 14 jours</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> Paiement sécurisé</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto">
            <img src={PRODUCTS[7].img} alt="Collection" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 bg-white/95 rounded-2xl p-4 shadow-lg">
              <p className="text-xs text-zinc-500">Pièce phare</p>
              <p className="font-medium">Robe Soirée Nuit Africaine</p>
              <Link to="/produit/8" className="text-sm text-rose-600 flex items-center mt-1">Découvrir <ChevronRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-serif text-3xl mb-8">Catégories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[["Robes", PRODUCTS[0]], ["Ensembles", PRODUCTS[1]], ["Manteaux", PRODUCTS[2]], ["Jupes", PRODUCTS[5]]].map(([c, p]) => (
            <Link key={c} to={`/boutique?cat=${c}`} className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
              <img src={p.img} alt={c} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-serif text-2xl">{c}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Best sellers */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif text-3xl">Best-sellers</h2>
          <Link to="/boutique" className="text-sm text-rose-600 flex items-center">Tout voir <ChevronRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 4).map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <div className="rounded-3xl bg-gradient-to-r from-rose-600 to-rose-700 text-white p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div>
            <p className="uppercase tracking-widest text-sm text-rose-200">Offre de lancement</p>
            <h2 className="font-serif text-3xl md:text-4xl mt-2">-15% sur la collection complete</h2>
            <p className="text-rose-100 mt-2 text-sm">Code <span className="font-mono bg-white/15 rounded px-2 py-0.5">DEBORAH15</span> · valable jusqu'au 31/12/2026</p>
          </div>
          <Button asChild className="h-12 px-8 bg-white text-rose-700 hover:bg-rose-50 rounded-full">
            <Link to="/boutique">J'en profite</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function useQuery() {
  const location = useLocation();
  return useMemo(() => new URLSearchParams(location.search), [location.search]);
}

function Boutique() {
  const q = useQuery();
  const nav = useNavigate();
  const cat = q.get("cat") || "Tous";
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const products = useMemo(() => {
    let list = PRODUCTS.filter((p) => (cat === "Tous" || p.category === cat) &&
      p.name.toLowerCase().includes(search.toLowerCase()));
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [cat, search, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <div>
          <h1 className="font-serif text-4xl">Boutique</h1>
          <p className="text-zinc-500 text-sm mt-1">{products.length} articles</p>
        </div>
        <div className="md:ml-auto flex gap-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher..." className="pl-9 w-44 rounded-full" />
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)}
            className="border border-zinc-200 rounded-full px-4 text-sm bg-white">
            <option value="featured">Tri : Populaires</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
          </select>
        </div>
      </div>
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {CATEGORIES.map((c) => (
          <button key={c}
            onClick={() => nav(`/boutique${c === "Tous" ? "" : "?cat=" + c}`, { replace: true })}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap border transition ${cat === c ? "bg-zinc-900 text-white border-zinc-900" : "bg-white border-zinc-200 hover:border-zinc-400"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  );
}

function ProductPage() {
  const { id } = useParams();
  const p = PRODUCTS.find((x) => x.id === Number(id));
  const [size, setSize] = useState("M");
  const [color, setColor] = useState(null);
  const [imgIdx, setImgIdx] = useState(0);
  const { add } = useCart();
  const nav = useNavigate();
  if (!p) return <p className="p-20 text-center">Produit introuvable.</p>;
  const shownColor = color || "#d0d5dd";

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <div>
        <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-zinc-100">
          <img src={p.imgs[imgIdx]} alt={p.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex gap-3 mt-4">
          {p.imgs.map((im, i) => (
            <button key={i} onClick={() => setImgIdx(i)}
              className={`rounded-xl overflow-hidden w-20 h-24 border-2 transition ${i === imgIdx ? "border-rose-600" : "border-transparent"}`}>
              <img src={im} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
      <div>
        <Link to="/boutique" className="text-sm text-zinc-500 hover:text-rose-600">← Retour à la boutique</Link>
        <p className="text-xs uppercase tracking-widest text-zinc-400 mt-4">{p.category}</p>
        <h1 className="font-serif text-3xl mt-1">{p.name}</h1>
        <div className="flex items-center gap-2 mt-2 text-sm">
          <span className="flex text-amber-500">
            {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.round(p.rating) ? "fill-current" : ""}`} />)}
          </span>
          <span className="text-zinc-500">{p.rating} · {p.reviews} avis</span>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-semibold text-rose-700">{fmt(p.price)}</span>
          {p.oldPrice && <span className="line-through text-zinc-400">{fmt(p.oldPrice)}</span>}
        </div>
        <p className="text-zinc-600 mt-4 leading-relaxed">{p.desc}</p>

        <div className="mt-6">
          <p className="text-sm font-medium mb-2">Couleur</p>
          <div className="flex gap-2">
            {p.colors.map((c) => (
              <button key={c} onClick={() => setColor(c)}
                className={`w-9 h-9 rounded-full border-2 transition ${color === c ? "border-rose-600 scale-110" : "border-zinc-200"}`}
                style={{ background: c }} />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <p className="text-sm font-medium">Taille</p>
            <button className="text-sm text-rose-600 underline">Guide des tailles</button>
          </div>
          <div className="flex gap-2">
            {["XS", "S", "M", "L", "XL"].map((s) => (
              <button key={s} onClick={() => setSize(s)}
                className={`px-4 py-2.5 rounded-full border text-sm transition ${size === s ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-200 hover:border-zinc-400"}`}>
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <Button onClick={() => { add(p, size, shownColor); }} className="flex-1 h-12 py-3.5 bg-zinc-900 hover:bg-zinc-800 rounded-full text-base">
            <ShoppingBag className="w-5 h-5 mr-2" /> Ajouter au panier
          </Button>
          <Button variant="outline" onClick={() => nav("/commande")} className="h-12 px-6 py-3.5 rounded-full border-zinc-300">
            <Heart className="w-5 h-5" />
          </Button>
        </div>

        <ul className="mt-8 space-y-3 text-sm text-zinc-600 border-t pt-6">
          <li className="flex gap-3"><Truck className="w-4 h-4 mt-0.5 text-rose-600" /> Livraison 24-72h à Kinshasa et Goma, 5-7 jours en province</li>
          <li className="flex gap-3"><RefreshCw className="w-4 h-4 mt-0.5 text-rose-600" /> Échange gratuit sous 14 jours si la taille ne convient pas</li>
          <li className="flex gap-3"><ShieldCheck className="w-4 h-4 mt-0.5 text-rose-600" /> Paiement à la livraison, Mobile Money ou carte bancaire</li>
        </ul>
      </div>
    </div>
  );
}

function Checkout() {
  const { items, total, remove } = useCart();
  const [done, setDone] = useState(false);
  if (items.length === 0 && !done) return <p className="p-20 text-center text-zinc-500">Panier vide. <Link to="/boutique" className="text-rose-600 underline">Retourner à la boutique</Link></p>;

  const shipping = total >= 100000 ? 0 : 5000;
  if (done) return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto"><Check className="w-8 h-8 text-emerald-600" /></div>
      <h1 className="font-serif text-3xl mt-6">Commande confirmée !</h1>
      <p className="text-zinc-500 mt-2">Merci pour votre confiance. Un message WhatsApp de confirmation arrive d'ici quelques minutes. Ceci est une maquette : aucune commande réelle n'a été passée.</p>
      <Button asChild className="mt-8 rounded-full bg-zinc-900"><Link to="/">Retour à l'accueil</Link></Button>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-5 gap-10">
      <div className="md:col-span-3">
        <h1 className="font-serif text-3xl mb-6">Finaliser la commande</h1>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
          <div className="grid grid-cols-2 gap-4">
            <Input required placeholder="Prénom" />
            <Input required placeholder="Nom" />
          </div>
          <Input type="tel" required placeholder="Numéro de téléphone (Mobile Money)" />
          <Input placeholder="E-mail (optionnel)" />
          <Input required placeholder="Ville (Kinshasa, Goma, Lubumbashi...)" />
          <Input required placeholder="Adresse / repère" />
          <div className="border rounded-xl p-4 space-y-2">
            <p className="text-sm font-medium">Mode de paiement</p>
            {["Paiement à la livraison", "Mobile Money (M-Pesa / Orange / Airtel)", "Carte bancaire"].map((m, i) => (
              <label key={m} className="flex items-center gap-2 text-sm text-zinc-600">
                <input type="radio" name="paiement" defaultChecked={i === 0} /> {m}
              </label>
            ))}
          </div>
          <Button type="submit" className="w-full h-12 bg-rose-600 hover:bg-rose-700 rounded-full text-base">
            Confirmer la commande — {fmt(total + shipping)}
          </Button>
        </form>
      </div>
      <div className="md:col-span-2 bg-zinc-50 rounded-3xl p-6 h-fit">
        <p className="font-medium mb-4">Récapitulatif</p>
        {items.map((x, i) => (
          <div key={i} className="flex gap-3 mb-4 group relative">
            <img src={x.product.img} alt="" className="w-14 h-18 object-cover rounded-lg" />
            <div className="flex-1 text-sm">
              <p className="font-medium">{x.product.name}</p>
              <p className="text-zinc-500 text-xs">Taille {x.size} × {x.qty}</p>
              <p className="text-rose-700 font-medium">{fmt(x.product.price * x.qty)}</p>
            </div>
            <button onClick={() => remove(i)} className="text-zinc-300 hover:text-rose-600"><X className="w-4 h-4" /></button>
          </div>
        ))}
        <div className="border-t pt-4 space-y-2 text-sm">
          <div className="flex justify-between"><span>Sous-total</span><span>{fmt(total)}</span></div>
          <div className="flex justify-between"><span>Livraison</span><span>{shipping === 0 ? <span className="text-emerald-600">Offerte</span> : fmt(shipping)}</span></div>
          <div className="flex justify-between font-semibold text-base pt-2 border-t"><span>Total</span><span>{fmt(total + shipping)}</span></div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <Badge className="bg-rose-100 text-rose-700 rounded-full">Notre histoire</Badge>
      <h1 className="font-serif text-4xl mt-4">Deborah Fashion Boutique</h1>
      <p className="text-zinc-600 mt-6 leading-relaxed">
        Née d'une passion pour le style africain contemporain, Deborah Fashion Boutique habille la femme moderne qui veut se sentir élégante, confiante et unique. Chaque pièce est sélectionnée ou confectionnée avec des tissus authentiques et des ateliers locaux.
      </p>
      <div className="grid grid-cols-3 gap-6 mt-12">
        {[["2000+", "Clientes heureuses"], ["48h", "Livraison express Kin"], ["4.8★", "Note moyenne"]].map(([n, l]) => (
          <div key={l}><p className="font-serif text-3xl text-rose-600">{n}</p><p className="text-sm text-zinc-500 mt-1">{l}</p></div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------- App ------------------------- */
export default function App() {
  return (
    <CartCtx.Provider value={null}>
      <MemoryRouter initialEntries={["/"]}>
        <StoreProvider>
          <div className="min-h-screen flex flex-col font-sans text-zinc-900" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/boutique" element={<Boutique />} />
                <Route path="/produit/:id" element={<ProductPage />} />
                <Route path="/commande" element={<Checkout />} />
                <Route path="/a-propos" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </StoreProvider>
      </MemoryRouter>
    </CartCtx.Provider>
  );
}
