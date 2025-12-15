"use client";

import { useState, useEffect } from "react";
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

function getLangSwitchUrl(locale: string): string | null {
  if (typeof window === "undefined") return null;

  const hostname = window.location.hostname;
  const isLocalhost =
    hostname.includes("localhost") || hostname.includes("127.0.0.1");

  if (isLocalhost) {
    if (locale === "en") {
      return `${window.location.protocol}//localhost:${window.location.port}${window.location.pathname}`;
    } else {
      return `${window.location.protocol}//en.localhost:${window.location.port}${window.location.pathname}`;
    }
  } else {
    if (locale === "en") {
      return `https://accedezavotrecapital.ca${window.location.pathname}`;
    } else {
      return `https://accesshomeequity.ca${window.location.pathname}`;
    }
  }
}

export default function Header() {
  const { t, locale } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [langSwitchUrl, setLangSwitchUrl] = useState<string | null>(null);

  useEffect(() => {
    setLangSwitchUrl(getLangSwitchUrl(locale));
  }, [locale]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="h-16 md:h-20">
          <div className="h-full flex items-center">
            <div className="w-full flex items-center justify-center lg:grid lg:grid-cols-3 lg:items-center">
              {/* Mobile Logo - only when scrolled (mobile uses hero logo at top) */}
              {isScrolled && (
                <Link href="/" className="flex lg:hidden items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex">
                    <Image
                      src="/logo.png"
                      alt={siteName}
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-semibold text-xl text-foreground">
                    {siteName}
                  </span>
                </Link>
              )}

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
                    className={`text-sm font-medium transition-colors ${
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
                {langSwitchUrl && (
                  <div className="flex items-center text-sm font-medium">
                    {locale === "en" ? (
                      <a
                        href={langSwitchUrl}
                        onClick={() => trackLanguageSwitch("en", "fr")}
                        className={`hover:underline ${
                          isScrolled
                            ? "text-muted-foreground/50 hover:text-foreground"
                            : "text-primary-foreground/40 hover:text-primary-foreground"
                        }`}
                      >
                        FR
                      </a>
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
                      <a
                        href={langSwitchUrl}
                        onClick={() => trackLanguageSwitch("fr", "en")}
                        className={`hover:underline ${
                          isScrolled
                            ? "text-muted-foreground/50 hover:text-foreground"
                            : "text-primary-foreground/40 hover:text-primary-foreground"
                        }`}
                      >
                        EN
                      </a>
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
                )}
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
