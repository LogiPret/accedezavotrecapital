"use client";

import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import { useLocale } from "@/lib/locale-context";
import { trackPhoneClick, trackButtonClick } from "@/lib/tracking";

export default function ContactSection() {
  const { t, locale } = useLocale();
  const email =
    locale === "en"
      ? "info@accesshomeequity.ca"
      : "info@accedezavotrecapital.ca";

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            {t.contact.title}
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Broker card - horizontal layout */}
          <div className="bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Photo - left side on larger screens */}
              <div className="relative w-full md:w-64 lg:w-72 shrink-0 h-64 md:h-auto">
                <Image
                  src="/mark.png"
                  alt={
                    locale === "en"
                      ? "Mark A. Barbieri - Mortgage Broker"
                      : "Mark A. Barbieri - Courtier Hypothécaire"
                  }
                  fill
                  sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 100vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    Mark A. Barbieri
                  </h3>
                  <p className="text-white/90 text-sm font-medium">
                    {t.contact.brokerTitle}
                  </p>
                </div>
              </div>

              {/* Contact info - right side */}
              <div className="p-4 sm:p-6 md:p-8 flex-1">
                {/* Name for desktop */}
                <div className="hidden md:block mb-4">
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-1">
                    Mark A. Barbieri
                  </h3>
                  <p className="text-muted-foreground text-base font-medium">
                    {t.contact.brokerTitle}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                  {t.contact.brokerBio}
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="tel:1-514-984-8182"
                    onClick={() => trackPhoneClick("contact_section")}
                    className="flex items-center gap-3 p-3 md:p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl text-primary-foreground group-hover:scale-105 transition-transform shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {t.contact.phone}
                      </p>
                      <p className="font-semibold text-foreground text-sm md:text-base">
                        1-514-984-8182
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${email}`}
                    onClick={() => trackButtonClick("email", "contact_section")}
                    className="flex items-center gap-3 p-3 md:p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl text-primary-foreground group-hover:scale-105 transition-transform shrink-0">
                      <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {t.contact.email}
                      </p>
                      <p className="font-semibold text-foreground text-sm md:text-base break-all">
                        {email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-card-foreground mb-1 md:mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 md:mb-6">
              {t.contact.formSubtitle}
            </p>

            <ContactForm formType="contact form" />
          </div>
        </div>
      </div>
    </section>
  );
}
