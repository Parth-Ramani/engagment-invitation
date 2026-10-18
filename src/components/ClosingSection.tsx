"use client";

import React from "react";
import { motion } from "framer-motion";
import { EVENT_DETAILS } from "@/lib/event";
import { useLanguage } from "@/context/LanguageContext";
import { RoyalMonogram, GoldDivider } from "./Ornaments";
import { fireCelebrationConfetti } from "@/lib/celebrate";
import { Sparkles, ArrowUp } from "lucide-react";

export function ClosingSection() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-16 px-4 sm:px-6 text-center overflow-hidden border-t border-gold-500/20 bg-gradient-to-b from-transparent via-royal-maroon/40 to-royal-darkest">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Monogram Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "150px 0px 0px 0px" }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <RoyalMonogram initials={EVENT_DETAILS.couple.monogram} />
        </motion.div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "150px 0px 0px 0px" }}
          transition={{ duration: 0.4 }}
          className="space-y-3 mb-6"
        >
          <p className="font-script text-3xl sm:text-4xl md:text-5xl text-gold-300 drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)] break-keep">
            &ldquo;{t.closingQuote}&rdquo;
          </p>
          <p className="font-sans text-xs sm:text-sm uppercase tracking-wide text-gold-300/80 font-light break-keep max-w-lg mx-auto">
            {t.closingSubquote}
          </p>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "150px 0px 0px 0px" }}
          transition={{ duration: 0.4 }}
          className="my-3"
        >
          <h2 className="font-serif italic font-bold text-4xl sm:text-6xl md:text-7xl text-gold-gradient py-2 break-keep">
            {t.coupleNames}
          </h2>
        </motion.div>

        <GoldDivider className="my-6 max-w-sm" />

        {/* Closing Event Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "150px 0px 0px 0px" }}
          transition={{ duration: 0.4 }}
          className="space-y-2 text-gold-200 font-serif"
        >
          <p className="text-lg sm:text-xl font-bold tracking-wide break-keep">
            {t.day}, {t.dateFormatted} · {t.time}
          </p>
          <p className="text-base sm:text-lg text-gold-300/90 font-medium break-keep">
            {t.venueName}, Junagadh, Gujarat
          </p>
        </motion.div>

        {/* Celebration Confetti Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "150px 0px 0px 0px" }}
          transition={{ duration: 0.4 }}
          className="mt-8 mb-12"
        >
          <button
            onClick={fireCelebrationConfetti}
            className="group px-8 py-3.5 rounded-full bg-gold-gradient text-royal-darkest font-sans font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2.5 shadow-[0_0_25px_rgba(212,175,55,0.6)] break-keep"
          >
            <Sparkles className="w-4 h-4 text-royal-darkest flex-shrink-0" />
            <span>{t.celebrateWithUsBtn}</span>
          </button>
        </motion.div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-gold-500/15 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-gold-400/70">
          <p className="flex items-center gap-1.5 font-serif text-sm text-gold-300/90 break-keep">
            <span>{t.withComplimentsLabel}</span>
            <strong className="text-gold-200">{t.complimentsName}</strong>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-gold-200 transition-colors uppercase tracking-wide text-[11px] font-sans py-1 px-3 rounded-full hover:bg-gold-500/10 border border-transparent hover:border-gold-500/20 break-keep"
          >
            <span>{t.backToTopBtn}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
