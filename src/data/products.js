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
  {
    id: 9, name: "Petite Robe Soleil", category: "Robes", price: 26, oldPrice: null,
    rating: 4.8, reviews: 12, badge: "Nouveau",
    colors: ["#fb7185", "#f59e0b", "#faf9f7"],
    desc: "Petite robe courte en crépe fluide, bretelles fines et dos ouvert. La pièce idéale pour les chaudes soirées kinoises.",
    img: IMG("1487222477894-8943e31ef7b2"),
    imgs: [IMG("1487222477894-8943e31ef7b2"), IMG("1517841905240-472988babdf9")]
  },
  {
    id: 10, name: "Short Satin Nuit", category: "Shorts", price: 22, oldPrice: null,
    rating: 4.7, reviews: 14, badge: null,
    colors: ["#111827", "#7e22ce", "#be123c"],
    desc: "Short taille haute en satin, coupe ajustée et tombé brillant. À marier au Crop Top Étoile pour une tenue de sortie complète.",
    img: IMG("1571945153237-4929e783af4a"),
    imgs: [IMG("1571945153237-4929e783af4a"), IMG("1524504388940-b1c1722653e1")]
  },
  {
    id: 11, name: "Crop Top Étoile", category: "Hauts", price: 18, oldPrice: null,
    rating: 4.6, reviews: 21, badge: null,
    colors: ["#faf9f7", "#0a0a0a", "#ec4899"],
    desc: "Crop top côtelé à encolure carrée, tissu stretch confort. Se porte avec un short satin ou un jean taille haute.",
    img: IMG("1515886657613-9f3515b0c78f"),
    imgs: [IMG("1515886657613-9f3515b0c78f"), IMG("1495385794356-15371f348c31")]
  },
  {
    id: 12, name: "Mini Robe Braise", category: "Robes", price: 32, oldPrice: 39,
    rating: 4.9, reviews: 18, badge: null,
    colors: ["#b91c1c", "#0a0a0a", "#f59e0b"],
    desc: "Mini robe moulante en tissu scintillant, fermeture éclair invisible. L'atout séduction de vos samedis soir.",
    img: IMG("1509631179647-0177331693ae"),
    imgs: [IMG("1509631179647-0177331693ae"), IMG("1554568218-0f1715e72254")]
  },
  {
    id: 13, name: "Sweat Kin Oversize", category: "Sweats", price: 30, oldPrice: null,
    rating: 4.8, reviews: 25, badge: "Nouveau",
    colors: ["#faf9f7", "#0a0a0a", "#ea580c"],
    desc: "Sweat oversize en molleton doux, broderie skyline de Kinshasa sur la poitrine. Le confort du quotidien, l'esprit maison.",
    img: IMG("1434389677669-e08b4cac3105"),
    imgs: [IMG("1434389677669-e08b4cac3105"), IMG("1556821840-3a63f95609a7")]
  },
  {
    id: 14, name: "Survêtement Braise Chill", category: "Sweats", price: 48, oldPrice: null,
    rating: 4.7, reviews: 9, badge: null,
    colors: ["#111827", "#b91c1c", "#a16207"],
    desc: "Ensemble sweat + jogger assorti, coupe détendue et poches profondes. Trajets en ville ou soirée chill, l'allure en plus.",
    img: IMG("1523381210434-271e8be1f52b"),
    imgs: [IMG("1523381210434-271e8be1f52b"), IMG("1508214751196-bcfd4ca60f91")]
  },
  {
    id: 15, name: "Duo City Crop & Short", category: "Shorts", price: 40, oldPrice: null,
    rating: 4.8, reviews: 11, badge: "Nouveau",
    colors: ["#f59e0b", "#faf9f7", "#0ea5e9"],
    desc: "Duo assorti crop top + short taille haute en lin mélangé, couleurs soleil. La tenue des sorties en ville, du matin au crépuscule.",
    img: IMG("1483985988355-763728e1935b"),
    imgs: [IMG("1483985988355-763728e1935b"), IMG("1496747611176-843222e1e57c")]
  },
  {
    id: 16, name: "Ensemble Éclat Soirée", category: "Ensembles", price: 52, oldPrice: 65,
    rating: 4.9, reviews: 7, badge: null,
    colors: ["#be123c", "#111827", "#c084fc"],
    desc: "Top drapé et jupe satin fuselée, finitions scintillantes. Sexy, confortable, parfait pour les nuits de Kinshasa.",
    img: IMG("1508214751196-bcfd4ca60f91"),
    imgs: [IMG("1508214751196-bcfd4ca60f91"), IMG("1595777457583-95e059d581b8")]
  },
];

export const CATEGORIES = [
  "Tous",
  "Robes",
  "Shorts",
  "Ensembles",
  "Hauts",
  "Sweats",
  "Jupes",
  "Manteaux",
  "Combinaisons",
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
