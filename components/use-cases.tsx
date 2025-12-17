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
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

export default function UseCases() {
  const { t } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const useCases = [
    {
      icon: Heart,
      title: t.useCases.case1Title,
      dream: t.useCases.case1Dream,
      reality: t.useCases.case1Reality,
      description: t.useCases.case1Desc,
      benefits: [
        t.useCases.case1Benefit1,
        t.useCases.case1Benefit2,
        t.useCases.case1Benefit3,
      ],
      amount: t.useCases.case1Amount,
      image: "/elderly-couple-receiving-home-healthcare-nurse-vis.jpg",
    },
    {
      icon: Wrench,
      title: t.useCases.case2Title,
      dream: t.useCases.case2Dream,
      reality: t.useCases.case2Reality,
      description: t.useCases.case2Desc,
      benefits: [
        t.useCases.case2Benefit1,
        t.useCases.case2Benefit2,
        t.useCases.case2Benefit3,
      ],
      amount: t.useCases.case2Amount,
      image: "/beautiful-modern-kitchen-renovation-white-cabinets.jpg",
    },
    {
      icon: Wallet,
      title: t.useCases.case3Title,
      dream: t.useCases.case3Dream,
      reality: t.useCases.case3Reality,
      description: t.useCases.case3Desc,
      benefits: [
        t.useCases.case3Benefit1,
        t.useCases.case3Benefit2,
        t.useCases.case3Benefit3,
      ],
      amount: t.useCases.case3Amount,
      image: "/happy-retired-couple-relaxed-at-cafe-enjoying-coff.jpg",
    },
    {
      icon: Umbrella,
      title: t.useCases.case4Title,
      dream: t.useCases.case4Dream,
      reality: t.useCases.case4Reality,
      description: t.useCases.case4Desc,
      benefits: [
        t.useCases.case4Benefit1,
        t.useCases.case4Benefit2,
        t.useCases.case4Benefit3,
      ],
      amount: t.useCases.case4Amount,
      image: "/senior-person-relieved-peaceful-expression-reading.jpg",
    },
    {
      icon: Gift,
      title: t.useCases.case5Title,
      dream: t.useCases.case5Dream,
      reality: t.useCases.case5Reality,
      description: t.useCases.case5Desc,
      benefits: [
        t.useCases.case5Benefit1,
        t.useCases.case5Benefit2,
        t.useCases.case5Benefit3,
      ],
      amount: t.useCases.case5Amount,
      image: "/grandparents-giving-gift-to-young-couple-new-home-.jpg",
    },
    {
      icon: Plane,
      title: t.useCases.case6Title,
      dream: t.useCases.case6Dream,
      reality: t.useCases.case6Reality,
      description: t.useCases.case6Desc,
      benefits: [
        t.useCases.case6Benefit1,
        t.useCases.case6Benefit2,
        t.useCases.case6Benefit3,
      ],
      amount: t.useCases.case6Amount,
      image: "/senior-couple-on-cruise-ship-deck-sunset-ocean-vie.jpg",
    },
    {
      icon: Building2,
      title: t.useCases.case7Title,
      dream: t.useCases.case7Dream,
      reality: t.useCases.case7Reality,
      description: t.useCases.case7Desc,
      benefits: [
        t.useCases.case7Benefit1,
        t.useCases.case7Benefit2,
        t.useCases.case7Benefit3,
      ],
      amount: t.useCases.case7Amount,
      image: "/beautiful-lakeside-cottage-cabin-quebec-autumn-col.jpg",
    },
    {
      icon: CreditCard,
      title: t.useCases.case8Title,
      dream: t.useCases.case8Dream,
      reality: t.useCases.case8Reality,
      description: t.useCases.case8Desc,
      benefits: [
        t.useCases.case8Benefit1,
        t.useCases.case8Benefit2,
        t.useCases.case8Benefit3,
      ],
      amount: t.useCases.case8Amount,
      image: "/relieved-senior-cutting-credit-card-debt-free-cele.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % useCases.length);
    }, 12000);

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
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            {t.useCases.title}
          </h2>
          <p className="text-white/70 text-base md:text-xl max-w-2xl mx-auto">
            {t.useCases.subtitle}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Cards stack */}
          <div className="relative min-h-[480px] sm:min-h-[580px] md:min-h-[700px] lg:min-h-[720px]">
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
                  <div className="relative z-10 h-full flex flex-col p-5 sm:p-6 md:p-10 lg:p-12 pb-24 sm:pb-24 md:pb-28">
                    {/* Main content area - grows to fill space */}
                    <div className="flex-1 max-w-xl lg:max-w-2xl">
                      {/* Counter badge */}
                      <div className="mb-4 md:mb-6">
                        <span className="text-white/60 font-mono text-xs md:text-sm">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(useCases.length).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6">
                        {useCase.title}
                      </h3>

                      {/* Dream to Reality - with more spacing */}
                      <div className="mb-4 md:mb-8">
                        <p className="text-sm sm:text-base md:text-xl text-white/70 italic mb-1 md:mb-3">
                          "{useCase.dream}"
                        </p>
                        <p className="text-lg sm:text-xl md:text-3xl font-serif font-semibold text-sky-300">
                          {useCase.reality}
                        </p>
                      </div>

                      {/* Description - hidden on mobile to prevent overflow */}
                      <p className="hidden sm:block text-base md:text-lg text-white/90 mb-5 md:mb-8 leading-relaxed max-w-lg line-clamp-3 md:line-clamp-none">
                        {useCase.description}
                      </p>

                      {/* Benefits as inline pills */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                        {useCase.benefits.map((benefit, bIndex) => (
                          <div
                            key={bIndex}
                            className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 md:px-3 py-1 md:py-1.5"
                          >
                            <Check className="w-3.5 h-3.5 text-sky-300" />
                            <span className="text-white text-sm md:text-base font-medium">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Amount */}
                      <div className="bg-white text-[#0a2b59] px-4 md:px-5 py-2.5 md:py-3 rounded-xl md:rounded-2xl inline-block">
                        <span className="text-xs md:text-sm uppercase tracking-wider opacity-70 block">
                          {t.useCases.typicalAmount}
                        </span>
                        <p className="text-xl md:text-2xl font-bold">
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
                        aria-label={t.useCases.previous}
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
                            aria-label={`${t.useCases.goToSlide} ${dotIndex + 1}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={goToNext}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                        aria-label={t.useCases.next}
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
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            {t.useCases.bottomTitle}
          </h3>
          <p className="text-white/70 text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            {t.useCases.bottomSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Button
              size="lg"
              className="bg-white text-[#0a2b59] hover:bg-white/90 gap-2 w-full sm:w-auto"
              onClick={() => {
                const target = document.querySelector("#calculatrice");
                if (target) {
                  const offset = 80;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
            >
              {t.useCases.calculateAmount}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent w-full sm:w-auto"
              onClick={() => {
                const target = document.querySelector("#contact");
                if (target) {
                  const offset = 80;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
            >
              {t.useCases.talkToAdvisor}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
