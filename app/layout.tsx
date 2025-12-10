import type React from "react";
import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { headers } from "next/headers";
import { LocaleProvider } from "@/lib/locale-context";
import type { Locale } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title:
    "Hypothèque Inversée Québec | Votre Courtier Hypothécaire de Confiance",
  description:
    "Découvrez comment une hypothèque inversée peut vous aider à profiter de votre retraite. Obtenez jusqu'à 59% de la valeur de votre maison en argent libre d'impôt, sans paiements mensuels.",
  keywords:
    "hypothèque inversée, CHIP, prêt hypothécaire inversé, retraite, Québec, courtier hypothécaire",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "fr") as Locale;

  return (
    <html lang={locale === "en" ? "en" : "fr"}>
      <body className={`font-sans antialiased`}>
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
