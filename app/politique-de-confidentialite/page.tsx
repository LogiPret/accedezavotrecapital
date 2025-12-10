"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export default function PolitiqueDeConfidentialite() {
  const { t, locale } = useLocale();
  const email =
    locale === "en"
      ? "info@accesshomeequity.ca"
      : "info@accedezavotrecapital.ca";

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 w-4 h-4" />
            {t.privacy.backToHome}
          </Link>
        </Button>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t.privacy.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t.privacy.company}
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            {t.privacy.effectiveDate}
          </p>

          <div className="space-y-8 text-foreground">
            <p>{t.privacy.intro}</p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.privacy.section1Title}
              </h2>
              <p className="mb-4">{t.privacy.section1Intro}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>{t.privacy.section1Item1Title}</strong>{" "}
                  {t.privacy.section1Item1}
                </li>
                <li>
                  <strong>{t.privacy.section1Item2Title}</strong>{" "}
                  {t.privacy.section1Item2}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.privacy.section2Title}
              </h2>
              <p className="mb-4">{t.privacy.section2Intro}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.privacy.section2Item1}</li>
                <li>{t.privacy.section2Item2}</li>
                <li>{t.privacy.section2Item3}</li>
                <li>{t.privacy.section2Item4}</li>
                <li>{t.privacy.section2Item5}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.privacy.section3Title}
              </h2>
              <p className="mb-4">{t.privacy.section3Intro}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.privacy.section3Item1}</li>
                <li>{t.privacy.section3Item2}</li>
                <li>{t.privacy.section3Item3}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.privacy.section4Title}
              </h2>
              <p>{t.privacy.section4Text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.privacy.section5Title}
              </h2>
              <p className="mb-4">{t.privacy.section5Intro}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.privacy.section5Item1}</li>
                <li>{t.privacy.section5Item2}</li>
                <li>{t.privacy.section5Item3}</li>
              </ul>
              <p className="mt-4">
                {t.privacy.section5Outro}{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-primary hover:underline"
                >
                  {email}
                </a>{" "}
                {t.privacy.section5Or}{" "}
                <a
                  href="tel:+15149848182"
                  className="text-primary hover:underline"
                >
                  514-984-8182
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.privacy.section6Title}
              </h2>
              <p>{t.privacy.section6Text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.privacy.section7Title}
              </h2>
              <p>{t.privacy.section7Text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.privacy.section8Title}
              </h2>
              <p>{t.privacy.section8Text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.privacy.section9Title}
              </h2>
              <p className="mb-2">{t.privacy.section9Intro}</p>
              <p className="font-semibold">{t.privacy.company}</p>
              <p>
                {t.privacy.email}{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-primary hover:underline"
                >
                  {email}
                </a>
              </p>
              <p>
                {t.privacy.phone}{" "}
                <a
                  href="tel:+15149848182"
                  className="text-primary hover:underline"
                >
                  514-984-8182
                </a>
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
