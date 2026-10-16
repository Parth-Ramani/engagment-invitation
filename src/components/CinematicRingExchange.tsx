"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { fireCelebrationConfetti } from "@/lib/celebrate";
import { GoldDivider, RoyalArchFrame } from "./Ornaments";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  Film,
  Info,
  CheckCircle2,
  Crown,
  Gem,
} from "lucide-react";

export type ShootStyle = "traditional" | "modern";

interface ClipConfig {
  id: "groom" | "bride";
  shootStyle: ShootStyle;
  videoSrc: string;
  posterSrc: string;
  titleEn: string;
  titleGu: string;
  subtitleEn: string;
  subtitleGu: string;
  descriptionEn: string;
  descriptionGu: string;
}

const SHOOTS: Record<ShootStyle, ClipConfig[]> = {
  traditional: [
    {
      id: "groom",
      shootStyle: "traditional",
      videoSrc: "/videos/groom-traditional-places-ring.mp4",
      posterSrc: "/images/groom-traditional-places-ring-poster.jpg",
      titleEn: "Parth Places The Ring (Traditional)",
      titleGu: "પાર્થ દ્વારા મુદ્રિકા અર્પણ (રજવાડી શેરવાની)",
      subtitleEn: "Groom in Ivory Embroidered Sherwani & Safa · Diamond Solitaire",
      subtitleGu: "રજવાડી શેરવાની અને સાફામાં વરરાજા પાર્થ · ડાયમંડ રિંગ",
      descriptionEn:
        "In timeless Gujarati royal heritage attire, Parth places the sacred diamond engagement ring onto Ankita's henna-adorned hand.",
      descriptionGu:
        "પરંપરાગત રજવાડી શેરવાની અને સાફામાં સજ્જ પાર્થ દ્વારા અંકિતાના કરકમળમાં પવિત્ર મુદ્રિકા અર્પણ કરવાનો મંગલ અવસર.",
    },
    {
      id: "bride",
      shootStyle: "traditional",
      videoSrc: "/videos/bride-traditional-places-ring.mp4",
      posterSrc: "/images/bride-traditional-places-ring-poster.jpg",
      titleEn: "Ankita Exchanges The Ring (Traditional)",
      titleGu: "અંકિતા દ્વારા મુદ્રિકા અર્પણ (પાનેતર રજવાડી)",
      subtitleEn: "Bride in Gujarati Panetar & Gharchola Silk · Gold Band",
      subtitleGu: "ગુજરાતી પાનેતર અને રજવાડી ઘરેણાંમાં કન્યા અંકિતા · સુવર્ણ રિંગ",
      descriptionEn:
        "Adorned in classic Gujarati Panetar silk and royal kundan jewelry, Ankita gently slides the wedding band onto Parth's hand.",
      descriptionGu:
        "શુભ પાનેતર અને રજવાડી ઘરેણાંમાં શોભતી કન્યા અંકિતા દ્વારા પાર્થની આંગળીમાં મંગલ મુદ્રિકા ધારણ કરવાનો પાવન ક્ષણ.",
    },
  ],
  modern: [
    {
      id: "groom",
      shootStyle: "modern",
      videoSrc: "/videos/groom-places-ring.mp4",
      posterSrc: "/images/groom-places-ring-poster.jpg",
      titleEn: "Parth Places The Ring (Royal Tuxedo)",
      titleGu: "પાર્થ દ્વારા મુદ્રિકા અર્પણ (રોયલ ટક્સીડો)",
      subtitleEn: "Groom in Black Tuxedo · Diamond Solitaire Ring",
      subtitleGu: "શાહી ટક્સીડો સૂટમાં વરરાજા પાર્થ · ડાયમંડ સોલિટેર રિંગ",
      descriptionEn:
        "A sacred vow of love and protection as Parth gently slides the engagement ring onto Ankita's finger.",
      descriptionGu:
        "પાર્થ દ્વારા અંકિતાની આંગળીમાં સ્નેહ અને સમર્પણની પવિત્ર મુદ્રિકા ધારણ કરવાનો મંગલ અવસર.",
    },
    {
      id: "bride",
      shootStyle: "modern",
      videoSrc: "/videos/bride-places-ring.mp4",
      posterSrc: "/images/bride-places-ring-poster.jpg",
      titleEn: "Ankita Exchanges The Ring (Designer Lehenga)",
      titleGu: "અંકિતા દ્વારા મુદ્રિકા અર્પણ (જરદોશી લહેંગા)",
      subtitleEn: "Bride in Crimson Zari Lehenga · Platinum Band",
      subtitleGu: "જરદોશી લાલ લહેંગામાં કન્યા અંકિતા · પ્લેટિનમ & ગોલ્ડ રિંગ",
      descriptionEn:
        "With grace and joy, Ankita places the wedding band on Parth's hand, uniting two hearts forever.",
      descriptionGu:
        "અંકિતા દ્વારા પાર્થના કરકમળમાં પવિત્ર મુદ્રિકા પહેરાવી આજીવન સાથ નિભાવવાનું વચન.",
    },
  ],
};

