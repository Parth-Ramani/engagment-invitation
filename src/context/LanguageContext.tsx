"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, TRANSLATIONS, TranslationSchema } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  hasChosenLanguage: boolean;
  setHasChosenLanguage: (chosen: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("gu"); // default to Gujarati or user preference
  const [hasChosenLanguage, setHasChosenLanguage] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("invitation_lang") as Language | null;
    const hasChosen = localStorage.getItem("invitation_lang_chosen");
    if (saved && (saved === "en" || saved === "gu")) {
      setLanguageState(saved);
    }
    if (hasChosen === "true") {
      setHasChosenLanguage(true);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.setAttribute("data-lang", language);
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("invitation_lang", lang);
      localStorage.setItem("invitation_lang_chosen", "true");
    }
    setHasChosenLanguage(true);
  };

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        hasChosenLanguage,
        setHasChosenLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
