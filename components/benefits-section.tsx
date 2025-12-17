"use client";

import { CheckCircle2 } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export default function BenefitsSection() {
  const { t } = useLocale();

  const benefits = [
    {
      title: t.benefits.benefit1Title,
      description: t.benefits.benefit1Desc,
      points: [
        t.benefits.benefit1Point1,
        t.benefits.benefit1Point2,
        t.benefits.benefit1Point3,
      ],
    },
    {
      title: t.benefits.benefit2Title,
      description: t.benefits.benefit2Desc,
      points: [
        t.benefits.benefit2Point1,
        t.benefits.benefit2Point2,
        t.benefits.benefit2Point3,
      ],
    },
    {
      title: t.benefits.benefit3Title,
      description: t.benefits.benefit3Desc,
      points: [
        t.benefits.benefit3Point1,
        t.benefits.benefit3Point2,
        t.benefits.benefit3Point3,
      ],
    },
  ];

  const stats = [
    { value: t.benefits.stat1Value, label: t.benefits.stat1Label },
    { value: t.benefits.stat2Value, label: t.benefits.stat2Label },
    { value: t.benefits.stat3Value, label: t.benefits.stat3Label },
    { value: t.benefits.stat4Value, label: t.benefits.stat4Label },
  ];

  return (
    <section
      id="avantages"
      className="py-16 md:py-20 lg:py-28 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            {t.benefits.title}
          </h2>
          <p className="text-base md:text-xl text-primary-foreground/80">
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-8 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="shrink-0 w-[280px] sm:w-[320px] md:w-auto snap-center bg-primary-foreground/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 border border-primary-foreground/20 flex flex-col"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground/30 mb-3 md:mb-4">
                0{index + 1}
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 md:mb-4">
                {benefit.title}
              </h3>
              <p className="text-base md:text-lg text-primary-foreground/80 mb-4 md:mb-6">
                {benefit.description}
              </p>
              <ul className="space-y-2 md:space-y-3 mt-auto">
                {benefit.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-center gap-2 md:gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                    <span className="text-sm md:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16 pt-8 md:pt-16 border-t border-primary-foreground/20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
