import { Link } from "react-router-dom";
import { ChevronRight, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { PRODUCTS, fmt } from "../data/products";
import { Button, SectionHeading } from "../components/ui";
import ProductCard from "../components/ProductCard";

const CATEGORY_CARDS = [
  ["Robes", PRODUCTS[0]],
  ["Shorts", PRODUCTS[8]],
  ["Hauts", PRODUCTS[10]],
  ["Sweats", PRODUCTS[12]],
];

const POPULAR_IDS = [1, 12, 9, 13, 2, 16, 6, 8];
const POPULAR = POPULAR_IDS.map((id) => PRODUCTS.find((p) => p.id === id));

export default function Home() {
  const categoryCount = (c) => PRODUCTS.filter((p) => p.category === c).length;

  return (
    <div>
      {/* Hero typographique */}
      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-12 md:pb-16">
        <div className="max-w-[1440px] mx-auto animate-fadeup">
          <p className="label-caps text-accent">Kinshasa · Prêt-à-porter femme · 2026</p>
          <h1 className="mt-6 md:mt-8 font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.3rem,9.6vw,9rem)]">
            L'élégance
            <br />
            <span className="italic font-medium text-accent">africaine</span>
            <br />
            contemporaine.
          </h1>
          <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-6 items-end">
            <p className="md:col-span-5 text-zinc-600 leading-relaxed max-w-md">
              Robes, ensembles et pièces signature cousus avec soin dans nos
              ateliers de Kinshasa. Prêt-à-porter femme, livré partout en RDC
              et payé en dollars ou mobile money.
            </p>
            <div className="md:col-span-7 flex flex-wrap items-center gap-x-8 gap-y-4 md:justify-end">
              <Button
                asChild
                className="h-13 py-4 px-10 bg-ink text-paper hover:bg-accent transition-colors duration-500"
              >
                <Link to="/boutique">Découvrir la collection</Link>
              </Button>
              <Link
                to="/boutique?cat=Robes"
                className="label-caps text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors duration-500"
              >
                Voir les robes
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 md:mt-16 pt-6 border-t border-zinc-200 text-zinc-500">
            <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em]">
              <Truck className="w-4 h-4 text-accent" strokeWidth={1.5} /> Livraison RDC
            </span>
            <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em]">
              <RefreshCw className="w-4 h-4 text-accent" strokeWidth={1.5} /> Retours 14 jours
            </span>
            <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em]">
              <ShieldCheck className="w-4 h-4 text-accent" strokeWidth={1.5} /> Paiement sécurisé
            </span>
          </div>
        </div>
      </section>

      {/* Bandeau éditorial photo */}
      <section className="px-5 md:px-10 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-12 gap-4 md:gap-6">
          <Link
            to="/produit/8"
            className="md:col-span-8 group relative overflow-hidden bg-zinc-100 aspect-[4/5] md:aspect-[16/10]"
          >
            <img
              src={PRODUCTS[7].img}
              alt="Robe Soirée Nuit Africaine"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-0 left-0 bg-paper/95 px-6 py-4">
              <p className="label-caps text-zinc-400">Pièce phare</p>
              <p className="font-display text-xl md:text-2xl mt-1 flex items-center gap-2">
                Robe Soirée Nuit Africaine
                <ChevronRight className="w-4 h-4 text-accent" />
              </p>
            </div>
          </Link>
          <div className="md:col-span-4 grid gap-4 md:gap-6">
            <Link
              to="/produit/3"
              className="group relative overflow-hidden bg-zinc-100 aspect-[4/5] md:aspect-auto md:flex-1"
            >
              <img
                src={PRODUCTS[2].img}
                alt="Trench Beige Kin"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 bg-paper/95 px-5 py-3.5">
                <p className="label-caps text-zinc-400">Saison des pluies</p>
                <p className="font-display text-lg mt-0.5">Trench Beige Kin</p>
              </div>
            </Link>
            <div className="bg-ink text-paper p-8 md:p-10 flex flex-col justify-between aspect-[4/3] md:aspect-auto">
              <p className="label-caps text-paper/50">Livraison offerte</p>
              <p className="font-display text-3xl md:text-4xl leading-tight mt-6">
                Dès $100, partout en RDC.
              </p>
              <p className="text-paper/50 text-sm mt-6 leading-relaxed">
                Paiement à la livraison, Mobile Money ou carte bancaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by categories */}
      <section className="border-t border-zinc-200 py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <SectionHeading
            kicker="Shop by categories"
            title="Par catégorie"
            action={
              <Link
                to="/boutique"
                className="label-caps text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors duration-500 inline-flex items-center gap-1"
              >
                Tout voir <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            }
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {CATEGORY_CARDS.map(([c, p]) => (
              <Link key={c} to={`/boutique?cat=${c}`} className="group">
                <div className="overflow-hidden bg-zinc-100 aspect-[3/4]">
                  <img
                    src={p.img}
                    alt={c}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <p className="label-caps mt-4 text-ink group-hover:text-accent transition-colors duration-500">
                  {c}
                </p>
                <p className="text-xs text-zinc-400 mt-1.5">
                  {categoryCount(c)} pièces
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collection populaire — scroll horizontal */}
      <section className="border-t border-zinc-200 py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <SectionHeading
            kicker="Collection populaire"
            title="Les plus aimées"
            action={
              <Link
                to="/boutique"
                className="label-caps text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors duration-500 inline-flex items-center gap-1"
              >
                Tout voir <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            }
          />
        </div>
        <div className="max-w-[1440px] mx-auto md:px-10">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 px-5 md:px-0">
            {POPULAR.map((p) => (
              <div
                key={p.id}
                className="snap-start shrink-0 w-[72vw] sm:w-[42vw] lg:w-[22vw] xl:w-[300px]"
              >
                <ProductCard p={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offre de lancement */}
      <section className="relative overflow-hidden">
        <img
          src={PRODUCTS[1].img}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="relative max-w-[1440px] mx-auto px-5 py-14 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-paper">
          <div>
            <p className="label-caps text-accent">Offre de lancement</p>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
              −15% sur la collection complète
            </h2>
            <p className="text-paper/50 text-sm mt-4">
              Code{" "}
              <span className="text-accent font-semibold tracking-[0.14em]">
                DEBORAH15
              </span>{" "}
              · valable jusqu'au 31/12/2026
            </p>
          </div>
          <Button
            asChild
            className="h-13 py-4 px-10 bg-paper text-ink hover:bg-accent hover:text-paper transition-colors duration-500"
          >
            <Link to="/boutique">J'en profite</Link>
          </Button>
        </div>
      </section>

      {/* Section éditoriale — Collection 2026 */}
      <section className="border-t border-zinc-200 py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="label-caps text-accent">Éditorial</p>
            <h2 className="font-display leading-[0.95] mt-8">
              <span className="block text-2xl md:text-3xl">Collection</span>
              <span className="block font-bold text-[clamp(4.5rem,9vw,8rem)]">
                2026
              </span>
            </h2>
            <p className="text-zinc-600 leading-relaxed mt-8 max-w-sm">
              Cette année, la maison célèbre les matières : wax authentique,
              bogolan teinté à la main, satin et soie. Une garde-robe pensée
              en pièces durables, à porter seules ou à superposer.
            </p>
            <Link
              to="/a-propos"
              className="label-caps text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors duration-500 inline-block mt-8"
            >
              Lire le lookbook
            </Link>
          </div>
          <div className="md:col-span-7">
            <Link
              to="/produit/7"
              className="group relative overflow-hidden bg-zinc-100 aspect-[16/10] block"
            >
              <img
                src={PRODUCTS[6].img}
                alt="Tailleur Orange Sunrise"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 bg-paper/95 px-5 py-3.5">
                <p className="label-caps text-zinc-400">Look du mois</p>
                <p className="font-display text-lg mt-0.5">Tailleur Orange Sunrise</p>
              </div>
            </Link>
            <div className="grid sm:grid-cols-2 gap-8 md:gap-10 mt-10 md:mt-12">
              <div>
                <p className="label-caps text-zinc-400 mb-4">Les essentiels</p>
                <ul className="divide-y divide-zinc-200 border-y border-zinc-200">
                  {[PRODUCTS[4], PRODUCTS[5], PRODUCTS[0]].map((p) => (
                    <li
                      key={p.id}
                      className="flex items-center gap-4 py-3.5 text-sm"
                    >
                      <Link to={`/produit/${p.id}`} className="shrink-0">
                        <img
                          src={p.img}
                          alt={p.name}
                          loading="lazy"
                          className="w-12 h-14 object-cover"
                        />
                      </Link>
                      <Link
                        to={`/produit/${p.id}`}
                        className="flex-1 hover:text-accent transition-colors duration-300"
                      >
                        {p.name}
                      </Link>
                      <span className="text-zinc-500 whitespace-nowrap">
                        {fmt(p.price)}{" "}
                        <span className="text-zinc-400">par pièce</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label-caps text-zinc-400 mb-4">Pour les soirées</p>
                <ul className="divide-y divide-zinc-200 border-y border-zinc-200">
                  {[PRODUCTS[15], PRODUCTS[7], PRODUCTS[11]].map((p) => (
                    <li
                      key={p.id}
                      className="flex items-center gap-4 py-3.5 text-sm"
                    >
                      <Link to={`/produit/${p.id}`} className="shrink-0">
                        <img
                          src={p.img}
                          alt={p.name}
                          loading="lazy"
                          className="w-12 h-14 object-cover"
                        />
                      </Link>
                      <Link
                        to={`/produit/${p.id}`}
                        className="flex-1 hover:text-accent transition-colors duration-300"
                      >
                        {p.name}
                      </Link>
                      <span className="text-zinc-500 whitespace-nowrap">
                        {fmt(p.price)}{" "}
                        <span className="text-zinc-400">par pièce</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/boutique"
                  className="label-caps text-accent border-b border-accent pb-1 inline-flex items-center gap-1 mt-6"
                >
                  Voir toute la collection <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grande phrase de marque */}
      <section className="border-t border-zinc-200 py-20 md:py-32 px-5 md:px-10 text-center">
        <p className="label-caps text-zinc-400">Deborah Fashion — Kinshasa</p>
        <h2 className="mx-auto mt-8 md:mt-10 max-w-6xl font-display uppercase tracking-[0.06em] leading-[1.08] text-[clamp(2.4rem,7.5vw,6.5rem)] animate-fadeup">
          Un style, pour chaque{" "}
          <span className="italic text-accent">histoire</span>.
        </h2>
        <Button
          asChild
          className="mt-10 md:mt-14 h-13 py-4 px-10 bg-ink text-paper hover:bg-accent transition-colors duration-500"
        >
          <Link to="/boutique">Explorer la boutique</Link>
        </Button>
      </section>
    </div>
  );
}
