"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calculator, Home, TrendingUp, Info, Users } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

const QUEBEC_CITIES = [
  "Montréal",
  "Québec",
  "Laval",
  "Gatineau",
  "Longueuil",
  "Sherbrooke",
  "Saguenay",
  "Lévis",
  "Trois-Rivières",
  "Terrebonne",
  "Saint-Jean-sur-Richelieu",
  "Repentigny",
  "Brossard",
  "Drummondville",
  "Saint-Jérôme",
  "Granby",
  "Blainville",
  "Saint-Hyacinthe",
  "Autre",
];

export default function CalculatorSection() {
  const { t, locale } = useLocale();
  const [age, setAge] = useState(65);
  const [spouseAge, setSpouseAge] = useState<number | null>(null);
  const [hasSpouse, setHasSpouse] = useState(false);
  const [province] = useState("Québec");
  const [city, setCity] = useState("");
  const [homeValue, setHomeValue] = useState(400000);
  const [showResults, setShowResults] = useState(false);

  const eligibility = useMemo(() => {
    const effectiveAge =
      hasSpouse && spouseAge ? Math.min(age, spouseAge) : age;

    if (effectiveAge < 55) return null;

    // Percentages based on Equitable Bank Flex product: 15% at 55, scaling to 55% at 80+
    // Each age group has a min and max percentage range
    let minPercentage = 0.15;
    let maxPercentage = 0.2;

    if (effectiveAge >= 55) {
      minPercentage = 0.15;
      maxPercentage = 0.2;
    }
    if (effectiveAge >= 60) {
      minPercentage = 0.2;
      maxPercentage = 0.28;
    }
    if (effectiveAge >= 65) {
      minPercentage = 0.28;
      maxPercentage = 0.36;
    }
    if (effectiveAge >= 70) {
      minPercentage = 0.36;
      maxPercentage = 0.45;
    }
    if (effectiveAge >= 75) {
      minPercentage = 0.45;
      maxPercentage = 0.52;
    }
    if (effectiveAge >= 80) {
      minPercentage = 0.5;
      maxPercentage = 0.55;
    }

    const minAmount = Math.round(homeValue * minPercentage);
    const maxAmount = Math.round(homeValue * maxPercentage);

    return {
      minAmount,
      maxAmount,
      minPercentage: Math.round(minPercentage * 100),
      maxPercentage: Math.round(maxPercentage * 100),
      effectiveAge,
    };
  }, [age, spouseAge, hasSpouse, homeValue]);

  const handleCalculate = () => {
    if (age >= 55 && city && homeValue >= 250000) {
      if (hasSpouse && spouseAge && spouseAge < 55) {
        return;
      }
      setShowResults(true);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("fr-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const isSpouseAgeValid =
    !hasSpouse || (spouseAge !== null && spouseAge >= 55);

  return (
    <section id="calculatrice" className="py-12 md:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            {t.calculator.title}
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 overflow-hidden p-0">
            <CardHeader className="bg-primary text-primary-foreground p-4 md:p-6">
              <div className="flex items-center gap-2 md:gap-3">
                <Calculator className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                  <CardTitle className="text-lg md:text-2xl">
                    {t.calculator.cardTitle}
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80 text-xs md:text-sm">
                    {t.calculator.cardSubtitle}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 md:p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                {/* Input Section */}
                <div className="space-y-5 md:space-y-6">
                  {/* Age */}
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex justify-between items-center">
                      <Label
                        htmlFor="age"
                        className="text-sm md:text-base font-medium"
                      >
                        {t.calculator.ageLabel}
                      </Label>
                      <span className="text-xl md:text-2xl font-bold text-primary">
                        {age} {t.calculator.years}
                      </span>
                    </div>
                    <Slider
                      id="age"
                      min={50}
                      max={95}
                      step={1}
                      value={[age]}
                      onValueChange={(value) => {
                        setAge(value[0]);
                        setShowResults(false);
                      }}
                      className="w-full"
                    />
                    {age < 55 && (
                      <p className="text-xs md:text-sm text-destructive">
                        {t.calculator.minAgeError}
                      </p>
                    )}
                  </div>

                  {/* Spouse Section */}
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center gap-2 md:gap-3">
                      <input
                        type="checkbox"
                        id="hasSpouse"
                        checked={hasSpouse}
                        onChange={(e) => {
                          setHasSpouse(e.target.checked);
                          if (!e.target.checked) setSpouseAge(null);
                          setShowResults(false);
                        }}
                        className="w-4 h-4 rounded border-border"
                      />
                      <Label
                        htmlFor="hasSpouse"
                        className="text-sm md:text-base font-medium flex items-center gap-2"
                      >
                        <Users className="w-4 h-4" />
                        {t.calculator.hasSpouse}
                      </Label>
                    </div>

                    {hasSpouse && (
                      <div className="pl-6 md:pl-7 space-y-2 md:space-y-3">
                        <div className="flex justify-between items-center">
                          <Label
                            htmlFor="spouseAge"
                            className="text-xs md:text-sm"
                          >
                            {t.calculator.spouseAge}
                          </Label>
                          <span className="text-base md:text-lg font-bold text-primary">
                            {spouseAge || 55} {t.calculator.years}
                          </span>
                        </div>
                        <Slider
                          id="spouseAge"
                          min={50}
                          max={95}
                          step={1}
                          value={[spouseAge || 55]}
                          onValueChange={(value) => {
                            setSpouseAge(value[0]);
                            setShowResults(false);
                          }}
                          className="w-full"
                        />
                        {spouseAge !== null && spouseAge < 55 && (
                          <p className="text-xs md:text-sm text-destructive">
                            {t.calculator.spouseMinAgeError}
                          </p>
                        )}
                        <p className="text-[10px] md:text-xs text-muted-foreground flex items-start gap-1">
                          <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          {t.calculator.spouseAgeNote}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Province & City - side by side on mobile */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-1 md:space-y-2">
                      <Label
                        htmlFor="province"
                        className="text-sm md:text-base font-medium"
                      >
                        Province
                      </Label>
                      <Input
                        id="province"
                        value={province}
                        disabled
                        className="bg-muted text-sm"
                      />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <Label
                        htmlFor="city"
                        className="text-sm md:text-base font-medium"
                      >
                        {t.calculator.cityLabel}
                      </Label>
                      <Select
                        value={city}
                        onValueChange={(value) => {
                          setCity(value);
                          setShowResults(false);
                        }}
                      >
                        <SelectTrigger id="city" className="text-sm">
                          <SelectValue
                            placeholder={t.calculator.cityPlaceholder}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {QUEBEC_CITIES.map((cityName) => (
                            <SelectItem key={cityName} value={cityName}>
                              {cityName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Home Value */}
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex justify-between items-center">
                      <Label
                        htmlFor="homeValue"
                        className="text-sm md:text-base font-medium"
                      >
                        {t.calculator.homeValueLabel}
                      </Label>
                      <span className="text-lg md:text-xl font-bold text-primary">
                        {formatCurrency(homeValue)}
                      </span>
                    </div>
                    <Slider
                      id="homeValue"
                      min={250000}
                      max={3000000}
                      step={25000}
                      value={[homeValue]}
                      onValueChange={(value) => {
                        setHomeValue(value[0]);
                        setShowResults(false);
                      }}
                      className="w-full"
                    />
                    <div className="flex justify-between text-[10px] md:text-xs text-muted-foreground">
                      <span>250 000 $</span>
                      <span>3 000 000 $</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleCalculate}
                    disabled={age < 55 || !city || !isSpouseAgeValid}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    {t.calculator.calculateButton}
                  </Button>
                </div>

                {/* Results Section */}
                <div
                  className={`space-y-4 md:space-y-6 ${!showResults && "opacity-50"}`}
                >
                  <div className="bg-secondary rounded-xl p-4 md:p-6 border border-border">
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <Home className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      <h3 className="font-bold text-base md:text-lg">
                        {t.calculator.resultsTitle}
                      </h3>
                    </div>

                    {showResults && eligibility ? (
                      <>
                        <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                          {locale === "en"
                            ? "Based on your information, you could be eligible to receive:"
                            : "Basé sur vos informations, vous pourriez être éligible à recevoir:"}
                        </p>
                        <div className="text-center py-4 md:py-6 bg-background rounded-lg mb-3 md:mb-4">
                          <p className="text-xs md:text-sm text-muted-foreground mb-1">
                            {locale === "en"
                              ? "Estimated Amount"
                              : "Montant Estimé"}
                          </p>
                          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                            {formatCurrency(eligibility.minAmount)}
                          </p>
                          <p className="text-lg md:text-xl text-muted-foreground mt-2">
                            {locale === "en" ? "up to" : "jusqu'à"}{" "}
                            <span className="font-semibold text-primary/80">
                              {formatCurrency(eligibility.maxAmount)}
                            </span>
                          </p>
                          <p className="text-xs md:text-sm text-muted-foreground mt-2">
                            {locale === "en"
                              ? `${eligibility.minPercentage}% to ${eligibility.maxPercentage}% of your property value`
                              : `${eligibility.minPercentage}% à ${eligibility.maxPercentage}% de la valeur de votre propriété`}
                          </p>
                          {hasSpouse && (
                            <p className="text-[10px] md:text-xs text-muted-foreground mt-1">
                              {locale === "en"
                                ? `(Based on age of ${eligibility.effectiveAge} years)`
                                : `(Basé sur l'âge de ${eligibility.effectiveAge} ans)`}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-accent/10 rounded-lg mb-3 md:mb-4">
                          <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                          <p className="text-xs md:text-sm">
                            <strong>{t.calculator.range}:</strong>{" "}
                            {formatCurrency(eligibility.minAmount)} -{" "}
                            {formatCurrency(eligibility.maxAmount)}
                          </p>
                        </div>

                        <div className="p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/10">
                          <p className="text-[10px] md:text-xs text-muted-foreground flex items-start gap-2">
                            <Info className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 mt-0.5 text-primary" />
                            <span>{t.calculator.factorsInfo}</span>
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-8 md:py-12">
                        <Calculator className="w-12 h-12 md:w-16 md:h-16 text-muted-foreground/30 mx-auto mb-3 md:mb-4" />
                        <p className="text-sm md:text-base text-muted-foreground">
                          {t.calculator.fillForm}
                        </p>
                      </div>
                    )}
                  </div>

                  {showResults && (
                    <div className="space-y-3 md:space-y-4">
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                        asChild
                      >
                        <a href="#contact">{t.calculator.getPersonalized}</a>
                      </Button>
                      <p className="text-[10px] md:text-xs text-center text-muted-foreground">
                        {t.calculator.disclaimer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
