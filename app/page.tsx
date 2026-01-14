import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import WhatIsReverseMortgage from "@/components/what-is-reverse-mortgage";
import BenefitsSection from "@/components/benefits-section";
import Calculator from "@/components/calculator";
import UseCases from "@/components/use-cases";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import TrackedSection from "@/components/tracked-section";
import PromoPopup from "@/components/promo-popup";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PromoPopup />
      <Header />
      <TrackedSection sectionId="hero">
        <HeroSection />
      </TrackedSection>
      <TrackedSection sectionId="what-is-reverse-mortgage">
        <WhatIsReverseMortgage />
      </TrackedSection>
      <TrackedSection sectionId="benefits">
        <BenefitsSection />
      </TrackedSection>
      <TrackedSection sectionId="calculator">
        <Calculator />
      </TrackedSection>
      <TrackedSection sectionId="use-cases">
        <UseCases />
      </TrackedSection>
      <TrackedSection sectionId="contact">
        <ContactSection />
      </TrackedSection>
      <Footer />
    </main>
  );
}
