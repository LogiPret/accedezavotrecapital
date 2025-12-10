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
import { useLocale } from "@/lib/locale-context";

interface ContactFormProps {
  formType: "hero form" | "contact form";
  compact?: boolean;
}

export default function ContactForm({
  formType,
  compact = false,
}: ContactFormProps) {
  const { t } = useLocale();
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
      setError(t.form.errorFirstName);
      return false;
    }
    if (!nameRegex.test(formData.lastName.trim())) {
      setError(t.form.errorLastName);
      return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError(t.form.errorEmail);
      return false;
    }

    // Validate phone (must be exactly 10 digits)
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      setError(t.form.errorPhone);
      return false;
    }

    // Validate age is selected
    if (!formData.age) {
      setError(t.form.errorAge);
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
      setError(t.form.errorGeneral);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-6 md:py-8">
        <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-3 md:mb-4" />
        <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-2">
          {t.form.successTitle}
        </h3>
        <p className="text-sm text-muted-foreground">{t.form.successMessage}</p>
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
            {t.form.firstName} {t.form.required}
          </Label>
          <Input
            id={`${formType}-firstName`}
            placeholder={t.form.firstName}
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
            {t.form.lastName} {t.form.required}
          </Label>
          <Input
            id={`${formType}-lastName`}
            placeholder={t.form.lastName}
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
          {t.form.email} {t.form.required}
        </Label>
        <Input
          id={`${formType}-email`}
          type="email"
          placeholder="email@example.com"
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
          {t.form.phone} {t.form.required}
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
            {t.form.age} {t.form.required}
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
              <SelectValue placeholder={t.form.selectPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="55-59">{t.form.age55_59}</SelectItem>
              <SelectItem value="60-64">{t.form.age60_64}</SelectItem>
              <SelectItem value="65-69">{t.form.age65_69}</SelectItem>
              <SelectItem value="70-74">{t.form.age70_74}</SelectItem>
              <SelectItem value="75-79">{t.form.age75_79}</SelectItem>
              <SelectItem value="80+">{t.form.age80plus}</SelectItem>
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
            {t.form.homeValue}
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
              <SelectValue placeholder={t.form.selectPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="200-400k">{t.form.value200_400k}</SelectItem>
              <SelectItem value="400-600k">{t.form.value400_600k}</SelectItem>
              <SelectItem value="600-800k">{t.form.value600_800k}</SelectItem>
              <SelectItem value="800k-1m">{t.form.value800k_1m}</SelectItem>
              <SelectItem value="1m+">{t.form.value1mplus}</SelectItem>
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
          {t.form.message}
        </Label>
        <Textarea
          id={`${formType}-message`}
          placeholder={t.form.messagePlaceholder}
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
        {isSubmitting ? t.form.submitting : t.form.submit}
      </Button>

      <p className="text-[10px] sm:text-xs text-muted-foreground text-center leading-tight">
        {t.form.disclaimer}
      </p>
    </form>
  );
}
