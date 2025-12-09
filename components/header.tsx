"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    { label: "FAQ", href: "#faq" },
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
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isScrolled ? "bg-primary" : "bg-primary-foreground"
              }`}
            >
              <span
                className={`font-bold text-xl ${isScrolled ? "text-primary-foreground" : "text-primary"}`}
              >
                HI
              </span>
            </div>
            <span
              className={`font-serif font-bold text-lg md:text-xl ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
            >
              HypothèqueInversée<span className="text-accent">.qc</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
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
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+15145551234"
              className={`flex items-center gap-2 text-sm font-medium ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>1-514-555-1234</span>
            </a>
            <Button
              asChild
              className={
                isScrolled
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-primary-foreground hover:bg-primary-foreground/90 text-primary"
              }
            >
              <Link href="#contact">Consultation Gratuite</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-card rounded-b-xl">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+15145551234"
                className="flex items-center gap-2 text-sm font-medium text-primary"
              >
                <Phone className="w-4 h-4" />
                <span>1-514-555-1234</span>
              </a>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="#contact">Consultation Gratuite</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
