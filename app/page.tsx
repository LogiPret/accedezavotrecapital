import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PartnerBanks from "@/components/partner-banks";
import WhatIsReverseMortgage from "@/components/what-is-reverse-mortgage";
import BenefitsSection from "@/components/benefits-section";
import Calculator from "@/components/calculator";
import UseCases from "@/components/use-cases";
import ResourcesSection from "@/components/resources-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PartnerBanks />
      <WhatIsReverseMortgage />
      <BenefitsSection />
      <Calculator />
      <UseCases />
      <ContactSection />
      <Footer />
    </main>
  );
}
