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

  if (typeof window !== "undefined" && (window.innerWidth < 768 || "ontouchstart" in window)) {
    return null;
  }

  const handleOpen = () => {
    setIsOpening(true);
    if (withMusic && ambientAudio) {
      ambientAudio.play();
    }
    fireCelebrationConfetti();
    setTimeout(() => {
      onComplete();
    }, 350);
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
            scale: 0.98,
            transition: { duration: 0.35, ease: "easeOut" },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF5EB] bg-[radial-gradient(ellipse_at_center,_#FFFFFF_0%,_#FAF5EB_55%,_#EFE4D2_100%)] p-4 sm:p-6 overflow-hidden select-none will-change-[opacity,transform]"
        >
          {/* Subtle Ambient Golden Glows */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gold-400/15 blur-[120px] pointer-events-none -top-16 -left-16" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gold-300/20 blur-[130px] pointer-events-none -bottom-16 -right-16" />

          {/* Royal Ivory Frame Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-xl w-full p-6 sm:p-8 md:p-10 text-center rounded-3xl bg-[#FFFDF8] border-2 border-gold-400/60 shadow-[0_25px_70px_rgba(184,146,35,0.22)]"
          >
            {/* Ornate Corner Elements */}
            <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-gold-400 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-gold-400 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-gold-400 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-gold-400 rounded-br-lg" />

            {/* Sacred Om & Ganesha */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <OmMotif className="w-10 h-10 sm:w-12 sm:h-12" />
              <GaneshaMotif className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            {/* Shree Ganeshay Namah */}
            <div className="mb-1">
              <h2 className="font-royal text-[#8C570A] text-lg sm:text-2xl font-bold tracking-[0.2em] uppercase text-gold-glow break-keep">
                {t.ganeshMantra}
              </h2>
            </div>

            {/* Jay Swaminarayan */}
            <div className="mb-2">
              <p className="font-royal text-[#5C162A] text-sm sm:text-base font-semibold tracking-[0.25em] uppercase break-keep">
                {t.swaminarayanMantra}
              </p>
            </div>

            <GoldDivider className="my-3 max-w-xs mx-auto" />

            {/* Couple names invitation teaser */}
            <div className="my-3 sm:my-4 space-y-1">
              <p className="font-script text-[#8C570A] text-xl sm:text-2xl break-keep">
                {t.togetherFamilies}
              </p>
              <h1 className="font-serif italic font-bold text-3xl sm:text-5xl text-[#2A0612] py-1 break-keep">
                {t.coupleNames}
              </h1>
              <p className="font-sans text-xs sm:text-sm tracking-wide uppercase text-[#6D4F17] break-keep font-medium">
                {t.eventTitle}
              </p>
            </div>

            {/* Audio Choice Toggle */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <button
                type="button"
                onClick={() => setWithMusic(!withMusic)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-sans transition-colors border break-keep cursor-pointer ${
                  withMusic
                    ? "bg-gold-500/20 border-gold-400 text-[#6D4F17] font-semibold"
                    : "bg-[#F4EDE0] border-gold-400/40 text-[#8C570A]/70"
                }`}
              >
                <Music className="w-3.5 h-3.5 text-gold-600" />
                <span>{withMusic ? t.melodyEnabled : t.melodyMuted}</span>
              </button>
            </div>

            {/* Open Invitation CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={handleOpen}
                className="group w-full sm:w-auto relative px-8 py-3.5 rounded-full bg-gold-gradient text-royal-darkest font-sans font-bold text-xs sm:text-sm tracking-wide uppercase shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:shadow-[0_0_35px_rgba(255,228,133,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 break-keep cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-royal-darkest flex-shrink-0" />
                <span>{t.openInvitation}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </button>

              <button
                onClick={handleSkip}
                className="text-xs font-sans text-[#8C570A] hover:text-[#2A0612] underline underline-offset-4 transition-colors py-1 break-keep cursor-pointer"
              >
                {t.skipIntro}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
