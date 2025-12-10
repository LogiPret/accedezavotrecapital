"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export default function Footer() {
  const { t, locale } = useLocale();
  const currentYear = new Date().getFullYear();

  const siteName =
    locale === "en" ? "AccessHomeEquity" : "AccedezAVotreCapital";
  const domain =
    locale === "en" ? "accesshomeequity.ca" : "accedezavotrecapital.ca";
  const emailDomain =
    locale === "en"
      ? "info@accesshomeequity.ca"
      : "info@accedezavotrecapital.ca";

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
                {siteName}
                <span className="text-primary">.ca</span>
              </span>
            </Link>
            <p className="text-card/70 text-sm mb-6">{t.footer.tagline}</p>
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
            <h4 className="font-bold text-lg mb-6">{t.footer.quickLinks}</h4>
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
                  {t.footer.link1}
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
                  {t.footer.link2}
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
                  {t.footer.link3}
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
                  {t.footer.link4}
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
                  {t.footer.link5}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.contactTitle}</h4>
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
                  <p className="text-card font-medium">{emailDomain}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/60 text-sm text-center md:text-left">
              © {currentYear} {t.footer.copyright}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/politique-de-confidentialite"
                className="text-card/60 hover:text-card transition-colors"
              >
                {t.footer.privacy}
              </Link>
              <Link
                href="/conditions-dutilisation"
                className="text-card/60 hover:text-card transition-colors"
              >
                {t.footer.terms}
              </Link>
            </div>
          </div>
          <p className="text-card/40 text-xs text-center mt-6">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
