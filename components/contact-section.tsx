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
          {/* Broker card - horizontal layout */}
          <div className="bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
            <div className="flex flex-col sm:flex-row">
              {/* Photo - left side on larger screens */}
              <div className="relative w-full sm:w-64 md:w-72 shrink-0 h-64 sm:h-auto">
                <img
                  src="/mark.png"
                  alt="Mark A. Barbieri - Courtier Hypothécaire"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:hidden">
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    Mark A. Barbieri
                  </h3>
                  <p className="text-white/90 text-sm font-medium">
                    Courtier Hypothécaire agréé
                  </p>
                </div>
              </div>

              {/* Contact info - right side */}
              <div className="p-4 sm:p-6 md:p-8 flex-1">
                {/* Name for desktop */}
                <div className="hidden sm:block mb-4">
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-1">
                    Mark A. Barbieri
                  </h3>
                  <p className="text-muted-foreground text-base font-medium">
                    Courtier Hypothécaire agréé
                  </p>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                  Accédez à votre capital.ca est dirigé par Mark A. Barbieri, un
                  expert chevronné en prêts hypothécaires inversés, dédié aux
                  propriétaires âgés. Fort de plus de 25 ans d’expérience,
                  acquise tant au sein de la plus grande banque canadienne que
                  dans le secteur du courtage hypothécaire, Mark et son équipe
                  offrent une expertise approfondie et une approche centrée sur
                  le client à chaque étape du processus.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="tel:1-514-984-8182"
                    className="flex items-center gap-3 p-3 md:p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl text-primary-foreground group-hover:scale-105 transition-transform shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Téléphone
                      </p>
                      <p className="font-semibold text-foreground text-sm md:text-base">
                        1-514-984-8182
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@hypothequeinversee.qc"
                    className="flex items-center gap-3 p-3 md:p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl text-primary-foreground group-hover:scale-105 transition-transform shrink-0">
                      <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Courriel
                      </p>
                      <p className="font-semibold text-foreground text-sm md:text-base break-all">
                        info@hypothequeinversee.qc
                      </p>
                    </div>
                  </a>
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
