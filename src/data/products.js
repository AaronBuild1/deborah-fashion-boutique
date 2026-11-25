export const IMG = (id, w = 600, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

/*
 * Catalogue Deborah Fashion — MAQUETTE.
 * Toutes les données sont provisoires : prix indicatifs (USD), matières, entretien,
 * disponibilité et photos. À remplacer par les vraies données fournies par la boutique.
 * Les photos sont des visuels provisoires : toute photo avec mannequin devra être
 * remplacée par des photos de mannequins africaines (shooting Deborah).
 */

const APPAREL_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const ONE_SIZE = ["Taille unique"];

export const PRODUCTS = [
  /* ---------- Robes ---------- */
  {
    id: 1, ref: "DF-001", name: "Robe Midi Imprimée", category: "Robes", price: 58, oldPrice: null,
    badge: "Best-seller", trend: "Imprimés fleuris",
    colors: ["#b45309", "#1e1b4b", "#be123c"], sizes: APPAREL_SIZES,
    material: "Viscose imprimée", care: "Lavage à 30°, ne pas sécher en machine",
    desc: "Robe midi imprimée, coupe cintrée à la taille et manches légères bouffantes. Une pièce fluide pour la journée comme pour les sorties.",
    img: IMG("1664151099736-1ac6365a25aa"), imgs: [IMG("1664151099736-1ac6365a25aa"), IMG("1769349661389-0737f39a8507")]
  },
  {
    id: 2, ref: "DF-002", name: "Robe Fluide Longue", category: "Robes", price: 85, oldPrice: null,
    badge: null, trend: "Robe fluide longue",
    colors: ["#111827", "#a16207", "#f5efe6"], sizes: APPAREL_SIZES,
    material: "Crepé fluide", care: "Lavage délicat à froid, séchage à plat",
    desc: "Robe longue à la coupe écoulée, taille marquée et finitions soignées. La féminité moderne, sans effort.",
    img: IMG("1567532939604-b6b5b0db2604"), imgs: [IMG("1567532939604-b6b5b0db2604"), IMG("1509967419530-da38b4704bc6")]
  },
  {
    id: 3, ref: "DF-003", name: "Robe Soirée Nuit Plissée", category: "Robes", price: 120, oldPrice: 140,
    badge: "Édition limitée", trend: "Effet métallique",
    colors: ["#111827", "#7e22ce"], sizes: APPAREL_SIZES,
    material: "Polyester plissé", care: "Nettoyage à sec recommandé",
    desc: "Robe longue dos nu en tissu plissé à l'effet métallique, mémoire de forme. Pensée pour les soirées.",
    img: IMG("1559172802-f5de3d1ed91d"), imgs: [IMG("1559172802-f5de3d1ed91d"), IMG("1515886657613-9f3515b0c78f")]
  },
  {
    id: 4, ref: "DF-004", name: "Petite Robe Soleil", category: "Robes", price: 32, oldPrice: null,
    badge: "Nouveau", trend: "Robe courte d'été",
    colors: ["#fb7185", "#f59e0b", "#faf9f7"], sizes: APPAREL_SIZES,
    material: "Crepé de viscose", care: "Lavage à 30°, repassage doux",
    desc: "Petite robe courte en crépe fluide, bretelles fines et dos ouvert. La pièce idéale pour les soirées chaudes.",
    img: IMG("1604733674304-82a3bfa353f2"), imgs: [IMG("1604733674304-82a3bfa353f2"), IMG("1500637883394-da696c7d2ed2")]
  },
  {
    id: 5, ref: "DF-005", name: "Robe de Soirée Sequins", category: "Robes", price: 110, oldPrice: null,
    badge: "Nouveau", trend: "Sequins de soirée",
    colors: ["#111827", "#be123c", "#d6c5a8"], sizes: APPAREL_SIZES,
    material: "Maille brisée à sequins", care: "Nettoyage à sec uniquement",
    desc: "Robe moulante à sequins, col bateau et fermeture invisible. Un statement pour les soirées.",
    img: IMG("1523824921871-d6f1a15151f1"), imgs: [IMG("1523824921871-d6f1a15151f1"), IMG("1604733674304-82a3bfa353f2")]
  },

  /* ---------- Jupes ---------- */
  {
    id: 6, ref: "DF-006", name: "Jupe Longue en Maille", category: "Jupes", price: 48, oldPrice: null,
    badge: "Tendance", trend: "Jupe longue en maille",
    colors: ["#292524", "#78716c", "#d6c5a8"], sizes: APPAREL_SIZES,
    material: "Maille côtelée (viscose mélangée)", care: "Lavage à froid, séchage à plat",
    desc: "Jupe longue en maille à la taille élastiquée et au tombant souple. La pièce tendance de la saison, à porter avec un haut ajusté.",
    img: IMG("1596626417050-39c7f6ddd2c9"), imgs: [IMG("1596626417050-39c7f6ddd2c9"), IMG("1552710307-537199cd41c0")]
  },
  {
    id: 7, ref: "DF-007", name: "Jupe Longue Portefeuille", category: "Jupes", price: 42, oldPrice: 52,
    badge: "Best-seller", trend: "Jupe longue",
    colors: ["#292524", "#b45309", "#166534"], sizes: APPAREL_SIZES,
    material: "Viscose", care: "Lavage à 30°",
    desc: "Jupe longue portefeuille, taille élastiquée confort et fente latérale. Du bureau au dîné.",
    img: IMG("1552710307-537199cd41c0"), imgs: [IMG("1552710307-537199cd41c0"), IMG("1596626417050-39c7f6ddd2c9")]
  },

  /* ---------- Pantalons ---------- */
  {
    id: 8, ref: "DF-008", name: "Palazzo Ample", category: "Pantalons", price: 55, oldPrice: null,
    badge: "Tendance", trend: "Palazzo, pantalon fluide",
    colors: ["#111827", "#d6c5a8", "#78716c"], sizes: APPAREL_SIZES,
    material: "Crépe fluide", care: "Lavage à 30°, repassage doux",
    desc: "Pantalon palazzo taille haute, jambe ample et ligne aérienne. Il allonge la silhouette et se marie aux hauts courts comme aux blouses.",
    img: IMG("1509631179647-0177331693ae"), imgs: [IMG("1509631179647-0177331693ae"), IMG("1581044777550-4cfa60707c03")]
  },
  {
    id: 9, ref: "DF-009", name: "Pantalon Taille Haute Fluide", category: "Pantalons", price: 50, oldPrice: null,
    badge: null, trend: "Pantalon taille haute",
    colors: ["#1e1b4b", "#f5efe6", "#be123c"], sizes: APPAREL_SIZES,
    material: "Viscose mélangée", care: "Lavage à 30°",
    desc: "Pantalon fluide à taille haute et pinces, coupe droite. Une base polyvalente pour le bureau.",
    img: IMG("1524504388940-b1c1722653e1"), imgs: [IMG("1524504388940-b1c1722653e1"), IMG("1622445275576-721325763afe")]
  },

  /* ---------- Hauts ---------- */
  {
    id: 10, ref: "DF-010", name: "Chemisier Soie Étoile", category: "Hauts", price: 38, oldPrice: null,
    badge: null, trend: "Satin et fluidité",
    colors: ["#f8fafc", "#c084fc", "#334155"], sizes: APPAREL_SIZES,
    material: "Soie mélangée", care: "Lavage délicat à froid",
    desc: "Chemisier fluide en soie mélangée, boutons nacrés et coupe légèrement oversize.",
    img: IMG("1589156280159-27698a70f29e"), imgs: [IMG("1589156280159-27698a70f29e"), IMG("1517841905240-472988babdf9")]
  },
  {
    id: 11, ref: "DF-011", name: "Crop Top Étoile", category: "Hauts", price: 20, oldPrice: null,
    badge: null, trend: "Crop top",
    colors: ["#faf9f7", "#0a0a0a", "#ec4899"], sizes: APPAREL_SIZES,
    material: "Côtel stretch", care: "Lavage à 30°",
    desc: "Crop top côtelé à encolure carrée et tissu stretch confort. Se porte avec un short satin ou un jean taille haute.",
    img: IMG("1548142813-c348350df52b"), imgs: [IMG("1548142813-c348350df52b"), IMG("1517841905240-472988babdf9")]
  },
  {
    id: 12, ref: "DF-012", name: "Polo Femme Structuré", category: "Hauts", price: 30, oldPrice: null,
    badge: null, trend: "Polo féminin repensé",
    colors: ["#faf9f7", "#1e1b4b", "#d97706"], sizes: APPAREL_SIZES,
    material: "Coton piqué", care: "Lavage à 30°",
    desc: "Polo à coupe féminine, col structuré et fermeture bouée à deux boutons. Un classique revisité.",
    img: IMG("1517841905240-472988babdf9"), imgs: [IMG("1517841905240-472988babdf9"), IMG("1548142813-c348350df52b")]
  },
  {
    id: 13, ref: "DF-013", name: "Haut en Satin", category: "Hauts", price: 34, oldPrice: null,
    badge: null, trend: "Satin",
    colors: ["#111827", "#7c3aed", "#d6c5a8"], sizes: APPAREL_SIZES,
    material: "Satin polyester", care: "Lavage délicat à froid",
    desc: "Haut en satin à bretelles fines et encolure drapée. Se superpose sous une veste ou se porte seul.",
    img: IMG("1500637883394-da696c7d2ed2"), imgs: [IMG("1500637883394-da696c7d2ed2"), IMG("1523824921871-d6f1a15151f1")]
  },

  /* ---------- Shorts ---------- */
  {
    id: 14, ref: "DF-014", name: "Short Satin Nuit", category: "Shorts", price: 24, oldPrice: null,
    badge: null, trend: "Satin",
    colors: ["#111827", "#7e22ce", "#be123c"], sizes: APPAREL_SIZES,
    material: "Satin polyester", care: "Lavage délicat à froid",
    desc: "Short taille haute en satin, coupe ajustée et tombé brillant. À marier au Crop Top Étoile pour une tenue de sortie.",
    img: IMG("1531123897727-8f129e1688ce"), imgs: [IMG("1531123897727-8f129e1688ce"), IMG("1515886657613-9f3515b0c78f")]
  },
  {
    id: 15, ref: "DF-015", name: "Short Tailleur Taille Haute", category: "Shorts", price: 36, oldPrice: null,
    badge: "Nouveau", trend: "Short tailleur",
    colors: ["#171717", "#d6c5a8", "#78716c"], sizes: APPAREL_SIZES,
    material: "Crépe structuré", care: "Lavage à 30° ou nettoyage à sec",
    desc: "Short tailleur taille haute, pli marqué et ceinture à passants. Le short de la saison, à porter avec une veste oversize.",
    img: IMG("1581044777550-4cfa60707c03"), imgs: [IMG("1581044777550-4cfa60707c03"), IMG("1509631179647-0177331693ae")]
  },

  /* ---------- Ensembles ---------- */
  {
    id: 16, ref: "DF-016", name: "Ensemble Satin Luna", category: "Ensembles", price: 68, oldPrice: null,
    badge: null, trend: "Satin et fluidité",
    colors: ["#111827", "#7c3aed", "#d97706"], sizes: APPAREL_SIZES,
    material: "Satin fluide", care: "Lavage délicat à froid",
    desc: "Ensemble deux pièces en satin : chemisier à col montant et pantalon large taille haute. Parfait pour les soirées.",
    img: IMG("1524504388940-b1c1722653e1"), imgs: [IMG("1524504388940-b1c1722653e1"), IMG("1589156280159-27698a70f29e")]
  },
  {
    id: 17, ref: "DF-017", name: "Ensemble Deux-Pièces Taille Haute", category: "Ensembles", price: 66, oldPrice: null,
    badge: "Tendance", trend: "Deux-pièces taille haute",
    colors: ["#111827", "#f8fafc", "#b91c1c"], sizes: APPAREL_SIZES,
    material: "Viscose mélangée", care: "Lavage à 30°",
    desc: "Top court et jupe ou pantalon taille haute, coupe nette. Le duo qui allonge la silhouette.",
    img: IMG("1708533643647-987a66a2cc00"), imgs: [IMG("1708533643647-987a66a2cc00"), IMG("1555991638-aaa071fa6f58")]
  },
  {
    id: 18, ref: "DF-018", name: "Ensemble Éclat Soirée", category: "Ensembles", price: 58, oldPrice: 70,
    badge: null, trend: "Pièces de soirée",
    colors: ["#be123c", "#111827", "#c084fc"], sizes: APPAREL_SIZES,
    material: "Satin et finitions scintillantes", care: "Nettoyage à sec recommandé",
    desc: "Top drapé et jupe satin fuselée, finitions scintillantes. Confortable et sophistiqué pour les soirées.",
    img: IMG("1500637883394-da696c7d2ed2"), imgs: [IMG("1500637883394-da696c7d2ed2"), IMG("1523824921871-d6f1a15151f1")]
  },

  /* ---------- Blazers & Tailleurs ---------- */
  {
    id: 19, ref: "DF-019", name: "Tailleur Orange Sunrise", category: "Blazers & Tailleurs", price: 78, oldPrice: null,
    badge: "Nouveau", trend: "Tailoring fluide",
    colors: ["#ea580c", "#171717", "#fbbf24"], sizes: APPAREL_SIZES,
    material: "Polyester mélangé", care: "Nettoyage à sec recommandé",
    desc: "Blazer et pantalon cigarette, épaules structurées et doublure imprimée. Le look power de la saison.",
    img: IMG("1581044777550-4cfa60707c03"), imgs: [IMG("1581044777550-4cfa60707c03"), IMG("1509631179647-0177331693ae")]
  },
  {
    id: 20, ref: "DF-020", name: "Blazer Oversize", category: "Blazers & Tailleurs", price: 65, oldPrice: null,
    badge: "Tendance", trend: "Blazer oversize",
    colors: ["#171717", "#d6c5a8", "#78716c"], sizes: APPAREL_SIZES,
    material: "Maille de laine mélangée", care: "Lavage à froid, séchage à plat",
    desc: "Blazer oversize à épaules tombantes, boutonnage simple et poches plaquées. Se porte ouvert sur une robe ou fermé sur un jean.",
    img: IMG("1622445275576-721325763afe"), imgs: [IMG("1622445275576-721325763afe"), IMG("1531123897727-8f129e1688ce")]
  },

  /* ---------- Mailles ---------- */
  {
    id: 21, ref: "DF-021", name: "Pull Losanges", category: "Mailles", price: 42, oldPrice: null,
    badge: null, trend: "Maille losanges",
    colors: ["#f5efe6", "#1e1b4b", "#a16207"], sizes: APPAREL_SIZES,
    material: "Maille acrylique mélangée", care: "Lavage à froid, séchage à plat",
    desc: "Pull en maille jacquard à motif losanges, col rond et coupe confortable. Le pièce chaude de la saison.",
    img: IMG("1555991638-aaa071fa6f58"), imgs: [IMG("1555991638-aaa071fa6f58"), IMG("1768212565426-58b089b6386d")]
  },

  /* ---------- Sweats ---------- */
  {
    id: 22, ref: "DF-022", name: "Sweat Court Oversize", category: "Sweats", price: 32, oldPrice: null,
    badge: "Nouveau", trend: "Streetwear féminin",
    colors: ["#faf9f7", "#0a0a0a", "#ea580c"], sizes: APPAREL_SIZES,
    material: "Molleton coton", care: "Lavage à 30°, séchage à l'air",
    desc: "Sweat court oversize en molleton doux, à porter sur un short satin ou un jean. L'esprit streetwear féminin.",
    img: IMG("1708533643647-987a66a2cc00"), imgs: [IMG("1708533643647-987a66a2cc00"), IMG("1555991638-aaa071fa6f58")]
  },
  {
    id: 23, ref: "DF-023", name: "Ensemble Lounge Sweat", category: "Sweats", price: 52, oldPrice: null,
    badge: null, trend: "Ensemble coordonné",
    colors: ["#111827", "#b91c1c", "#a16207"], sizes: APPAREL_SIZES,
    material: "Molleton coton", care: "Lavage à 30°",
    desc: "Duo sweat court + short taille haute, coupe relaxée et poches profondes. Trajets en ville ou soirée chill.",
    img: IMG("1769349661389-0737f39a8507"), imgs: [IMG("1769349661389-0737f39a8507"), IMG("1555991638-aaa071fa6f58")]
  },

  /* ---------- Manteaux ---------- */
  {
    id: 24, ref: "DF-024", name: "Trench Beige Long", category: "Manteaux", price: 89, oldPrice: 105,
    badge: null, trend: "Trench",
    colors: ["#d6c5a8", "#78716c"], sizes: APPAREL_SIZES,
    material: "Coton déperlant", care: "Nettoyage à sec recommandé",
    desc: "Trench long ceinturé, tissu déperlant léger et doublure satinée. L'indispensable de la saison des pluies.",
    img: IMG("1622445275576-721325763afe"), imgs: [IMG("1622445275576-721325763afe"), IMG("1531123897727-8f129e1688ce")]
  },
  {
    id: 25, ref: "DF-025", name: "Manteau Long en Laine", category: "Manteaux", price: 120, oldPrice: null,
    badge: "Nouveau", trend: "Manteau long",
    colors: ["#171717", "#78716c", "#d6c5a8"], sizes: APPAREL_SIZES,
    material: "Laine mélangée", care: "Nettoyage à sec recommandé",
    desc: "Manteau long boutonnage croisé, col officier et coupe ample. Une pièce d'hiver qui structure la silhouette.",
    img: IMG("1531123897727-8f129e1688ce"), imgs: [IMG("1531123897727-8f129e1688ce"), IMG("1622445275576-721325763afe")]
  },

  /* ---------- Combinaisons ---------- */
  {
    id: 26, ref: "DF-026", name: "Combinaison Braise", category: "Combinaisons", price: 54, oldPrice: null,
    badge: "Nouveau", trend: "Combinaison",
    colors: ["#b91c1c", "#0f172a", "#a16207"], sizes: APPAREL_SIZES,
    material: "Crépe fluide", care: "Lavage à 30°, repassage doux",
    desc: "Combinaison courte à bretelles réglables, décolleté carré et poche latérale. Élégante du bureau au dîné.",
    img: IMG("1717064153056-84b0e7c8bf15"), imgs: [IMG("1717064153056-84b0e7c8bf15"), IMG("1509967419530-da38b4704bc6")]
  },

  /* ---------- Accessoires ---------- */
  {
    id: 27, ref: "DF-027", name: "Collier Or Ras-de-cou", category: "Accessoires", price: 22, oldPrice: null,
    badge: null, trend: "Bijoux or",
    colors: ["#c9a227"], sizes: ONE_SIZE,
    material: "Plaqué or", care: "Éviter l'eau et les parfums",
    desc: "Collier ras-de-cou à maillons fins, plaqué or. Une touche dorée pour toutes les tenues.",
    img: IMG("1515886657613-9f3515b0c78f"), imgs: [IMG("1515886657613-9f3515b0c78f"), IMG("1604733674304-82a3bfa353f2")]
  },
  {
    id: 28, ref: "DF-028", name: "Pochette Satin", category: "Accessoires", price: 26, oldPrice: null,
    badge: null, trend: "Pochette de soirée",
    colors: ["#111827", "#be123c", "#d6c5a8"], sizes: ONE_SIZE,
    material: "Satin", care: "Nettoyage délicat à sec",
    desc: "Pochette en satin avec fermoir métallique et chaîne amovible. Pour les soirées.",
    img: IMG("1596626417050-39c7f6ddd2c9"), imgs: [IMG("1596626417050-39c7f6ddd2c9"), IMG("1500637883394-da696c7d2ed2")]
  },
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

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
