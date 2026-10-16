"use client";

import React, { useState, useEffect } from "react";
import { ambientAudio } from "@/lib/audio";
import { useLanguage } from "@/context/LanguageContext";
import { Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  embedded?: boolean;
}

export function AudioPlayer({ embedded = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setMounted(true);
    // Sync state
    if (ambientAudio) {
      setIsPlaying(ambientAudio.getIsPlaying());
    }
  }, []);

  const handleToggle = () => {
    if (!ambientAudio) return;
    const newState = ambientAudio.toggle();
    setIsPlaying(newState);
  };

  if (!mounted) return null;

  const containerClasses = embedded
    ? "relative"
    : "fixed top-3.5 right-3 sm:top-5 sm:right-6 z-50";

  return (
    <div className={containerClasses}>
      <button
        onClick={handleToggle}
        aria-label={
          isPlaying
            ? "Mute traditional ambient melody / મંગલ સૂર બંધ કરો"
            : "Play traditional ambient melody / મંગલ સૂર ચાલુ કરો"
        }
        className="group relative flex items-center gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-royal-dark/85 backdrop-blur-md border border-gold-400/40 text-gold-200 hover:text-gold-100 hover:border-gold-300 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
      >
        {isPlaying ? (
          <>
            {/* Animated Equalizer Waveform */}
            <div className="flex items-end gap-[3px] h-3.5 w-3.5 flex-shrink-0">
              <span className="w-1 bg-gold-400 rounded-full animate-[bounce_0.8s_ease-in-out_infinite] h-full" />
              <span className="w-1 bg-gold-300 rounded-full animate-[bounce_0.6s_ease-in-out_0.2s_infinite] h-3/4" />
              <span className="w-1 bg-gold-400 rounded-full animate-[bounce_1s_ease-in-out_0.1s_infinite] h-4/5" />
            </div>
            <span className="text-xs font-serif tracking-wider text-gold-300 hidden md:inline break-keep">
              {language === "gu" ? "મંગલ સૂર" : "Melody"}
            </span>
            <Volume2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-gold-400/70 group-hover:text-gold-300 transition-colors flex-shrink-0" />
            <span className="text-xs font-serif tracking-wider text-gold-400/80 group-hover:text-gold-200 hidden md:inline break-keep">
              {language === "gu" ? "મંગલ સૂર" : "Music"}
            </span>
          </>
        )}
      </button>
    </div>
  );
}
