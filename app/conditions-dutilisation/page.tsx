"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export default function ConditionsDUtilisation() {
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
            {t.terms.backToHome}
          </Link>
        </Button>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t.terms.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t.terms.company}
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            {t.terms.effectiveDate}
          </p>

          <div className="space-y-8 text-foreground">
            <p>{t.terms.intro}</p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.terms.section1Title}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.terms.section1Item1}</li>
                <li>{t.terms.section1Item2}</li>
                <li>{t.terms.section1Item3}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.terms.section2Title}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.terms.section2Item1}</li>
                <li>{t.terms.section2Item2}</li>
                <li>{t.terms.section2Item3}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.terms.section3Title}
              </h2>
              <p>{t.terms.section3Text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.terms.section4Title}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.terms.section4Item1}</li>
                <li>{t.terms.section4Item2}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.terms.section5Title}
              </h2>
              <p>{t.terms.section5Text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.terms.section6Title}
              </h2>
              <p>{t.terms.section6Text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.terms.section7Title}
              </h2>
              <p>
                {t.terms.section7Text1}{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-primary hover:underline"
                >
                  {t.terms.section7Link}
                </Link>
                {t.terms.section7Text2}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.terms.section8Title}
              </h2>
              <p>{t.terms.section8Text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.terms.section9Title}
              </h2>
              <p>{t.terms.section9Text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.terms.section10Title}
              </h2>
              <p className="mb-2">{t.terms.section10Intro}</p>
              <p className="font-semibold">{t.terms.company}</p>
              <p>
                {t.terms.email}{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-primary hover:underline"
                >
                  {email}
                </a>
              </p>
              <p>
                {t.terms.phone}{" "}
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
