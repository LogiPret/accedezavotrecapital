"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  DollarSign,
  Home,
} from "lucide-react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)] py-8 md:py-12">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6">
              <Shield className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium">
                Hypothèque Inversée au Québec
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 text-balance">
              Libérez la Valeur de Votre Maison Pour Votre Retraite
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-6 md:mb-8 leading-relaxed max-w-xl">
              Accédez jusqu'à 59% de la valeur nette de votre propriété en
              argent libre d'impôt, sans paiements mensuels obligatoires. Restez
              chez vous et profitez de votre retraite.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold w-full sm:w-auto"
                asChild
              >
                <a href="#calculatrice">
                  Calculer Mon Éligibilité
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </a>
              </Button>
            </div>

            <div className="flex gap-3 md:grid md:grid-cols-3 md:gap-4 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
              <div className="flex items-center gap-2 md:gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-3 md:p-4 shrink-0 min-w-[140px] md:min-w-0">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">
                  55 ans et plus
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-3 md:p-4 shrink-0 min-w-[140px] md:min-w-0">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">
                  Aucun paiement
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-3 md:p-4 shrink-0 min-w-[140px] md:min-w-0">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <Home className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">
                  Restez chez vous
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-card rounded-2xl shadow-2xl p-5 md:p-6 lg:p-8 w-full max-w-md mx-auto lg:max-w-none">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-card-foreground mb-1 md:mb-2">
              Parlez à un Expert
            </h2>
            <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6">
              Obtenez une consultation gratuite et sans engagement. Nous vous
              contacterons rapidement.
            </p>

            {isSubmitted ? (
              <div className="text-center py-6 md:py-8">
                <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-2">
                  Merci!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nous vous contacterons bientôt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <Label
                    htmlFor="firstName"
                    className="text-card-foreground text-sm"
                  >
                    Prénom
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Votre prénom"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-card-foreground text-sm"
                  >
                    Courriel
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@courriel.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-card-foreground text-sm"
                  >
                    Téléphone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(514) 555-1234"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-card-foreground text-sm"
                  >
                    Questions ou commentaires
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Comment pouvons-nous vous aider?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={2}
                    className="mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Demander une Consultation
                </Button>
                <p className="text-[10px] md:text-xs text-muted-foreground text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté par
                  notre équipe.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
