"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FileText,
  CheckCircle2,
  Shield,
  Clock,
  Home,
  Phone,
  ArrowRight,
  Star,
  Users,
  Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function GuideLandingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const guideHighlights = [
    "Comment fonctionne l'hypothèque inversée au Québec",
    "Les critères d'éligibilité détaillés",
    "Comparaison avec les autres options de financement",
    "Les avantages fiscaux méconnus",
    "Les erreurs courantes à éviter",
    "Checklist de préparation complète",
  ];

  const trustSignals = [
    { icon: Users, value: "2,500+", label: "Clients accompagnés" },
    { icon: Star, value: "4.9/5", label: "Satisfaction client" },
    { icon: Clock, value: "15+", label: "Années d'expérience" },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="bg-primary py-3 md:py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-lg md:text-xl font-bold text-primary-foreground">
                HypothèqueInversée.ca
              </span>
            </Link>
            <a
              href="tel:+15141234567"
              className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">
                (514) 123-4567
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary pt-8 pb-12 md:pt-12 md:pb-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                <FileText className="w-4 h-4" />
                <span>Guide Gratuit 2024</span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-balance">
                Débloquez jusqu'à 55% de la Valeur de Votre Maison{" "}
                <span className="text-accent">Sans Paiements Mensuels</span>
              </h1>

              <p className="text-base md:text-lg text-primary-foreground/80 mb-6 md:mb-8 leading-relaxed">
                Téléchargez notre guide complet et découvrez comment
                l'hypothèque inversée peut transformer votre retraite. Tout ce
                que vous devez savoir, expliqué simplement.
              </p>

              {/* Trust Signals - Mobile */}
              <div className="flex gap-6 mb-6 lg:hidden">
                {trustSignals.map((signal, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-accent">
                      {signal.value}
                    </div>
                    <div className="text-xs text-primary-foreground/70">
                      {signal.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* What's Inside */}
              <div className="hidden lg:block">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60 mb-4">
                  Ce que vous apprendrez
                </h3>
                <ul className="space-y-3">
                  {guideHighlights.slice(0, 4).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-primary-foreground/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Form Card */}
            <div className="lg:pl-8">
              <div className="bg-background rounded-2xl shadow-2xl p-6 md:p-8 relative">
                {/* Guide Preview */}
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-20 h-28 md:w-24 md:h-32 bg-gradient-to-br from-accent to-primary rounded-lg shadow-lg flex items-center justify-center transform -rotate-6">
                  <FileText className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                      Merci {formData.firstName}!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Votre guide a été envoyé à{" "}
                      <strong>{formData.email}</strong>
                    </p>
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="lg"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger Maintenant
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4">
                      Un conseiller vous contactera sous peu pour répondre à vos
                      questions.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="pl-16 md:pl-20 mb-6">
                      <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                        Téléchargez Votre Guide Gratuit
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Remplissez le formulaire pour recevoir votre copie
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="firstName"
                            className="text-sm font-medium"
                          >
                            Prénom *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder="Jean"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="lastName"
                            className="text-sm font-medium"
                          >
                            Nom *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder="Tremblay"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">
                          Courriel *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="jean.tremblay@email.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Téléphone (optionnel)
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="(514) 123-4567"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base font-semibold"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin h-5 w-5"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Envoi en cours...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Obtenir Mon Guide Gratuit
                            <ArrowRight className="w-5 h-5" />
                          </span>
                        )}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        <Shield className="w-3 h-3 inline mr-1" />
                        Vos informations sont sécurisées et ne seront jamais
                        partagées.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar - Desktop */}
      <section className="hidden lg:block bg-secondary py-6 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-16">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <signal.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {signal.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {signal.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ce Que Contient Votre Guide
            </h2>
            <p className="text-muted-foreground">
              24 pages d'informations essentielles pour prendre une décision
              éclairée
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideHighlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center shrink-0 font-bold">
                  {index + 1}
                </div>
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 md:w-6 md:h-6 fill-accent text-accent"
                />
              ))}
            </div>
            <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-primary-foreground italic mb-6 leading-relaxed">
              "Ce guide m'a ouvert les yeux. J'ai finalement compris que
              l'hypothèque inversée était la solution parfaite pour ma
              situation. J'ai maintenant accès à 180 000$ sans aucun paiement
              mensuel."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-foreground/20 rounded-full overflow-hidden">
                <Image
                  src="/elderly-woman-smiling.png"
                  alt="Monique L."
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-primary-foreground font-semibold">
                  Monique L.
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  Laval, Québec
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Prêt à Découvrir Vos Options?
            </h2>
            <p className="text-muted-foreground mb-8">
              Téléchargez votre guide gratuit maintenant ou parlez directement
              avec un conseiller.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <FileText className="w-5 h-5 mr-2" />
                Télécharger le Guide
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <a href="tel:+15141234567">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler Maintenant
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-primary py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/80 text-sm">
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              <span className="font-serif font-bold">
                HypothèqueInversée.ca
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="hover:text-primary-foreground transition-colors"
              >
                Site Principal
              </Link>
              <Link
                href="/#contact"
                className="hover:text-primary-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
            <div>© {new Date().getFullYear()} Tous droits réservés</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
