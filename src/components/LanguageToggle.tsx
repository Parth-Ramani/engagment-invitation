"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface LanguageToggleProps {
  embedded?: boolean;
}

export function LanguageToggle({ embedded = false }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  const containerClasses = embedded
    ? "relative"
    : "fixed top-3.5 left-3 sm:top-5 sm:left-6 z-50";

  return (
    <div className={containerClasses}>
      <div className="flex items-center p-1 rounded-full bg-royal-dark/85 backdrop-blur-md border border-gold-400/40 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
        <button
          onClick={() => setLanguage("gu")}
          className={`flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-sans transition-all duration-300 break-keep whitespace-nowrap ${
            language === "gu"
              ? "bg-gold-gradient text-royal-darkest font-bold shadow-[0_0_12px_rgba(212,175,55,0.6)]"
              : "text-gold-300/80 hover:text-gold-100"
          }`}
          aria-label="સ્વિચ કરો ગુજરાતીમાં"
        >
          <span>ગુજરાતી</span>
        </button>

        <button
          onClick={() => setLanguage("en")}
          className={`flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-sans transition-all duration-300 break-keep whitespace-nowrap ${
            language === "en"
              ? "bg-gold-gradient text-royal-darkest font-bold shadow-[0_0_12px_rgba(212,175,55,0.6)]"
              : "text-gold-300/80 hover:text-gold-100"
          }`}
          aria-label="Switch to English"
        >
          <span>English</span>
        </button>
      </div>
    </div>
  );
}
