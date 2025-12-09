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
import { CheckCircle2 } from "lucide-react";

interface ContactFormProps {
  formType: "hero form" | "contact form";
  compact?: boolean;
}

export default function ContactForm({
  formType,
  compact = false,
}: ContactFormProps) {
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, "");

    // Limit to 10 digits
    const limitedNumber = phoneNumber.slice(0, 10);

    // Format based on length
    if (limitedNumber.length === 0) {
      return "";
    } else if (limitedNumber.length <= 3) {
      return `(${limitedNumber}`;
    } else if (limitedNumber.length <= 6) {
      return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3)}`;
    } else {
      return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3, 6)}-${limitedNumber.slice(6)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const validateForm = () => {
    // Validate name fields (letters, spaces, hyphens, apostrophes only)
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    if (!nameRegex.test(formData.firstName.trim())) {
      setError("Le prénom contient des caractères invalides.");
      return false;
    }
    if (!nameRegex.test(formData.lastName.trim())) {
      setError("Le nom contient des caractères invalides.");
      return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("L'adresse courriel est invalide.");
      return false;
    }

    // Validate phone (must be exactly 10 digits)
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      setError("Le numéro de téléphone doit contenir 10 chiffres.");
      return false;
    }

    // Validate age is selected
    if (!formData.age) {
      setError("Veuillez sélectionner votre âge.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Send phone as digits only to n8n
      const phoneDigits = formData.phone.replace(/\D/g, "");

      const response = await fetch(
        "https://n8n-wwfb.onrender.com/webhook/65e54c43-dfcc-441e-bd8e-706d0051de10",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            phone: phoneDigits,
            formType,
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        homeValue: "",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setError(
        "Une erreur est survenue. Veuillez réessayer ou nous appeler directement."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-6 md:py-8">
        <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-3 md:mb-4" />
        <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-2">
          Merci!
        </h3>
        <p className="text-sm text-muted-foreground">
          Nous vous contacterons bientôt.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        compact
          ? "space-y-2.5 sm:space-y-3 md:space-y-4"
          : "space-y-4 md:space-y-5"
      }
    >
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 text-destructive text-xs sm:text-sm p-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <div>
          <Label
            htmlFor={`${formType}-firstName`}
            className={
              compact
                ? "text-card-foreground text-xs sm:text-sm"
                : "text-xs md:text-sm"
            }
          >
            Prénom *
          </Label>
          <Input
            id={`${formType}-firstName`}
            placeholder="Votre prénom"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
            pattern="[a-zA-ZÀ-ÿ\s'-]+"
            title="Le prénom ne peut contenir que des lettres, espaces, traits d'union et apostrophes"
            className={compact ? "mt-1 h-9 sm:h-10 text-sm" : "mt-1 text-sm"}
          />
        </div>
        <div>
          <Label
            htmlFor={`${formType}-lastName`}
            className={
              compact
                ? "text-card-foreground text-xs sm:text-sm"
                : "text-xs md:text-sm"
            }
          >
            Nom *
          </Label>
          <Input
            id={`${formType}-lastName`}
            placeholder="Votre nom"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
            pattern="[a-zA-ZÀ-ÿ\s'-]+"
            title="Le nom ne peut contenir que des lettres, espaces, traits d'union et apostrophes"
            className={compact ? "mt-1 h-9 sm:h-10 text-sm" : "mt-1 text-sm"}
          />
        </div>
      </div>

      <div>
        <Label
          htmlFor={`${formType}-email`}
          className={
            compact
              ? "text-card-foreground text-xs sm:text-sm"
              : "text-xs md:text-sm"
          }
        >
          Courriel *
        </Label>
        <Input
          id={`${formType}-email`}
          type="email"
          placeholder="votre@courriel.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className={compact ? "mt-1 h-9 sm:h-10 text-sm" : "mt-1 text-sm"}
        />
      </div>

      <div>
        <Label
          htmlFor={`${formType}-phone`}
          className={
            compact
              ? "text-card-foreground text-xs sm:text-sm"
              : "text-xs md:text-sm"
          }
        >
          Téléphone *
        </Label>
        <Input
          id={`${formType}-phone`}
          type="tel"
          placeholder="(514) 984-8182"
          value={formData.phone}
          onChange={handlePhoneChange}
          required
          inputMode="numeric"
          className={compact ? "mt-1 h-9 sm:h-10 text-sm" : "mt-1 text-sm"}
        />
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <div>
          <Label
            htmlFor={`${formType}-age`}
            className={
              compact
                ? "text-card-foreground text-xs sm:text-sm"
                : "text-xs md:text-sm"
            }
          >
            Votre Âge *
          </Label>
          <Select
            value={formData.age}
            onValueChange={(value) => setFormData({ ...formData, age: value })}
            required
          >
            <SelectTrigger
              id={`${formType}-age`}
              className={compact ? "mt-1 h-9 sm:h-10 text-sm" : "mt-1 text-sm"}
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
            htmlFor={`${formType}-homeValue`}
            className={
              compact
                ? "text-card-foreground text-xs sm:text-sm"
                : "text-xs md:text-sm"
            }
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
              id={`${formType}-homeValue`}
              className={compact ? "mt-1 h-9 sm:h-10 text-sm" : "mt-1 text-sm"}
            >
              <SelectValue placeholder="Sélectionnez" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="200-400k">200k $ - 400k $</SelectItem>
              <SelectItem value="400-600k">400k $ - 600k $</SelectItem>
              <SelectItem value="600-800k">600k $ - 800k $</SelectItem>
              <SelectItem value="800k-1m">800k $ - 1M $</SelectItem>
              <SelectItem value="1m+">Plus de 1M $</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label
          htmlFor={`${formType}-message`}
          className={
            compact
              ? "text-card-foreground text-xs sm:text-sm"
              : "text-xs md:text-sm"
          }
        >
          Questions ou commentaires
        </Label>
        <Textarea
          id={`${formType}-message`}
          placeholder="Comment pouvons-nous vous aider?"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={compact ? 2 : 3}
          className="mt-1 text-sm"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={
          compact
            ? "w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base h-10 sm:h-11"
            : "w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        }
        size={compact ? undefined : "lg"}
      >
        {isSubmitting ? "Envoi en cours..." : "Demander une Consultation"}
      </Button>

      <p className="text-[10px] sm:text-xs text-muted-foreground text-center leading-tight">
        En soumettant ce formulaire, vous acceptez d'être contacté par notre
        équipe.
      </p>
    </form>
  );
}
