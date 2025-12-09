import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  HI
                </span>
              </div>
              <span className="font-serif font-bold text-lg text-card">
                HypothèqueInversée<span className="text-primary">.qc</span>
              </span>
            </Link>
            <p className="text-card/70 text-sm mb-6">
              Votre partenaire de confiance pour libérer la valeur de votre
              maison et profiter pleinement de votre retraite au Québec.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#quest-ce-que"
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Qu'est-ce qu'une Hypothèque Inversée?
                </Link>
              </li>
              <li>
                <Link
                  href="#calculatrice"
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Calculatrice d'Éligibilité
                </Link>
              </li>
              <li>
                <Link
                  href="#avantages"
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Avantages
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Questions Fréquentes
                </Link>
              </li>
              <li>
                <Link
                  href="#ressources"
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Ressources
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Contactez-Nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Consultation Gratuite
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Évaluation de Propriété
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Comparaison des Options
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Accompagnement Personnalisé
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Suivi Post-Financement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-card font-medium">1-514-555-1234</p>
                  <p className="text-card/70 text-xs">Appel gratuit</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-card font-medium">
                    info@hypothequeinversee.qc
                  </p>
                  <p className="text-card/70 text-xs">Réponse en 24h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-card font-medium">
                    1234 Rue Sainte-Catherine O.
                  </p>
                  <p className="text-card/70 text-xs">Montréal, QC H3B 1A1</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/60 text-sm text-center md:text-left">
              © {currentYear} HypothèqueInversée.qc. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-card/60 hover:text-card transition-colors"
              >
                Politique de Confidentialité
              </a>
              <a
                href="#"
                className="text-card/60 hover:text-card transition-colors"
              >
                Conditions d'Utilisation
              </a>
              <a
                href="#"
                className="text-card/60 hover:text-card transition-colors"
              >
                Accessibilité
              </a>
            </div>
          </div>
          <p className="text-card/40 text-xs text-center mt-6">
            Les informations présentées sur ce site sont à titre informatif
            seulement et ne constituent pas un conseil financier. Veuillez
            consulter un conseiller qualifié pour des recommandations
            personnalisées.
          </p>
        </div>
      </div>
    </footer>
  );
}
