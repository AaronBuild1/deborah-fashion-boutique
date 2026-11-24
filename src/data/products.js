export const IMG = (id, w = 600, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const PRODUCTS = [
  {
    id: 1, name: "Robe Wax Élégance", category: "Robes", price: 45, oldPrice: 55,
    rating: 4.9, reviews: 32, badge: "Best-seller",
    colors: ["#b45309", "#1e1b4b", "#be123c"],
    desc: "Robe midi en wax authentique, coupe cintrée à la taille, manches légères bouffantes. Confectionnée à Kinshasa dans un atelier partenaire.",
    img: IMG("1583391733956-6c78276477e2"),
    imgs: [IMG("1583391733956-6c78276477e2"), IMG("1595777457583-95e059d581b8")]
  },
  {
    id: 2, name: "Ensemble Satin Luna", category: "Ensembles", price: 62, oldPrice: null,
    rating: 4.8, reviews: 19, badge: null,
    colors: ["#111827", "#7c3aed", "#d97706"],
    desc: "Ensemble deux pièces en satin fluide : chemisier à col montant et pantalon large taille haute. Parfait pour les soirées.",
    img: IMG("1594633312681-425c7b97ccd1"),
    imgs: [IMG("1594633312681-425c7b97ccd1"), IMG("1596783074918-c84cb06531ca")]
  },
  {
    id: 3, name: "Trench Beige Kin", category: "Manteaux", price: 89, oldPrice: 105,
    rating: 4.7, reviews: 11, badge: "-15%",
    colors: ["#d6c5a8", "#78716c"],
    desc: "Trench long ceinturé, tissu déperlant léger, doublure satinée. L'indispensable de la saison des pluies.",
    img: IMG("1539109136881-3be0616acf4b"),
    imgs: [IMG("1539109136881-3be0616acf4b"), IMG("1525507119028-ed4c629a60a3")]
  },
  {
    id: 4, name: "Combinaison Braise", category: "Combinaisons", price: 54, oldPrice: null,
    rating: 4.9, reviews: 27, badge: "Nouveau",
    colors: ["#b91c1c", "#0f172a", "#a16207"],
    desc: "Combinaison courte à bretelles réglables, décolleté carré, poche latérale. Élégante du bureau au dîner.",
    img: IMG("1515372039744-b8f02a3ae446"),
    imgs: [IMG("1515372039744-b8f02a3ae446"), IMG("1496747611176-843222e1e57c")]
  },
  {
    id: 5, name: "Chemisier Soie Étoile", category: "Hauts", price: 32, oldPrice: null,
    rating: 4.6, reviews: 40, badge: null,
    colors: ["#f8fafc", "#c084fc", "#334155"],
    desc: "Chemisier fluide en soie mélangée, boutons nacrés, coupe légèrement oversize.",
    img: IMG("1485968579580-b6d095142e6e"),
    imgs: [IMG("1485968579580-b6d095142e6e"), IMG("1490481651871-ab68de25d43d")]
  },
  {
    id: 6, name: "Jupe Longue Bogolan", category: "Jupes", price: 38, oldPrice: 45,
    rating: 4.8, reviews: 23, badge: "Best-seller",
    colors: ["#292524", "#b45309", "#166534"],
    desc: "Jupe longue portefeuille en bogolan, taille élastiquée confort, fente latérale.",
    img: IMG("1583496661160-fb5886a13d44"),
    imgs: [IMG("1583496661160-fb5886a13d44"), IMG("1529139574466-a303027c1d8b")]
  },
  {
    id: 7, name: "Tailleur Orange Sunrise", category: "Ensembles", price: 75, oldPrice: null,
    rating: 5.0, reviews: 8, badge: "Nouveau",
    colors: ["#ea580c", "#171717", "#fbbf24"],
    desc: "Blazer + pantalon cigarette, épaules structurées, doublure imprimée. Look power.",
    img: IMG("1581044777550-4cfa60707c03"),
    imgs: [IMG("1581044777550-4cfa60707c03"), IMG("1509631179647-0177331693ae")]
  },
  {
    id: 8, name: "Robe Soirée Nuit Africaine", category: "Robes", price: 98, oldPrice: 120,
    rating: 4.9, reviews: 15, badge: "Édition limitée",
    colors: ["#111827", "#7e22ce"],
    desc: "Robe longue dos nu, tissu plissé effet métallique, mémoire de forme.",
    img: IMG("1566174053879-31528523f9ae"),
    imgs: [IMG("1566174053879-31528523f9ae"), IMG("1595777457583-95e059d581b8")]
  },
];

export const CATEGORIES = ["Tous", "Robes", "Ensembles", "Manteaux", "Combinaisons", "Hauts", "Jupes"];

export const FREE_SHIPPING_THRESHOLD = 100;
export const SHIPPING_FEE = 5;

export const fmt = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export const promoLabel = (p) => {
  if (p.oldPrice) return "Promo";
  if (p.badge) return p.badge;
  return null;
};
