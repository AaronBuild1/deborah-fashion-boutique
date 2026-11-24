# Deborah Fashion Boutique — Maquette e-commerce

Boutique e-commerce de démonstration (style Shopify) pour **Deborah Fashion Boutique**, spécialisée dans la mode femme africaine contemporaine, livrée en RDC.

## Contenu

- Page d'accueil (hero, catégories, best-sellers, bannière promo)
- Boutique avec filtres par catégorie, recherche et tri
- Fiches produit (photos, tailles, couleurs, avis, infos livraison RDC)
- Panier (tiroir latéral, ajout/suppression)
- Tunnel de commande (Mobile Money, paiement à la livraison, carte bancaire)
- Page "À propos" et footer avec newsletter

Prix indicatifs en francs congolais (CDF). Maquette : aucune commande réelle n'est passée.

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

## Déploiement Vercel

1. Sur [vercel.com](https://vercel.com) : **Add New → Project** et importez ce dépôt GitHub.
2. Vercel détecte automatiquement Vite. Ne rien changer, cliquer **Deploy**.
3. `vercel.json` gère déjà la réécriture SPA pour react-router.

Ou en ligne de commande :

```bash
npm i -g vercel
vercel --prod
```
