import { CheckCircle2 } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Souplesse Financière",
      description:
        "Recevez vos fonds en un versement forfaitaire, en avances récurrentes, ou une combinaison des deux selon vos besoins.",
      points: [
        "Montant forfaitaire unique",
        "Avances mensuelles programmées",
        "Réserve disponible pour plus tard",
      ],
    },
    {
      title: "Processus Simplifié",
      description:
        "Contrairement aux prêts traditionnels, l'hypothèque inversée s'adresse spécifiquement aux retraités avec des critères adaptés.",
      points: [
        "Pas de vérification de revenus stricte",
        "Pas de revérification de crédit continue",
        "Processus rapide et transparent",
      ],
    },
    {
      title: "Protection Garantie",
      description:
        "Le gouvernement fédéral exige que tous les prêts hypothécaires inversés soient assortis d'une garantie de valeur nette négative.",
      points: [
        "Jamais plus que la valeur de la maison",
        "Vos héritiers ne seront jamais endettés",
        "Votre patrimoine est protégé",
      ],
    },
  ];

  return (
    <section
      id="avantages"
      className="py-16 md:py-20 lg:py-28 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Pourquoi Choisir l'Hypothèque Inversée?
          </h2>
          <p className="text-sm md:text-lg text-primary-foreground/80">
            Découvrez les avantages qui font de l'hypothèque inversée une
            solution financière privilégiée par des milliers de Canadiens
            retraités.
          </p>
        </div>

        <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-8 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="shrink-0 w-[280px] sm:w-[320px] md:w-auto snap-center bg-primary-foreground/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 border border-primary-foreground/20 flex flex-col"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground/30 mb-3 md:mb-4">
                0{index + 1}
              </div>
              <h3 className="font-serif text-lg md:text-2xl font-bold mb-3 md:mb-4">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-primary-foreground/80 mb-4 md:mb-6">
                {benefit.description}
              </p>
              <ul className="space-y-2 md:space-y-3 mt-auto">
                {benefit.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-center gap-2 md:gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                    <span className="text-xs md:text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16 pt-8 md:pt-16 border-t border-primary-foreground/20">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">
              59%
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm text-primary-foreground/70">
              Valeur maximale accessible
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">
              55+
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm text-primary-foreground/70">
              Âge minimum requis
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">
              0$
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm text-primary-foreground/70">
              Paiements mensuels
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">
              99%
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm text-primary-foreground/70">
              Ont de l'équité restante
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
