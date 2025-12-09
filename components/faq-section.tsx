import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Comment fonctionne une hypothèque inversée?",
      answer:
        "Une hypothèque inversée est un prêt garanti par la valeur nette de votre résidence. Contrairement à une hypothèque ordinaire où vous effectuez des paiements à la banque, avec une hypothèque inversée, c'est la banque qui vous paye! Vous n'avez pas à effectuer de paiements mensuels tant que vous vivez dans votre propriété. Le prêt devient exigible uniquement lorsque vous vendez, déménagez ou décédez.",
    },
    {
      question: "À qui s'adresse l'hypothèque inversée?",
      answer:
        "L'hypothèque inversée s'adresse exclusivement aux propriétaires canadiens âgés de 55 ans ou plus. Cette exigence d'âge s'applique à tous les propriétaires inscrits sur le titre. Vous devez également habiter la propriété comme résidence principale au moins 6 mois par année.",
    },
    {
      question: "Combien puis-je obtenir avec une hypothèque inversée?",
      answer:
        "Vous pouvez recevoir jusqu'à 59% de la valeur de votre résidence. Le montant exact dépend de votre âge (et celui de votre conjoint le cas échéant), de l'emplacement de votre propriété, du type de résidence et de sa valeur actuelle selon l'évaluation. Utilisez notre calculatrice pour obtenir une estimation gratuite.",
    },
    {
      question: "Est-ce que la banque deviendra propriétaire de ma maison?",
      answer:
        "Non, absolument pas! Vous demeurez le seul et unique propriétaire et gardez les titres de propriété. La banque détient simplement une hypothèque de premier rang sur le titre, exactement comme avec un prêt hypothécaire traditionnel. Vous devez toutefois entretenir la propriété, payer vos impôts fonciers et maintenir une assurance habitation.",
    },
    {
      question: "Devrai-je rembourser plus que la valeur de ma maison?",
      answer:
        "Non. Le gouvernement fédéral exige que tous les prêts hypothécaires inversés soient assortis d'une 'garantie de valeur nette négative'. Tant que vous respectez vos obligations hypothécaires, la somme que vous devrez ne dépassera jamais la juste valeur marchande de votre propriété. Vos héritiers ne seront jamais endettés.",
    },
    {
      question: "Comment vais-je recevoir l'argent?",
      answer:
        "Vous avez plusieurs options flexibles: recevoir tous les fonds en un versement forfaitaire unique, recevoir un certain montant maintenant et d'autres fonds plus tard, ou encore recevoir des avances programmées sur une période de temps prédéterminée (mensuelles, trimestrielles, etc.). Vous pouvez aussi combiner ces options selon vos besoins.",
    },
    {
      question: "L'argent reçu est-il imposable?",
      answer:
        "Non! Les fonds reçus d'une hypothèque inversée ne sont pas considérés comme un revenu imposable. Ils n'affectent donc pas vos prestations de la Sécurité de la vieillesse ou le Supplément de revenu garanti que vous pourriez recevoir du gouvernement.",
    },
    {
      question: "Et si j'ai déjà une hypothèque sur ma propriété?",
      answer:
        "C'est tout à fait possible! Plusieurs de nos clients utilisent leur hypothèque inversée pour rembourser leur hypothèque existante ainsi que leurs autres dettes. Une fois ces dettes remboursées, vous aurez plus de liquidités chaque mois puisque vous n'aurez plus de paiements hypothécaires à effectuer.",
    },
    {
      question: "Quels sont les frais associés?",
      answer:
        "Il y a des frais uniques incluant: les frais d'évaluation de la propriété, les frais juridiques pour des conseils indépendants, ainsi que des frais d'administration et d'enregistrement. La plupart de ces frais peuvent être déduits directement de votre avance initiale. Contactez-nous pour un aperçu détaillé des frais selon votre situation.",
    },
    {
      question: "L'hypothèque inversée est-elle un dernier recours?",
      answer:
        "Pas du tout! De nombreux professionnels financiers recommandent l'hypothèque inversée comme une option stratégique pour compléter un revenu de retraite, plutôt que de vendre la propriété, de déménager dans un logement plus petit, ou d'opter pour une marge de crédit qui nécessite des paiements mensuels.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Trouvez les réponses aux questions les plus posées sur l'hypothèque
            inversée. Vous avez d'autres questions? N'hésitez pas à nous
            contacter.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-card-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
