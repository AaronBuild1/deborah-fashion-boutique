# Deborah Fashion Boutique

Boutique e-commerce de **prêt-à-porter féminin** basée à Kinshasa, RDC.

Deborah Fashion propose une sélection de pièces issues de **grandes marques internationales**, choisies pour la femme qui suit les tendances. Les pièces sont livrées à Kinshasa, Goma, Lubumbashi et partout en RDC.

## Positionnement

- **Cible** : femmes qui veulent des pièces modernes, en vogue chez les influenceuses mode.
- **Offre** : prêt-à-porter femme importé de grandes marques internationales. La boutique ne propose pas de collection locale.
- **Tendances** : chaque fiche peut porter une tendance de la saison (jupe longue en maille, palazzo, tailoring fluide, satin, deux-pièces taille haute…).
- **Tailles** : XS à XXL, pour toutes les morphologies.
- **Prix** : affichés en dollars américains (USD).
- **Livraison** : offerte dès $100 ; paiement à la livraison, Mobile Money ou carte bancaire.

## État du projet

Le site est en **phase de maquette**. Le catalogue contient 28 fiches provisoires : prix indicatifs, matières, entretien et photos sont des données de travail, à remplacer par les données fournies par la boutique.

Règle visuelle : toute photo montrant un mannequin doit représenter une mannequin africaine.

## Contenu

- Page d'accueil : hero, bandeau éditorial, catégories, collection populaire, offre de lancement, éditorial « Collection 2026 ».
- Boutique : filtres par catégorie, recherche et tri.
- Fiche produit : photos, couleurs, tailles, matière, entretien, tendance, informations de livraison.
- Panier : tiroir latéral, ajout et suppression.
- Commande : formulaire, choix du mode de paiement, récapitulatif.
- Page « Notre histoire » et footer.

## Organisation du code

- `src/data/products.js` : **catalogue unique** (fiches produit, catégories, frais de livraison, format des prix). Toute modification de prix, de photo ou de tailles se fait ici.
- `src/pages/` : pages (Accueil, Boutique, Fiche produit, Notre histoire, Commande).
- `src/components/` : en-tête, pied de page, carte produit, tiroir panier, composants UI.
- `src/store/cart.jsx` : état du panier.
- `src/index.css` : thème (palette issue du logo : noir chaud, crème doré, blanc ; fond clair par défaut).

### Format d'une fiche produit

```js
{
  id: 6,                       // identifiant unique
  ref: "DF-006",               // référence boutique
  name: "Jupe Longue en Maille",
  category: "Jupes",           // doit correspondre à une catégorie existante
  price: 48,                   // prix en USD
  oldPrice: null,              // prix barré (promo) ou null
  badge: "Tendance",           // libellé optionnel
  trend: "Jupe longue en maille",
  colors: ["#292524", "#78716c"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  material: "Maille côtelée",
  care: "Lavage à froid, séchage à plat",
  desc: "Description courte de la pièce.",
  img: "https://…",                // photo principale
  imgs: ["https://…"]          // galerie
}
```

Les catégories affichées sont calculées automatiquement à partir des produits.

## Stack

- React 18 + Vite
- Tailwind CSS v4
- react-router-dom
- lucide-react (icônes)

## Lancer en local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Photos — provenance et crédits

Les visuels actuels sont des **photos libres de droits provenant d'Unsplash** ([licence Unsplash](https://unsplash.com/license)), choisies avec des mannequins noires / d'origine africaine et une ambiance éditoriale moderne, conformément au positionnement de la boutique.

Photographes utilisés :

- **Amani Nation** ([@amani_nation](https://unsplash.com/@amani_nation)), Nairobi
- **Michael Kyule** ([@madness_leahcim_](https://unsplash.com/@madness_leahcim_)), Nairobi
- **Good Faces Agency** ([@goodfacesagency](https://unsplash.com/@goodfacesagency))
- **Shedrack Salami** ([@xtrovarts](https://unsplash.com/@xtrovarts)), Lagos
- **Dwayne Joe** ([@spliff_dj_joe](https://unsplash.com/@spliff_dj_joe)), Kenya
- **Atsu Tettey** ([@atsu_tettey](https://unsplash.com/@atsu_tettey)), Tema, Ghana

La liste complète, photo par photo (identifiant Unsplash → photographe), est documentée en tête de [`src/data/products.js`](src/data/products.js).

### Remplacer par les vraies photos de la boutique

La structure est centralisée dans `src/data/products.js` : remplacer la photo d'un produit revient à changer l'identifiant photo dans `img` (photo principale) et `imgs` (galerie de 2 photos), ou à coller directement une URL `images.unsplash.com` / `images.pexels.com`.

> **Recommandation** : photographier les **vrais articles** de la boutique (portrait 3:4, lumière naturelle, fond simple) puis remplacer ces visuels de banque d'images. De vraies photos produit convertissent nettement mieux et rassurent les clientes sur ce qu'elles recevront.

## Déploiement Vercel

1. Sur [vercel.com](https://vercel.com) : **Add New → Project** et importez ce dépôt GitHub.
2. Vercel détecte automatiquement Vite. Ne rien changer, cliquer **Deploy**.
3. `vercel.json` gère déjà la réécriture SPA pour react-router.

Ou en ligne de commande :

```bash
npm i -g vercel
vercel --prod
```
