"use client";

import { useLocale } from "@/lib/locale-context";
import { Clock } from "lucide-react";
import Image from "next/image";

export default function PromoBanner() {
  const { t } = useLocale();

  return (
    <section className="bg-[#0a2b59] py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl py-8 md:py-12">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-primary rounded-2xl border border-1 border-white/25" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 rounded-2xl" />

          {/* Shine effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute -inset-full animate-shine bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          </div>

          <div className="relative z-10 px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
              {/* Left: Main promo content */}
              <div className="flex-1 text-center lg:text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
                  <span
                    className="text-sm font-semibold uppercase tracking-wide"
                    style={{ color: "#ffcb31" }}
                  >
                    {t.promo.badge}
                  </span>
                </div>

                {/* Main headline */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
                  {t.promo.title}
                  <span className="block" style={{ color: "#ffcb31" }}>
                    {t.promo.savings}
                  </span>
                </h2>

                {/* Subtitle with deadline */}
                <div className="flex flex-col items-center justify-center gap-2 mb-4">
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="w-5 h-5 shrink-0" />
                    <p className="text-base md:text-lg font-medium">
                      {t.promo.deadline}
                    </p>
                  </div>
                  {/* Partnership text with logo */}
                  <div className="flex items-center gap-2 pt-4">
                    <span className="text-xl text-white/80">
                      {t.promo.partnershipText}
                    </span>
                    <Image
                      src="/eq_bank_logo.svg"
                      alt="EQ Bank"
                      width={80}
                      height={24}
                      className="h-12 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footnotes */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="text-[10px] md:text-xs text-white/60 space-y-1 max-w-5xl">
                <p>{t.promo.footnote1}</p>
                <p>{t.promo.footnote2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
