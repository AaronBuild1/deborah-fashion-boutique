import { Link } from "react-router-dom";
import { Button } from "../components/ui";

export default function About() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-12 md:py-16">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <p className="label-caps text-accent">Notre histoire</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mt-6 animate-fadeup">
            La maison <span className="italic text-accent">Deborah</span>
          </h1>
        </div>
        <div className="md:col-span-8 md:pt-16">
          <p className="text-lg md:text-xl text-zinc-700 leading-relaxed max-w-2xl">
            Née d'une passion pour le style africain contemporain, Deborah
            Fashion Boutique habille la femme moderne qui veut se sentir
            élégante, confiante et unique.
          </p>
          <p className="text-zinc-600 leading-relaxed mt-6 max-w-2xl">
            Chaque pièce est sélectionnée ou confectionnée avec des tissus
            authentiques — wax, bogolan, satin — et des ateliers partenaires à
            Kinshasa. De la pièce du quotidien à la tenue de soirée, la maison
            cultive un vestiaire durable, pensé pour être porté, aimé et
            réinventé saison après saison.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-zinc-200">
            {[
              ["2000+", "Clientes heureuses"],
              ["48h", "Livraison express Kin"],
              ["4.8★", "Note moyenne"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl md:text-4xl text-accent">{n}</p>
                <p className="label-caps text-zinc-500 mt-2 leading-relaxed">{l}</p>
              </div>
            ))}
          </div>
          <Button
            asChild
            className="mt-12 h-12 px-8 bg-ink text-paper hover:bg-accent transition-colors duration-500"
          >
            <Link to="/boutique">Explorer la collection</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
