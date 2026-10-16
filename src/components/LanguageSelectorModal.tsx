"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";
import { fireCelebrationConfetti } from "@/lib/celebrate";
import { GaneshaMotif, OmMotif, GoldDivider } from "./Ornaments";
import { Sparkles, Globe } from "lucide-react";

export function LanguageSelectorModal() {
  const { hasChosenLanguage, setLanguage } = useLanguage();

  if (hasChosenLanguage) return null;

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    fireCelebrationConfetti();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="lang-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF5EB] bg-[radial-gradient(ellipse_at_center,_#FFFFFF_0%,_#FAF5EB_55%,_#EFE4D2_100%)] p-4 sm:p-6 overflow-y-auto select-none"
      >
        {/* Soft Ambient Golden Glows */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gold-400/15 blur-[120px] pointer-events-none -top-16 -left-16" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gold-300/20 blur-[130px] pointer-events-none -bottom-16 -right-16" />

        {/* Royal Ivory Modal Dialog Card */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: -15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-xl w-full p-6 sm:p-10 text-center rounded-3xl bg-[#FFFDF8] border-2 border-gold-400/60 shadow-[0_25px_70px_rgba(184,146,35,0.22)]"
        >
          {/* Corner Filigrees */}
          <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-gold-400 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-gold-400 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-gold-400 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-gold-400 rounded-br-lg" />

          {/* Sacred Icons */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <OmMotif className="w-10 h-10" />
            <GaneshaMotif className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <p className="font-sans text-[#8C570A] text-xs sm:text-sm uppercase tracking-wide font-semibold break-keep">
            શ્રી ગણેશાય નમઃ · Shree Ganeshay Namah
          </p>

          <GoldDivider className="my-4 max-w-xs mx-auto" />

          <h2 className="font-serif italic text-2xl sm:text-3xl font-bold text-[#2A0612] mb-1 break-keep">
            પસંદગીની ભાષા પસંદ કરો
          </h2>
          <p className="font-sans text-xs sm:text-sm tracking-wide text-[#8C570A] uppercase mb-6 break-keep">
            Choose Your Preferred Language
          </p>

          {/* Two Big Royal Language Selection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {/* GUJARATI CARD */}
            <button
              onClick={() => handleSelectLanguage("gu")}
              className="group relative p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#F7F0E3] border-2 border-gold-400/50 hover:border-gold-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_8px_25px_rgba(184,146,35,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-gold-400/20 border border-gold-400 flex items-center justify-center mb-3 shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                <span className="font-serif font-bold text-xl text-[#8C570A]">ગુ</span>
              </div>

              <span className="font-serif font-bold text-2xl text-[#2A0612] mb-1 break-keep">
                ગુજરાતી
              </span>
              <span className="text-xs font-sans text-[#5C162A] leading-relaxed break-keep">
                માંગલિક સગાઈ નિમંત્રણ પત્રિકા
              </span>

              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-sans tracking-wide text-[#8C570A] group-hover:text-[#2A0612] break-keep font-medium">
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0 text-gold-500" />
                <span>ગુજરાતીમાં જુઓ</span>
              </div>
            </button>

            {/* ENGLISH CARD */}
            <button
              onClick={() => handleSelectLanguage("en")}
              className="group relative p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#F7F0E3] border-2 border-gold-400/50 hover:border-gold-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_8px_25px_rgba(184,146,35,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-gold-400/20 border border-gold-400 flex items-center justify-center mb-3 shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                <Globe className="w-6 h-6 text-[#8C570A]" />
              </div>

              <span className="font-serif italic font-bold text-2xl text-[#2A0612] mb-1 break-keep">
                English
              </span>
              <span className="text-xs font-sans text-[#5C162A] leading-relaxed break-keep">
                Royal Engagement Invitation
              </span>

              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-sans tracking-wide text-[#8C570A] group-hover:text-[#2A0612] break-keep font-medium">
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0 text-gold-500" />
                <span>View in English</span>
              </div>
            </button>
          </div>

          <p className="font-sans text-xs text-[#8C570A]/80 mt-2 break-keep">
            You can also toggle between English and Gujarati anytime from the top bar.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
