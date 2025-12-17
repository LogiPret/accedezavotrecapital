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
import { Calculator, Home, TrendingUp, Info, Users, Lock } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import {
  trackCalculatorInteraction,
  trackLandingUnlockStart,
  trackLandingUnlockSubmit,
  trackLandingUnlockError,
} from "@/lib/tracking";

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

const CANADIAN_PROVINCES = [
  "Ontario",
  "Quebec",
  "British Columbia",
  "Alberta",
  "Manitoba",
  "Saskatchewan",
  "Nova Scotia",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Prince Edward Island",
];

export default function LandingCalculator() {
  const { t, locale } = useLocale();
  const [age, setAge] = useState(65);
  const [spouseAge, setSpouseAge] = useState<number | null>(null);
  const [hasSpouse, setHasSpouse] = useState(false);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [homeValue, setHomeValue] = useState(400000);
  const [showResults, setShowResults] = useState(false);

  // Unlock state
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [unlockName, setUnlockName] = useState("");
  const [unlockPhone, setUnlockPhone] = useState("");
  const [unlockError, setUnlockError] = useState("");
  const [hasTrackedUnlockStart, setHasTrackedUnlockStart] = useState(false);

  // Track unlock form start when user begins filling it
  const handleUnlockFormInteraction = () => {
    if (!hasTrackedUnlockStart) {
      trackLandingUnlockStart();
      setHasTrackedUnlockStart(true);
    }
  };

  // For English: use province selector; For French: use city selector with fixed Quebec province
  const locationValid = locale === "en" ? province !== "" : city !== "";

  // Convert numeric age to Monday-compatible range format
  const getAgeRange = (numericAge: number): string => {
    if (numericAge >= 80) return "80+";
    if (numericAge >= 75) return "75-79";
    if (numericAge >= 70) return "70-74";
    if (numericAge >= 65) return "65-69";
    if (numericAge >= 60) return "60-64";
    if (numericAge >= 55) return "55-59";
    return "55-59"; // fallback
  };

  const eligibility = useMemo(() => {
    const effectiveAge =
      hasSpouse && spouseAge ? Math.min(age, spouseAge) : age;

    if (effectiveAge < 55) return null;

    // City/Province coefficient adjustments based on market stability
    // Reference: Historical CHIP data shows slight regional variations
    const getLocationCoefficient = (): number => {
      if (locale === "en") {
        // Province-based adjustments for English site
        const provinceCoefficients: Record<string, number> = {
          "British Columbia": 0.02, // Strong market
          Ontario: 0.01,
          Alberta: 0.0,
          Quebec: 0.0,
          Manitoba: -0.01,
          Saskatchewan: -0.01,
          "Nova Scotia": -0.01,
          "New Brunswick": -0.02,
          "Newfoundland and Labrador": -0.02,
          "Prince Edward Island": -0.02,
        };
        return provinceCoefficients[province] || 0;
      } else {
        // Quebec cities - Montreal area gets slight premium
        const cityCoefficients: Record<string, number> = {
          Montréal: 0.01,
          Laval: 0.01,
          Longueuil: 0.01,
          Brossard: 0.01,
          Québec: 0.0,
          Gatineau: 0.0,
          Sherbrooke: 0.0,
          Autre: -0.01,
        };
        return cityCoefficients[city] || 0;
      }
    };

    // LTV lookup table based on real CHIP and Equitable Bank calculator results
    // CHIP age 65, $700k Longueuil = $278,500-$306,350 (39.8%-43.8%)
    // Equitable age 67, $850k = $374,000 (44%)
    const ltvTable: { age: number; minLTV: number; maxLTV: number }[] = [
      { age: 55, minLTV: 0.2, maxLTV: 0.25 },
      { age: 60, minLTV: 0.28, maxLTV: 0.35 },
      { age: 65, minLTV: 0.38, maxLTV: 0.44 },
      { age: 70, minLTV: 0.42, maxLTV: 0.48 },
      { age: 75, minLTV: 0.48, maxLTV: 0.53 },
      { age: 80, minLTV: 0.5, maxLTV: 0.55 },
    ];

    // Find the appropriate age bracket and interpolate
    let minLTV: number;
    let maxLTV: number;

    if (effectiveAge >= 80) {
      minLTV = 0.5;
      maxLTV = 0.55;
    } else {
      // Find the two brackets to interpolate between
      let lowerBracket = ltvTable[0];
      let upperBracket = ltvTable[ltvTable.length - 1];

      for (let i = 0; i < ltvTable.length - 1; i++) {
        if (
          effectiveAge >= ltvTable[i].age &&
          effectiveAge < ltvTable[i + 1].age
        ) {
          lowerBracket = ltvTable[i];
          upperBracket = ltvTable[i + 1];
          break;
        }
      }

      // Linear interpolation within the bracket
      const ageRange = upperBracket.age - lowerBracket.age;
      const ageProgress = (effectiveAge - lowerBracket.age) / ageRange;

      minLTV =
        lowerBracket.minLTV +
        ageProgress * (upperBracket.minLTV - lowerBracket.minLTV);
      maxLTV =
        lowerBracket.maxLTV +
        ageProgress * (upperBracket.maxLTV - lowerBracket.maxLTV);
    }

    // Apply location coefficient
    const locationCoeff = getLocationCoefficient();
    const adjustedMinLTV = Math.min(minLTV + locationCoeff, 0.55);
    const adjustedMaxLTV = Math.min(maxLTV + locationCoeff, 0.55);

    const minAmount = Math.round(homeValue * adjustedMinLTV);
    const maxAmount = Math.round(homeValue * adjustedMaxLTV);

    return {
      minAmount,
      maxAmount,
      minPercentage: Math.round(adjustedMinLTV * 100),
      maxPercentage: Math.round(adjustedMaxLTV * 100),
      effectiveAge,
    };
  }, [age, spouseAge, hasSpouse, homeValue, city, province, locale]);

  const handleCalculate = () => {
    if (age >= 55 && locationValid && homeValue >= 250000) {
      if (hasSpouse && spouseAge && spouseAge < 55) {
        return;
      }
      setShowResults(true);
      trackCalculatorInteraction(
        "result_view",
        homeValue,
        eligibility?.maxAmount
      );
    }
  };

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, "");
    const limitedNumber = phoneNumber.slice(0, 10);

    if (limitedNumber.length === 0) {
      return "";
    } else if (limitedNumber.length <= 3) {
      return `(${limitedNumber}`;
    } else if (limitedNumber.length <= 6) {
      return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3)}`;
    } else {
      return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3, 6)}-${limitedNumber.slice(6)}`;
    }
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    setUnlockPhone(formatted);
  };

  const handleUnlock = async () => {
    setUnlockError("");

    // Validate name
    if (!unlockName.trim()) {
      setUnlockError(t.landing.errorName);
      trackLandingUnlockError("missing_name");
      return;
    }

    // Validate phone
    const phoneDigits = unlockPhone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      setUnlockError(t.landing.errorPhone);
      trackLandingUnlockError("invalid_phone");
      return;
    }

    setIsUnlocking(true);

    try {
      // Send to n8n webhook with "ads" as formType
      // Phone with +1 country code prefix, age as range format for Monday
      const phoneWithCountryCode = `+1${phoneDigits}`;

      await fetch(
        "https://n8n-wwfb.onrender.com/webhook/65e54c43-dfcc-441e-bd8e-706d0051de10",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: unlockName.split(" ")[0] || unlockName,
            lastName: unlockName.split(" ").slice(1).join(" ") || "",
            phone: phoneWithCountryCode,
            age: getAgeRange(age),
            homeValue: homeValue.toString(),
            city: locale === "en" ? province : city,
            hasSpouse: hasSpouse,
            spouseAge: spouseAge ? getAgeRange(spouseAge) : null,
            estimatedMin: eligibility?.minAmount,
            estimatedMax: eligibility?.maxAmount,
            formType: "ads",
            timestamp: new Date().toISOString(),
          }),
        }
      );

      // Animate unlock
      setIsUnlocked(true);
      trackLandingUnlockSubmit(
        true,
        eligibility?.minAmount,
        eligibility?.maxAmount
      );
    } catch (error) {
      console.error("Unlock submission error:", error);
      trackLandingUnlockSubmit(false);
      // Still unlock even if webhook fails
      setIsUnlocked(true);
    } finally {
      setIsUnlocking(false);
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

                  {/* Province & City - different layout for EN vs FR */}
                  {locale === "en" ? (
                    <div className="space-y-1 md:space-y-2">
                      <Label
                        htmlFor="province"
                        className="text-sm md:text-base font-medium"
                      >
                        Province
                      </Label>
                      <Select
                        value={province}
                        onValueChange={(value) => {
                          setProvince(value);
                          setShowResults(false);
                        }}
                      >
                        <SelectTrigger id="province" className="text-sm">
                          <SelectValue placeholder="Select your province" />
                        </SelectTrigger>
                        <SelectContent>
                          {CANADIAN_PROVINCES.map((prov) => (
                            <SelectItem key={prov} value={prov}>
                              {prov}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ) : (
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
                          value="Québec"
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
                  )}

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
                    disabled={age < 55 || !locationValid || !isSpouseAgeValid}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    {t.calculator.calculateButton}
                  </Button>
                </div>

                {/* Results Section with Blur Overlay */}
                <div className="relative">
                  <div
                    className={`space-y-4 md:space-y-6 transition-all duration-500 ${
                      !showResults
                        ? "opacity-50"
                        : isUnlocked
                          ? ""
                          : "blur-md select-none pointer-events-none"
                    }`}
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
                        <p className="text-[10px] md:text-xs text-center text-muted-foreground">
                          {t.calculator.disclaimer}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Unlock Overlay */}
                  {showResults && !isUnlocked && (
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                        isUnlocked
                          ? "opacity-0 pointer-events-none"
                          : "opacity-100"
                      }`}
                    >
                      <div className="bg-card/95 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8 shadow-2xl max-w-sm mx-4 w-full">
                        <div className="text-center mb-6">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-serif text-lg md:text-xl font-bold text-foreground mb-2">
                            {t.landing.unlockTitle}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {t.landing.unlockSubtitle}
                          </p>
                        </div>

                        {unlockError && (
                          <div className="bg-destructive/10 border border-destructive/20 text-destructive text-xs sm:text-sm p-3 rounded-lg mb-4">
                            {unlockError}
                          </div>
                        )}

                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="unlock-name" className="text-sm">
                              {t.landing.nameLabel}
                            </Label>
                            <Input
                              id="unlock-name"
                              placeholder={t.landing.namePlaceholder}
                              value={unlockName}
                              onChange={(e) => setUnlockName(e.target.value)}
                              onFocus={handleUnlockFormInteraction}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="unlock-phone" className="text-sm">
                              {t.landing.phoneLabel}
                            </Label>
                            <Input
                              id="unlock-phone"
                              type="tel"
                              placeholder={t.landing.phonePlaceholder}
                              value={unlockPhone}
                              onChange={(e) =>
                                handlePhoneChange(e.target.value)
                              }
                              onFocus={handleUnlockFormInteraction}
                              inputMode="numeric"
                              className="mt-1"
                            />
                          </div>
                          <Button
                            onClick={handleUnlock}
                            disabled={isUnlocking}
                            className="w-full bg-primary hover:bg-primary/90"
                            size="lg"
                          >
                            {isUnlocking ? (
                              <span className="flex items-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                {locale === "en"
                                  ? "Unlocking..."
                                  : "Déverrouillage..."}
                              </span>
                            ) : (
                              t.landing.unlockButton
                            )}
                          </Button>
                        </div>
                      </div>
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
