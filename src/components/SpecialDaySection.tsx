"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { GoldDivider } from "./Ornaments";
import { Sparkles } from "lucide-react";

export function SpecialDaySection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="relative p-6 sm:p-10 md:p-14 rounded-3xl bg-royal-card border border-gold-400/30 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        {/* Subtle Palace Architecture Silhouette */}
        <div className="absolute inset-x-0 bottom-0 h-28 opacity-10 pointer-events-none flex items-end justify-center overflow-hidden">
          <svg viewBox="0 0 800 120" className="w-full text-gold-400 fill-current">
            <path d="M0 120 V80 Q20 40 40 80 V120 M40 120 V60 Q70 20 100 60 V120 M100 120 V70 Q140 10 180 70 V120 M180 120 V50 Q220 0 260 50 V120 M260 120 V70 Q300 10 340 70 V120 M340 120 V50 Q400 0 460 50 V120 M460 120 V70 Q500 10 540 70 V120 M540 120 V50 Q580 0 620 50 V120 M620 120 V70 Q660 10 700 70 V120 M700 120 V60 Q730 20 760 60 V120 M760 120 V80 Q780 40 800 80 V120 Z" />
          </svg>
        </div>

        {/* Golden Intertwined Rings Symbol */}
        <div className="flex justify-center mb-5">
          <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Groom Ring */}
            <svg
              className="w-10 h-10 text-gold-400 absolute -left-1 transform -rotate-12 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
            </svg>
            {/* Bride Diamond Ring */}
            <svg
              className="w-10 h-10 text-gold-300 absolute -right-1 transform rotate-12 drop-shadow-[0_0_12px_rgba(255,228,133,0.8)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
              <polygon points="12,1 15,5 9,5" fill="#FFE89E" />
            </svg>
            <Sparkles className="w-4 h-4 text-gold-200 absolute -top-1 right-2 animate-ping" />
          </div>
        </div>

        {/* Section Heading */}
        <p className="font-script text-2xl sm:text-3xl text-gold-300 mb-1 break-keep">
          {t.specialDaySubtitle}
        </p>
        <h2 className="font-royal text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase text-gold-gradient mb-3 break-keep">
          {t.specialDayTitle}
        </h2>

        <GoldDivider className="my-5 max-w-xs mx-auto" />

        {/* Warm Heartfelt Copy */}
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-gold-100 leading-relaxed italic break-keep">
            &ldquo;{t.invitationQuote}&rdquo;
          </p>

          <p className="font-sans text-sm sm:text-base text-gold-200/80 leading-relaxed max-w-xl mx-auto break-keep">
            {t.specialDayBody}
          </p>
        </div>

        {/* Couple Names Sign-off */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-[1px] w-12 bg-gold-500/40" />
          <span className="font-serif italic text-xl sm:text-2xl text-gold-300 font-bold break-keep">
            {t.coupleNames}
          </span>
          <div className="h-[1px] w-12 bg-gold-500/40" />
        </div>
      </motion.div>
    </section>
  );
}
