"use client";

import React from "react";
import { motion } from "framer-motion";
import { EVENT_DETAILS } from "@/lib/event";
import { useLanguage } from "@/context/LanguageContext";
import { RoyalMonogram, GoldDivider } from "./Ornaments";
import { fireCelebrationConfetti } from "@/lib/celebrate";
import { ambientAudio } from "@/lib/audio";
import { Calendar, Clock, ChevronDown, Sparkles } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 text-center overflow-hidden">
      {/* Royal Background Mandala & Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <svg
          className="w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] text-gold-500 animate-spin-slow"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 200 200)`}>
              <path d="M200 30 C 190 70, 210 70, 200 110" stroke="currentColor" strokeWidth="0.6" />
              <circle cx="200" cy="30" r="3" fill="currentColor" opacity="0.6" />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Monogram Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 sm:mb-8"
        >
          <RoyalMonogram initials={EVENT_DETAILS.couple.monogram} />
        </motion.div>

        {/* Lead calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-2 sm:mb-3"
        >
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-gold-300 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] break-keep">
            {t.togetherFamilies}
          </p>
        </motion.div>

        {/* Centerpiece: The Couple's Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="relative my-2 sm:my-4 px-4 py-2"
        >
          <div className="absolute inset-0 bg-gold-500/5 blur-2xl rounded-full pointer-events-none" />
          <h1 className="font-serif italic font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-gold-gradient py-2 drop-shadow-[0_4px_30px_rgba(212,175,55,0.45)] break-keep">
            {t.coupleNames}
          </h1>
        </motion.div>

        {/* Event Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="space-y-1 mb-4 sm:mb-6"
        >
          <h2 className="font-royal text-lg sm:text-2xl md:text-3xl font-semibold tracking-[0.25em] uppercase text-gold-200 break-keep">
            {t.eventTitle}
          </h2>
          <p className="font-serif italic text-gold-300/80 text-sm sm:text-base break-keep max-w-lg mx-auto">
            {t.eventSubtitle}
          </p>
        </motion.div>

        <GoldDivider className="my-4 max-w-sm" />

        {/* Coordinated Date & Time Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 my-3 text-gold-100 text-sm sm:text-lg font-serif"
        >
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-royal-maroon/60 border border-gold-500/30 backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 flex-shrink-0" />
            <span className="font-semibold tracking-wide whitespace-nowrap break-keep">
              {t.day}, {t.dateFormatted}
            </span>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-royal-maroon/60 border border-gold-500/30 backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 flex-shrink-0" />
            <span className="font-semibold tracking-wide whitespace-nowrap break-keep">
              {t.time}
            </span>
          </div>
        </motion.div>

        {/* Interactive Celebrate Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-6 sm:mt-8"
        >
          <button
            onClick={() => {
              fireCelebrationConfetti();
              if (ambientAudio && !ambientAudio.getIsPlaying()) {
                ambientAudio.play();
              }
            }}
            className="group px-6 py-2.5 rounded-full bg-royal-wine/80 hover:bg-royal-deepRuby border border-gold-400/50 hover:border-gold-300 text-gold-200 hover:text-gold-100 text-xs sm:text-sm font-sans tracking-wide uppercase transition-all duration-300 flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400 group-hover:rotate-12 transition-transform" />
            <span className="break-keep">{t.showerBlessingsBtn}</span>
          </button>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gold-400/60 pointer-events-none"
      >
        <span className="text-[10px] sm:text-xs font-sans tracking-wide uppercase break-keep">
          {t.scrollExplore}
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-gold-400" />
      </motion.div>
    </section>
  );
}
