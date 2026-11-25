import { Link } from "react-router-dom";
import { Button } from "../components/ui";
import { IMG } from "../data/products";

export default function About() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 py-12">
      <p className="label-caps text-accent">Notre histoire</p>
      <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mt-6 animate-fadeup">
        La maison <span className="italic text-accent">Deborah Fashion</span>
      </h1>
      <div className="grid md:grid-cols-12 gap-8 md:gap-16 mt-10 md:mt-14">
        <div className="md:col-span-7">
          <div className="overflow-hidden bg-cream-soft aspect-[4/3]">
            <img
              src={IMG("1552710307-537199cd41c0", 1000, 750)}
              alt="Pièces de la collection Deborah Fashion"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="label-caps text-zinc-400 mt-3">Collection — Kinshasa, RDC</p>
        </div>
        <div className="md:col-span-5">
          <p className="text-lg text-zinc-700 leading-relaxed">
            Basée à Kinshasa, Deborah Fashion habille la femme moderne qui veut
            se sentir élégante, confiante et au fait des tendances.
          </p>
          <p className="text-zinc-600 leading-relaxed mt-6">
            Maison de prêt-à-porter féminin, nous sélectionnons des pièces
            issues de grandes marques internationales, celles que l'on retrouve
            sur les profils des influenceuses mode d'aujourd'hui. De la pièce du
            quotidien à la tenue de soirée, notre vestiaire est pensé pour être
            porté, aimé et réinventé saison après saison.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-zinc-200">
            {[
              ["2000+", "Clientes"],
              ["48h", "Livraison Kin"],
              ["4.8★", "Note moyenne"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-2xl md:text-3xl text-accent">{n}</p>
                <p className="label-caps text-zinc-500 mt-2 leading-relaxed">{l}</p>
              </div>
            ))}
          </div>
          <Button
            asChild
            className="mt-10 h-12 px-8 bg-ink text-paper hover:bg-accent transition-colors duration-500"
          >
            <Link to="/boutique">Explorer la collection</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
