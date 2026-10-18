"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EVENT_DETAILS } from "@/lib/event";
import { useLanguage } from "@/context/LanguageContext";
import { downloadIcsFile, getGoogleCalendarUrl } from "@/lib/calendar";
import { fireCelebrationConfetti } from "@/lib/celebrate";
import { GoldDivider, RoyalArchFrame } from "./Ornaments";
import { Calendar, Clock, Download, ExternalLink, Check } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

export function DateSection() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });
  const [calendarAdded, setCalendarAdded] = useState(false);

  useEffect(() => {
    // Event time in Asia/Kolkata: 2026-11-05T10:30:00+05:30
    const targetDate = new Date(EVENT_DETAILS.event.isoDateTime).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPassed: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isPassed: false,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadIcs = () => {
    downloadIcsFile();
    setCalendarAdded(true);
    fireCelebrationConfetti();
    setTimeout(() => setCalendarAdded(false), 4000);
  };

  const handleGoogleCalendar = () => {
    window.open(getGoogleCalendarUrl(), "_blank", "noopener,noreferrer");
    fireCelebrationConfetti();
  };

  const timeUnits = [
    { label: t.days, value: timeLeft.days },
    { label: t.hours, value: timeLeft.hours },
    { label: t.minutes, value: timeLeft.minutes },
    { label: t.seconds, value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "150px 0px 0px 0px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <RoyalArchFrame className="text-center">
          <p className="font-script text-2xl sm:text-3xl text-gold-300 mb-1">
            {t.dateSectionSubtitle}
          </p>
          <h2 className="font-royal text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase text-gold-gradient mb-3">
            {t.dateSectionTitle}
          </h2>

          <GoldDivider className="my-5 max-w-xs mx-auto" />

          {/* Majestic Date Display */}
          <div className="my-6 p-6 sm:p-8 rounded-2xl bg-royal-dark/60 border border-gold-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              {/* Day & Date */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] flex-shrink-0">
                  <Calendar className="w-6 h-6 text-gold-300" />
                </div>
                <div className="text-left">
                  <p className="font-sans text-xs uppercase tracking-wide text-gold-400 break-keep">
                    {t.dayDateLabel}
                  </p>
                  <p className="font-royal text-xl sm:text-2xl font-bold text-gold-100 break-keep">
                    {t.day}
                  </p>
                  <p className="font-serif italic text-2xl sm:text-3xl text-gold-gradient font-bold break-keep">
                    {t.dateFormatted}
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-16 w-[1px] bg-gold-500/30" />

              {/* Time */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold-300" />
                </div>
                <div className="text-left">
                  <p className="font-sans text-xs uppercase tracking-wide text-gold-400 break-keep">
                    {t.muhuratLabel}
                  </p>
                  <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-bold break-keep">
                    {t.time}
                  </p>
                  <p className="font-sans text-xs text-gold-300/80 break-keep">
                    {t.timeZoneNote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="my-8">
            <p className="font-sans text-xs sm:text-sm tracking-wide uppercase text-gold-300/90 mb-5 break-keep">
              {timeLeft.isPassed ? t.countdownPassed : t.countdownTitle}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto">
              {timeUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="relative p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-royal-maroon/90 to-royal-darkest border border-gold-400/40 shadow-[0_8px_25px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center"
                >
                  <div className="absolute top-1 left-2 w-1.5 h-1.5 rounded-full bg-gold-400/40" />
                  <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-gold-400/40" />
                  <span className="font-royal font-bold text-3xl sm:text-4xl md:text-5xl text-gold-gradient leading-none">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[11px] sm:text-xs tracking-wide uppercase text-gold-300/80 mt-2 break-keep whitespace-nowrap">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Calendar Action Buttons */}
          <div className="mt-8 pt-6 border-t border-gold-500/20">
            <p className="font-serif italic text-gold-300 text-sm sm:text-base mb-4 break-keep">
              {t.calendarPrompt}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              {/* Google Calendar Link */}
              <button
                onClick={handleGoogleCalendar}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gold-500/20 hover:bg-gold-500/30 border border-gold-400/60 hover:border-gold-300 text-gold-100 font-sans text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.4)] break-keep"
              >
                <ExternalLink className="w-4 h-4 text-gold-300" />
                <span>{t.googleCalendarBtn}</span>
              </button>

              {/* Download .ics file */}
              <button
                onClick={handleDownloadIcs}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gold-gradient hover:opacity-95 text-royal-darkest font-sans font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] break-keep"
              >
                {calendarAdded ? (
                  <>
                    <Check className="w-4 h-4 text-royal-darkest" />
                    <span>{t.calendarAddedBtn}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-royal-darkest" />
                    <span>{t.icsCalendarBtn}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </RoyalArchFrame>
      </motion.div>
    </section>
  );
}
