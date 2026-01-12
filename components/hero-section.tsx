"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, DollarSign, Home } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { useLocale } from "@/lib/locale-context";
import { trackCTAClick } from "@/lib/tracking";

export default function HeroSection() {
  const { t, locale } = useLocale();

  const siteName =
    locale === "en" ? "Access Home Equity" : "Accédez à Votre Capital";

  return (
    <section className="relative min-h-[100svh] pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        {/* Greyscale image on the right side */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale opacity-40 lg:opacity-40"
          style={{
            backgroundImage:
              "url('/happy-senior-couple-in-their-home-garden-quebec.jpg')",
            backgroundPosition: "center center",
          }}
        />
        {/* Gradient overlay - more transparent to show image better */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-primary/80 from-0% via-primary/60 via-40% to-primary/40 lg:from-primary/90 lg:from-10% lg:via-primary/70 lg:via-35% lg:to-primary/30" />
      </div>

      {/* Decorative elements for modern look */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-4 relative z-10 flex flex-col pt-4 sm:pt-8 md:pt-12">
        {/* Mobile: Logo + Content grouped together and centered */}
        <div className="flex flex-col lg:hidden">
          {/* Logo and Site Name */}
          <div className="flex justify-center items-center lg:mb-52 mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-1.5 shadow-lg">
                <Image
                  src="/logo.png"
                  alt={siteName}
                  width={48}
                  height={48}
                  className="rounded-lg w-8 h-8 md:w-10 md:h-10"
                />
              </div>
              <span className="text-3xl sm:text-4xl md:text-4xl font-semibold text-white">
                {siteName}
              </span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-primary-foreground">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6 text-balance">
              {t.hero.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold w-full sm:w-auto text-base sm:text-lg md:text-lg py-5 sm:py-6"
                asChild
              >
                <Link
                  href="#calculatrice"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    trackCTAClick("calculate_eligibility", "hero_mobile");
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
                  {t.hero.cta}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
            </div>

            {/* Feature badges */}
            <div className="grid grid-cols-1 gap-2 sm:gap-3 md:grid-cols-3 md:gap-3">
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3 sm:p-3.5 md:p-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                </div>
                <span className="text-sm sm:text-base md:text-base font-medium">
                  {t.hero.badge1}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3 sm:p-3.5 md:p-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                </div>
                <span className="text-sm sm:text-base md:text-base font-medium">
                  {t.hero.badge2}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3 sm:p-3.5 md:p-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                </div>
                <span className="text-sm sm:text-base md:text-base font-medium">
                  {t.hero.badge3}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="text-primary-foreground flex flex-col justify-center">
              <h1 className="font-serif text-5xl xl:text-6xl font-bold leading-tight mb-6 text-balance">
                {t.hero.title}
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-xl">
                {t.hero.subtitle}
              </p>

              <div className="flex gap-4 mb-10">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
                  asChild
                >
                  <Link
                    href="#calculatrice"
                    scroll={false}
                    onClick={(e) => {
                      e.preventDefault();
                      trackCTAClick("calculate_eligibility", "hero_desktop");
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
                    {t.hero.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Feature badges */}
              <div className="grid grid-cols-3 gap-3">
                <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{t.hero.badge1}</span>
                </div>
                <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center shrink-0">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{t.hero.badge2}</span>
                </div>
                <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center shrink-0">
                    <Home className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{t.hero.badge3}</span>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="bg-card rounded-2xl shadow-2xl p-8 w-full">
              <h2 className="font-serif text-2xl font-bold text-card-foreground mb-2">
                {t.hero.formTitle}
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                {t.hero.formSubtitle}
              </p>

              <ContactForm formType="hero form" compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
