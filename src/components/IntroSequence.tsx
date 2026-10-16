"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GaneshaMotif, GoldDivider, OmMotif } from "./Ornaments";
import { useLanguage } from "@/context/LanguageContext";
import { ambientAudio } from "@/lib/audio";
import { fireCelebrationConfetti } from "@/lib/celebrate";
import { Sparkles, ArrowRight, Music } from "lucide-react";

export function IntroSequence({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();
  const [withMusic, setWithMusic] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    if (withMusic && ambientAudio) {
      ambientAudio.play();
    }
    fireCelebrationConfetti();
    setTimeout(() => {
      onComplete();
    }, 900);
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          key="intro-curtain"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-radial-maroon p-4 sm:p-6 overflow-hidden select-none"
        >
          {/* Subtle Ambient Glowing Background circles */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[120px] pointer-events-none -top-20 -left-20 animate-pulse-subtle" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-royal-deepRuby/40 blur-[140px] pointer-events-none -bottom-20 -right-20 animate-pulse-subtle" />

          {/* Royal Frame Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-xl w-full p-6 sm:p-10 md:p-12 text-center rounded-3xl bg-royal-card/90 border border-gold-400/40 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.85)]"
          >
            {/* Ornate Corner Elements */}
            <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-gold-400/70 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-gold-400/70 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-gold-400/70 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-gold-400/70 rounded-br-lg" />

            {/* Sacred Om & Ganesha Reveal */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <OmMotif className="w-10 h-10 sm:w-12 sm:h-12" />
              <GaneshaMotif className="w-16 h-16 sm:w-20 sm:h-20" />
            </motion.div>

            {/* Step 5: Shree Ganeshay Namah */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="mb-1"
            >
              <h2 className="font-royal text-gold-300 text-lg sm:text-2xl font-bold tracking-[0.2em] uppercase text-gold-glow break-keep">
                {t.ganeshMantra}
              </h2>
            </motion.div>

            {/* Step 6: Jay Swaminarayan */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9 }}
              className="mb-4"
            >
              <p className="font-royal text-gold-200/90 text-sm sm:text-base font-semibold tracking-[0.25em] uppercase break-keep">
                {t.swaminarayanMantra}
              </p>
            </motion.div>

            <GoldDivider className="my-4 max-w-xs mx-auto" />

            {/* Couple names teaser */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="my-4 sm:my-6 space-y-1"
            >
              <p className="font-script text-gold-300 text-xl sm:text-2xl break-keep">
                {t.togetherFamilies}
              </p>
              <h1 className="font-serif italic font-bold text-3xl sm:text-5xl text-gold-gradient py-1 break-keep">
                {t.coupleNames}
              </h1>
              <p className="font-sans text-xs sm:text-sm tracking-wide uppercase text-gold-200/80 break-keep">
                {t.eventTitle}
              </p>
            </motion.div>

            {/* Audio Choice Toggle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <button
                type="button"
                onClick={() => setWithMusic(!withMusic)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-sans transition-colors border break-keep ${
                  withMusic
                    ? "bg-gold-500/20 border-gold-400 text-gold-200"
                    : "bg-royal-dark/60 border-gold-500/20 text-gold-400/60"
                }`}
              >
                <Music className="w-3.5 h-3.5" />
                <span>{withMusic ? t.melodyEnabled : t.melodyMuted}</span>
              </button>
            </motion.div>

            {/* Step 7: Open Invitation Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <button
                onClick={handleOpen}
                className="group w-full sm:w-auto relative px-8 py-3.5 rounded-full bg-gold-gradient text-royal-darkest font-sans font-bold text-xs sm:text-sm tracking-wide uppercase shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:shadow-[0_0_35px_rgba(255,228,133,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 break-keep"
              >
                <Sparkles className="w-4 h-4 text-royal-darkest flex-shrink-0" />
                <span>{t.openInvitation}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </button>

              <button
                onClick={handleSkip}
                className="text-xs font-sans text-gold-400/80 hover:text-gold-200 underline underline-offset-4 transition-colors py-2 break-keep"
              >
                {t.skipIntro}
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
