"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  Download,
  PlayCircle,
  BookOpen,
  Mail,
  CheckCircle2,
} from "lucide-react";

export default function ResourcesSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const resources = [
    {
      icon: FileText,
      type: "PDF",
      title: "Guide Complet de l'Hypothèque Inversée",
      description:
        "Tout ce que vous devez savoir sur le fonctionnement, les avantages et les considérations.",
      downloadable: true,
    },
    {
      icon: BookOpen,
      type: "Article",
      title: "Hypothèque Inversée vs Marge de Crédit",
      description:
        "Comparez les deux options pour accéder à la valeur nette de votre propriété.",
      downloadable: false,
    },
    {
      icon: PlayCircle,
      type: "Vidéo",
      title: "Comprendre l'Hypothèque Inversée en 5 Minutes",
      description:
        "Une explication claire et visuelle pour bien comprendre ce produit financier.",
      downloadable: false,
    },
    {
      icon: FileText,
      type: "PDF",
      title: "Liste de Vérification: Êtes-vous Prêt?",
      description:
        "Les questions essentielles à vous poser avant de demander une hypothèque inversée.",
      downloadable: true,
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <section id="ressources" className="py-16 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Ressources et Information
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Accédez à nos guides, articles et vidéos pour mieux comprendre
            l'hypothèque inversée et prendre une décision éclairée.
          </p>
        </div>

        <div className="flex gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="shrink-0 w-[260px] sm:w-[280px] md:w-auto snap-center group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <resource.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <span className="text-[10px] md:text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <CardTitle className="text-base md:text-lg leading-tight">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs md:text-sm mb-4">
                  {resource.description}
                </CardDescription>
                <Button
                  variant={resource.downloadable ? "default" : "outline"}
                  size="sm"
                  className={
                    resource.downloadable
                      ? "w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm"
                      : "w-full text-xs md:text-sm"
                  }
                >
                  {resource.downloadable ? (
                    <>
                      <Download className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      Télécharger
                    </>
                  ) : (
                    "Consulter"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-12 mt-10 md:mt-16">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="text-primary-foreground">
              <Mail className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4" />
              <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                Restez Informé
              </h3>
              <p className="text-sm md:text-base text-primary-foreground/80 mb-3 md:mb-4">
                Recevez nos derniers articles, conseils et mises à jour sur
                l'hypothèque inversée directement dans votre boîte courriel.
              </p>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                  <span>Conseils financiers pour retraités</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                  <span>Actualités du marché immobilier</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                  <span>Offres et promotions exclusives</span>
                </li>
              </ul>
            </div>
            <div>
              {isSubscribed ? (
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-accent mx-auto mb-3 md:mb-4" />
                  <h4 className="text-lg md:text-xl font-bold text-primary-foreground mb-2">
                    Merci!
                  </h4>
                  <p className="text-sm text-primary-foreground/80">
                    Vous êtes maintenant inscrit à notre infolettre.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8"
                >
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <Label
                        htmlFor="newsletter-email"
                        className="text-primary-foreground text-sm"
                      >
                        Votre Adresse Courriel
                      </Label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder="votre@courriel.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 md:mt-2 bg-primary-foreground text-foreground"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      size="lg"
                    >
                      S'inscrire à l'Infolettre
                    </Button>
                    <p className="text-[10px] md:text-xs text-primary-foreground/60 text-center">
                      En vous inscrivant, vous acceptez de recevoir nos
                      communications. Désabonnement facile en tout temps.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
