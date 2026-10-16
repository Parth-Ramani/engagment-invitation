import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        royal: {
          darkest: "var(--theme-darkest, #0B0205)",
          dark: "var(--theme-dark, #14030A)",
          maroon: "var(--theme-maroon, #2B0714)",
          wine: "var(--theme-wine, #3F0A1D)",
          deepRuby: "var(--theme-deepRuby, #540E28)",
          ruby: "var(--theme-ruby, #731437)",
          crimson: "var(--theme-crimson, #8C1842)",
        },
        gold: {
          50: "#FFFDF5",
          100: "#FFF8E1",
          200: "#FCECC0",
          300: "#F7DE98",
          400: "#EDCA68",
          500: "#D4AF37", // Imperial Gold
          600: "#B89223",
          700: "#947214",
          800: "#6B500B",
          900: "#4A3505",
          foil: "#DFB748",
          glow: "#FFE485",
        },
        ivory: {
          50: "#FFFEFC",
          100: "#FBF8F1",
          200: "#F5EFE4",
          300: "#ECE2D2",
          400: "#DCCEBA",
        },
      },
      fontFamily: {
        royal: ["var(--font-cinzel)", "'Noto Serif Gujarati'", "serif"],
        serif: ["var(--font-cormorant)", "'Noto Serif Gujarati'", "serif"],
        script: ["var(--font-alex-brush)", "'Anek Gujarati'", "cursive"],
        sans: ["var(--font-outfit)", "'Anek Gujarati'", "sans-serif"],
        gujarati: ["'Anek Gujarati'", "'Noto Serif Gujarati'", "sans-serif"],
        gujaratiSerif: ["'Noto Serif Gujarati'", "serif"],
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2.5s ease-in-out infinite alternate",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.85", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 4px rgba(212, 175, 55, 0.4))" },
          "100%": { filter: "drop-shadow(0 0 16px rgba(255, 228, 133, 0.8))" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #FFF1BD 0%, #E8C15A 25%, #C29627 50%, #F5D77F 75%, #D4AF37 100%)",
        "gold-border-gradient":
          "linear-gradient(135deg, rgba(255,241,189,0.7) 0%, rgba(212,175,55,0.4) 50%, rgba(148,114,20,0.7) 100%)",
        "maroon-radial":
          "radial-gradient(circle at 50% 30%, var(--theme-wine, #3F0A1D) 0%, var(--theme-dark, #1A030C) 65%, var(--theme-darkest, #0B0205) 100%)",
        "royal-card":
          "linear-gradient(180deg, var(--theme-card-1, rgba(43,7,20,0.75)) 0%, var(--theme-card-2, rgba(20,3,10,0.85)) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
