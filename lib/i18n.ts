export type Locale = "fr" | "en";

export const translations = {
  fr: {
    // Header
    nav: {
      whatIs: "Qu'est-ce que c'est",
      benefits: "Avantages",
      useCases: "Utilisations",
      calculator: "Calculatrice",
      faq: "FAQ",
      contact: "Contact",
      consultation: "Consultation Gratuite",
    },
    // Hero Section
    hero: {
      title: "Libérez la Valeur de Votre Maison Pour Votre Retraite",
      subtitle:
        "Accédez jusqu'à 55% de la valeur nette de votre propriété en argent libre d'impôt, sans paiements mensuels obligatoires. Restez chez vous et profitez de votre retraite.",
      cta: "Calculer Mon Éligibilité",
      badge1: "55 ans et plus",
      badge2: "Aucun paiement",
      badge3: "Restez chez vous",
      formTitle: "Parlez à un Expert",
      formSubtitle:
        "Obtenez une consultation gratuite et sans engagement. Nous vous contacterons rapidement.",
    },
    // Contact Form
    form: {
      firstName: "Prénom",
      lastName: "Nom",
      email: "Courriel",
      phone: "Téléphone",
      age: "Votre Âge",
      homeValue: "Valeur Propriété",
      message: "Questions ou commentaires",
      messagePlaceholder: "Comment pouvons-nous vous aider?",
      submit: "Demander une Consultation",
      submitting: "Envoi en cours...",
      selectPlaceholder: "Sélectionnez",
      required: "*",
      // Age options
      age55_59: "55 - 59 ans",
      age60_64: "60 - 64 ans",
      age65_69: "65 - 69 ans",
      age70_74: "70 - 74 ans",
      age75_79: "75 - 79 ans",
      age80plus: "80 ans et plus",
      // Home value options
      value200_400k: "200k $ - 400k $",
      value400_600k: "400k $ - 600k $",
      value600_800k: "600k $ - 800k $",
      value800k_1m: "800k $ - 1M $",
      value1mplus: "Plus de 1M $",
      // Validation errors
      errorFirstName: "Le prénom contient des caractères invalides.",
      errorLastName: "Le nom contient des caractères invalides.",
      errorEmail: "L'adresse courriel est invalide.",
      errorPhone: "Le numéro de téléphone doit contenir 10 chiffres.",
      errorAge: "Veuillez sélectionner votre âge.",
      errorGeneral:
        "Une erreur est survenue. Veuillez réessayer ou nous appeler directement.",
      // Success
      successTitle: "Merci!",
      successMessage: "Nous vous contacterons bientôt.",
      // Disclaimer
      disclaimer:
        "En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.",
    },
    // What is reverse mortgage section
    whatIs: {
      badge: "Comprendre l'hypothèque inversée",
      title: "Qu'est-ce qu'une",
      titleHighlight: "Hypothèque Inversée",
      subtitle:
        "Un prêt garanti par la valeur nette de votre résidence qui permet aux propriétaires canadiens de 55 ans et plus d'accéder jusqu'à 55% de la valeur de leur maison en argent comptant.",
      howItWorks: "Comment ça fonctionne?",
      howItWorksSubtitle:
        "Contrairement à une hypothèque traditionnelle, l'hypothèque inversée vous permet de recevoir de l'argent sans jamais effectuer de paiement.",
      // Features
      feature1Title: "Restez Chez Vous",
      feature1Desc:
        "Conservez la propriété et le droit de vivre dans votre maison aussi longtemps que vous le souhaitez. Votre nom reste sur le titre de propriété.",
      feature1Detail: "Vous gardez 100% du contrôle de votre maison",
      feature2Title: "Argent Libre d'Impôt",
      feature2Desc:
        "Les fonds reçus ne sont pas considérés comme un revenu imposable et n'affectent pas vos prestations gouvernementales comme la PSV ou le SRG.",
      feature2Detail: "Aucun impact sur vos prestations",
      feature3Title: "Aucun Paiement Mensuel",
      feature3Desc:
        "Contrairement à une hypothèque traditionnelle, vous n'avez aucun paiement à effectuer jusqu'à la vente de la propriété.",
      feature3Detail: "Zéro paiement requis",
      feature4Title: "Garantie de Protection",
      feature4Desc:
        "Vous ne devrez jamais plus que la valeur de votre maison grâce à la garantie de valeur nette négative.",
      feature4Detail: "Protection garantie par la loi",
      // Process steps
      step1Num: "01",
      step1Title: "Évaluation",
      step1Desc:
        "Nous évaluons votre admissibilité basée sur votre âge (55+), la valeur de votre propriété et de votre région.",
      step2Num: "02",
      step2Title: "Consultation",
      step2Desc:
        "Un conseiller vous explique toutes les options et répond à vos questions. Vous recevez une estimation personnalisée.",
      step3Num: "03",
      step3Title: "Approbation",
      step3Desc:
        "Votre demande est soumise à nos partenaires bancaires. C'est un processus rapide avec une réponse en quelques jours.",
      step4Num: "04",
      step4Title: "Financement",
      step4Desc:
        "Les fonds sont déposés directement dans votre compte. Montant forfaitaire ou versements, c'est votre choix.",
      // Comparison
      traditional: "Traditionnelle",
      reverse: "Inversée",
      forPlus55: "Pour 55+",
      you: "Vous",
      bank: "Banque",
      monthlyPayments: "$$$",
      traditionalPoint1: "Paiements obligatoires",
      traditionalPoint2: "Stress financier",
      traditionalPoint3: "Qualification requise",
      traditionalPoint4: "Risque de défaut",
      reversePoint1: "Aucun paiement",
      reversePoint2: "C'est la banque qui vous paie!",
      reversePoint3: "Pas de qualification",
      reversePoint4: "Restez propriétaire",
      upToValue: "Jusqu'à 55% de valeur",
      // Repayment
      repaymentTitle: "Quand rembourser?",
      repaymentSubtitle: "Le prêt n'est dû uniquement que dans ces situations:",
      repaymentTrigger1: "Vous vendez ou transférez la propriété",
      repaymentTrigger2:
        "Vous déménagez dans un foyer de soins de longue durée",
      repaymentTrigger3: "Au décès du dernier emprunteur",
      yourEquity: "Votre Équité",
      reverseMortgage: "Hypothèque Inversée",
      equityGrows: "La valeur de votre équité peut continuer à croître",
      guaranteeTitle: "Garantie de valeur nette",
      guaranteeDesc: "Vous ne devrez jamais plus que la valeur de votre maison",
      processTitle: "Le Processus Simplifié",
      processIntro: "Le processus en",
      processSteps: "4 étapes simples",
      processSubtitle:
        "De l'évaluation au financement, un processus transparent et rapide.",
      step: "Étape",
    },
    // Benefits section
    benefits: {
      title: "Pourquoi Choisir l'Hypothèque Inversée?",
      subtitle:
        "Découvrez les avantages qui font de l'hypothèque inversée une solution financière privilégiée par des milliers de Canadiens retraités.",
      benefit1Title: "Souplesse Financière",
      benefit1Desc:
        "Recevez vos fonds en un versement forfaitaire, en avances récurrentes, ou une combinaison des deux selon vos besoins.",
      benefit1Point1: "Montant forfaitaire unique",
      benefit1Point2: "Avances mensuelles programmées",
      benefit1Point3: "Réserve disponible pour plus tard",
      benefit2Title: "Processus Simplifié",
      benefit2Desc:
        "Contrairement aux prêts traditionnels, l'hypothèque inversée s'adresse spécifiquement aux retraités avec des critères adaptés.",
      benefit2Point1: "Pas de vérification de revenus stricte",
      benefit2Point2: "Pas de revérification de crédit continue",
      benefit2Point3: "Processus rapide et transparent",
      benefit3Title: "Protection Garantie",
      benefit3Desc:
        "Le gouvernement fédéral exige que tous les prêts hypothécaires inversés soient assortis d'une garantie de valeur nette négative.",
      benefit3Point1: "Jamais plus que la valeur de la maison",
      benefit3Point2: "Vos héritiers ne seront jamais endettés",
      benefit3Point3: "Votre patrimoine est protégé",
      // Stats
      stat1Value: "55%",
      stat1Label: "Valeur maximale accessible",
      stat2Value: "55+",
      stat2Label: "Âge minimum requis",
      stat3Value: "0$",
      stat3Label: "Paiements mensuels",
      stat4Value: "99%",
      stat4Label: "Ont de l'équité restante",
    },
    // Use cases section
    useCases: {
      title: "Comment Allez-Vous Utiliser Vos Fonds?",
      subtitle:
        "Découvrez comment d'autres propriétaires ont transformé la valeur de leur maison en opportunités réelles.",
      // Case 1 - Healthcare
      case1Title: "Soins de Santé",
      case1Dream: "Vous pensiez ne plus pouvoir rester chez vous?",
      case1Reality: "Restez dans votre maison en toute sécurité",
      case1Desc:
        "Payez pour des soins à domicile de qualité, des équipements médicaux adaptés ou des aménagements pour vieillir chez vous en toute autonomie.",
      case1Benefit1: "Soins à domicile personnalisés",
      case1Benefit2: "Équipements médicaux",
      case1Benefit3: "Monte-escalier, barres d'appui",
      case1Amount: "15 000$ - 50 000$",
      // Case 2 - Renovations
      case2Title: "Rénovations",
      case2Dream: "Votre maison a besoin de réparations majeures?",
      case2Reality: "Transformez votre chez-vous",
      case2Desc:
        "Modernisez votre cuisine, réparez votre toiture, remplacez les fenêtres ou adaptez votre maison à vos besoins actuels.",
      case2Benefit1: "Nouvelle toiture",
      case2Benefit2: "Cuisine moderne",
      case2Benefit3: "Fenêtres écoénergétiques",
      case2Amount: "20 000$ - 100 000$",
      // Case 3 - Income
      case3Title: "Supplément de Revenu",
      case3Dream: "L'inflation gruge votre pouvoir d'achat?",
      case3Reality: "Retrouvez votre tranquillité financière",
      case3Desc:
        "Augmentez vos liquidités mensuelles pour maintenir le niveau de vie que vous méritez après des décennies de travail.",
      case3Benefit1: "Paiements mensuels réguliers",
      case3Benefit2: "Aucun impact sur vos prestations",
      case3Benefit3: "Flexibilité totale",
      case3Amount: "1 000$ - 3 000$/mois",
      // Case 4 - Emergencies
      case4Title: "Dépenses Imprévues",
      case4Dream: "Une urgence financière vous inquiète?",
      case4Reality: "Faites face aux imprévus sans stress",
      case4Desc:
        "Que ce soit une réparation urgente, des frais médicaux ou une situation inattendue, vous avez accès à des fonds rapidement.",
      case4Benefit1: "Accès rapide aux fonds",
      case4Benefit2: "Aucune justification requise",
      case4Benefit3: "Tranquillité d'esprit",
      case4Amount: "10 000$ - 75 000$",
      // Case 5 - Inheritance
      case5Title: "Héritage Anticipé",
      case5Dream: "Vous aimeriez aider vos proches maintenant?",
      case5Reality: "Voyez l'impact de votre générosité",
      case5Desc:
        "Aidez vos enfants avec une mise de fonds, payez les études de vos petits-enfants ou faites un don significatif.",
      case5Benefit1: "Mise de fonds pour vos enfants",
      case5Benefit2: "Frais de scolarité",
      case5Benefit3: "Don de bienfaisance",
      case5Amount: "25 000$ - 150 000$",
      // Case 6 - Travel
      case6Title: "Voyages de Rêve",
      case6Dream: "Vous avez remis vos rêves de voyage à plus tard?",
      case6Reality: "C'est maintenant le moment de partir",
      case6Desc:
        "Cette croisière en Europe, ce voyage au Japon, cette visite aux proches à l'étranger... Vos rêves sont enfin à portée de main.",
      case6Benefit1: "Croisières internationales",
      case6Benefit2: "Voyages en famille",
      case6Benefit3: "Aventures inoubliables",
      case6Amount: "5 000$ - 30 000$",
      // Case 7 - Vacation home
      case7Title: "Résidence Secondaire",
      case7Dream: "Ce chalet au bord du lac vous fait rêver?",
      case7Reality: "Offrez-vous ce havre de paix bien mérité",
      case7Desc:
        "Achetez cette propriété de vacances dont vous rêvez depuis des années. Un investissement dans votre qualité de vie.",
      case7Benefit1: "Chalet en nature",
      case7Benefit2: "Condo en Floride",
      case7Benefit3: "Patrimoine familial",
      case7Amount: "50 000$ - 200 000$",
      // Case 8 - Debt consolidation
      case8Title: "Consolidation de Dettes",
      case8Dream: "Les paiements mensuels vous étouffent?",
      case8Reality: "Éliminez vos dettes et respirez",
      case8Desc:
        "Remboursez vos cartes de crédit à taux élevé, consolidez vos prêts et libérez-vous du stress des paiements.",
      case8Benefit1: "Éliminer les cartes de crédit",
      case8Benefit2: "Un seul paiement simplifié",
      case8Benefit3: "Plus de liberté",
      case8Amount: "15 000$ - 100 000$",
      // CTA
      ctaButton: "Demander une Consultation Gratuite",
      typicalAmount: "Montant typique",
      bottomTitle: "Votre argent. Vos choix. Aucune restriction.",
      bottomSubtitle:
        "Peu importe comment vous souhaitez utiliser vos fonds, nous sommes là pour vous accompagner.",
      calculateAmount: "Calculer mon montant",
      talkToAdvisor: "Parler à un conseiller",
      previous: "Précédent",
      next: "Suivant",
      goToSlide: "Aller au slide",
    },
    // Calculator section
    calculator: {
      title: "Calculatrice d'Éligibilité",
      subtitle:
        "Découvrez combien vous pourriez obtenir avec une hypothèque inversée. Cette estimation est gratuite et sans engagement.",
      cardTitle: "Calculez Votre Montant",
      cardSubtitle:
        "Entrez vos informations pour obtenir une estimation instantanée",
      ageLabel: "Votre Âge",
      years: "ans",
      minAgeError: "L'âge minimum requis est de 55 ans.",
      hasSpouse: "J'ai un(e) conjoint(e) copropriétaire",
      spouseAge: "Âge du/de la conjoint(e)",
      spouseMinAgeError:
        "Le/la conjoint(e) doit avoir au moins 55 ans pour une hypothèque inversée.",
      spouseAgeNote:
        "L'éligibilité est basée sur l'âge du plus jeune emprunteur.",
      cityLabel: "Ville",
      cityPlaceholder: "Sélectionnez votre ville",
      homeValueLabel: "Valeur de Votre Propriété",
      homeValueNote: "Estimation de la valeur marchande actuelle",
      resultsTitle: "Votre Éligibilité Estimée",
      maxEstimated: "Montant Estimé Maximum",
      range: "Fourchette",
      factorsInfo:
        "Le montant final dépend de plusieurs facteurs: votre âge, l'emplacement et le type de propriété, ainsi que l'évaluation officielle de votre résidence.",
      getPersonalized: "Obtenir une Évaluation Personnalisée",
      potentialFunds: "Fonds Potentiels",
      between: "Entre",
      and: "et",
      upTo: "Jusqu'à",
      accessibleValue: "de la valeur de votre maison",
      calculateButton: "Calculer Mon Éligibilité",
      disclaimer: "* Cette estimation est fournie à titre indicatif seulement.",
      resultsDisclaimer:
        "Estimation basée sur un propriétaire de {age} ans avec une propriété de {value}.",
      ctaTitle: "Prêt à en savoir plus?",
      ctaSubtitle:
        "Parlez à un de nos experts pour obtenir une estimation personnalisée et sans engagement.",
      ctaButton: "Demander une Consultation",
      fillForm:
        'Entrez vos informations et cliquez sur "Calculer" pour voir votre estimation.',
    },
    // FAQ section
    faq: {
      title: "Questions Fréquentes",
      subtitle:
        "Trouvez les réponses aux questions les plus posées sur l'hypothèque inversée. Vous avez d'autres questions? N'hésitez pas à nous contacter.",
      q1: "Comment fonctionne une hypothèque inversée?",
      a1: "Une hypothèque inversée est un prêt garanti par la valeur nette de votre résidence. Contrairement à une hypothèque ordinaire où vous effectuez des paiements à la banque, avec une hypothèque inversée, c'est la banque qui vous paye! Vous n'avez pas à effectuer de paiements mensuels tant que vous vivez dans votre propriété. Le prêt devient exigible uniquement lorsque vous vendez, déménagez ou décédez.",
      q2: "À qui s'adresse l'hypothèque inversée?",
      a2: "L'hypothèque inversée s'adresse exclusivement aux propriétaires canadiens âgés de 55 ans ou plus. Cette exigence d'âge s'applique à tous les propriétaires inscrits sur le titre. Vous devez également habiter la propriété comme résidence principale au moins 6 mois par année.",
      q3: "Combien puis-je obtenir avec une hypothèque inversée?",
      a3: "Vous pouvez recevoir jusqu'à environ 55% de la valeur de votre résidence. Le pourcentage exact dépend principalement de votre âge : à 55 ans, vous pouvez emprunter environ 15-20% de la valeur, tandis qu'à 80 ans ou plus, vous pouvez atteindre le maximum d'environ 55%. D'autres facteurs incluent l'emplacement et le type de propriété, ainsi que l'évaluation officielle. La propriété doit avoir une valeur minimale d'environ 250 000 $.",
      q4: "Est-ce que la banque deviendra propriétaire de ma maison?",
      a4: "Non, absolument pas! Vous demeurez le seul et unique propriétaire et gardez les titres de propriété. La banque détient simplement une hypothèque de premier rang sur le titre, exactement comme avec un prêt hypothécaire traditionnel. Vous devez toutefois entretenir la propriété, payer vos impôts fonciers et maintenir une assurance habitation.",
      q5: "Devrai-je rembourser plus que la valeur de ma maison?",
      a5: "Non. Le gouvernement fédéral exige que tous les prêts hypothécaires inversés soient assortis d'une 'garantie de valeur nette négative'. Tant que vous respectez vos obligations hypothécaires, la somme que vous devrez ne dépassera jamais la juste valeur marchande de votre propriété. Vos héritiers ne seront jamais endettés.",
      q6: "Comment vais-je recevoir l'argent?",
      a6: "Vous avez plusieurs options flexibles: recevoir tous les fonds en un versement forfaitaire unique, recevoir un certain montant maintenant et d'autres fonds plus tard, ou encore recevoir des avances programmées sur une période de temps prédéterminée (mensuelles, trimestrielles, etc.). Vous pouvez aussi combiner ces options selon vos besoins.",
      q7: "L'argent reçu est-il imposable?",
      a7: "Non! Les fonds reçus d'une hypothèque inversée ne sont pas considérés comme un revenu imposable. Ils n'affectent donc pas vos prestations de la Sécurité de la vieillesse ou le Supplément de revenu garanti que vous pourriez recevoir du gouvernement.",
      q8: "Et si j'ai déjà une hypothèque sur ma propriété?",
      a8: "C'est tout à fait possible! Plusieurs de nos clients utilisent leur hypothèque inversée pour rembourser leur hypothèque existante ainsi que leurs autres dettes. Une fois ces dettes remboursées, vous aurez plus de liquidités chaque mois puisque vous n'aurez plus de paiements hypothécaires à effectuer.",
      q9: "Quels sont les frais associés?",
      a9: "Il y a des frais uniques incluant: les frais d'évaluation de la propriété, les frais juridiques pour des conseils indépendants, ainsi que des frais d'administration et d'enregistrement. La plupart de ces frais peuvent être déduits directement de votre avance initiale. Contactez-nous pour un aperçu détaillé des frais selon votre situation.",
      q10: "L'hypothèque inversée est-elle un dernier recours?",
      a10: "Pas du tout! De nombreux professionnels financiers recommandent l'hypothèque inversée comme une option stratégique pour compléter un revenu de retraite, plutôt que de vendre la propriété, de déménager dans un logement plus petit, ou d'opter pour une marge de crédit qui nécessite des paiements mensuels.",
    },
    // Contact section
    contact: {
      title: "Contactez-Nous",
      subtitle:
        "Prêt à en savoir plus sur l'hypothèque inversée? Notre équipe d'experts est là pour répondre à vos questions et vous guider dans le processus.",
      formTitle: "Demandez une Consultation Gratuite",
      formSubtitle:
        "Remplissez le formulaire et nous vous contacterons rapidement.",
      phone: "Téléphone",
      email: "Courriel",
      brokerTitle: "Courtier Hypothécaire agréé",
      brokerBio:
        "Accédez à votre capital.ca est dirigé par Mark A. Barbieri, un expert chevronné en prêts hypothécaires inversés, dédié aux propriétaires âgés. Fort de plus de 25 ans d'expérience, acquise tant au sein de la plus grande banque canadienne que dans le secteur du courtage hypothécaire, Mark et son équipe offrent une expertise approfondie et une approche centrée sur le client à chaque étape du processus.",
    },
    // Footer
    footer: {
      tagline:
        "Votre partenaire de confiance pour libérer la valeur de votre maison et profiter pleinement de votre retraite au Québec.",
      quickLinks: "Liens Rapides",
      link1: "Qu'est-ce qu'une Hypothèque Inversée?",
      link2: "Calculatrice d'Éligibilité",
      link3: "Avantages",
      link4: "Ressources",
      link5: "Contactez-Nous",
      contactTitle: "Contact",
      copyright: "Accedez à Votre Capital.ca. Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      disclaimer:
        "Avis : Accédez à Votre Capital.ca est un courtier hypothécaire inversé agréé au Québec, Canada. Les informations présentées sur ce site sont fournies à titre informatif général et ne constituent pas des conseils financiers, juridiques ou fiscaux. Les produits d'hypothèque inversée sont soumis à l'approbation du prêteur et aux critères d'admissibilité. Veuillez consulter un professionnel qualifié avant de prendre toute décision financière.",
    },
    // Partner banks
    partners: {
      title: "Nos Partenaires Bancaires",
      subtitle:
        "Nous travaillons avec les institutions financières les plus fiables du Canada.",
    },
    // Resources section
    resources: {
      title: "Ressources et Guides",
      subtitle:
        "Apprenez-en plus sur l'hypothèque inversée avec nos ressources éducatives.",
      readMore: "Lire la suite",
    },
    // Privacy Policy page
    privacy: {
      backToHome: "Retour à l'accueil",
      title: "Politique de Confidentialité",
      company: "Accédez à votre capital",
      effectiveDate: "Date d'entrée en vigueur : 1er septembre 2025",
      intro:
        "Chez Accédez à votre capital, on respecte votre vie privée pis on s'engage à protéger vos renseignements personnels. Cette politique de confidentialité explique comment on recueille, utilise pis protège vos informations quand vous visitez notre site web (www.accedezavotrecapital.ca) ou utilisez nos services.",
      section1Title: "1. Renseignements que nous recueillons",
      section1Intro:
        "Nous pouvons recueillir les types d'informations suivants:",
      section1Item1Title: "Informations personnelles:",
      section1Item1:
        "nom, adresse courriel, numéro de téléphone, date de naissance, adresse, informations financières et autres détails nécessaires pour évaluer l'admissibilité à un prêt hypothécaire inversé.",
      section1Item2Title: "Informations non personnelles:",
      section1Item2:
        "type de navigateur, informations sur l'appareil, adresse IP et données d'utilisation du site Web.",
      section2Title: "2. Comment on utilise vos renseignements",
      section2Intro: "On utilise vos informations pour :",
      section2Item1: "Fournir des services de courtage hypothécaire inversée",
      section2Item2: "Traiter les demandes et communiquer avec vous",
      section2Item3: "Respecter les obligations réglementaires et légales",
      section2Item4: "Améliorer notre site web et nos services",
      section2Item5:
        "Envoyer des mises à jour, des ressources ou de l'information promotionnelle (si vous y avez consenti)",
      section3Title: "3. Partage d'informations",
      section3Intro:
        "On ne vend pas vos renseignements personnels. On pourrait partager des informations avec:",
      section3Item1:
        "Les prêteurs, institutions financières pis fournisseurs de services nécessaires pour traiter votre demande d'hypothèque inversée",
      section3Item2:
        "Les autorités légales, réglementaires ou gouvernementales tel que requis par la loi",
      section3Item3:
        "Les fournisseurs tiers de confiance qui aident avec l'hébergement du site web, le marketing ou le soutien à la clientèle (liés par des accords de confidentialité)",
      section4Title: "4. Sécurité des données",
      section4Text:
        "Nous utilisons des mesures de sécurité conformes aux normes de l'industrie pour protéger vos renseignements. Cependant, aucune transmission sur Internet n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.",
      section5Title: "5. Vos droits",
      section5Intro: "Vous avez le droit de :",
      section5Item1: "Accéder à vos renseignements personnels et les corriger",
      section5Item2: "Retirer votre consentement aux communications marketing",
      section5Item3:
        "Demander la suppression de vos données lorsque la loi le permet",
      section5Outro: "Pour exercer ces droits, contactez-nous par courriel :",
      section5Or: "ou par téléphone :",
      section6Title: "6. Témoins et suivi",
      section6Text:
        "Notre site web peut utiliser des témoins (cookies) ou des technologies similaires pour améliorer votre expérience de navigation et analyser l'achalandage du site. Vous pouvez désactiver les témoins dans les paramètres de votre navigateur.",
      section7Title: "7. Liens vers des tiers",
      section7Text:
        "Notre site web peut contenir des liens vers des sites de tiers. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites.",
      section8Title: "8. Mises à jour de cette politique",
      section8Text:
        "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Les mises à jour seront affichées sur cette page avec une nouvelle date d'entrée en vigueur.",
      section9Title: "9. Contactez-nous",
      section9Intro:
        "Pour toute question concernant cette politique de confidentialité, contactez :",
      email: "Courriel :",
      phone: "Téléphone :",
    },
    // Terms of Use page
    terms: {
      backToHome: "Retour à l'accueil",
      title: "Termes et Conditions",
      company: "Accédez à votre capital",
      effectiveDate: "Date d'entrée en vigueur : 1er septembre 2025",
      intro:
        "Bienvenue sur www.accedezavotrecapital.ca. En utilisant notre site web et nos services, vous acceptez les conditions générales suivantes. Veuillez les lire attentivement.",
      section1Title: "1. Utilisation du site web",
      section1Item1:
        "Vous devez avoir atteint l'âge de la majorité dans votre province ou territoire pour utiliser nos services.",
      section1Item2:
        "Vous consentez à utiliser ce site web uniquement à des fins légales.",
      section1Item3:
        "Vous ne devez pas tenter de perturber, d'endommager ou d'obtenir un accès non autorisé à nos systèmes.",
      section2Title: "2. Services offerts",
      section2Item1:
        "Accédez à votre capital est un courtier hypothécaire inversé agréé au Canada.",
      section2Item2:
        "Les renseignements fournis sur ce site web sont uniquement à titre informatif et ne constituent pas des conseils financiers ou juridiques.",
      section2Item3:
        "L'approbation finale des produits d'hypothèque inversée est assujettie aux conditions du prêteur, à l'admissibilité et aux exigences réglementaires.",
      section3Title: "3. Exactitude de l'information",
      section3Text:
        "On vise la précision, mais on garantit pas que tout le contenu du site web est complet, à jour ou sans erreurs. C'est à vous de vérifier l'info avant de vous y fier.",
      section4Title: "4. Limitation de responsabilité",
      section4Item1:
        "Accédez à votre capital n'est pas responsable des dommages découlant de l'utilisation de ce site web ou de la confiance accordée aux informations fournies.",
      section4Item2:
        "Nous ne sommes pas responsables des pertes liées aux retards, erreurs, problèmes techniques ou liens de tiers.",
      section5Title: "5. Propriété intellectuelle",
      section5Text:
        "Tout le contenu du site web, y compris le texte, les images, l'image de marque et la conception, est la propriété d'Accédez à votre capital et ne peut être reproduit ou utilisé sans autorisation écrite.",
      section6Title: "6. Liens de tiers",
      section6Text:
        "Notre site web peut inclure des liens vers des sites web de tiers. Nous ne sommes pas responsables du contenu, de la sécurité ou des pratiques de ces sites web.",
      section7Title: "7. Confidentialité",
      section7Text1:
        "Votre utilisation de notre site web est également régie par notre",
      section7Link: "politique de confidentialité",
      section7Text2:
        ", qui explique comment nous recueillons et traitons vos données.",
      section8Title: "8. Résiliation",
      section8Text:
        "Nous nous réservons le droit de suspendre ou de mettre fin à l'accès à notre site web ou à nos services en cas de violation des présentes conditions.",
      section9Title: "9. Droit applicable",
      section9Text:
        "Ces conditions sont régies par les lois de la province ou du territoire où le client reçoit les services et les lois du Canada qui s'y appliquent.",
      section10Title: "10. Contactez-nous",
      section10Intro:
        "Pour toute question concernant ces conditions, contactez :",
      email: "Courriel :",
      phone: "Téléphone :",
    },
  },
  en: {
    // Header
    nav: {
      whatIs: "What Is It",
      benefits: "Benefits",
      useCases: "Use Cases",
      calculator: "Calculator",
      faq: "FAQ",
      contact: "Contact",
      consultation: "Free Consultation",
    },
    // Hero Section
    hero: {
      title: "Unlock Your Home's Value for Your Retirement",
      subtitle:
        "Access up to 55% of your home equity in tax-free cash, with no monthly payments required. Stay in your home and enjoy your retirement.",
      cta: "Calculate My Eligibility",
      badge1: "55+ yrs",
      badge2: "Zero payments",
      badge3: "Stay in your home",
      formTitle: "Speak to an Expert",
      formSubtitle:
        "Get a free, no-obligation consultation. We'll contact you shortly.",
    },
    // Contact Form
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      age: "Your Age",
      homeValue: "Home Value",
      message: "Questions or comments",
      messagePlaceholder: "How can we help you?",
      submit: "Request a Consultation",
      submitting: "Sending...",
      selectPlaceholder: "Select",
      required: "*",
      // Age options
      age55_59: "55 - 59 years",
      age60_64: "60 - 64 years",
      age65_69: "65 - 69 years",
      age70_74: "70 - 74 years",
      age75_79: "75 - 79 years",
      age80plus: "80 years and over",
      // Home value options
      value200_400k: "$200k - $400k",
      value400_600k: "$400k - $600k",
      value600_800k: "$600k - $800k",
      value800k_1m: "$800k - $1M",
      value1mplus: "Over $1M",
      // Validation errors
      errorFirstName: "First name contains invalid characters.",
      errorLastName: "Last name contains invalid characters.",
      errorEmail: "Invalid email address.",
      errorPhone: "Phone number must contain 10 digits.",
      errorAge: "Please select your age.",
      errorGeneral: "An error occurred. Please try again or call us directly.",
      // Success
      successTitle: "Thank you!",
      successMessage: "We'll contact you soon.",
      // Disclaimer
      disclaimer:
        "By submitting this form, you agree to be contacted by our team.",
    },
    // What is reverse mortgage section
    whatIs: {
      badge: "Understanding reverse mortgages",
      title: "What Is a",
      titleHighlight: "Reverse Mortgage",
      subtitle:
        "A loan secured by your home equity that allows Canadian homeowners aged 55 and older to access up to 55% of their home's value in cash.",
      howItWorks: "How does it work?",
      howItWorksSubtitle:
        "Unlike a traditional mortgage, a reverse mortgage allows you to receive money without ever making a payment.",
      // Features
      feature1Title: "Stay in Your Home",
      feature1Desc:
        "Keep ownership and the right to live in your home as long as you wish. Your name stays on the property title.",
      feature1Detail: "You keep 100% control of your home",
      feature2Title: "Tax-Free Cash",
      feature2Desc:
        "The funds received are not considered taxable income and don't affect your government benefits like OAS or GIS.",
      feature2Detail: "No impact on your benefits",
      feature3Title: "No Monthly Payments",
      feature3Desc:
        "Unlike a traditional mortgage, you have no payments to make until the property is sold.",
      feature3Detail: "Zero payment required",
      feature4Title: "Protection Guarantee",
      feature4Desc:
        "You'll never owe more than your home's value thanks to the negative equity guarantee.",
      feature4Detail: "Protection guaranteed by law",
      // Process steps
      step1Num: "01",
      step1Title: "Assessment",
      step1Desc:
        "We evaluate your eligibility based on your age (55+), property value, and location.",
      step2Num: "02",
      step2Title: "Consultation",
      step2Desc:
        "An advisor explains all options and answers your questions. You receive a personalized estimate.",
      step3Num: "03",
      step3Title: "Approval",
      step3Desc:
        "Your application is submitted to our banking partners. Fast process with response in a few days.",
      step4Num: "04",
      step4Title: "Funding",
      step4Desc:
        "Funds are deposited directly into your account. Lump sum or installments, it's your choice.",
      // Comparison
      traditional: "Traditional",
      reverse: "Reverse",
      forPlus55: "For 55+",
      you: "You",
      bank: "Bank",
      monthlyPayments: "$$$/month",
      traditionalPoint1: "Mandatory monthly payments",
      traditionalPoint2: "Financial stress to repay loan",
      traditionalPoint3: "Must qualify for the loan",
      traditionalPoint4: "Risk of default",
      reversePoint1: "No monthly payments",
      reversePoint2: "The bank pays you!",
      reversePoint3: "Automatically qualify",
      reversePoint4: "Always maintain ownership",
      upToValue: "Up to 55% of value",
      // Repayment
      repaymentTitle: "When to repay?",
      repaymentSubtitle: "The loan becomes due only in these situations:",
      repaymentTrigger1: "You sell or transfer the property",
      repaymentTrigger2: "You move to a long-term care facility",
      repaymentTrigger3: "Upon the death of the last borrower",
      yourEquity: "Your Equity",
      reverseMortgage: "Reverse Mortgage",
      equityGrows: "Your equity value can continue to grow",
      guaranteeTitle: "Negative equity guarantee",
      guaranteeDesc: "You'll never owe more than your home's value",
      processTitle: "The Simplified Process",
      processIntro: "The process in",
      processSteps: "4 simple steps",
      processSubtitle:
        "From assessment to funding, a transparent and fast process.",
      step: "Step",
    },
    // Benefits section
    benefits: {
      title: "Why Choose a Reverse Mortgage?",
      subtitle:
        "Discover the advantages that make reverse mortgages a preferred financial solution for thousands of retired Canadians.",
      benefit1Title: "Financial Flexibility",
      benefit1Desc:
        "Receive your funds as a lump sum, recurring advances, or a combination of both based on your needs.",
      benefit1Point1: "One-time lump sum",
      benefit1Point2: "Scheduled monthly advances",
      benefit1Point3: "Withdraw as needed",
      benefit2Title: "Simplified Process",
      benefit2Desc:
        "Unlike traditional loans, reverse mortgages are specifically designed for retirees with adapted criteria.",
      benefit2Point1: "Simplified application process",
      benefit2Point2: "No minimum-income requirements",
      benefit2Point3: "Fast & transparent process",
      benefit3Title: "Guaranteed Protection",
      benefit3Desc:
        "The federal government requires all reverse mortgage loans to include a negative equity guarantee.",
      benefit3Point1: "Never owe more than the home's value",
      benefit3Point2: "Your heirs will never inherit debt",
      benefit3Point3: "Your estate is protected",
      // Stats
      stat1Value: "55%",
      stat1Label: "Maximum accessible value",
      stat2Value: "55+",
      stat2Label: "Minimum age required",
      stat3Value: "$0",
      stat3Label: "Monthly payments",
      stat4Value: "99%",
      stat4Label: "Have remaining equity",
    },
    // Use cases section
    useCases: {
      title: "How Will You Use Your Funds?",
      subtitle:
        "Discover how other homeowners have transformed their home's value into real opportunities.",
      // Case 1 - Healthcare
      case1Title: "Healthcare",
      case1Dream: "Thought you couldn't stay home anymore?",
      case1Reality: "Stay in your home safely",
      case1Desc:
        "Pay for quality home care, adapted medical equipment, or modifications to age in place with full autonomy.",
      case1Benefit1: "Personalized home care",
      case1Benefit2: "Medical equipment",
      case1Benefit3: "Stairlifts, grab bars",
      case1Amount: "$15,000 - $50,000",
      // Case 2 - Renovations
      case2Title: "Renovations",
      case2Dream: "Your home needs major repairs?",
      case2Reality: "Transform your home",
      case2Desc:
        "Modernize your kitchen, repair your roof, replace windows, or adapt your home to your current needs.",
      case2Benefit1: "New roof",
      case2Benefit2: "Modern kitchen",
      case2Benefit3: "Energy-efficient windows",
      case2Amount: "$20,000 - $100,000",
      // Case 3 - Income
      case3Title: "Income Supplement",
      case3Dream: "Inflation eating away at your purchasing power?",
      case3Reality: "Regain your financial peace of mind",
      case3Desc:
        "Increase your monthly cash flow to maintain the lifestyle you deserve after decades of work.",
      case3Benefit1: "Regular monthly payments",
      case3Benefit2: "No impact on benefits",
      case3Benefit3: "Total flexibility",
      case3Amount: "$1,000 - $3,000/month",
      // Case 4 - Emergencies
      case4Title: "Unexpected Expenses",
      case4Dream: "Worried about a financial emergency?",
      case4Reality: "Face the unexpected stress-free",
      case4Desc:
        "Whether it's an urgent repair, medical bills, or an unexpected situation, you have quick access to funds.",
      case4Benefit1: "Quick access to funds",
      case4Benefit2: "No justification required",
      case4Benefit3: "Peace of mind",
      case4Amount: "$10,000 - $75,000",
      // Case 5 - Inheritance
      case5Title: "Early Inheritance",
      case5Dream: "Would you like to help your loved ones now?",
      case5Reality: "See the impact of your generosity",
      case5Desc:
        "Help your children with a down payment, pay for your grandchildren's education, or make a significant donation.",
      case5Benefit1: "Down payment for your children",
      case5Benefit2: "Tuition fees",
      case5Benefit3: "Charitable donation",
      case5Amount: "$25,000 - $150,000",
      // Case 6 - Travel
      case6Title: "Dream Vacations",
      case6Dream: "Have you put off your travel dreams?",
      case6Reality: "Now is the time to go",
      case6Desc:
        "That cruise to Europe, that trip to Japan, that visit to relatives abroad... Your dreams are finally within reach.",
      case6Benefit1: "International cruises",
      case6Benefit2: "Family trips",
      case6Benefit3: "Unforgettable adventures",
      case6Amount: "$5,000 - $30,000",
      // Case 7 - Vacation home
      case7Title: "Vacation Property",
      case7Dream: "That lakeside cottage calling your name?",
      case7Reality: "Treat yourself to this well-deserved retreat",
      case7Desc:
        "Buy that vacation property you've dreamed of for years. An investment in your quality of life.",
      case7Benefit1: "Country cottage",
      case7Benefit2: "Condo in Florida",
      case7Benefit3: "Family legacy",
      case7Amount: "$50,000 - $200,000",
      // Case 8 - Debt consolidation
      case8Title: "Debt Consolidation",
      case8Dream: "Monthly payments suffocating you?",
      case8Reality: "Eliminate your debts and breathe",
      case8Desc:
        "Pay off your high-interest credit cards, consolidate your loans, and free yourself from payment stress.",
      case8Benefit1: "Eliminate credit cards",
      case8Benefit2: "One simplified payment",
      case8Benefit3: "More freedom",
      case8Amount: "$15,000 - $100,000",
      // CTA
      ctaButton: "Request a Free Consultation",
      typicalAmount: "Typical amount",
      bottomTitle: "Your money. Your choices. No restrictions.",
      bottomSubtitle:
        "No matter how you want to use your funds, we're here to help you.",
      calculateAmount: "Calculate my amount",
      talkToAdvisor: "Talk to an advisor",
      previous: "Previous",
      next: "Next",
      goToSlide: "Go to slide",
    },
    // Calculator section
    calculator: {
      title: "Eligibility Calculator",
      subtitle:
        "Find out how much you could get with a reverse mortgage. This estimate is free and no-obligation.",
      cardTitle: "Calculate Your Amount",
      cardSubtitle: "Enter your information for an instant estimate",
      ageLabel: "Your Age",
      years: "years",
      minAgeError: "Minimum age required is 55 years.",
      hasSpouse: "I have a spouse/co-owner",
      spouseAge: "Spouse's Age",
      spouseMinAgeError: "Spouse must be at least 55 for a reverse mortgage.",
      spouseAgeNote: "Eligibility is based on the youngest borrower's age.",
      cityLabel: "City",
      cityPlaceholder: "Select your city",
      homeValueLabel: "Your Home Value",
      homeValueNote: "Estimated current market value",
      resultsTitle: "Your Estimated Eligibility",
      maxEstimated: "Maximum Estimated Amount",
      range: "Range",
      factorsInfo:
        "The final amount depends on several factors: your age, property location and type, as well as the official appraisal of your residence.",
      getPersonalized: "Get a Personalized Assessment",
      potentialFunds: "Potential Funds",
      between: "Between",
      and: "and",
      upTo: "Up to",
      accessibleValue: "of your home's value",
      calculateButton: "Calculate My Eligibility",
      disclaimer: "* This estimate is provided for illustrative purposes only.",
      resultsDisclaimer:
        "Estimate based on a {age}-year-old homeowner with a property worth {value}.",
      ctaTitle: "Ready to learn more?",
      ctaSubtitle:
        "Speak with one of our experts to get a personalized, no-obligation estimate.",
      ctaButton: "Request a Consultation",
      fillForm:
        'Enter your information and click "Calculate" to see your estimate.',
    },
    // FAQ section
    faq: {
      title: "Frequently Asked Questions",
      subtitle:
        "Find answers to the most common questions about reverse mortgages. Have other questions? Don't hesitate to contact us.",
      q1: "How does a reverse mortgage work?",
      a1: "A reverse mortgage is a loan secured by the equity in your home. Unlike a regular mortgage where you make payments to the bank, with a reverse mortgage, the bank pays you! You don't have to make monthly payments as long as you live in your property. The loan only becomes due when you sell, move, or pass away.",
      q2: "Who is eligible for a reverse mortgage?",
      a2: "Reverse mortgages are exclusively for Canadian homeowners aged 55 or older. This age requirement applies to all owners listed on the title. You must also live in the property as your primary residence at least 6 months per year.",
      q3: "How much can I get with a reverse mortgage?",
      a3: "You can receive up to approximately 55% of your home's value. The exact percentage depends mainly on your age: at 55, you can borrow about 15-20% of the value, while at 80 or older, you can reach the maximum of approximately 55%. Other factors include the property's location and type, as well as the official appraisal. The property must have a minimum value of approximately $250,000.",
      q4: "Will the bank become the owner of my home?",
      a4: "No, absolutely not! You remain the sole owner and keep the property titles. The bank simply holds a first-rank mortgage on the title, exactly like with a traditional mortgage. However, you must maintain the property, pay your property taxes, and maintain home insurance.",
      q5: "Will I have to repay more than my home is worth?",
      a5: "No. The federal government requires all reverse mortgages to include a 'negative equity guarantee'. As long as you meet your mortgage obligations, the amount you owe will never exceed the fair market value of your property. Your heirs will never be left in debt.",
      q6: "How will I receive the money?",
      a6: "You have several flexible options: receive all funds as a single lump sum, receive a certain amount now and more funds later, or receive scheduled advances over a predetermined period (monthly, quarterly, etc.). You can also combine these options according to your needs.",
      q7: "Is the money received taxable?",
      a7: "No! Funds received from a reverse mortgage are not considered taxable income. They therefore don't affect your Old Age Security or Guaranteed Income Supplement benefits that you may receive from the government.",
      q8: "What if I already have a mortgage on my property?",
      a8: "That's absolutely possible! Many of our clients use their reverse mortgage to pay off their existing mortgage as well as other debts. Once these debts are paid off, you'll have more cash flow each month since you won't have mortgage payments to make.",
      q9: "What are the associated fees?",
      a9: "There are one-time fees including: property appraisal fees, legal fees for independent advice, as well as administration and registration fees. Most of these fees can be deducted directly from your initial advance. Contact us for a detailed overview of fees based on your situation.",
      q10: "Is a reverse mortgage a last resort?",
      a10: "Not at all! Many financial professionals recommend reverse mortgages as a strategic option to supplement retirement income, rather than selling the property, downsizing, or opting for a line of credit that requires monthly payments.",
    },
    // Contact section
    contact: {
      title: "Contact Us",
      subtitle:
        "Ready to learn more about reverse mortgages? Our team of experts is here to answer your questions and guide you through the process.",
      formTitle: "Request a Free Consultation",
      formSubtitle: "Fill out the form and we'll contact you shortly.",
      phone: "Phone",
      email: "Email",
      brokerTitle: "Licensed Mortgage Broker",
      brokerBio:
        "Access Home Equity is led by Mark A. Barbieri, a seasoned Reverse-Mortgage expert dedicated to helping senior homeowners. With over 25 years of experience, gained working at both Canada's largest bank & within the mortgage brokerage sector, Mark and his team offer a profound expertise and a client-first approach at every step of the process.",
    },
    // Footer
    footer: {
      tagline:
        "Your trusted partner for unlocking your home's value and enjoying your retirement in Canada.",
      quickLinks: "Quick Links",
      link1: "What Is a Reverse Mortgage?",
      link2: "Eligibility Calculator",
      link3: "Benefits",
      link4: "Resources",
      link5: "Contact Us",
      contactTitle: "Contact",
      copyright: "Access Home Equity.ca. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      disclaimer:
        "Notice: Access Home Equity.ca is a licensed reverse mortgage broker in Quebec, Canada. The information presented on this site is provided for general informational purposes only and does not constitute financial, legal, or tax advice. Reverse mortgage products are subject to lender approval and eligibility criteria. Please consult a qualified professional before making any financial decision.",
    },
    // Partner banks
    partners: {
      title: "Our Banking Partners",
      subtitle: "We work with Canada's most trusted financial institutions.",
    },
    // Resources section
    resources: {
      title: "Resources & Guides",
      subtitle:
        "Learn more about reverse mortgages with our educational resources.",
      readMore: "Read more",
    },
    // Privacy Policy page
    privacy: {
      backToHome: "Back to Home",
      title: "Privacy Policy",
      company: "Access Home Equity",
      effectiveDate: "Effective Date: September 1, 2025",
      intro:
        "At Access Home Equity, we respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and protect your information when you visit our website (www.accesshomeequity.ca) or use our services.",
      section1Title: "1. Information We Collect",
      section1Intro: "We may collect the following types of information:",
      section1Item1Title: "Personal Information:",
      section1Item1:
        "name, email address, phone number, date of birth, address, financial information, and other details necessary to assess eligibility for a reverse mortgage.",
      section1Item2Title: "Non-Personal Information:",
      section1Item2:
        "browser type, device information, IP address, and website usage data.",
      section2Title: "2. How We Use Your Information",
      section2Intro: "We use your information to:",
      section2Item1: "Provide reverse mortgage brokerage services",
      section2Item2: "Process applications and communicate with you",
      section2Item3: "Comply with regulatory and legal obligations",
      section2Item4: "Improve our website and services",
      section2Item5:
        "Send updates, resources, or promotional information (if you have consented)",
      section3Title: "3. Information Sharing",
      section3Intro:
        "We do not sell your personal information. We may share information with:",
      section3Item1:
        "Lenders, financial institutions, and service providers necessary to process your reverse mortgage application",
      section3Item2:
        "Legal, regulatory, or governmental authorities as required by law",
      section3Item3:
        "Trusted third-party providers who assist with website hosting, marketing, or customer support (bound by confidentiality agreements)",
      section4Title: "4. Data Security",
      section4Text:
        "We use industry-standard security measures to protect your information. However, no Internet transmission is completely secure, and we cannot guarantee absolute security.",
      section5Title: "5. Your Rights",
      section5Intro: "You have the right to:",
      section5Item1: "Access and correct your personal information",
      section5Item2: "Withdraw your consent from marketing communications",
      section5Item3: "Request deletion of your data where permitted by law",
      section5Outro: "To exercise these rights, contact us by email:",
      section5Or: "or by phone:",
      section6Title: "6. Cookies and Tracking",
      section6Text:
        "Our website may use cookies or similar technologies to improve your browsing experience and analyze site traffic. You can disable cookies in your browser settings.",
      section7Title: "7. Third-Party Links",
      section7Text:
        "Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites.",
      section8Title: "8. Updates to This Policy",
      section8Text:
        "We may update this privacy policy from time to time. Updates will be posted on this page with a new effective date.",
      section9Title: "9. Contact Us",
      section9Intro:
        "For any questions regarding this privacy policy, contact:",
      email: "Email:",
      phone: "Phone:",
    },
    // Terms of Use page
    terms: {
      backToHome: "Back to Home",
      title: "Terms and Conditions",
      company: "Access Home Equity",
      effectiveDate: "Effective Date: September 1, 2025",
      intro:
        "Welcome to www.accesshomeequity.ca. By using our website and services, you agree to the following terms and conditions. Please read them carefully.",
      section1Title: "1. Website Use",
      section1Item1:
        "You must have reached the age of majority in your province or territory to use our services.",
      section1Item2: "You agree to use this website only for lawful purposes.",
      section1Item3:
        "You must not attempt to disrupt, damage, or gain unauthorized access to our systems.",
      section2Title: "2. Services Offered",
      section2Item1:
        "Access Home Equity is a licensed reverse mortgage broker in Canada.",
      section2Item2:
        "The information provided on this website is for informational purposes only and does not constitute financial or legal advice.",
      section2Item3:
        "Final approval of reverse mortgage products is subject to lender terms, eligibility, and regulatory requirements.",
      section3Title: "3. Accuracy of Information",
      section3Text:
        "We aim for accuracy, but we do not guarantee that all website content is complete, up-to-date, or error-free. It is your responsibility to verify information before relying on it.",
      section4Title: "4. Limitation of Liability",
      section4Item1:
        "Access Home Equity is not responsible for damages arising from the use of this website or reliance on the information provided.",
      section4Item2:
        "We are not responsible for losses related to delays, errors, technical issues, or third-party links.",
      section5Title: "5. Intellectual Property",
      section5Text:
        "All website content, including text, images, branding, and design, is the property of Access Home Equity and may not be reproduced or used without written permission.",
      section6Title: "6. Third-Party Links",
      section6Text:
        "Our website may include links to third-party websites. We are not responsible for the content, security, or practices of these websites.",
      section7Title: "7. Privacy",
      section7Text1: "Your use of our website is also governed by our",
      section7Link: "privacy policy",
      section7Text2: ", which explains how we collect and process your data.",
      section8Title: "8. Termination",
      section8Text:
        "We reserve the right to suspend or terminate access to our website or services in case of violation of these terms.",
      section9Title: "9. Governing Law",
      section9Text:
        "These terms are governed by the laws of the province or territory where the client receives services and the laws of Canada that apply thereto.",
      section10Title: "10. Contact Us",
      section10Intro: "If you have questions about these Terms, contact:",
      email: "Email:",
      phone: "Phone:",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
