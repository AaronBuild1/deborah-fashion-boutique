import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-14 md:py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-2xl tracking-tight">
            Deborah <span className="italic text-cream">Fashion</span>
          </p>
          <p className="text-paper/60 text-sm mt-4 max-w-xs leading-relaxed">
            Boutique de prêt-à-porter féminin basée à Kinshasa. Une sélection
            de grandes marques internationales, livrée partout en RDC.
          </p>
          <div className="flex gap-5 mt-6">
            <a
              href="#"
              aria-label="Instagram"
              className="text-paper/60 hover:text-cream transition-colors duration-300"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-paper/60 hover:text-cream transition-colors duration-300"
            >
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me/243819040601"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-paper/60 hover:text-cream transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="E-mail"
              className="text-paper/60 hover:text-cream transition-colors duration-300"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="label-caps text-paper/50 mb-5">Infos</p>
          <ul className="space-y-3 text-sm text-paper/80">
            <li>
              <Link to="/boutique" className="hover:text-cream transition-colors duration-300">
                Boutique
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="hover:text-cream transition-colors duration-300">
                Notre histoire
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
          <p className="label-caps text-paper/50 mb-5">Contact</p>
          <ul className="space-y-3 text-sm text-paper/80">
            <li>bonjour@deborahfashion.cd</li>
            <li>
              <a
                href="https://wa.me/243819040601"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cream transition-colors duration-300"
              >
                WhatsApp : +243 819 040 601
              </a>
            </li>
            <li className="text-paper/50">Avenue du Commerce, Kinshasa, RDC</li>
          </ul>
          <p className="label-caps text-paper/50 mt-8 mb-3">Paiement</p>
          <p className="text-sm text-paper/80">
            Mobile Money (M-Pesa · Orange · Airtel) · Carte · À la livraison
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col gap-6 md:items-start">
          <div className="flex flex-wrap gap-3">
            <select
              aria-label="Devise"
              defaultValue="USD"
              className="bg-transparent border border-paper/30 px-3 py-2.5 text-[11px] uppercase tracking-[0.14em] text-paper/90 focus-visible:outline-none focus-visible:border-cream"
            >
              <option className="text-ink">USD — Dollar américain</option>
              <option className="text-ink">CDF — Franc congolais</option>
            </select>
            <select
              aria-label="Langue"
              defaultValue="FR"
              className="bg-transparent border border-paper/30 px-3 py-2.5 text-[11px] uppercase tracking-[0.14em] text-paper/90 focus-visible:outline-none focus-visible:border-cream"
            >
              <option className="text-ink">FR — Français</option>
              <option className="text-ink">EN — English</option>
            </select>
          </div>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 label-caps text-paper/80 hover:text-cream transition-colors duration-300"
          >
            Remonter <ArrowUp className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-5 text-[10px] uppercase tracking-[0.22em] text-paper/50">
          <span>© 2026 Deborah Fashion — Kinshasa</span>
        </div>
      </div>
    </footer>
  );
}
