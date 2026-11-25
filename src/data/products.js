export const IMG = (id, w = 600, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

/*
 * Catalogue Deborah Fashion.
 * - Les produits `published: true` sont affichés sur le site.
 * - Les produits `published: false` sont des fiches brouillon issues des tendances
 *   de la saison : ils n'apparaissent pas tant que le prix, les tailles et la photo
 *   ne sont pas confirmés (aucun prix ni stock n'est inventé ici).
 * - Les photos avec mannequins doivent être de mannequins africaines.
 */
const ALL = [
  {
    id: 1, published: true, name: "Robe Midi Imprimée", category: "Robes", price: 45, oldPrice: 55,
    rating: 4.9, reviews: 32, badge: "Best-seller",
    colors: ["#b45309", "#1e1b4b", "#be123c"],
    desc: "Robe midi imprimée, coupe cintrée à la taille, manches légères bouffantes.",
    img: IMG("1664151099736-1ac6365a25aa"),
    imgs: [IMG("1664151099736-1ac6365a25aa"), IMG("1769349661389-0737f39a8507")]
  },
  {
    id: 2, published: true, name: "Ensemble Satin Luna", category: "Ensembles", price: 62, oldPrice: null,
    rating: 4.8, reviews: 19, badge: null,
    colors: ["#111827", "#7c3aed", "#d97706"],
    desc: "Ensemble deux pièces en satin fluide : chemisier à col montant et pantalon large taille haute. Parfait pour les soirées.",
    img: IMG("1524504388940-b1c1722653e1"),
    imgs: [IMG("1524504388940-b1c1722653e1"), IMG("1589156280159-27698a70f29e")]
  },
  {
    id: 3, published: true, name: "Trench Beige Long", category: "Manteaux", price: 89, oldPrice: 105,
    rating: 4.7, reviews: 11, badge: "-15%",
    colors: ["#d6c5a8", "#78716c"],
    desc: "Trench long ceinturé, tissu déperlant léger, doublure satinée. L'indispensable de la saison des pluies.",
    img: IMG("1622445275576-721325763afe"),
    imgs: [IMG("1622445275576-721325763afe"), IMG("1531123897727-8f129e1688ce")]
  },
  {
    id: 4, published: true, name: "Combinaison Braise", category: "Combinaisons", price: 54, oldPrice: null,
    rating: 4.9, reviews: 27, badge: "Nouveau",
    colors: ["#b91c1c", "#0f172a", "#a16207"],
    desc: "Combinaison courte à bretelles réglables, décolleté carré, poche latérale. Élégante du bureau au dîné.",
    img: IMG("1717064153056-84b0e7c8bf15"),
    imgs: [IMG("1717064153056-84b0e7c8bf15"), IMG("1509967419530-da38b4704bc6")]
  },
  {
    id: 5, published: true, name: "Chemisier Soie Étoile", category: "Hauts", price: 32, oldPrice: null,
    rating: 4.6, reviews: 40, badge: null,
    colors: ["#f8fafc", "#c084fc", "#334155"],
    desc: "Chemisier fluide en soie mélangée, boutons nacrés, coupe légèrement oversize.",
    img: IMG("1589156280159-27698a70f29e"),
    imgs: [IMG("1589156280159-27698a70f29e"), IMG("1517841905240-472988babdf9")]
  },
  {
    id: 6, published: true, name: "Jupe Longue Portefeuille", category: "Jupes", price: 38, oldPrice: 45,
    rating: 4.8, reviews: 23, badge: "Best-seller",
    colors: ["#292524", "#b45309", "#166534"],
    desc: "Jupe longue portefeuille, taille élastiquée confort, fente latérale.",
    img: IMG("1596626417050-39c7f6ddd2c9"),
    imgs: [IMG("1596626417050-39c7f6ddd2c9"), IMG("1552710307-537199cd41c0")]
  },
  {
    id: 7, published: true, name: "Tailleur Orange Sunrise", category: "Blazers & Tailleurs", price: 75, oldPrice: null,
    rating: 5.0, reviews: 8, badge: "Nouveau",
    colors: ["#ea580c", "#171717", "#fbbf24"],
    desc: "Blazer + pantalon cigarette, épaules structurées, doublure imprimée.",
    img: IMG("1581044777550-4cfa60707c03"),
    imgs: [IMG("1581044777550-4cfa60707c03"), IMG("1509631179647-0177331693ae")]
  },
  {
    id: 8, published: true, name: "Robe Soirée Nuit Plissée", category: "Robes", price: 98, oldPrice: 120,
    rating: 4.9, reviews: 15, badge: "Édition limitée",
    colors: ["#111827", "#7e22ce"],
    desc: "Robe longue dos nu, tissu plissé effet métallique, mémoire de forme.",
    img: IMG("1567532939604-b6b5b0db2604"),
    imgs: [IMG("1567532939604-b6b5b0db2604"), IMG("1509967419530-da38b4704bc6")]
  },
  {
    id: 9, published: true, name: "Petite Robe Soleil", category: "Robes", price: 26, oldPrice: null,
    rating: 4.8, reviews: 12, badge: "Nouveau",
    colors: ["#fb7185", "#f59e0b", "#faf9f7"],
    desc: "Petite robe courte en crépe fluide, bretelles fines et dos ouvert. La pièce idéale pour les soirées chaudes.",
    img: IMG("1559172802-f5de3d1ed91d"),
    imgs: [IMG("1559172802-f5de3d1ed91d"), IMG("1515886657613-9f3515b0c78f")]
  },
  {
    id: 10, published: true, name: "Short Satin Nuit", category: "Shorts", price: 22, oldPrice: null,
    rating: 4.7, reviews: 14, badge: null,
    colors: ["#111827", "#7e22ce", "#be123c"],
    desc: "Short taille haute en satin, coupe ajustée et tombé brillant. À marier au Crop Top Étoile pour une tenue de sortie complète.",
    img: IMG("1531123897727-8f129e1688ce"),
    imgs: [IMG("1531123897727-8f129e1688ce"), IMG("1515886657613-9f3515b0c78f")]
  },
  {
    id: 11, published: true, name: "Crop Top Étoile", category: "Hauts", price: 18, oldPrice: null,
    rating: 4.6, reviews: 21, badge: null,
    colors: ["#faf9f7", "#0a0a0a", "#ec4899"],
    desc: "Crop top côtelé à encolure carrée, tissu stretch confort. Se porte avec un short satin ou un jean taille haute.",
    img: IMG("1548142813-c348350df52b"),
    imgs: [IMG("1548142813-c348350df52b"), IMG("1517841905240-472988babdf9")]
  },
  {
    id: 12, published: true, name: "Mini Robe Braise", category: "Robes", price: 32, oldPrice: 39,
    rating: 4.9, reviews: 18, badge: null,
    colors: ["#b91c1c", "#0a0a0a", "#f59e0b"],
    desc: "Mini robe moulante en tissu scintillant, fermeture éclair invisible. L'atout séduction de vos samedis soir.",
    img: IMG("1604733674304-82a3bfa353f2"),
    imgs: [IMG("1604733674304-82a3bfa353f2"), IMG("1500637883394-da696c7d2ed2")]
  },
  {
    id: 13, published: true, name: "Sweat Court Oversize", category: "Sweats", price: 30, oldPrice: null,
    rating: 4.8, reviews: 25, badge: "Nouveau",
    colors: ["#faf9f7", "#0a0a0a", "#ea580c"],
    desc: "Sweat court oversize, molleton doux et coupe courte, à porter sur un short satin ou un jean. L'esprit streetwear féminin.",
    img: IMG("1708533643647-987a66a2cc00"),
    imgs: [IMG("1708533643647-987a66a2cc00"), IMG("1555991638-aaa071fa6f58")]
  },
  {
    id: 14, published: true, name: "Ensemble Lounge Braise", category: "Sweats", price: 48, oldPrice: null,
    rating: 4.7, reviews: 9, badge: null,
    colors: ["#111827", "#b91c1c", "#a16207"],
    desc: "Duo sweat court + short taille haute, coupe relaxée et poches profondes. Trajets en ville ou soirée chill, l'allure en plus.",
    img: IMG("1769349661389-0737f39a8507"),
    imgs: [IMG("1769349661389-0737f39a8507"), IMG("1555991638-aaa071fa6f58")]
  },
  {
    id: 15, published: true, name: "Duo City Crop & Short", category: "Shorts", price: 40, oldPrice: null,
    rating: 4.8, reviews: 11, badge: "Nouveau",
    colors: ["#f59e0b", "#faf9f7", "#0ea5e9"],
    desc: "Duo assorti crop top + short taille haute en lin mélangé, couleurs soleil. La tenue des sorties en ville, du matin au crépuscule.",
    img: IMG("1515886657613-9f3515b0c78f"),
    imgs: [IMG("1515886657613-9f3515b0c78f"), IMG("1768212565426-58b089b6386d")]
  },
  {
    id: 16, published: true, name: "Ensemble Éclat Soirée", category: "Ensembles", price: 52, oldPrice: 65,
    rating: 4.9, reviews: 7, badge: null,
    colors: ["#be123c", "#111827", "#c084fc"],
    desc: "Top drapé et jupe satin fuselée, finitions scintillantes. Sexy, confortable, parfait pour les soirées.",
    img: IMG("1500637883394-da696c7d2ed2"),
    imgs: [IMG("1500637883394-da696c7d2ed2"), IMG("1523824921871-d6f1a15151f1")]
  },

  /* ---- Brouillons : tendances de la saison, à valider (prix, tailles, photos) ---- */
  { id: 101, published: false, name: "Jupe Longue en Maille", category: "Jupes", trend: "Jupe longue en maille" },
  { id: 102, published: false, name: "Robe Fluide Longue", category: "Robes", trend: "Robe fluide longue" },
  { id: 103, published: false, name: "Palazzo Ample", category: "Pantalons", trend: "Palazzo, pantalon fluide" },
  { id: 104, published: false, name: "Blazer Oversize", category: "Blazers & Tailleurs", trend: "Blazer oversize" },
  { id: 105, published: false, name: "Tailleur Fluide", category: "Blazers & Tailleurs", trend: "Tailoring fluide" },
  { id: 106, published: false, name: "Ensemble Deux-Pièces Taille Haute", category: "Ensembles", trend: "Deux-pièces taille haute" },
  { id: 107, published: false, name: "Polo Femme", category: "Hauts", trend: "Polo féminin repensé" },
  { id: 108, published: false, name: "Short Tailleur", category: "Shorts", trend: "Short tailleur" },
  { id: 109, published: false, name: "Haut en Satin", category: "Hauts", trend: "Satin et fluidité" },
  { id: 110, published: false, name: "Pull Losanges", category: "Mailles", trend: "Maille losanges" },
  { id: 111, published: false, name: "Robe de Soirée Sequins", category: "Robes", trend: "Sequins de soirée" },
  { id: 112, published: false, name: "Collier Or Ras-de-cou", category: "Accessoires", trend: "Bijoux or" },
].map((p) => ({
  colors: [],
  oldPrice: null,
  price: null,
  rating: null,
  reviews: 0,
  badge: null,
  desc: "Fiche en préparation : prix, tailles et photo à confirmer.",
  img: null,
  imgs: [],
  ...p,
}));

/* Catalogue visible sur le site */
export const PRODUCTS = ALL.filter((p) => p.published);

/* Fiches brouillon, non publiées */
export const DRAFT_PRODUCTS = ALL.filter((p) => !p.published);

const CATEGORY_ORDER = [
  "Robes",
  "Jupes",
  "Pantalons",
  "Hauts",
  "Shorts",
  "Ensembles",
  "Blazers & Tailleurs",
  "Mailles",
  "Sweats",
  "Manteaux",
  "Combinaisons",
  "Accessoires",
];

/* Catégories affichées : seulement celles qui ont au moins un produit publié */
export const CATEGORIES = [
  "Tous",
  ...CATEGORY_ORDER.filter((c) => PRODUCTS.some((p) => p.category === c)),
];

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
