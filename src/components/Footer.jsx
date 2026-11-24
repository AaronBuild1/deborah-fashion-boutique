import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-14 md:py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-3xl tracking-tight">
            Deborah<span className="text-accent">.</span>
          </p>
          <p className="text-paper/50 text-sm mt-4 max-w-xs leading-relaxed">
            Mode femme africaine contemporaine. Pièces signature confectionnées
            avec des ateliers locaux, livrées partout en RDC.
          </p>
          <div className="flex gap-5 mt-6">
            <a
              href="#"
              aria-label="Instagram"
              className="text-paper/50 hover:text-accent transition-colors duration-300"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-paper/50 hover:text-accent transition-colors duration-300"
            >
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="text-paper/50 hover:text-accent transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="E-mail"
              className="text-paper/50 hover:text-accent transition-colors duration-300"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="label-caps text-paper/40 mb-5">Infos</p>
          <ul className="space-y-3 text-sm text-paper/70">
            <li>
              <Link to="/boutique" className="hover:text-accent transition-colors duration-300">
                Boutique
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="hover:text-accent transition-colors duration-300">
                Lookbook
              </Link>
            </li>
            <li>
              <span className="cursor-default">Retours & échanges</span>
            </li>
            <li>
              <span className="cursor-default">Confidentialité</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="label-caps text-paper/40 mb-5">Contact</p>
          <ul className="space-y-3 text-sm text-paper/70">
            <li>bonjour@deborahfashion.cd</li>
            <li>WhatsApp : +243 · · · · · ·</li>
            <li className="text-paper/40">Kinshasa · Goma, RDC</li>
          </ul>
          <p className="label-caps text-paper/40 mt-8 mb-3">Paiement</p>
          <p className="text-sm text-paper/70">
            Mobile Money (M-Pesa · Orange · Airtel) · Carte · À la livraison
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col gap-6 md:items-start">
          <div className="flex flex-wrap gap-3">
            <select
              aria-label="Devise"
              defaultValue="CDF"
              className="bg-transparent border border-paper/25 px-3 py-2.5 text-[11px] uppercase tracking-[0.14em] text-paper/80 focus-visible:outline-none focus-visible:border-accent"
            >
              <option className="text-ink">CDF — Franc congolais</option>
              <option className="text-ink">USD — Dollar</option>
            </select>
            <select
              aria-label="Langue"
              defaultValue="FR"
              className="bg-transparent border border-paper/25 px-3 py-2.5 text-[11px] uppercase tracking-[0.14em] text-paper/80 focus-visible:outline-none focus-visible:border-accent"
            >
              <option className="text-ink">FR — Français</option>
              <option className="text-ink">EN — English</option>
            </select>
          </div>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 label-caps text-paper/70 hover:text-accent transition-colors duration-300"
          >
            Remonter <ArrowUp className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-5 flex flex-col sm:flex-row justify-between gap-2 text-[10px] uppercase tracking-[0.22em] text-paper/40">
          <span>© 2026 Deborah Fashion Boutique</span>
          <span>Maquette de démonstration</span>
        </div>
      </div>
    </footer>
  );
}
