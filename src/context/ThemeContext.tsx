"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeId =
  | "ivoryLight"
  | "rosePearlLight"
  | "burgundy"
  | "emerald"
  | "sapphire"
  | "violet";

export interface ThemeConfig {
  id: ThemeId;
  mode: "light" | "dark";
  nameEn: string;
  nameGu: string;
  tagEn: string;
  tagGu: string;
  swatchPrimary: string;
  swatchAccent: string;
  vars: {
    "--theme-darkest": string;
    "--theme-dark": string;
    "--theme-maroon": string;
    "--theme-wine": string;
    "--theme-deepRuby": string;
    "--theme-ruby": string;
    "--theme-crimson": string;
    "--theme-card-1": string;
    "--theme-card-2": string;
  };
  petalColor: string;
}

export const THEMES: ThemeConfig[] = [
  // Light Themes
  {
    id: "ivoryLight",
    mode: "light",
    nameEn: "Royal Ivory (Light)",
    nameGu: "રાજવાડી આઈવરી (લાઇટ)",
    tagEn: "Imperial Silk & Gold",
    tagGu: "શુભ આઈવરી રેશમ અને સુવર્ણ",
    swatchPrimary: "#FAF5EB",
    swatchAccent: "#B89223",
    petalColor: "#D4AF37",
    vars: {
      "--theme-darkest": "#FAF5EB",
      "--theme-dark": "#F4EDE0",
      "--theme-maroon": "#ECE0CE",
      "--theme-wine": "#DFCEB8",
      "--theme-deepRuby": "#CDB799",
      "--theme-ruby": "#9B7126",
      "--theme-crimson": "#6D4F17",
      "--theme-card-1": "rgba(255, 253, 248, 0.95)",
      "--theme-card-2": "rgba(247, 240, 227, 0.97)",
    },
  },
  {
    id: "rosePearlLight",
    mode: "light",
    nameEn: "Rose Pearl (Light)",
    nameGu: "ગુલાબી મોતી (લાઇટ)",
    tagEn: "Blush Silk & Antique Gold",
    tagGu: "ગુલાબી રેશમ અને એન્ટિક ગોલ્ડ",
    swatchPrimary: "#FCF4F6",
    swatchAccent: "#B85472",
    petalColor: "#E07A9A",
    vars: {
      "--theme-darkest": "#FCF4F6",
      "--theme-dark": "#F7E8EC",
      "--theme-maroon": "#EDD4DB",
      "--theme-wine": "#DDBEC7",
      "--theme-deepRuby": "#C59AAB",
      "--theme-ruby": "#8C2B4E",
      "--theme-crimson": "#5E1530",
      "--theme-card-1": "rgba(255, 250, 252, 0.96)",
      "--theme-card-2": "rgba(250, 238, 243, 0.97)",
    },
  },
  // Dark Themes
  {
    id: "burgundy",
    mode: "dark",
    nameEn: "Royal Burgundy",
    nameGu: "રજવાડી રૂબી",
    tagEn: "Classic Royal Wine & Gold",
    tagGu: "પરંપરાગત રજવાડી વાઇન & ગોલ્ડ",
    swatchPrimary: "#731437",
    swatchAccent: "#D4AF37",
    petalColor: "#800A24",
    vars: {
      "--theme-darkest": "#0B0205",
      "--theme-dark": "#14030A",
      "--theme-maroon": "#2B0714",
      "--theme-wine": "#3F0A1D",
      "--theme-deepRuby": "#540E28",
      "--theme-ruby": "#731437",
      "--theme-crimson": "#8C1842",
      "--theme-card-1": "rgba(43, 7, 20, 0.78)",
      "--theme-card-2": "rgba(20, 3, 10, 0.88)",
    },
  },
  {
    id: "emerald",
    mode: "dark",
    nameEn: "Emerald Palace",
    nameGu: "શાહી પન્ના",
    tagEn: "Deep Emerald & Gold",
    tagGu: "શાહી પન્ના લીલો & ગોલ્ડ",
    swatchPrimary: "#155237",
    swatchAccent: "#D4AF37",
    petalColor: "#0E3B27",
    vars: {
      "--theme-darkest": "#020B06",
      "--theme-dark": "#04150D",
      "--theme-maroon": "#08291A",
      "--theme-wine": "#0E3B27",
      "--theme-deepRuby": "#155237",
      "--theme-ruby": "#1C6C49",
      "--theme-crimson": "#248A5E",
      "--theme-card-1": "rgba(8, 41, 26, 0.80)",
      "--theme-card-2": "rgba(4, 21, 13, 0.90)",
    },
  },
  {
    id: "sapphire",
    mode: "dark",
    nameEn: "Midnight Sapphire",
    nameGu: "શાહી નીલમ",
    tagEn: "Royal Midnight & Gold",
    tagGu: "રાજવી બ્લુ નીલમ & ગોલ્ડ",
    swatchPrimary: "#183170",
    swatchAccent: "#D4AF37",
    petalColor: "#10214C",
    vars: {
      "--theme-darkest": "#03060E",
      "--theme-dark": "#060C1B",
      "--theme-maroon": "#0B1736",
      "--theme-wine": "#10214C",
      "--theme-deepRuby": "#183170",
      "--theme-ruby": "#224294",
      "--theme-crimson": "#2C55BD",
      "--theme-card-1": "rgba(11, 23, 54, 0.80)",
      "--theme-card-2": "rgba(6, 12, 27, 0.90)",
    },
  },
  {
    id: "violet",
    mode: "dark",
    nameEn: "Imperial Amethyst",
    nameGu: "શાહી જાંબલી",
    tagEn: "Imperial Plum & Gold",
    tagGu: "શાહી જાંબલી રજવાડી & ગોલ્ડ",
    swatchPrimary: "#4B1469",
    swatchAccent: "#D4AF37",
    petalColor: "#340D49",
    vars: {
      "--theme-darkest": "#09020D",
      "--theme-dark": "#120519",
      "--theme-maroon": "#230932",
      "--theme-wine": "#340D49",
      "--theme-deepRuby": "#4B1469",
      "--theme-ruby": "#641D8B",
      "--theme-crimson": "#8027B0",
      "--theme-card-1": "rgba(35, 9, 50, 0.80)",
      "--theme-card-2": "rgba(18, 5, 25, 0.90)",
    },
  },
];

interface ThemeContextType {
  currentTheme: ThemeConfig;
  setTheme: (themeId: ThemeId) => void;
  themes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>("ivoryLight"); // default to light ivory theme or user saved preference

  useEffect(() => {
    const saved = localStorage.getItem("invitation_theme") as ThemeId | null;
    if (saved && THEMES.some((t) => t.id === saved)) {
      setThemeId(saved);
    }
  }, []);

  const currentTheme =
    THEMES.find((t) => t.id === themeId) || THEMES[0];

  useEffect(() => {
    // Apply CSS variables & theme mode class to root element
    const root = document.documentElement;
    Object.entries(currentTheme.vars).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });

    if (currentTheme.mode === "light") {
      root.classList.add("light-theme");
      root.classList.remove("dark-theme");
    } else {
      root.classList.add("dark-theme");
      root.classList.remove("light-theme");
    }
  }, [currentTheme]);

  const setTheme = (id: ThemeId) => {
    setThemeId(id);
    if (typeof window !== "undefined") {
      localStorage.setItem("invitation_theme", id);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        themes: THEMES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

