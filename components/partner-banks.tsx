export default function PartnerBanks() {
  const partners = [
    { name: "Banque Équitable", logo: "/equitable-bank-logo-simple.jpg" },
    { name: "HomeEquity Bank", logo: "/homeequity-bank-chip-logo.jpg" },
    { name: "Desjardins", logo: "/desjardins-bank-logo-green.jpg" },
    { name: "Banque Nationale", logo: "/national-bank-canada-logo.jpg" },
    { name: "TD Canada Trust", logo: "/td-bank-canada-logo-green.jpg" },
    { name: "RBC", logo: "/rbc-royal-bank-logo-blue.jpg" },
  ];

  return (
    <section className="py-8 md:py-12 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs md:text-sm font-medium text-muted-foreground mb-6 md:mb-8 uppercase tracking-wider">
          Nos Partenaires Bancaires de Confiance
        </p>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll scrollbar-hide">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4 md:mx-8 lg:mx-12 flex items-center justify-center h-12 md:h-16 w-28 md:w-40 grayscale transition-all duration-300"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-8 md:max-h-12 max-w-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 md:mx-8 lg:mx-12 flex items-center justify-center h-12 md:h-16 w-28 md:w-40 grayscale transition-all duration-300"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-8 md:max-h-12 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
