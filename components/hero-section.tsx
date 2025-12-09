"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, DollarSign, Home } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        {/* Greyscale image on the right side */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale opacity-60"
          style={{
            backgroundImage: "url('/senior-couple-home-living.jpg')",
            backgroundPosition: "right center",
          }}
        />
        {/* Gradient overlay - solid on left, fades to transparent on right to reveal image */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary from-20% via-primary/95 via-40% to-primary/40" />
      </div>

      {/* Decorative elements for modern look */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)] py-6 md:py-8 lg:py-12">
          {/* Left Content */}
          <div className="text-primary-foreground lg:col-span-1">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6 text-balance">
              Libérez la Valeur de Votre Maison Pour Votre Retraite
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-xl">
              Accédez jusqu'à 59% de la valeur nette de votre propriété en
              argent libre d'impôt, sans paiements mensuels obligatoires. Restez
              chez vous et profitez de votre retraite.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 lg:mb-10">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold w-full sm:w-auto text-sm md:text-base"
                asChild
              >
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
                >
                  Calculer Mon Éligibilité
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Feature badges - better mobile handling */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg md:rounded-xl p-2.5 md:p-3 lg:p-4">
                <div className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm font-medium">
                  55 ans et plus
                </span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg md:rounded-xl p-2.5 md:p-3 lg:p-4">
                <div className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center shrink-0">
                  <DollarSign className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm font-medium">
                  Aucun paiement
                </span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg md:rounded-xl p-2.5 md:p-3 lg:p-4 xs:col-span-2 md:col-span-1">
                <div className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center shrink-0">
                  <Home className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm font-medium">
                  Restez chez vous
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form - Hidden on mobile */}
          <div className="hidden lg:block bg-card rounded-xl md:rounded-2xl shadow-2xl p-4 sm:p-5 md:p-6 lg:p-8 w-full max-w-md mx-auto lg:max-w-none">
            <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-card-foreground mb-1 md:mb-2">
              Parlez à un Expert
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mb-3 md:mb-4 lg:mb-6">
              Obtenez une consultation gratuite et sans engagement. Nous vous
              contacterons rapidement.
            </p>

            <ContactForm formType="hero form" compact />
          </div>
        </div>
      </div>
    </section>
  );
}
