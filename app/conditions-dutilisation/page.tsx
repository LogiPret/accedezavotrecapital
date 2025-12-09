import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ConditionsDUtilisation() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Retour à l'accueil
          </Link>
        </Button>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Termes et Conditions
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Accédez à votre capital
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Date d'entrée en vigueur : 1er septembre 2025
          </p>

          <div className="space-y-8 text-foreground">
            <p>
              Bienvenue sur www.accedezavotrecapital.ca. En utilisant notre site
              web et nos services, vous acceptez les conditions générales
              suivantes. Veuillez les lire attentivement.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Utilisation du site web
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Vous devez avoir atteint l'âge de la majorité dans votre
                  province ou territoire pour utiliser nos services.
                </li>
                <li>
                  Vous consentez à utiliser ce site web uniquement à des fins
                  légales.
                </li>
                <li>
                  Vous ne devez pas tenter de perturber, d'endommager ou
                  d'obtenir un accès non autorisé à nos systèmes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Services offerts
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Accédez à votre capital est un courtier hypothécaire inversé
                  agréé au Canada.
                </li>
                <li>
                  Les renseignements fournis sur ce site web sont uniquement à
                  titre informatif et ne constituent pas des conseils financiers
                  ou juridiques.
                </li>
                <li>
                  L'approbation finale des produits d'hypothèque inversée est
                  assujettie aux conditions du prêteur, à l'admissibilité et aux
                  exigences réglementaires.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Exactitude de l'information
              </h2>
              <p>
                On vise la précision, mais on garantit pas que tout le contenu
                du site web est complet, à jour ou sans erreurs. C'est à vous de
                vérifier l'info avant de vous y fier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Limitation de responsabilité
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Accédez à votre capital n'est pas responsable des dommages
                  découlant de l'utilisation de ce site web ou de la confiance
                  accordée aux informations fournies.
                </li>
                <li>
                  Nous ne sommes pas responsables des pertes liées aux retards,
                  erreurs, problèmes techniques ou liens de tiers.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Propriété intellectuelle
              </h2>
              <p>
                Tout le contenu du site web, y compris le texte, les images,
                l'image de marque et la conception, est la propriété d'Access
                Home Equity et ne peut être reproduit ou utilisé sans
                autorisation écrite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Liens de tiers
              </h2>
              <p>
                Notre site web peut inclure des liens vers des sites web de
                tiers. Nous ne sommes pas responsables du contenu, de la
                sécurité ou des pratiques de ces sites web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Confidentialité
              </h2>
              <p>
                Votre utilisation de notre site web est également régie par
                notre{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-primary hover:underline"
                >
                  politique de confidentialité
                </Link>
                , qui explique comment nous recueillons et traitons vos données.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Résiliation
              </h2>
              <p>
                Nous nous réservons le droit de suspendre ou de mettre fin à
                l'accès à notre site web ou à nos services en cas de violation
                des présentes conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Droit applicable
              </h2>
              <p>
                Ces conditions sont régies par les lois de la province ou du
                territoire où le client reçoit les services et les lois du
                Canada qui s'y appliquent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Contactez-nous
              </h2>
              <p className="mb-2">
                If you have questions about these Terms, contact:
              </p>
              <p className="font-semibold">Accédez à votre capital</p>
              <p>
                Courriel :{" "}
                <a
                  href="mailto:info@accedezavotrecapital.ca"
                  className="text-primary hover:underline"
                >
                  info@accedezavotrecapital.ca
                </a>
              </p>
              <p>
                Téléphone :{" "}
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
