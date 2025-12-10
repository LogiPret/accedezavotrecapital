"use client";

import { createContext, useContext, type ReactNode } from "react";
import { type Locale, getTranslations } from "./i18n";

type TranslationType = ReturnType<typeof getTranslations>;

interface LocaleContextType {
  locale: Locale;
  t: TranslationType;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
  locale: Locale;
}

export function LocaleProvider({ children, locale }: LocaleProviderProps) {
  const t = getTranslations(locale);

  return (
    <LocaleContext.Provider value={{ locale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
