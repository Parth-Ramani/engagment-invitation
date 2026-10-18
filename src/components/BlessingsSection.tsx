"use client";

import React from "react";
import { motion } from "framer-motion";
import { GaneshaMotif, OmMotif, RoyalArchFrame, GoldDivider, DiyaIcon, KalashIcon } from "./Ornaments";
import { useLanguage } from "@/context/LanguageContext";

export function BlessingsSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "150px 0px 0px 0px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <RoyalArchFrame className="text-center">
          {/* Sacred Diya & Kalash flanked on top */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 mb-4 sm:mb-6">
            <div className="flex flex-col items-center gap-1 opacity-80">
              <DiyaIcon className="w-7 h-7 sm:w-8 sm:h-8" />
              <span className="text-[10px] font-royal tracking-widest text-gold-400 uppercase">
                {language === "gu" ? "શુભ" : "Shubh"}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <OmMotif className="w-12 h-12 sm:w-14 sm:h-14" />
              <GaneshaMotif className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            <div className="flex flex-col items-center gap-1 opacity-80">
              <KalashIcon className="w-7 h-7 sm:w-8 sm:h-8" />
              <span className="text-[10px] font-royal tracking-widest text-gold-400 uppercase">
                {language === "gu" ? "લાભ" : "Laabh"}
              </span>
            </div>
          </div>

          {/* Shree Ganeshay Namah */}
          <h2 className="font-royal text-gold-300 text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase text-gold-glow mb-2 break-keep">
            {t.ganeshMantra}
          </h2>

          {/* Jay Swaminarayan */}
          <p className="font-royal text-gold-200 text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.25em] uppercase mb-4 break-keep">
            {t.swaminarayanMantra}
          </p>

          <GoldDivider className="my-5 max-w-xs mx-auto" />

          {/* Auspicious Shloka */}
          <div className="max-w-xl mx-auto px-4 py-3 rounded-2xl bg-royal-dark/50 border border-gold-500/20 text-center">
            <p className="font-serif text-gold-200 text-base sm:text-lg md:text-xl italic tracking-wide leading-relaxed break-keep">
              &ldquo;{t.sanskritShloka}&rdquo;
            </p>
            <p className="font-sans text-xs sm:text-sm text-gold-300/80 mt-2 font-light break-keep leading-relaxed">
              {t.shlokaTranslation}
            </p>
          </div>
        </RoyalArchFrame>
      </motion.div>
    </section>
  );
}
