"use client";

import { Phone, Mail, Award, Clock, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import { trackPhoneClick, trackButtonClick } from "@/lib/tracking";

export default function AboutUsSection() {
  const { t, locale } = useLocale();
  const email =
    locale === "en"
      ? "info@accesshomeequity.ca"
      : "info@accedezavotrecapital.ca";

  return (
    <section id="about-us" className="py-16 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            {t.aboutUs.title}
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            {t.aboutUs.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Broker card - horizontal layout */}
          <div className="bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Photo - left side on larger screens */}
              <div className="relative w-full md:w-72 lg:w-80 shrink-0 h-72 md:h-auto overflow-hidden">
                <Image
                  src="/mark.png"
                  alt={
                    locale === "en"
                      ? "Mark A. Barbieri - Mortgage Broker"
                      : "Mark A. Barbieri - Courtier Hypothécaire"
                  }
                  fill
                  sizes="(min-width: 1024px) 20rem, (min-width: 768px) 18rem, 100vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary via-primary/50 to-primary/0" />
                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    Mark A. Barbieri
                  </h3>
                  <p className="text-white/90 text-sm font-medium">
                    {t.aboutUs.brokerTitle}
                  </p>
                </div>
              </div>

              {/* Content - right side */}
              <div className="p-5 sm:p-6 md:p-8 flex-1">
                {/* Name for desktop */}
                <div className="hidden md:block mb-4">
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-1">
                    Mark A. Barbieri
                  </h3>
                  <p className="text-muted-foreground text-base font-medium">
                    {t.aboutUs.brokerTitle}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                  {t.aboutUs.brokerBio}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-xs md:text-sm font-medium">
                      {t.aboutUs.yearsExperience}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-xs md:text-sm font-medium">
                      {t.aboutUs.licensedBroker}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    <span className="text-xs md:text-sm font-medium">
                      {t.aboutUs.freeConsultation}
                    </span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="tel:1-514-984-8182"
                    onClick={() => trackPhoneClick("about_us_section")}
                    className="flex items-center gap-3 p-3 md:p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
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
                    onClick={() =>
                      trackButtonClick("email", "about_us_section")
                    }
                    className="flex items-center gap-3 p-3 md:p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
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
        </div>
      </div>
    </section>
  );
}
