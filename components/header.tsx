"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import {
  trackPhoneClick,
  trackLanguageSwitch,
  trackCTAClick,
} from "@/lib/tracking";

function getLangSwitchUrl(locale: string): string {
  if (typeof window === "undefined") return "#";

  const hostname = window.location.hostname;
  const isLocalhost =
    hostname.includes("localhost") || hostname.includes("127.0.0.1");

  // Store absolute scroll position in URL
  const scrollY = Math.round(window.scrollY);
  const scrollParam = scrollY > 0 ? `#scroll=${scrollY}` : "";

  if (isLocalhost) {
    if (locale === "en") {
      return `${window.location.protocol}//localhost:${window.location.port}${window.location.pathname}${scrollParam}`;
    } else {
      return `${window.location.protocol}//en.localhost:${window.location.port}${window.location.pathname}${scrollParam}`;
    }
  } else {
    if (locale === "en") {
      return `https://accedezavotrecapital.ca${window.location.pathname}${scrollParam}`;
    } else {
      return `https://accesshomeequity.ca${window.location.pathname}${scrollParam}`;
    }
  }
}

export default function Header() {
  const { t, locale } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const handleLanguageSwitch = (fromLocale: string, toLocale: string) => {
    trackLanguageSwitch(fromLocale, toLocale);
    const url = getLangSwitchUrl(locale);
    window.location.href = url;
  };

  // Use useLayoutEffect to restore scroll position before paint
  useLayoutEffect(() => {
    // Check for scroll position in URL hash
    const hash = window.location.hash;
    const scrollMatch = hash.match(/#scroll=(\d+)/);

    if (scrollMatch) {
      const targetScroll = parseInt(scrollMatch[1], 10);

      // Scroll immediately before paint
      window.scrollTo({ top: targetScroll, behavior: "instant" });

      // Clean up the hash
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // Check initial scroll position on mount
    handleScroll();
    // Enable transitions after initial state is set
    requestAnimationFrame(() => {
      setHasMounted(true);
    });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.whatIs, href: "#quest-ce-que" },
    { label: t.nav.calculator, href: "#calculatrice" },
    { label: t.nav.benefits, href: "#avantages" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const siteName =
    locale === "en" ? "Access Home Equity" : "Accédez à votre capital";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        hasMounted ? "transition-all duration-300" : ""
      } ${
        isScrolled
          ? "bg-card/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Affiliation Banner */}
      <div
        className={`w-full ${hasMounted ? "transition-all duration-300" : ""} ${
          isScrolled
            ? "py-1 bg-primary/10 border-b border-primary/20"
            : "py-1 md:py-1 bg-black/30 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2">
            <span
              className={`font-medium ${
                hasMounted ? "transition-all duration-300" : ""
              } ${
                isScrolled
                  ? "text-sm md:text-xl text-foreground/70"
                  : "text-2xl text-white/80"
              }`}
            >
              {t.affiliation.text}
            </span>
            <Image
              src="/planipret-logo-white.png"
              alt="Planipret"
              width={300}
              height={100}
              className={`w-auto object-contain ${
                hasMounted ? "transition-all duration-300" : ""
              } ${isScrolled ? "h-8 md:h-10 brightness-0" : "h-16 md:h-18"}`}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="h-16 md:h-20">
          <div className="h-full flex items-center">
            <div className="w-full flex items-center justify-center lg:grid lg:grid-cols-3 lg:items-center relative">
              {/* Mobile Logo - centered, only when scrolled */}
              {isScrolled && (
                <Link
                  href="/"
                  className="flex lg:hidden items-center gap-2 max-w-[65%]"
                >
                  <div className="w-8 h-8 rounded-lg flex shrink-0">
                    <Image
                      src="/logo.png"
                      alt={siteName}
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-semibold text-base sm:text-lg text-foreground truncate">
                    {siteName}
                  </span>
                </Link>
              )}

              {/* Mobile Language Toggle - absolute right */}
              <div className="absolute right-0 flex lg:hidden items-center text-sm font-medium">
                {locale === "en" ? (
                  <button
                    onClick={() => handleLanguageSwitch("en", "fr")}
                    className={`hover:underline cursor-pointer ${
                      isScrolled
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-primary-foreground/70 hover:text-primary-foreground"
                    }`}
                  >
                    FR
                  </button>
                ) : (
                  <span
                    className={
                      isScrolled
                        ? "text-foreground font-bold"
                        : "text-primary-foreground font-bold"
                    }
                  >
                    FR
                  </span>
                )}
                <span
                  className={`mx-1 ${
                    isScrolled
                      ? "text-muted-foreground"
                      : "text-primary-foreground/70"
                  }`}
                >
                  /
                </span>
                {locale === "fr" ? (
                  <button
                    onClick={() => handleLanguageSwitch("fr", "en")}
                    className={`hover:underline cursor-pointer ${
                      isScrolled
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-primary-foreground/70 hover:text-primary-foreground"
                    }`}
                  >
                    EN
                  </button>
                ) : (
                  <span
                    className={
                      isScrolled
                        ? "text-foreground font-bold"
                        : "text-primary-foreground font-bold"
                    }
                  >
                    EN
                  </span>
                )}
              </div>

              {/* Desktop Navigation (left) */}
              <nav className="hidden lg:flex items-center gap-6 justify-self-start">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    scroll={false}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(item.href);
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
                    className={`text-base font-medium transition-colors ${
                      isScrolled
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-primary-foreground/80 hover:text-primary-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Logo + Site Name centered on laptop/desktop */}
              <Link
                href="/"
                className="hidden lg:flex items-center justify-center gap-3 justify-self-center"
                aria-label={siteName}
              >
                <div className="bg-white rounded-xl p-1.5 shadow-lg">
                  <Image
                    src="/logo.png"
                    alt={siteName}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <span
                  className={`font-semibold text-2xl ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {siteName}
                </span>
              </Link>

              {/* CTA Button (right) */}
              <div className="hidden md:flex items-center gap-4 ml-auto lg:ml-0 justify-self-end">
                <div className="flex items-center text-sm font-medium">
                  {locale === "en" ? (
                    <button
                      onClick={() => handleLanguageSwitch("en", "fr")}
                      className={`hover:underline cursor-pointer ${
                        isScrolled
                          ? "text-muted-foreground/50 hover:text-foreground"
                          : "text-primary-foreground/40 hover:text-primary-foreground"
                      }`}
                    >
                      FR
                    </button>
                  ) : (
                    <span
                      className={
                        isScrolled
                          ? "text-foreground"
                          : "text-primary-foreground"
                      }
                    >
                      FR
                    </span>
                  )}
                  <span
                    className={`mx-1 ${
                      isScrolled
                        ? "text-muted-foreground/50"
                        : "text-primary-foreground/40"
                    }`}
                  >
                    /
                  </span>
                  {locale === "fr" ? (
                    <button
                      onClick={() => handleLanguageSwitch("fr", "en")}
                      className={`hover:underline cursor-pointer ${
                        isScrolled
                          ? "text-muted-foreground/50 hover:text-foreground"
                          : "text-primary-foreground/40 hover:text-primary-foreground"
                      }`}
                    >
                      EN
                    </button>
                  ) : (
                    <span
                      className={
                        isScrolled
                          ? "text-foreground"
                          : "text-primary-foreground"
                      }
                    >
                      EN
                    </span>
                  )}
                </div>
                <a
                  href="tel:+15149848182"
                  onClick={() => trackPhoneClick("header")}
                  className={`flex items-center gap-2 text-sm font-medium ${
                    isScrolled ? "text-primary" : "text-primary-foreground"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>1-514-984-8182</span>
                </a>
                <Button
                  asChild
                  className={
                    isScrolled
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-primary-foreground hover:bg-primary-foreground/90 text-primary"
                  }
                >
                  <Link
                    href="#contact"
                    scroll={false}
                    onClick={(e) => {
                      e.preventDefault();
                      trackCTAClick("free_consultation", "header");
                      const target = document.querySelector("#contact");
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
                    {t.nav.consultation}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
