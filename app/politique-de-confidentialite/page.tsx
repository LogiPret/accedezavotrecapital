import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PolitiqueDeConfidentialite() {
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
            Politique de Confidentialité
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Accédez à votre capital
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Date d'entrée en vigueur : 1er septembre 2025
          </p>

          <div className="space-y-8 text-foreground">
            <p>
              Chez Accédez à votre capital, on respecte votre vie privée pis on
              s'engage à protéger vos renseignements personnels. Cette politique
              de confidentialité explique comment on recueille, utilise pis
              protège vos informations quand vous visitez notre site web
              (www.accedezavotrecapital.ca) ou utilisez nos services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Renseignements que nous recueillons
              </h2>
              <p className="mb-4">
                Nous pouvons recueillir les types d'informations suivants:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Informations personnelles:</strong> nom, adresse
                  courriel, numéro de téléphone, date de naissance, adresse,
                  informations financières et autres détails nécessaires pour
                  évaluer l'admissibilité à un prêt hypothécaire inversé.
                </li>
                <li>
                  <strong>Informations non personnelles:</strong> type de
                  navigateur, informations sur l'appareil, adresse IP et données
                  d'utilisation du site Web.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Comment on utilise vos renseignements
              </h2>
              <p className="mb-4">On utilise vos informations pour :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fournir des services de courtage hypothécaire inversée</li>
                <li>Traiter les demandes et communiquer avec vous</li>
                <li>Respecter les obligations réglementaires et légales</li>
                <li>Améliorer notre site web et nos services</li>
                <li>
                  Envoyer des mises à jour, des ressources ou de l'information
                  promotionnelle (si vous y avez consenti)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Partage d'informations
              </h2>
              <p className="mb-4">
                On ne vend pas vos renseignements personnels. On pourrait
                partager des informations avec:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Les prêteurs, institutions financières pis fournisseurs de
                  services nécessaires pour traiter votre demande d'hypothèque
                  inversée
                </li>
                <li>
                  Les autorités légales, réglementaires ou gouvernementales tel
                  que requis par la loi
                </li>
                <li>
                  Les fournisseurs tiers de confiance qui aident avec
                  l'hébergement du site web, le marketing ou le soutien à la
                  clientèle (liés par des accords de confidentialité)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Sécurité des données
              </h2>
              <p>
                Nous utilisons des mesures de sécurité conformes aux normes de
                l'industrie pour protéger vos renseignements. Cependant, aucune
                transmission sur Internet n'est totalement sécurisée, et nous ne
                pouvons garantir une sécurité absolue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Vos droits
              </h2>
              <p className="mb-4">Vous avez le droit de :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accéder à vos renseignements personnels et les corriger</li>
                <li>Retirer votre consentement aux communications marketing</li>
                <li>
                  Demander la suppression de vos données lorsque la loi le
                  permet
                </li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous par courriel :{" "}
                <a
                  href="mailto:info@accedezavotrecapital.ca"
                  className="text-primary hover:underline"
                >
                  info@accedezavotrecapital.ca
                </a>{" "}
                ou par téléphone :{" "}
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
                6. Témoins et suivi
              </h2>
              <p>
                Notre site web peut utiliser des témoins (cookies) ou des
                technologies similaires pour améliorer votre expérience de
                navigation et analyser l'achalandage du site. Vous pouvez
                désactiver les témoins dans les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Liens vers des tiers
              </h2>
              <p>
                Notre site web peut contenir des liens vers des sites de tiers.
                Nous ne sommes pas responsables des pratiques de confidentialité
                de ces sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Mises à jour de cette politique
              </h2>
              <p>
                Nous pouvons mettre à jour cette politique de confidentialité de
                temps à autre. Les mises à jour seront affichées sur cette page
                avec une nouvelle date d'entrée en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Contactez-nous
              </h2>
              <p className="mb-2">
                Pour toute question concernant cette politique de
                confidentialité, contactez :
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
