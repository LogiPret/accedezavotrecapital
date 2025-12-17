"use client";

import { HelpCircle } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export default function LandingFAQSection() {
  const { t } = useLocale();

  // Only show 5 most important questions for landing page
  const faqs = [
    { question: t.faq.q1, answer: t.faq.a1 },
    { question: t.faq.q3, answer: t.faq.a3 },
    { question: t.faq.q4, answer: t.faq.a4 },
    { question: t.faq.q5, answer: t.faq.a5 },
    { question: t.faq.q7, answer: t.faq.a7 },
  ];

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            {t.faq.title}
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base md:text-lg text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
