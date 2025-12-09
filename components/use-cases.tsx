"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Heart,
  Wrench,
  Wallet,
  Umbrella,
  Gift,
  Plane,
  Building2,
  CreditCard,
  Check,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const useCases = [
    {
      icon: Heart,
      title: "Soins de Santé",
      dream: "Vous pensiez ne plus pouvoir rester chez vous?",
      reality: "Restez dans votre maison en toute sécurité",
      description:
        "Payez pour des soins à domicile de qualité, des équipements médicaux adaptés ou des aménagements pour vieillir chez vous en toute autonomie.",
      benefits: [
        "Soins à domicile personnalisés",
        "Équipements médicaux",
        "Monte-escalier, barres d'appui",
      ],
      amount: "15 000$ - 50 000$",
      image: "/elderly-couple-receiving-home-healthcare-nurse-vis.jpg",
    },
    {
      icon: Wrench,
      title: "Rénovations",
      dream: "Votre maison a besoin de réparations majeures?",
      reality: "Transformez votre chez-vous",
      description:
        "Modernisez votre cuisine, réparez votre toiture, remplacez les fenêtres ou adaptez votre maison à vos besoins actuels.",
      benefits: [
        "Nouvelle toiture",
        "Cuisine moderne",
        "Fenêtres écoénergétiques",
      ],
      amount: "20 000$ - 100 000$",
      image: "/beautiful-modern-kitchen-renovation-white-cabinets.jpg",
    },
    {
      icon: Wallet,
      title: "Supplément de Revenu",
      dream: "L'inflation gruge votre pouvoir d'achat?",
      reality: "Retrouvez votre tranquillité financière",
      description:
        "Augmentez vos liquidités mensuelles pour maintenir le niveau de vie que vous méritez après des décennies de travail.",
      benefits: [
        "Paiements mensuels réguliers",
        "Aucun impact sur vos prestations",
        "Flexibilité totale",
      ],
      amount: "1 000$ - 3 000$/mois",
      image: "/happy-retired-couple-relaxed-at-cafe-enjoying-coff.jpg",
    },
    {
      icon: Umbrella,
      title: "Dépenses Imprévues",
      dream: "Une urgence financière vous inquiète?",
      reality: "Faites face aux imprévus sans stress",
      description:
        "Que ce soit une réparation urgente, des frais médicaux ou une situation inattendue, vous avez accès à des fonds rapidement.",
      benefits: [
        "Accès rapide aux fonds",
        "Aucune justification requise",
        "Tranquillité d'esprit",
      ],
      amount: "10 000$ - 75 000$",
      image: "/senior-person-relieved-peaceful-expression-reading.jpg",
    },
    {
      icon: Gift,
      title: "Héritage Anticipé",
      dream: "Vous aimeriez aider vos proches maintenant?",
      reality: "Voyez l'impact de votre générosité",
      description:
        "Aidez vos enfants avec une mise de fonds, payez les études de vos petits-enfants ou faites un don significatif.",
      benefits: [
        "Mise de fonds pour vos enfants",
        "Frais de scolarité",
        "Don de bienfaisance",
      ],
      amount: "25 000$ - 150 000$",
      image: "/grandparents-giving-gift-to-young-couple-new-home-.jpg",
    },
    {
      icon: Plane,
      title: "Voyages de Rêve",
      dream: "Vous avez remis vos rêves de voyage à plus tard?",
      reality: "C'est maintenant le moment de partir",
      description:
        "Cette croisière en Europe, ce voyage au Japon, cette visite aux proches à l'étranger... Vos rêves sont enfin à portée de main.",
      benefits: [
        "Croisières internationales",
        "Voyages en famille",
        "Aventures inoubliables",
      ],
      amount: "5 000$ - 30 000$",
      image: "/senior-couple-on-cruise-ship-deck-sunset-ocean-vie.jpg",
    },
    {
      icon: Building2,
      title: "Résidence Secondaire",
      dream: "Ce chalet au bord du lac vous fait rêver?",
      reality: "Offrez-vous ce refuge bien mérité",
      description:
        "Achetez cette propriété de vacances dont vous rêvez depuis des années. Un investissement dans votre qualité de vie.",
      benefits: ["Chalet en nature", "Condo en Floride", "Patrimoine familial"],
      amount: "50 000$ - 200 000$",
      image: "/beautiful-lakeside-cottage-cabin-quebec-autumn-col.jpg",
    },
    {
      icon: CreditCard,
      title: "Consolidation de Dettes",
      dream: "Les paiements mensuels vous étouffent?",
      reality: "Éliminez vos dettes et respirez",
      description:
        "Remboursez vos cartes de crédit à taux élevé, consolidez vos prêts et libérez-vous du stress des paiements.",
      benefits: [
        "Éliminer les cartes de crédit",
        "Un seul paiement simplifié",
        "Plus de liberté",
      ],
      amount: "15 000$ - 100 000$",
      image: "/relieved-senior-cutting-credit-card-debt-free-cele.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % useCases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [useCases.length, resetKey]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % useCases.length);
    setResetKey((k) => k + 1);
  }, [useCases.length]);

  const goToPrevious = useCallback(() => {
    setActiveIndex(
      (current) => (current - 1 + useCases.length) % useCases.length
    );
    setResetKey((k) => k + 1);
  }, [useCases.length]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
    setResetKey((k) => k + 1);
  }, []);

  return (
    <section
      id="use-cases"
      className="relative bg-[#0a2b59] py-12 md:py-16 lg:py-24"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            Liberté financière
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Comment Utiliser <span className="text-sky-300">Vos Fonds?</span>
          </h2>
          <p className="text-white/70 text-sm md:text-lg max-w-2xl mx-auto">
            Découvrez les possibilités qui s'offrent à vous avec une hypothèque
            inversée
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Cards stack */}
          <div className="relative min-h-[650px] sm:min-h-[680px] md:min-h-[700px] lg:min-h-[720px]">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === activeIndex
                    ? "opacity-100 z-10 scale-100"
                    : "opacity-0 z-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                  {/* Full background image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      fill
                      className="object-cover"
                      priority={index <= 1}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a2b59]/95 via-[#0a2b59]/70 to-transparent md:from-[#0a2b59]/90 md:via-[#0a2b59]/50 md:to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="relative z-10 h-full flex flex-col p-5 sm:p-6 md:p-10 lg:p-12 pb-20 md:pb-24">
                    {/* Main content area - grows to fill space */}
                    <div className="flex-1 max-w-xl lg:max-w-2xl">
                      {/* Counter badge */}
                      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                        <div className="w-9 h-9 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <useCase.icon className="w-4 h-4 md:w-7 md:h-7 text-white" />
                        </div>
                        <div className="h-px w-4 md:w-8 bg-white/30" />
                        <span className="text-white/60 font-mono text-xs md:text-sm">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(useCases.length).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                        {useCase.title}
                      </h3>

                      {/* Dream to Reality - with more spacing */}
                      <div className="mb-5 md:mb-8">
                        <p className="text-sm md:text-lg text-white/70 italic mb-2 md:mb-3">
                          "{useCase.dream}"
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-sky-300">
                          {useCase.reality}
                        </p>
                      </div>

                      {/* Description - hidden on smallest screens to prevent overflow */}
                      <p className="text-sm md:text-lg text-white/90 mb-5 md:mb-8 leading-relaxed max-w-lg line-clamp-3 md:line-clamp-none">
                        {useCase.description}
                      </p>

                      {/* Benefits as inline pills */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                        {useCase.benefits.map((benefit, bIndex) => (
                          <div
                            key={bIndex}
                            className="flex items-center gap-1 md:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 md:px-3 py-1 md:py-1.5"
                          >
                            <Check className="w-3 h-3 text-sky-300" />
                            <span className="text-white text-xs md:text-sm font-medium">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Amount */}
                      <div className="bg-white text-[#0a2b59] px-4 md:px-5 py-2 md:py-3 rounded-xl md:rounded-2xl inline-block">
                        <span className="text-[10px] md:text-xs uppercase tracking-wider opacity-70 block">
                          Montant typique
                        </span>
                        <p className="text-lg md:text-2xl font-bold">
                          {useCase.amount}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6 md:p-10 lg:p-12">
                    <div className="flex justify-between items-center">
                      <button
                        onClick={goToPrevious}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                        aria-label="Précédent"
                      >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                      </button>

                      {/* Progress dots */}
                      <div className="flex items-center gap-1.5 md:gap-2">
                        {useCases.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={() => goToSlide(dotIndex)}
                            className={`transition-all duration-300 rounded-full ${
                              dotIndex === activeIndex
                                ? "w-6 md:w-8 h-1.5 md:h-2 bg-white"
                                : "w-1.5 md:w-2 h-1.5 md:h-2 bg-white/30 hover:bg-white/50"
                            }`}
                            aria-label={`Aller au slide ${dotIndex + 1}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={goToNext}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                        aria-label="Suivant"
                      >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-20 text-center">
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Votre argent. Vos choix. Aucune restriction.
          </h3>
          <p className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Peu importe comment vous souhaitez utiliser vos fonds, nous sommes
            là pour vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Button
              size="lg"
              className="bg-white text-[#0a2b59] hover:bg-white/90 gap-2 w-full sm:w-auto"
            >
              Calculer mon montant
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent w-full sm:w-auto"
            >
              Parler à un conseiller
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
