export const IMG = (id, w = 600, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

/*
 * Catalogue Deborah Fashion — MAQUETTE.
 * Toutes les données sont provisoires : prix indicatifs (USD), matières, entretien
 * et disponibilité. À remplacer par les vraies données fournies par la boutique.
 *
 * ---------------------------------------------------------------------------
 * PHOTOS — PROVENANCE ET CRÉDITS
 * ---------------------------------------------------------------------------
 * Toutes les photos sont des visuels libres de droits provenant d'Unsplash
 * (licence Unsplash https://unsplash.com/license), choisis avec des mannequins
 * noires / d'origine africaine et une ambiance éditoriale moderne.
 * URLs construites via IMG() à partir des identifiants photo Unsplash :
 *
 * 1645390371590-b2af40ce3fdd — Amani Nation (@amani_nation), Nairobi
 * 1648190300042-61b2ae14b403 — Amani Nation (@amani_nation), Nairobi
 * 1649368471572-514b2f7755ac — Amani Nation (@amani_nation), Nairobi
 * 1593528977592-47f94831186c — Amani Nation (@amani_nation), Nairobi
 * 1720590283651-150857a19d8c — Amani Nation (@amani_nation), Nairobi
 * 1623762065223-e4d1e17cd3e6 — Amani Nation (@amani_nation), Nairobi
 * 1617006267067-ee715033fd69 — Amani Nation (@amani_nation), Nairobi
 * 1605947921571-968f66b22c86 — Amani Nation (@amani_nation), Nairobi
 * 1605947919292-7b62afb5e0b8 — Amani Nation (@amani_nation), Nairobi
 * 1600474356733-0a3094a9b0c3 — Amani Nation (@amani_nation), Nairobi
 * 1606596556959-5e9d2cf02d33 — Amani Nation (@amani_nation), Nairobi
 * 1602512214357-84321835eeeb — Amani Nation (@amani_nation), Nairobi
 * 1598559240084-1606f635879e — Amani Nation (@amani_nation), Nairobi
 * 1611348440902-6ecc67f7a7f4 — Amani Nation (@amani_nation), Nairobi
 * 1733555294950-270eb59bff11 — Amani Nation (@amani_nation), Nairobi
 * 1598559240160-28a25b8bcbd3 — Amani Nation (@amani_nation), Nairobi
 * 1690918845429-ebe653c94e5a — Amani Nation (@amani_nation), Nairobi
 * 1690918863741-5454c6083698 — Amani Nation (@amani_nation), Nairobi
 * 1602794837437-89ab353d5b4a — Amani Nation (@amani_nation), Nairobi
 * 1593529029635-98f6f19de3f5 — Amani Nation (@amani_nation), Nairobi
 * 1741275210031-6637c99135a9 — Amani Nation (@amani_nation), Nairobi
 * 1690361054404-9e126c422331 — Amani Nation (@amani_nation), Nairobi
 * 1647552054072-d1eaeaf8d9a9 — Amani Nation (@amani_nation), Nairobi
 * 1632765854612-9b02b6ec2b15 — Good Faces Agency (@goodfacesagency)
 * 1632765866070-3fadf25d3d5b — Good Faces Agency (@goodfacesagency)
 * 1781510537033-bcde1aad206b — Michael Kyule (@madness_leahcim_), Nairobi
 * 1737357126863-c6e6b1fff33d — Michael Kyule (@madness_leahcim_), Nairobi
 * 1718091708959-938f2f241329 — Michael Kyule (@madness_leahcim_), Nairobi
 * 1767249615394-c2f36d563a2d — Michael Kyule (@madness_leahcim_), Nairobi
 * 1708170236295-20ab8fbadcef — Shedrack Salami (@xtrovarts), Lagos
 * 1707162740897-cf2f057d2a41 — Dwayne Joe (@spliff_dj_joe), Kenya
 * 1772240520016-e8639030df5c — Atsu Tettey (@atsu_tettey), Tema, Ghana
 * 1772240520016-3a24feb301e5 — Atsu Tettey (@atsu_tettey), Tema, Ghana
 *
 * ---------------------------------------------------------------------------
 * IMPORTANT — REMPLACEMENT PAR LES VRAIES PHOTOS
 * ---------------------------------------------------------------------------
 * Ce sont des visuels provisoires présentant le catalogue. La structure est
 * centralisée ici : remplacer la photo d'un produit = changer l'identifiant
 * photo dans `img` et `imgs`.
 * Recommandation : photographier les VRAIS articles de la boutique puis
 * remplacer ces URLs — des vraies photos produit convertissent nettement
 * mieux qu'une banque d'images.
 */

const APPAREL_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const ONE_SIZE = ["Taille unique"];

export const PRODUCTS = [
  /* ---------- Robes ---------- */
  {
    id: 1, ref: "DF-001", name: "Robe Longue Azur", category: "Robes", price: 58, oldPrice: null,
    badge: "Best-seller", trend: "Robes longues fluides",
    colors: ["#2563eb", "#1e3a8a", "#f8fafc"], sizes: APPAREL_SIZES,
    material: "Viscose fluide", care: "Lavage à 30°, ne pas sécher en machine",
    desc: "Robe longue en tissu fluide, manches longues et silhouette allongée. Une pièce qui capte la lumière du jour comme des sorties.",
    img: IMG("1623762065223-e4d1e17cd3e6"), imgs: [IMG("1623762065223-e4d1e17cd3e6"), IMG("1648190300042-61b2ae14b403")]
  },
  {
    id: 2, ref: "DF-002", name: "Robe Fluide Solaire", category: "Robes", price: 85, oldPrice: null,
    badge: null, trend: "Robe fluide longue",
    colors: ["#93c5fd", "#d4b483", "#f5efe6"], sizes: APPAREL_SIZES,
    material: "Crêpe fluide", care: "Lavage délicat à froid, séchage à plat",
    desc: "Robe fluide aux tons ensoleillés, à porter avec un chapeau de paille pour un look de vacances instagrammable.",
    img: IMG("1648190300042-61b2ae14b403"), imgs: [IMG("1648190300042-61b2ae14b403"), IMG("1720590283651-150857a19d8c")]
  },
  {
    id: 3, ref: "DF-003", name: "Robe de Soirée Rubis", category: "Robes", price: 120, oldPrice: 140,
    badge: "Édition limitée", trend: "Robes de soirée",
    colors: ["#b91c1c", "#0f172a", "#7e22ce"], sizes: APPAREL_SIZES,
    material: "Crêpe doublé", care: "Nettoyage à sec recommandé",
    desc: "Robe de soirée sans manches au rouge profond, coupe ajustée et tombé net. Pensée pour les grandes occasions.",
    img: IMG("1617006267067-ee715033fd69"), imgs: [IMG("1617006267067-ee715033fd69"), IMG("1593528977592-47f94831186c")]
  },
  {
    id: 4, ref: "DF-004", name: "Petite Robe Soleil", category: "Robes", price: 32, oldPrice: null,
    badge: "Nouveau", trend: "Robe d'été",
    colors: ["#eab308", "#fde68a", "#faf9f7"], sizes: APPAREL_SIZES,
    material: "Crêpe de viscose", care: "Lavage à 30°, repassage doux",
    desc: "Petite robe jaune en crêpe fluide, à fleurs dans les cheveux. La pièce idéale pour les journées chaudes et les photos d'été.",
    img: IMG("1720590283651-150857a19d8c"), imgs: [IMG("1720590283651-150857a19d8c"), IMG("1648190300042-61b2ae14b403")]
  },
  {
    id: 5, ref: "DF-005", name: "Robe de Soirée Noire Élégance", category: "Robes", price: 110, oldPrice: null,
    badge: "Nouveau", trend: "Soirées et événements",
    colors: ["#0a0a0a", "#1f2937", "#d6c5a8"], sizes: APPAREL_SIZES,
    material: "Crêpe doublé", care: "Nettoyage à sec uniquement",
    desc: "Tenue de soirée toute en noir, silhouette élancée et allure tapis rouge. Un statement intemporel pour les nuits d'exception.",
    img: IMG("1593528977592-47f94831186c"), imgs: [IMG("1593528977592-47f94831186c"), IMG("1617006267067-ee715033fd69")]
  },

  /* ---------- Jupes ---------- */
  {
    id: 6, ref: "DF-006", name: "Jupe Rayée N&B", category: "Jupes", price: 48, oldPrice: null,
    badge: "Tendance", trend: "Jupes longues",
    colors: ["#0a0a0a", "#f5f5f4", "#78716c"], sizes: APPAREL_SIZES,
    material: "Coton mélangé", care: "Lavage à froid, séchage à plat",
    desc: "Jupe longue rayée noir et blanc, taille confort et tombé fluide. Se marie à un chemisier blanc pour un look éditorial.",
    img: IMG("1605947921571-968f66b22c86"), imgs: [IMG("1605947921571-968f66b22c86"), IMG("1605947919292-7b62afb5e0b8")]
  },
  {
    id: 7, ref: "DF-007", name: "Jupe Portefeuille Solaire", category: "Jupes", price: 42, oldPrice: 52,
    badge: "Best-seller", trend: "Jupe longue",
    colors: ["#f5f5f4", "#d97706", "#166534"], sizes: APPAREL_SIZES,
    material: "Viscose", care: "Lavage à 30°",
    desc: "Jupe longue à rayures ensoleillées, taille élastiquée confort et mouvement dans la marche. Du brunch au dîner.",
    img: IMG("1781510537033-bcde1aad206b"), imgs: [IMG("1781510537033-bcde1aad206b"), IMG("1647552054072-d1eaeaf8d9a9")]
  },

  /* ---------- Pantalons ---------- */
  {
    id: 8, ref: "DF-008", name: "Pantalon Jaune Sunlight", category: "Pantalons", price: 55, oldPrice: null,
    badge: "Tendance", trend: "Pantalon fluide",
    colors: ["#facc15", "#1e3a8a", "#f8fafc"], sizes: APPAREL_SIZES,
    material: "Crêpe fluide", care: "Lavage à 30°, repassage doux",
    desc: "Pantalon fluide jaune à taille haute, à porter avec un manteau bleu ou un top ajusté. La pièce statement de la saison.",
    img: IMG("1690918845429-ebe653c94e5a"), imgs: [IMG("1690918845429-ebe653c94e5a"), IMG("1690918863741-5454c6083698")]
  },
  {
    id: 9, ref: "DF-009", name: "Pantalon Fluide Framboise", category: "Pantalons", price: 50, oldPrice: null,
    badge: null, trend: "Pantalon taille haute",
    colors: ["#dc2626", "#eab308", "#111827"], sizes: APPAREL_SIZES,
    material: "Viscose mélangée", care: "Lavage à 30°",
    desc: "Pantalon fluide rouge framboise, taille haute et jambe dégagée. Une base audacieuse qui réveille toutes les tenues.",
    img: IMG("1690918863741-5454c6083698"), imgs: [IMG("1690918863741-5454c6083698"), IMG("1690918845429-ebe653c94e5a")]
  },

  /* ---------- Hauts ---------- */
  {
    id: 10, ref: "DF-010", name: "Chemisier Fleuri Vibrant", category: "Hauts", price: 38, oldPrice: null,
    badge: null, trend: "Fleurs et couleurs",
    colors: ["#eab308", "#dc2626", "#f8fafc"], sizes: APPAREL_SIZES,
    material: "Coton imprimé", care: "Lavage délicat à froid",
    desc: "Chemise manches longues à imprimé fleuri jaune et rouge. Lumière naturelle garantie sur le fil des instagrams.",
    img: IMG("1605947919292-7b62afb5e0b8"), imgs: [IMG("1605947919292-7b62afb5e0b8"), IMG("1600474356733-0a3094a9b0c3")]
  },
  {
    id: 11, ref: "DF-011", name: "Débardeur Orange Pop", category: "Hauts", price: 20, oldPrice: null,
    badge: null, trend: "Tank top",
    colors: ["#f97316", "#0a0a0a", "#f8fafc"], sizes: APPAREL_SIZES,
    material: "Coton stretch", care: "Lavage à 30°",
    desc: "Débardeur orange vif, coupe près du corps. Se porte avec un jean taille haute et des lunettes de soleil pour un look influenceuse.",
    img: IMG("1606596556959-5e9d2cf02d33"), imgs: [IMG("1606596556959-5e9d2cf02d33"), IMG("1602512214357-84321835eeeb")]
  },
  {
    id: 12, ref: "DF-012", name: "Chemise Pastel Tricolore", category: "Hauts", price: 30, oldPrice: null,
    badge: null, trend: "Chemises girly",
    colors: ["#f9a8d4", "#60a5fa", "#fde047"], sizes: APPAREL_SIZES,
    material: "Coton", care: "Lavage à 30°",
    desc: "Chemise manches longues en tons pastel rose, bleu et jaune. Une pièce qui illumine toutes les garde-robes.",
    img: IMG("1611348440902-6ecc67f7a7f4"), imgs: [IMG("1611348440902-6ecc67f7a7f4"), IMG("1598559240084-1606f635879e")]
  },
  {
    id: 13, ref: "DF-013", name: "Top Rose Poudré", category: "Hauts", price: 34, oldPrice: null,
    badge: null, trend: "Tops et blouses",
    colors: ["#f472b6", "#fb7185", "#faf9f7"], sizes: APPAREL_SIZES,
    material: "Coton doux", care: "Lavage délicat à froid",
    desc: "Top rose poudré à la coupe douce. Se superpose sous une veste ou se porte seul, avec un sourire.",
    img: IMG("1733555294950-270eb59bff11"), imgs: [IMG("1733555294950-270eb59bff11"), IMG("1741275210031-6637c99135a9")]
  },

  /* ---------- Shorts ---------- */
  {
    id: 14, ref: "DF-014", name: "Short en Jean Noir", category: "Shorts", price: 24, oldPrice: null,
    badge: null, trend: "Shorts de saison",
    colors: ["#171717", "#b91c1c", "#eab308"], sizes: APPAREL_SIZES,
    material: "Denim", care: "Lavage à 30°",
    desc: "Short en denim noir taille haute, se marie à une chemise à carreaux pour un look streetwear chic.",
    img: IMG("1598559240160-28a25b8bcbd3"), imgs: [IMG("1598559240160-28a25b8bcbd3"), IMG("1598559240084-1606f635879e")]
  },
  {
    id: 15, ref: "DF-015", name: "Tenue Streetwear Urbaine", category: "Ensembles", price: 36, oldPrice: null,
    badge: "Nouveau", trend: "Streetwear chic",
    colors: ["#171717", "#92400e", "#78716c"], sizes: APPAREL_SIZES,
    material: "Coton mélangé", care: "Lavage à 30° ou nettoyage à sec",
    desc: "Look streetwear urbain posé au sol comme en éditorial. La tenue influenceuse qui fait la différence en photo.",
    img: IMG("1708170236295-20ab8fbadcef"), imgs: [IMG("1708170236295-20ab8fbadcef"), IMG("1737357126863-c6e6b1fff33d")]
  },

  /* ---------- Ensembles ---------- */
  {
    id: 16, ref: "DF-016", name: "Ensemble Éditorial Couleurs", category: "Ensembles", price: 68, oldPrice: null,
    badge: null, trend: "Pièces de couleurs",
    colors: ["#0ea5e9", "#f97316", "#111827"], sizes: APPAREL_SIZES,
    material: "Coton mélangé", care: "Lavage délicat à froid",
    desc: "Ensemble en couleurs franches pensé comme un éditorial de mode. Face au mur coloré, la tenue parle d'elle-même.",
    img: IMG("1645390371590-b2af40ce3fdd"), imgs: [IMG("1645390371590-b2af40ce3fdd"), IMG("1647552054072-d1eaeaf8d9a9")]
  },
  {
    id: 17, ref: "DF-017", name: "Ensemble Deux-Pièces Studio", category: "Ensembles", price: 66, oldPrice: null,
    badge: "Tendance", trend: "Deux-pièces taille haute",
    colors: ["#111827", "#f8fafc", "#b91c1c"], sizes: APPAREL_SIZES,
    material: "Viscose mélangée", care: "Lavage à 30°",
    desc: "Duo deux-pièces à la coupe nette, capturé en studio. Le genre d'ensemble qui allonge la silhouette.",
    img: IMG("1632765854612-9b02b6ec2b15"), imgs: [IMG("1632765854612-9b02b6ec2b15"), IMG("1632765866070-3fadf25d3d5b")]
  },
  {
    id: 18, ref: "DF-018", name: "Ensemble Glam Studio", category: "Ensembles", price: 58, oldPrice: 70,
    badge: null, trend: "Pièces de soirée",
    colors: ["#111827", "#c084fc", "#f8fafc"], sizes: APPAREL_SIZES,
    material: "Satin et finitions soignées", care: "Nettoyage à sec recommandé",
    desc: "Ensemble glamour aux allures d'afterwork chic. Poésie de studio, élan de soirée.",
    img: IMG("1632765866070-3fadf25d3d5b"), imgs: [IMG("1632765866070-3fadf25d3d5b"), IMG("1632765854612-9b02b6ec2b15")]
  },

  /* ---------- Blazers & Tailleurs ---------- */
  {
    id: 19, ref: "DF-019", name: "Veste Bicolore Soleil", category: "Blazers & Tailleurs", price: 78, oldPrice: null,
    badge: "Nouveau", trend: "Vestes structurées",
    colors: ["#eab308", "#0a0a0a", "#fbbf24"], sizes: APPAREL_SIZES,
    material: "Polyester mélangé", care: "Nettoyage à sec recommandé",
    desc: "Veste bicolore jaune et noir, épaules structurées et lunettes de soleil obligatoires. Le look power de la saison.",
    img: IMG("1602794837437-89ab353d5b4a"), imgs: [IMG("1602794837437-89ab353d5b4a"), IMG("1649368471572-514b2f7755ac")]
  },
  {
    id: 20, ref: "DF-020", name: "Blazer Ornementé Chic", category: "Blazers & Tailleurs", price: 65, oldPrice: null,
    badge: "Tendance", trend: "Blazers",
    colors: ["#111827", "#c9a227", "#78716c"], sizes: APPAREL_SIZES,
    material: "Laine mélangée ornée", care: "Nettoyage à sec",
    desc: "Blazer ornementé porté sur cheveux tressés, boutonnage simple et présence immédiate. Se porte fermé comme un top.",
    img: IMG("1767249615394-c2f36d563a2d"), imgs: [IMG("1767249615394-c2f36d563a2d"), IMG("1593528977592-47f94831186c")]
  },

  /* ---------- Mailles ---------- */
  {
    id: 21, ref: "DF-021", name: "Pull Cocooning Nature", category: "Mailles", price: 42, oldPrice: null,
    badge: null, trend: "Maille douce",
    colors: ["#57534e", "#a8a29e", "#f5efe6"], sizes: APPAREL_SIZES,
    material: "Maille douce mélangée", care: "Lavage à froid, séchage à plat",
    desc: "Pull doux à porter au soleil, sur une chaise en bois ou en terrasse. La maille cocooning de la saison.",
    img: IMG("1718091708959-938f2f241329"), imgs: [IMG("1718091708959-938f2f241329"), IMG("1593529029635-98f6f19de3f5")]
  },

  /* ---------- Sweats ---------- */
  {
    id: 22, ref: "DF-022", name: "Veste Zippée Bubble", category: "Sweats", price: 32, oldPrice: null,
    badge: "Nouveau", trend: "Streetwear féminin",
    colors: ["#3b82f6", "#f8fafc", "#0a0a0a"], sizes: APPAREL_SIZES,
    material: "Molleton coton", care: "Lavage à 30°, séchage à l'air",
    desc: "Veste zippée bicolore molleton, esprit streetwear et coupe réconfortante. À porter ouverte sur un top clair.",
    img: IMG("1593529029635-98f6f19de3f5"), imgs: [IMG("1593529029635-98f6f19de3f5"), IMG("1707162740897-cf2f057d2a41")]
  },
  {
    id: 23, ref: "DF-023", name: "Ensemble Lounge Confort", category: "Sweats", price: 52, oldPrice: null,
    badge: null, trend: "Ensemble coordonné",
    colors: ["#78716c", "#292524", "#a16207"], sizes: APPAREL_SIZES,
    material: "Molleton coton", care: "Lavage à 30°",
    desc: "Duo lounge confortable, sourire naturel inclus. Trajets en ville ou soirée chill.",
    img: IMG("1741275210031-6637c99135a9"), imgs: [IMG("1741275210031-6637c99135a9"), IMG("1733555294950-270eb59bff11")]
  },

  /* ---------- Manteaux ---------- */
  {
    id: 24, ref: "DF-024", name: "Trench & Chapeau Élégance", category: "Manteaux", price: 89, oldPrice: 105,
    badge: null, trend: "Trench",
    colors: ["#292524", "#0a0a0a", "#d6c5a8"], sizes: APPAREL_SIZES,
    material: "Coton mélangé", care: "Nettoyage à sec recommandé",
    desc: "Trench porté sur chapeau structuré, allure d'éditorial d'automne. L'indispensable de la mi-saison.",
    img: IMG("1690361054404-9e126c422331"), imgs: [IMG("1690361054404-9e126c422331"), IMG("1649368471572-514b2f7755ac")]
  },
  {
    id: 25, ref: "DF-025", name: "Manteau Cuir Camel", category: "Manteaux", price: 120, oldPrice: null,
    badge: "Nouveau", trend: "Manteaux",
    colors: ["#92400e", "#78350f", "#d6c5a8"], sizes: APPAREL_SIZES,
    material: "Cuir synthétique", care: "Nettoyage spécialiste du cuir",
    desc: "Veste longue en cuir camel, coupe street et lunettes de soleil. Une pièce qui structure la silhouette.",
    img: IMG("1649368471572-514b2f7755ac"), imgs: [IMG("1649368471572-514b2f7755ac"), IMG("1602794837437-89ab353d5b4a")]
  },

  /* ---------- Ensembles (éditorial) ---------- */
  {
    id: 26, ref: "DF-026", name: "Look Éditorial Afro-Chic", category: "Ensembles", price: 54, oldPrice: null,
    badge: "Nouveau", trend: "Looks d'exception",
    colors: ["#171717", "#f59e0b", "#0f172a"], sizes: APPAREL_SIZES,
    material: "Coton mélangé", care: "Lavage à 30°, repassage doux",
    desc: "Look éditorial afro-chic, pose affirmée et cheveux au vent. Le style qui fait le charisme du fil instagram.",
    img: IMG("1707162740897-cf2f057d2a41"), imgs: [IMG("1707162740897-cf2f057d2a41"), IMG("1708170236295-20ab8fbadcef")]
  },

  /* ---------- Accessoires ---------- */
  {
    id: 27, ref: "DF-027", name: "Bandana Nomade", category: "Accessoires", price: 22, oldPrice: null,
    badge: null, trend: "Accessoires cheveux",
    colors: ["#ea580c", "#171717", "#c9a227"], sizes: ONE_SIZE,
    material: "Coton imprimé", care: "Lavage à la main",
    desc: "Bandana à porter sur les cheveux tressés, touche finale d'un look de route. Taille unique.",
    img: IMG("1772240520016-e8639030df5c"), imgs: [IMG("1772240520016-e8639030df5c"), IMG("1772240520016-3a24feb301e5")]
  },
  {
    id: 28, ref: "DF-028", name: "Chapeau Fétiche Soleil", category: "Accessoires", price: 26, oldPrice: null,
    badge: null, trend: "Chapeaux",
    colors: ["#eab308", "#d6c5a8", "#78716c"], sizes: ONE_SIZE,
    material: "Paille", care: "Nettoyage à sec délicat",
    desc: "Chapeau fétiche en paille, idéal pour un édito au soleil. La pièce qui signe une tenue d'été. Taille unique.",
    img: IMG("1647552054072-d1eaeaf8d9a9"), imgs: [IMG("1647552054072-d1eaeaf8d9a9"), IMG("1781510537033-bcde1aad206b")]
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
