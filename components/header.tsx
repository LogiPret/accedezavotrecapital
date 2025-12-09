"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Hypothèque Inversée", href: "#quest-ce-que" },
    { label: "Calculatrice", href: "#calculatrice" },
    { label: "Avantages", href: "#avantages" },
    { label: "Ressources", href: "#ressources" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Mobile Logo - Only shown when scrolled */}
          {isScrolled && (
            <Link href="/" className="flex lg:hidden items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex">
                <img src="/logo.png" alt="logo" />
              </div>
              <span className="font-semibold text-xl text-foreground">
                Accédez à votre capital
              </span>
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
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
                    const elementPosition = target.getBoundingClientRect().top;
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

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <a
              href="tel:+15149848182"
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
                  const target = document.querySelector("#contact");
                  if (target) {
                    const offset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Consultation Gratuite
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
