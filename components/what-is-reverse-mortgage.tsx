"use client";

import { useState, useEffect, useRef } from "react";
import {
  Home,
  DollarSign,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhatIsReverseMortgage() {
  const [activeStep, setActiveStep] = useState(0);
  const [mobileActiveStep, setMobileActiveStep] = useState(0);
  const [progressWidth, setProgressWidth] = useState("0%");
  const processSectionRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  // ... existing code for features, processSteps, repaymentTriggers arrays ...

  const features = [
    {
      icon: Home,
      title: "Restez Chez Vous",
      description:
        "Conservez la propriété et le droit de vivre dans votre maison aussi longtemps que vous le souhaitez. Votre nom reste sur le titre de propriété.",
      detail: "Vous gardez 100% du contrôle de votre maison",
    },
    {
      icon: DollarSign,
      title: "Argent Libre d'Impôt",
      description:
        "Les fonds reçus ne sont pas considérés comme un revenu imposable et n'affectent pas vos prestations gouvernementales comme la PSV ou le SRG.",
      detail: "Aucun impact sur vos prestations",
    },
    {
      icon: Clock,
      title: "Aucun Paiement Mensuel",
      description:
        "Contrairement à une hypothèque traditionnelle, vous n'avez aucun paiement à effectuer jusqu'à la vente de la propriété.",
      detail: "Zéro paiement requis",
    },
    {
      icon: Shield,
      title: "Garantie de Protection",
      description:
        "Vous ne devrez jamais plus que la valeur de votre maison grâce à la garantie de valeur nette négative.",
      detail: "Protection garantie par la loi",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Évaluation",
      description:
        "Nous évaluons votre admissibilité basée sur votre âge (55+), la valeur de votre propriété et votre emplacement.",
    },
    {
      number: "02",
      title: "Consultation",
      description:
        "Un conseiller vous explique toutes les options et répond à vos questions. Vous recevez une estimation personnalisée.",
    },
    {
      number: "03",
      title: "Approbation",
      description:
        "Votre demande est soumise à nos partenaires bancaires. Processus rapide avec réponse en quelques jours.",
    },
    {
      number: "04",
      title: "Financement",
      description:
        "Les fonds sont déposés directement dans votre compte. Montant forfaitaire ou versements, c'est votre choix.",
    },
  ];

  const repaymentTriggers = [
    { text: "Vous vendez ou transférez la propriété", icon: Home },
    {
      text: "Vous déménagez dans un foyer de soins de longue durée",
      icon: ArrowRight,
    },
    { text: "Au décès du dernier emprunteur", icon: Shield },
  ];

  useEffect(() => {
    const calculateProgress = () => {
      if (!stepsContainerRef.current || window.innerWidth < 768) return;

      const container = stepsContainerRef.current;
      const circles = container.querySelectorAll("[data-step-circle]");
      if (circles.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const activeCircle = circles[activeStep] as HTMLElement;
      if (!activeCircle) return;

      const circleRect = activeCircle.getBoundingClientRect();
      const circleCenter = circleRect.left + circleRect.width / 2;

      // Calculate how far from left edge of viewport to center of active circle
      const widthPx = circleCenter;
      setProgressWidth(`${widthPx}px`);
    };

    calculateProgress();
    window.addEventListener("resize", calculateProgress);
    return () => window.removeEventListener("resize", calculateProgress);
  }, [activeStep]);

  useEffect(() => {
    const handleScroll = () => {
      if (!processSectionRef.current) return;

      if (window.innerWidth < 768) return;

      const section = processSectionRef.current;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const sectionTop = rect.top;
      const scrollProgress = 1 - sectionTop / viewportHeight;

      if (scrollProgress <= 0.25) {
        setActiveStep(0);
      } else if (scrollProgress <= 0.5) {
        setActiveStep(1);
      } else if (scrollProgress <= 0.75) {
        setActiveStep(2);
      } else {
        setActiveStep(3);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scrollContainer = mobileScrollRef.current;
    if (!scrollContainer) return;

    const handleMobileScroll = () => {
      const containerRect = scrollContainer.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      const cards = scrollContainer.querySelectorAll("[data-step-card]");
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setMobileActiveStep(closestIndex);
    };

    scrollContainer.addEventListener("scroll", handleMobileScroll, {
      passive: true,
    });
    handleMobileScroll();

    return () =>
      scrollContainer.removeEventListener("scroll", handleMobileScroll);
  }, []);

  const scrollToStep = (index: number) => {
    const scrollContainer = mobileScrollRef.current;
    if (!scrollContainer) return;

    const cards = scrollContainer.querySelectorAll("[data-step-card]");
    const card = cards[index] as HTMLElement;
    if (!card) return;

    const containerRect = scrollContainer.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const scrollLeft =
      scrollContainer.scrollLeft +
      (cardRect.left - containerRect.left) -
      (containerRect.width - cardRect.width) / 2;

    scrollContainer.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  return (
    <section
      id="quest-ce-que"
      className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            Comprendre l'hypothèque inversée
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Qu'est-ce qu'une{" "}
            <span className="text-primary">Hypothèque Inversée</span>?
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un prêt garanti par la valeur nette de votre résidence qui permet
            aux propriétaires canadiens de
            <strong className="text-foreground"> 55 ans et plus </strong>
            d'accéder jusqu'à{" "}
            <strong className="text-primary">59% de la valeur</strong> de leur
            maison en argent comptant.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16 md:mb-20">
          <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 md:mb-4">
              Comment ça fonctionne?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground text-center mb-6 md:mb-10 max-w-2xl mx-auto">
              Contrairement à une hypothèque traditionnelle, l'hypothèque
              inversée vous permet de recevoir de l'argent sans jamais effectuer
              de paiement.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {/* Traditional - compact on mobile */}
              <div className="relative bg-secondary/20 border border-border/50 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 opacity-60">
                <div className="relative">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-6">
                    <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                      <span className="text-xs md:text-sm font-medium text-muted-foreground">
                        VS
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm md:text-lg font-semibold text-muted-foreground">
                      Traditionnelle
                    </h4>
                  </div>

                  <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-3 md:mb-6 py-2 md:py-4">
                    <div className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-1 md:mb-2">
                        <span className="text-base sm:text-lg md:text-2xl opacity-50">
                          👤
                        </span>
                      </div>
                      <p className="text-[8px] sm:text-[10px] md:text-xs text-muted-foreground/70">
                        Vous
                      </p>
                    </div>
                    <div className="flex flex-col items-center px-1">
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-muted-foreground/50" />
                      <span className="text-[8px] sm:text-[10px] text-muted-foreground/50 mt-0.5">
                        $$$/mois
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-1 md:mb-2">
                        <span className="text-base sm:text-lg md:text-2xl opacity-50">
                          🏦
                        </span>
                      </div>
                      <p className="text-[8px] sm:text-[10px] md:text-xs text-muted-foreground/70">
                        Banque
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-1.5 md:space-y-3">
                    <li className="flex items-start gap-1.5 md:gap-3">
                      <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 md:mt-2 shrink-0" />
                      <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground/70">
                        Paiements obligatoires
                      </span>
                    </li>
                    <li className="flex items-start gap-1.5 md:gap-3">
                      <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 md:mt-2 shrink-0" />
                      <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground/70">
                        Stress financier
                      </span>
                    </li>
                    <li className="hidden sm:flex items-start gap-1.5 md:gap-3">
                      <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 md:mt-2 shrink-0" />
                      <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground/70">
                        Qualification requise
                      </span>
                    </li>
                    <li className="hidden md:flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground/70">
                        Risque de défaut
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Reverse - highlighted */}
              <div className="relative bg-primary/10 border-2 border-primary rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-xl shadow-primary/20">
                <div className="absolute -top-2.5 md:-top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-2 py-0.5 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-bold shadow-lg whitespace-nowrap">
                    Pour 55+
                  </div>
                </div>

                <div className="relative pt-1 md:pt-2">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-6">
                    <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-3 h-3 md:w-5 md:h-5 text-primary-foreground" />
                    </div>
                    <h4 className="text-xs sm:text-sm md:text-lg font-bold text-foreground">
                      Inversée
                    </h4>
                  </div>

                  <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-3 md:mb-6 py-2 md:py-4 bg-primary/10 rounded-lg md:rounded-xl">
                    <div className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-primary/20 ring-2 md:ring-4 ring-primary/30 flex items-center justify-center mb-1 md:mb-2">
                        <span className="text-base sm:text-lg md:text-2xl">
                          👤
                        </span>
                      </div>
                      <p className="text-[8px] sm:text-[10px] md:text-xs font-medium text-primary">
                        Vous
                      </p>
                    </div>
                    <div className="flex flex-col items-center px-1">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-primary rotate-180" />
                      <span className="text-[8px] sm:text-xs text-primary font-bold mt-0.5">
                        $$$
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mb-1 md:mb-2">
                        <span className="text-base sm:text-lg md:text-2xl">
                          🏦
                        </span>
                      </div>
                      <p className="text-[8px] sm:text-[10px] md:text-xs font-medium text-primary">
                        Banque
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-1.5 md:space-y-3">
                    <li className="flex items-start gap-1.5 md:gap-3">
                      <CheckCircle2 className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-[10px] sm:text-xs md:text-sm font-medium text-foreground">
                        Aucun paiement
                      </span>
                    </li>
                    <li className="flex items-start gap-1.5 md:gap-3">
                      <CheckCircle2 className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-[10px] sm:text-xs md:text-sm font-medium text-foreground">
                        La banque vous paye!
                      </span>
                    </li>
                    <li className="hidden sm:flex items-start gap-1.5 md:gap-3">
                      <CheckCircle2 className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-[10px] sm:text-xs md:text-sm font-medium text-foreground">
                        Pas de qualification
                      </span>
                    </li>
                    <li className="hidden md:flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        Restez propriétaire
                      </span>
                    </li>
                  </ul>

                  <div className="mt-3 md:mt-6 pt-2 md:pt-4 border-t border-primary/20">
                    <p className="text-center text-[10px] sm:text-xs md:text-sm font-bold text-primary">
                      Jusqu'à 59% de valeur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 text-center">
              <p className="text-sm md:text-lg text-muted-foreground">
                <span className="font-bold text-foreground">En résumé:</span>{" "}
                Vous recevez de l'argent comptant, vous restez chez vous, et
                vous ne remboursez rien tant que vous y vivez.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 md:mb-20" ref={processSectionRef}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Le processus en{" "}
            <span className="text-primary">4 étapes simples</span>
          </h3>

          {/* Desktop - horizontal timeline with full-width lines */}
          <div className="hidden md:block relative overflow-visible">
            {/* Progress line container - fixed position spanning full viewport */}
            <div className="absolute top-16 left-0 right-0 h-1 -mx-[50vw] ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]">
              {/* Background line - full screen width */}
              <div className="absolute inset-0 bg-secondary" />
              <div
                className="absolute left-0 top-0 h-full bg-primary transition-all duration-500"
                style={{ width: progressWidth }}
              />
            </div>

            <div
              ref={stepsContainerRef}
              className="grid grid-cols-4 gap-4 relative"
            >
              {processSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div
                    data-step-circle
                    className={cn(
                      "w-32 h-32 rounded-full mx-auto mb-6 flex flex-col items-center justify-center transition-all duration-500 relative z-10 border-4",
                      index <= activeStep
                        ? "bg-primary text-primary-foreground border-primary scale-100"
                        : "bg-background text-muted-foreground border-secondary scale-90"
                    )}
                  >
                    <span
                      className={cn(
                        "text-3xl font-bold leading-none",
                        index <= activeStep
                          ? "text-primary-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {step.number}
                    </span>
                    <span
                      className={cn(
                        "text-xs font-semibold mt-1 text-center px-2",
                        index <= activeStep
                          ? "text-primary-foreground/90"
                          : "text-muted-foreground/70"
                      )}
                    >
                      {step.title}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "text-center transition-all duration-500",
                      index <= activeStep
                        ? "opacity-100 translate-y-0"
                        : "opacity-40 translate-y-2"
                    )}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile - horizontal scroll cards */}
          <div className="md:hidden relative">
            <div
              ref={mobileScrollRef}
              className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
            >
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  data-step-card
                  className="shrink-0 w-[280px] snap-center border rounded-xl p-4 transition-all border-border bg-card"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full flex flex-col items-center justify-center shrink-0 border-2 bg-primary border-primary">
                      <span className="text-lg font-bold leading-none text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                    <h4 className="font-bold text-foreground">{step.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex justify-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5">
              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToStep(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    mobileActiveStep === index
                      ? "bg-primary w-6"
                      : "bg-border w-2 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Aller à l'étape ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-primary-foreground">
            <div className="text-center mb-6 md:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">
                Quand dois-je rembourser?
              </h3>
              <p className="text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto">
                Vous conservez votre maison et ne remboursez rien tant que vous
                y vivez. Le remboursement n'est requis que dans les situations
                suivantes:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              {repaymentTriggers.map((trigger, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/20 transition-colors"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <trigger.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <p className="text-xs md:text-sm font-medium">
                    {trigger.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-10 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3">
                <Shield className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm font-medium">
                  Garantie: Jamais plus que la valeur de votre maison
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
