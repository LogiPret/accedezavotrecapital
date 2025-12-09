"use client";

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
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="logo" className="w-8 h-8" />
              </div>
              <span className="font-bold text-lg text-card">
                AccedezAVotreCapital<span className="text-primary">.ca</span>
              </span>
            </Link>
            <p className="text-card/70 text-sm mb-6">
              Votre partenaire de confiance pour libérer la valeur de votre
              maison et profiter pleinement de votre retraite au Québec.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61581604235295"
                className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
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
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector("#quest-ce-que");
                    if (target) {
                      const offset = 80;
                      const elementPosition =
                        target.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Qu'est-ce qu'une Hypothèque Inversée?
                </Link>
              </li>
              <li>
                <Link
                  href="#calculatrice"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector("#calculatrice");
                    if (target) {
                      const offset = 80;
                      const elementPosition =
                        target.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Calculatrice d'Éligibilité
                </Link>
              </li>
              <li>
                <Link
                  href="#avantages"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector("#avantages");
                    if (target) {
                      const offset = 80;
                      const elementPosition =
                        target.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Avantages
                </Link>
              </li>
              <li>
                <Link
                  href="#ressources"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector("#ressources");
                    if (target) {
                      const offset = 80;
                      const elementPosition =
                        target.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Ressources
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector("#contact");
                    if (target) {
                      const offset = 80;
                      const elementPosition =
                        target.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-card/70 hover:text-card transition-colors text-sm"
                >
                  Contactez-Nous
                </Link>
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
                  <p className="text-card font-medium">1-514-984-8182</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-card font-medium">
                    info@accedezavotrecapital.ca
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/60 text-sm text-center md:text-left">
              © {currentYear} Accedez à Votre Capital.ca. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/politique-de-confidentialite"
                className="text-card/60 hover:text-card transition-colors"
              >
                Politique de Confidentialité
              </Link>
              <Link
                href="/conditions-dutilisation"
                className="text-card/60 hover:text-card transition-colors"
              >
                Conditions d'Utilisation
              </Link>
            </div>
          </div>
          <p className="text-card/40 text-xs text-center mt-6">
            Avis : Accédez à Votre Capital.ca est un courtier hypothécaire
            inversé agréé au Québec, Canada. Les informations présentées sur ce
            site sont fournies à titre informatif général et ne constituent pas
            des conseils financiers, juridiques ou fiscaux. Les produits
            d’hypothèque inversée sont soumis à l’approbation du prêteur et aux
            critères d’admissibilité. Veuillez consulter un professionnel
            qualifié avant de prendre toute décision financière.
          </p>
        </div>
      </div>
    </footer>
  );
}