/* --------------------------------------------------------------------------
   Animated Luxury Ring Box Card Component (Flanking Left & Right)
   -------------------------------------------------------------------------- */
interface RingBoxCardProps {
  person: "groom" | "bride";
  isActive: boolean;
  onClick: () => void;
  language: "en" | "gu";
  variant?: "desktop" | "mobile";
}

function RingBoxSideCard({
  person,
  isActive,
  onClick,
  language,
  variant = "desktop",
}: RingBoxCardProps) {
  const isGroom = person === "groom";
  const imageSrc = isGroom
    ? "/images/groom-ring-box.jpg"
    : "/images/bride-ring-box.jpg";

  const title = isGroom
    ? language === "gu"
      ? "પાર્થની મુદ્રિકા"
      : "Parth's Ring"
    : language === "gu"
    ? "અંકિતાની મુદ્રિકા"
    : "Ankita's Ring";

  const subtitle = isGroom
    ? language === "gu"
      ? "શાહી વેલ્વેટ બોક્સ · ડાયમંડ"
      : "Emerald Velvet · Diamond Band"
    : language === "gu"
    ? "રૂબી વેલ્વેટ બોક્સ · સોલિટેર"
    : "Ruby Velvet · Solitaire Ring";

  const tag = isGroom
    ? language === "gu"
      ? "વરરાજાની રિંગ"
      : "Groom's Ring"
    : language === "gu"
    ? "કન્યાની રિંગ"
    : "Bride's Ring";

  const floatAnimation = isGroom
    ? {
        y: [-7, 7, -7],
        rotate: [-1.5, 1.5, -1.5],
      }
    : {
        y: [7, -7, 7],
        rotate: [1.5, -1.5, 1.5],
      };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      animate={floatAnimation}
      transition={{
        duration: isGroom ? 5 : 5.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative text-left rounded-3xl transition-all duration-500 overflow-hidden select-none cursor-pointer ${
        variant === "desktop"
          ? "w-56 2xl:w-64 p-3.5 bg-royal-card/90 border-2 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-md"
          : "w-full p-2.5 sm:p-3 bg-royal-card/90 border-2 shadow-[0_10px_25px_rgba(0,0,0,0.3)] backdrop-blur-md"
      } ${
        isActive
          ? "border-gold-300 shadow-[0_0_30px_rgba(212,175,55,0.45)] ring-2 ring-gold-400/40"
          : "border-gold-500/30 hover:border-gold-400/70"
      }`}
    >
      {/* Background radial glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          isActive
            ? "opacity-35 bg-radial from-gold-400/30 via-transparent to-transparent"
            : "opacity-10 group-hover:opacity-25 bg-radial from-gold-400/20 via-transparent to-transparent"
        }`}
      />

      {/* Top Header Tag */}
      <div className="flex items-center justify-between gap-1 mb-2">
        <span
          className={`px-2 py-0.5 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider flex items-center gap-1 ${
            isActive
              ? "bg-gold-gradient text-royal-darkest shadow-sm"
              : "bg-royal-dark/80 text-gold-300/90 border border-gold-500/30"
          }`}
        >
          <Gem className="w-2.5 h-2.5 flex-shrink-0" />
          <span className="break-keep">{tag}</span>
        </span>

        {isActive && (
          <span className="flex items-center gap-1 text-[10px] text-gold-300 font-sans font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
            <span className="break-keep">{language === "gu" ? "સક્રિય" : "Active"}</span>
          </span>
        )}
      </div>

      {/* Ring Box 3D Photographic Showcase Frame */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-gold-400/40 shadow-inner bg-black/40">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Shimmer sweep on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

        {/* Pulsing diamond sparkle at corner */}
        <div className="absolute bottom-2 right-2 p-1 rounded-full bg-black/60 border border-gold-400/60 backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5 text-gold-300 animate-pulse" />
        </div>
      </div>

      {/* Title & Description Below Image */}
      <div className="mt-2.5">
        <h4 className="font-serif italic font-bold text-sm sm:text-base text-gold-100 group-hover:text-gold-gradient break-keep leading-snug">
          {title}
        </h4>
        <p className="font-sans text-[10px] sm:text-xs text-gold-300/80 break-keep mt-0.5 line-clamp-1">
          {subtitle}
        </p>
      </div>

      {/* Interactive CTA indicator */}
      <div className="mt-2 pt-2 border-t border-gold-500/20 flex items-center justify-between text-[10px] font-sans text-gold-400 group-hover:text-gold-200">
        <span className="break-keep">
          {language === "gu" ? "ક્લિક કરી જુઓ" : "Tap to View"}
        </span>
        <span className="text-gold-300 group-hover:translate-x-0.5 transition-transform">
          ➜
        </span>
      </div>
    </motion.button>
  );
}

/* --------------------------------------------------------------------------
   Main Cinematic Ring Exchange Section
   -------------------------------------------------------------------------- */
export function CinematicRingExchange() {
  const { language } = useLanguage();
  const [shootStyle, setShootStyle] = useState<ShootStyle>("traditional");
  const [activeClipIndex, setActiveClipIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoHasError, setVideoHasError] = useState<{ [key: string]: boolean }>({});
  const [showPromptGuide, setShowPromptGuide] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activeClips = SHOOTS[shootStyle];
  const activeClip = activeClips[activeClipIndex] || activeClips[0];

  // When switching clips or shoot style, restart video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [shootStyle, activeClipIndex]);

  // Handle video end -> sequence smoothly to the next clip
  const handleVideoEnded = () => {
    fireCelebrationConfetti();
    if (activeClipIndex === 0) {
      setActiveClipIndex(1);
    } else {
      setActiveClipIndex(0);
    }
  };

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleReplay = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
    fireCelebrationConfetti();
  };

  const handleVideoError = (clipKey: string) => {
    setVideoHasError((prev) => ({ ...prev, [clipKey]: true }));
  };

  const videoKey = `${shootStyle}-${activeClip.id}`;
  const isCurrentVideoMissing = videoHasError[videoKey];

  const handleSelectGroom = () => {
    setActiveClipIndex(0);
    fireCelebrationConfetti();
  };

  const handleSelectBride = () => {
    setActiveClipIndex(1);
    fireCelebrationConfetti();
  };

  return (
    <section className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <RoyalArchFrame className="text-center overflow-hidden">
          {/* Section Header */}
          <div className="mb-2">
            <span className="font-script text-2xl sm:text-3xl text-gold-300 break-keep">
              {language === "gu" ? "મંગલ મુદ્રિકા મહોત્સવ" : "Cinematic Ring Ceremony"}
            </span>
            <h2 className="font-royal text-2xl sm:text-4xl font-bold tracking-[0.2em] uppercase text-gold-gradient mt-1 break-keep">
              {language === "gu"
                ? "પવિત્ર રિંગ સેરેમની ક્ષણો"
                : "The Sacred Ring Exchange"}
            </h2>
            <p className="font-serif italic text-gold-200/90 text-sm sm:text-base mt-2 max-w-xl mx-auto break-keep leading-relaxed">
              {language === "gu"
                ? "બે આત્માઓ, બે પરિવારો અને આજીવન સમર્પણનું દૈવી મંગલ મિલન"
                : "Photorealistic cinematic capture of Parth and Ankita exchanging their rings"}
            </p>
          </div>

          <GoldDivider className="my-5 max-w-xs mx-auto" />

          {/* 1. Shoot Style Selector (Traditional Heritage vs Modern Royal) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-5">
            <button
              onClick={() => {
                setShootStyle("traditional");
                fireCelebrationConfetti();
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 flex items-center gap-2 border break-keep ${
                shootStyle === "traditional"
                  ? "bg-gold-gradient text-royal-darkest font-bold border-gold-300 shadow-[0_0_20px_rgba(212,175,55,0.55)] scale-105"
                  : "bg-royal-dark/80 text-gold-300/80 border-gold-500/30 hover:border-gold-400 hover:text-gold-100"
              }`}
            >
              <Crown className="w-4 h-4 text-amber-400" />
              <span>
                {language === "gu"
                  ? "પરંપરાગત રજવાડી શૂટ (શેરવાની & પાનેતર)"
                  : "Traditional Heritage Shoot (Sherwani & Panetar)"}
              </span>
            </button>

            <button
              onClick={() => {
                setShootStyle("modern");
                fireCelebrationConfetti();
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 flex items-center gap-2 border break-keep ${
                shootStyle === "modern"
                  ? "bg-gold-gradient text-royal-darkest font-bold border-gold-300 shadow-[0_0_20px_rgba(212,175,55,0.55)] scale-105"
                  : "bg-royal-dark/80 text-gold-300/80 border-gold-500/30 hover:border-gold-400 hover:text-gold-100"
              }`}
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>
                {language === "gu"
                  ? "રોયલ ટક્સીડો શૂટ (ટક્સીડો & લહેંગા)"
                  : "Modern Royal Shoot (Tuxedo & Lehenga)"}
              </span>
            </button>
          </div>

          {/* 2. Sequential Clip Selector Tabs (Parth vs Ankita) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
            {activeClips.map((clip, idx) => {
              const isActive = activeClipIndex === idx;
              return (
                <button
                  key={`${clip.shootStyle}-${clip.id}`}
                  onClick={() => setActiveClipIndex(idx)}
                  className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-sans font-medium tracking-wide transition-all duration-300 flex items-center gap-2 border break-keep ${
                    isActive
                      ? "bg-gold-500/25 text-gold-100 font-bold border-gold-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-102"
                      : "bg-royal-dark/60 text-gold-300/80 border-gold-500/20 hover:border-gold-400 hover:text-gold-100"
                  }`}
                >
                  <Film className="w-3.5 h-3.5 text-gold-400" />
                  <span>
                    {language === "gu" ? clip.titleGu : clip.titleEn}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                  )}
                </button>
              );
            })}
          </div>

          {/* 3. Mobile/Tablet Twin Animated Ring Boxes (Visible on screens < xl) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto mb-5 xl:hidden">
            <RingBoxSideCard
              person="groom"
              isActive={activeClipIndex === 0}
              onClick={handleSelectGroom}
              language={language}
              variant="mobile"
            />
            <RingBoxSideCard
              person="bride"
              isActive={activeClipIndex === 1}
              onClick={handleSelectBride}
              language={language}
              variant="mobile"
            />
          </div>

          {/* 4. Main Video Arena flanked by Animated Side Ring Boxes (Desktop xl view) */}
          <div className="relative mx-auto w-full flex items-center justify-center gap-4 xl:gap-8 my-2">
            
            {/* LEFT SIDE: Groom's Animated Velvet Ring Box */}
            <div className="hidden xl:flex flex-col items-center flex-shrink-0">
              <RingBoxSideCard
                person="groom"
                isActive={activeClipIndex === 0}
                onClick={handleSelectGroom}
                language={language}
                variant="desktop"
              />
            </div>

            {/* CENTER: Cinematic Video Player Container */}
            <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-royal-darkest border-2 border-gold-400/40 shadow-[0_25px_70px_rgba(0,0,0,0.85)] aspect-video flex items-center justify-center group flex-grow">
              {/* Background Video Element */}
              <video
                ref={videoRef}
                key={activeClip.videoSrc}
                src={activeClip.videoSrc}
                poster={activeClip.posterSrc}
                playsInline
                muted={isMuted}
                autoPlay
                onEnded={handleVideoEnded}
                onError={() => handleVideoError(videoKey)}
                className="w-full h-full object-cover"
              />

              {/* If video file does not exist yet on disk, show photorealistic poster with graceful badge */}
              {isCurrentVideoMissing && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-between p-4 sm:p-8 bg-gradient-to-t from-royal-darkest/95 via-transparent to-royal-darkest/80 pointer-events-none">
                  <div className="w-full flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-royal-dark/90 border border-gold-400/50 text-gold-300 text-[11px] font-sans uppercase tracking-wider backdrop-blur-md shadow-lg flex items-center gap-1.5 break-keep">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                      <span>
                        {shootStyle === "traditional"
                          ? language === "gu"
                            ? "પરંપરાગત રજવાડી પ્રિવ્યૂ (8K)"
                            : "Traditional Heritage Preview (8K)"
                          : language === "gu"
                          ? "મોડર્ન રોયલ પ્રિવ્યૂ (8K)"
                          : "Modern Royal Preview (8K)"}
                      </span>
                    </span>

                    <button
                      onClick={() => setShowPromptGuide(true)}
                      className="pointer-events-auto px-3 py-1 rounded-full bg-gold-500/20 hover:bg-gold-500/30 border border-gold-400 text-gold-200 text-xs font-serif flex items-center gap-1.5 backdrop-blur-md transition-colors break-keep"
                    >
                      <Info className="w-3.5 h-3.5 text-gold-300" />
                      <span>{language === "gu" ? "વિડિયો ગાઇડ" : "Video Guide"}</span>
                    </button>
                  </div>

                  <div className="text-center max-w-lg mb-2">
                    <p className="font-serif italic text-lg sm:text-2xl text-gold-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] break-keep leading-relaxed">
                      {language === "gu" ? activeClip.descriptionGu : activeClip.descriptionEn}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-gold-300/80 mt-1 break-keep">
                      Drop <code className="text-gold-200 bg-royal-maroon/80 px-2 py-0.5 rounded border border-gold-500/40">{activeClip.videoSrc}</code> to view full 60fps motion
                    </p>
                  </div>
                </div>
              )}

              {/* Video Controls Bar Overlay */}
              <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 z-20 flex items-center justify-between p-2.5 sm:p-3.5 rounded-2xl bg-royal-card/85 border border-gold-400/40 backdrop-blur-md opacity-90 group-hover:opacity-100 transition-opacity">
                {/* Play / Pause Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="p-2 rounded-full bg-gold-gradient text-royal-darkest hover:scale-105 active:scale-95 transition-transform shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>

                  <button
                    onClick={handleReplay}
                    aria-label="Replay clip"
                    className="p-2 rounded-full bg-royal-dark hover:bg-royal-wine border border-gold-500/30 text-gold-300 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    className="p-2 rounded-full bg-royal-dark hover:bg-royal-wine border border-gold-500/30 text-gold-300 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Clip Title & Sequence Progress */}
                <div className="text-right hidden sm:block">
                  <p className="font-serif italic text-gold-200 text-sm font-bold break-keep">
                    {language === "gu" ? activeClip.titleGu : activeClip.titleEn}
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-wide text-gold-400 break-keep">
                    {language === "gu" ? activeClip.subtitleGu : activeClip.subtitleEn}
                  </p>
                </div>

                {/* Next Clip Switcher */}
                <button
                  onClick={() =>
                    setActiveClipIndex((prev) => (prev === 0 ? 1 : 0))
                  }
                  className="px-3.5 py-1.5 rounded-full bg-gold-500/20 hover:bg-gold-500/30 border border-gold-400/60 text-gold-200 text-xs font-sans tracking-wide transition-colors flex items-center gap-1.5 break-keep"
                >
                  <span>
                    {activeClipIndex === 0
                      ? language === "gu"
                        ? "અંકિતાનું દ્રશ્ય ➜"
                        : "Next: Ankita ➜"
                      : language === "gu"
                      ? "પાર્થનું દ્રશ્ય ➜"
                      : "Next: Parth ➜"}
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: Bride's Animated Velvet Ring Box */}
            <div className="hidden xl:flex flex-col items-center flex-shrink-0">
              <RingBoxSideCard
                person="bride"
                isActive={activeClipIndex === 1}
                onClick={handleSelectBride}
                language={language}
                variant="desktop"
              />
            </div>
          </div>

          {/* Description Caption Card Below Video */}
          <div className="mt-6 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-royal-dark/60 border border-gold-500/30 text-center">
            <h3 className="font-serif italic text-xl sm:text-2xl font-bold text-gold-gradient mb-1 break-keep">
              {language === "gu" ? activeClip.titleGu : activeClip.titleEn}
            </h3>
            <p className="font-sans text-xs uppercase tracking-wide text-gold-400 mb-2 break-keep">
              {language === "gu" ? activeClip.subtitleGu : activeClip.subtitleEn}
            </p>
            <p className="font-sans text-sm text-gold-200/90 leading-relaxed break-keep">
              {language === "gu"
                ? activeClip.descriptionGu
                : activeClip.descriptionEn}
            </p>
          </div>

          {/* AI Generation Guide Modal */}
          <AnimatePresence>
            {showPromptGuide && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              >
                <div className="relative max-w-xl w-full p-6 sm:p-8 rounded-3xl bg-royal-card border border-gold-400 text-left shadow-2xl max-h-[90vh] overflow-y-auto">
                  <h3 className="font-royal text-lg sm:text-xl font-bold text-gold-300 uppercase tracking-wider mb-2 break-keep">
                    How to Add Your AI Video Clips
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gold-200/90 mb-4 break-keep">
                    Generate photorealistic video clips using Runway Gen-3, Luma Dream Machine, Kling AI, or Hailuo Minimax:
                  </p>

                  <div className="space-y-3 text-xs font-sans text-gold-100">
                    <div className="p-3 rounded-xl bg-royal-dark border border-gold-500/30">
                      <p className="font-bold text-gold-300 mb-1">
                        1. Traditional Shoot Groom: <code className="text-gold-200">/public/videos/groom-traditional-places-ring.mp4</code>
                      </p>
                      <p className="text-gold-200/80 italic">
                        Prompt: &quot;Cinematic slow motion 4k: An Indian groom dressed in a luxurious royal ivory and gold embroidered sherwani and royal turban (safa) placing a diamond engagement ring on the mehendi-adorned hand of an Indian bride wearing traditional Gujarati Panetar and Gharchola lehenga, marigold and rose petals falling, warm temple chandelier lighting.&quot;
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-royal-dark border border-gold-500/30">
                      <p className="font-bold text-gold-300 mb-1">
                        2. Traditional Shoot Bride: <code className="text-gold-200">/public/videos/bride-traditional-places-ring.mp4</code>
                      </p>
                      <p className="text-gold-200/80 italic">
                        Prompt: &quot;Cinematic slow motion 4k: An Indian bride in classic red and white Gujarati Panetar silk lehenga and gold kundan jewelry placing a gold engagement band on the groom&apos;s finger, delicate henna details, bokeh lights, royal Indian wedding palace.&quot;
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-royal-dark border border-gold-500/30">
                      <p className="font-bold text-gold-300 mb-1">
                        3. Modern Shoot Groom: <code className="text-gold-200">/public/videos/groom-places-ring.mp4</code>
                      </p>
                      <p className="text-gold-200/80 italic">
                        Prompt: &quot;Cinematic slow motion 4k: An Indian groom in black tuxedo placing diamond ring on bride wearing crimson zari lehenga.&quot;
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-royal-dark border border-gold-500/30">
                      <p className="font-bold text-gold-300 mb-1">
                        4. Modern Shoot Bride: <code className="text-gold-200">/public/videos/bride-places-ring.mp4</code>
                      </p>
                      <p className="text-gold-200/80 italic">
                        Prompt: &quot;Cinematic slow motion 4k: An Indian bride placing platinum ring on groom&apos;s finger.&quot;
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[11px] text-gold-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Place in <code className="text-gold-200">public/videos/</code>
                    </span>
                    <button
                      onClick={() => setShowPromptGuide(false)}
                      className="px-5 py-2 rounded-full bg-gold-gradient text-royal-darkest font-sans font-bold text-xs uppercase"
                    >
                      Close Guide
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </RoyalArchFrame>
      </motion.div>
    </section>
  );
}
