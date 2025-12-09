"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Award,
  Users,
  Star,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    homeValue: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Contactez-Nous
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Prêt à en savoir plus sur l'hypothèque inversée? Notre équipe
            d'experts est là pour répondre à vos questions et vous guider dans
            le processus.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Broker card - horizontal layout on mobile */}
          <div className="bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
            {/* Mobile: horizontal layout / Desktop: vertical */}
            <div className="flex flex-row lg:flex-col">
              {/* Photo - smaller on mobile */}
              <div className="relative w-32 sm:w-40 lg:w-full h-32 sm:h-40 lg:h-80 xl:h-96 shrink-0">
                <img
                  src="/professional-mortgage-broker-man-in-suit-office-se.jpg"
                  alt="Jean-Pierre Leblanc - Courtier Hypothécaire"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 lg:bottom-6 lg:left-6 lg:right-6">
                  <h3 className="font-serif text-sm sm:text-base lg:text-2xl xl:text-3xl font-bold text-white mb-0 lg:mb-1">
                    Jean-Pierre Leblanc
                  </h3>
                  <p className="text-white/90 text-[10px] sm:text-xs lg:text-base font-medium">
                    Courtier Hypothécaire
                  </p>
                </div>
              </div>

              {/* Mobile mini stats */}
              <div className="flex-1 p-3 sm:p-4 lg:hidden flex flex-col justify-center">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="text-center">
                    <p className="text-lg sm:text-xl font-bold text-foreground">
                      15+
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-muted-foreground">
                      Ans exp.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg sm:text-xl font-bold text-foreground">
                      500+
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-muted-foreground">
                      Clients
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg sm:text-xl font-bold text-foreground">
                      4.9
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-muted-foreground">
                      Note
                    </p>
                  </div>
                </div>
                <a
                  href="tel:1-514-555-1234"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg py-2 text-xs sm:text-sm font-medium"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  1-514-555-1234
                </a>
              </div>
            </div>

            {/* Desktop full info */}
            <div className="hidden lg:block p-6 md:p-8">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-border">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">15+</p>
                  <p className="text-xs text-muted-foreground">
                    Ans d'expérience
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-xs text-muted-foreground">
                    Clients satisfaits
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">4.9</p>
                  <p className="text-xs text-muted-foreground">Note moyenne</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Spécialiste en hypothèques inversées depuis plus de 15 ans, je
                suis passionné par l'accompagnement des propriétaires de 55 ans
                et plus dans la réalisation de leurs projets de retraite.
              </p>

              {/* Credentials */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                  AMF #123456
                </span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                  OACIQ #789012
                </span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                  Certifié CHIP
                </span>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <a
                  href="tel:1-514-555-1234"
                  className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl text-primary-foreground group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Téléphone</p>
                    <p className="font-semibold text-foreground">
                      1-514-555-1234
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@hypothequeinversee.qc"
                  className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl text-primary-foreground group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Courriel</p>
                    <p className="font-semibold text-foreground">
                      info@hypothequeinversee.qc
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl text-primary-foreground">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Bureau</p>
                    <p className="font-semibold text-foreground">
                      1234 Rue Sainte-Catherine Ouest
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Montréal, QC H3B 1A1
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl text-primary-foreground">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Heures d'ouverture
                    </p>
                    <p className="font-semibold text-foreground">
                      Lun-Ven: 9h - 17h
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Consultations sur rendez-vous
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-8 md:py-12">
                <CheckCircle2 className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto mb-4 md:mb-6" />
                <h3 className="font-serif text-xl md:text-2xl font-bold text-card-foreground mb-3 md:mb-4">
                  Message Envoyé!
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                  Merci pour votre intérêt. Un membre de notre équipe vous
                  contactera dans les prochaines 24 heures.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Envoyer un Autre Message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-card-foreground mb-1 md:mb-2">
                  Demandez une Consultation Gratuite
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 md:mb-6">
                  Remplissez le formulaire et nous vous contacterons rapidement.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-5"
                >
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <Label
                        htmlFor="contact-firstName"
                        className="text-xs md:text-sm"
                      >
                        Prénom *
                      </Label>
                      <Input
                        id="contact-firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        required
                        className="mt-1 text-sm"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="contact-lastName"
                        className="text-xs md:text-sm"
                      >
                        Nom *
                      </Label>
                      <Input
                        id="contact-lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        required
                        className="mt-1 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <Label
                        htmlFor="contact-email"
                        className="text-xs md:text-sm"
                      >
                        Courriel *
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="mt-1 text-sm"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="contact-phone"
                        className="text-xs md:text-sm"
                      >
                        Téléphone *
                      </Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="mt-1 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <Label
                        htmlFor="contact-age"
                        className="text-xs md:text-sm"
                      >
                        Votre Âge
                      </Label>
                      <Select
                        value={formData.age}
                        onValueChange={(value) =>
                          setFormData({ ...formData, age: value })
                        }
                      >
                        <SelectTrigger
                          id="contact-age"
                          className="mt-1 text-sm"
                        >
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="55-59">55 - 59 ans</SelectItem>
                          <SelectItem value="60-64">60 - 64 ans</SelectItem>
                          <SelectItem value="65-69">65 - 69 ans</SelectItem>
                          <SelectItem value="70-74">70 - 74 ans</SelectItem>
                          <SelectItem value="75-79">75 - 79 ans</SelectItem>
                          <SelectItem value="80+">80 ans et plus</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label
                        htmlFor="contact-homeValue"
                        className="text-xs md:text-sm"
                      >
                        Valeur Propriété
                      </Label>
                      <Select
                        value={formData.homeValue}
                        onValueChange={(value) =>
                          setFormData({ ...formData, homeValue: value })
                        }
                      >
                        <SelectTrigger
                          id="contact-homeValue"
                          className="mt-1 text-sm"
                        >
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="200-400k">
                            200k $ - 400k $
                          </SelectItem>
                          <SelectItem value="400-600k">
                            400k $ - 600k $
                          </SelectItem>
                          <SelectItem value="600-800k">
                            600k $ - 800k $
                          </SelectItem>
                          <SelectItem value="800k-1m">800k $ - 1M $</SelectItem>
                          <SelectItem value="1m+">Plus de 1M $</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="contact-message"
                      className="text-xs md:text-sm"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Dites-nous comment nous pouvons vous aider..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                      className="mt-1 text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    Envoyer Ma Demande
                  </Button>

                  <p className="text-[10px] md:text-xs text-muted-foreground text-center">
                    Vos informations sont confidentielles et ne seront jamais
                    partagées avec des tiers.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
