"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, ThemeId } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { fireCelebrationConfetti } from "@/lib/celebrate";
import { Palette, Check, Sparkles, X, Sun, Moon } from "lucide-react";

interface ThemeColorPickerProps {
  embedded?: boolean;
}

export function ThemeColorPicker({ embedded = false }: ThemeColorPickerProps) {
  const { currentTheme, setTheme, themes } = useTheme();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectTheme = (id: ThemeId) => {
    setTheme(id);
    fireCelebrationConfetti();
    setIsOpen(false);
  };

  const lightThemes = themes.filter((t) => t.mode === "light");
  const darkThemes = themes.filter((t) => t.mode === "dark");

  const containerClasses = embedded
    ? "relative"
    : "fixed top-3.5 left-40 sm:top-5 sm:left-48 z-50";

  return (
    <div className={containerClasses}>
      {/* Palette Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Theme Color / થીમ કલર બદલો"
        className="group relative flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-royal-dark/85 backdrop-blur-md border border-gold-400/40 text-gold-200 hover:text-gold-100 hover:border-gold-300 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
      >
        <div
          className="w-3.5 h-3.5 rounded-full border border-gold-300 shadow-sm transition-transform group-hover:scale-110 flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.swatchPrimary} 0%, ${currentTheme.swatchAccent} 100%)`,
          }}
        />
        <Palette className="w-3.5 h-3.5 text-gold-300 flex-shrink-0" />
        <span className="text-xs font-serif tracking-wider text-gold-300/90 hidden md:inline break-keep">
          {language === "gu" ? "થીમ" : "Theme"}
        </span>
      </button>

      {/* Floating Theme Palette Dialog */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop click dismiss */}
            <div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-3 w-80 sm:w-96 rounded-2xl bg-royal-card/95 border-2 border-gold-400/60 backdrop-blur-2xl p-4 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.85)] z-50 text-left select-none max-h-[85vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-gold-500/20">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-300" />
                  <span className="font-royal text-xs font-bold text-gold-200 tracking-wider uppercase break-keep">
                    {language === "gu" ? "રાજવી થીમ કલર પસંદ કરો" : "Royal Color Themes"}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full text-gold-400 hover:text-gold-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Light Themes Section */}
              <div className="mt-4">
                <div className="flex items-center gap-1.5 mb-2 text-gold-300/90 text-xs font-royal uppercase tracking-wider font-semibold">
                  <Sun className="w-3.5 h-3.5 text-gold-400" />
                  <span>
                    {language === "gu" ? "લાઇટ થીમ (દિવસનો શુભ વૈભવ)" : "Light Themes (Royal Silk)"}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {lightThemes.map((theme) => {
                    const isSelected = currentTheme.id === theme.id;
                    return (
                      <button
                        key={theme.id}
                        onClick={() => handleSelectTheme(theme.id)}
                        className={`group w-full p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-between text-left ${
                          isSelected
                            ? "bg-gold-500/20 border-gold-300 shadow-[0_0_15px_rgba(212,175,55,0.35)]"
                            : "bg-royal-dark/60 border-gold-500/20 hover:border-gold-400/50 hover:bg-royal-dark"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-7 h-7 rounded-full border border-gold-400 flex items-center justify-center shadow-md relative overflow-hidden flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${theme.swatchPrimary} 0%, ${theme.swatchPrimary} 50%, ${theme.swatchAccent} 50%, ${theme.swatchAccent} 100%)`,
                            }}
                          />
                          <div>
                            <p className="font-serif italic text-sm font-bold text-gold-100 group-hover:text-gold-gradient break-keep">
                              {language === "gu" ? theme.nameGu : theme.nameEn}
                            </p>
                            <p className="text-[10px] font-sans text-gold-300/80 break-keep">
                              {language === "gu" ? theme.tagGu : theme.tagEn}
                            </p>
                          </div>
                        </div>

                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-gold-gradient flex items-center justify-center text-royal-darkest flex-shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dark Themes Section */}
              <div className="mt-5">
                <div className="flex items-center gap-1.5 mb-2 text-gold-300/90 text-xs font-royal uppercase tracking-wider font-semibold">
                  <Moon className="w-3.5 h-3.5 text-gold-400" />
                  <span>
                    {language === "gu" ? "ડાર્ક થીમ (રજવાડી મહેલ)" : "Dark Themes (Night Palace)"}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {darkThemes.map((theme) => {
                    const isSelected = currentTheme.id === theme.id;
                    return (
                      <button
                        key={theme.id}
                        onClick={() => handleSelectTheme(theme.id)}
                        className={`group w-full p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-between text-left ${
                          isSelected
                            ? "bg-gold-500/20 border-gold-300 shadow-[0_0_15px_rgba(212,175,55,0.35)]"
                            : "bg-royal-dark/60 border-gold-500/20 hover:border-gold-400/50 hover:bg-royal-dark"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-7 h-7 rounded-full border border-gold-400 flex items-center justify-center shadow-md relative overflow-hidden flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${theme.swatchPrimary} 0%, ${theme.swatchPrimary} 50%, ${theme.swatchAccent} 50%, ${theme.swatchAccent} 100%)`,
                            }}
                          />
                          <div>
                            <p className="font-serif italic text-sm font-bold text-gold-100 group-hover:text-gold-gradient break-keep">
                              {language === "gu" ? theme.nameGu : theme.nameEn}
                            </p>
                            <p className="text-[10px] font-sans text-gold-300/80 break-keep">
                              {language === "gu" ? theme.tagGu : theme.tagEn}
                            </p>
                          </div>
                        </div>

                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-gold-gradient flex items-center justify-center text-royal-darkest flex-shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
