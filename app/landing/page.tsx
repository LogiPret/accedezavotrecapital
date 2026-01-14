"use client";

import { useEffect } from "react";
import { Home, DollarSign, Shield, CheckCircle2 } from "lucide-react";
import LandingFAQSection from "@/components/landing-faq-section";
import AboutUsSection from "@/components/about-us-section";
import LandingCalculator from "@/components/landing-calculator";
import Footer from "@/components/footer";
import { useLocale } from "@/lib/locale-context";
import UseCases from "@/components/use-cases";
import PromoBanner from "@/components/promo-banner";
import { trackSectionView } from "@/lib/tracking";

export default function LandingPage() {
  const { t, locale } = useLocale();

  // Track landing page view on mount
  useEffect(() => {
    trackSectionView("landing_page");
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Conversion Focused */}
      <section className="relative overflow-hidden bg-primary">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale opacity-30"
            style={{
              backgroundImage: "url('/senior-couple-home-living.jpg')",
              backgroundPosition: "center center",
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-10 md:pt-16 lg:pt-20 pb-8 md:pb-12">
          <div className="max-w-5xl mx-auto">
            {/* Main headline */}
            <div className="text-center mb-8 md:mb-10">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 text-balance leading-[1.1]">
                {t.landing.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto text-balance leading-relaxed">
                {t.landing.subtitle}
              </p>
            </div>

            {/* Calculator embedded in hero */}
            <div className="mb-8 md:mb-10">
              <LandingCalculator embedded={true} />
            </div>

            {/* Stats - Below calculator */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10">
              {/* Stat 1 - 55% */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-white/15 transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <Home className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  {t.landing.stat1Value}
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/80 leading-tight">
                  {t.landing.stat1Label}
                </p>
              </div>

              {/* Stat 2 - 0$ */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-white/15 transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  {t.landing.stat2Value}
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/80 leading-tight">
                  {t.landing.stat2Label}
                </p>
              </div>

              {/* Stat 3 - 100% */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-white/15 transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  {t.landing.stat3Value}
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/80 leading-tight">
                  {t.landing.stat3Label}
                </p>
              </div>
            </div>

            {/* Quick info text */}
            <p className="text-center text-sm text-white/80">
              {locale === "en"
                ? "Free • No obligation • Results in 30 seconds"
                : "Gratuit • Sans engagement • Résultats en 30 secondes"}
            </p>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <PromoBanner />

      <UseCases />

      {/* FAQ Section */}
      <LandingFAQSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
