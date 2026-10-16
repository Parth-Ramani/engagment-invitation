"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { EVENT_DETAILS } from "@/lib/event";
import { useLanguage } from "@/context/LanguageContext";
import { GoldDivider, RoyalArchFrame } from "./Ornaments";
import { MapPin, Navigation, Copy, Check, Car, Compass } from "lucide-react";

export function VenueSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(t.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <RoyalArchFrame className="text-center">
          <p className="font-script text-2xl sm:text-3xl text-gold-300 mb-1">
            {t.venueSectionSubtitle}
          </p>
          <h2 className="font-royal text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase text-gold-gradient mb-3">
            {t.venueSectionTitle}
          </h2>

          <GoldDivider className="my-5 max-w-xs mx-auto" />

          {/* Palace / Pavilion Architectural Illustration */}
          <div className="relative my-6 mx-auto max-w-md p-6 rounded-2xl bg-gradient-to-b from-royal-maroon/70 to-royal-darkest border border-gold-400/40 shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Background Arch SVG */}
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20 rounded-full bg-gold-500/10 border border-gold-400/50 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <MapPin className="w-10 h-10 text-gold-300 drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold-400 animate-ping" />
              </div>
            </div>

            {/* Venue Name */}
            <h3 className="font-serif italic text-3xl sm:text-4xl font-bold text-gold-gradient mb-1 break-keep">
              {t.venueName}
            </h3>
            <p className="font-sans text-sm sm:text-base text-gold-300/90 tracking-wide uppercase mb-4 break-keep">
              {t.venueSubName}
            </p>

            <div className="h-[1px] w-24 bg-gold-500/30 mx-auto my-3" />

            {/* Address */}
            <div className="space-y-1 text-gold-100 font-sans text-sm sm:text-base leading-relaxed my-4 break-keep">
              <p className="font-medium">{t.addressLine1}</p>
              <p className="font-medium">{t.addressLine2}</p>
            </div>

            {/* Key Amenities / Guidance tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5 text-[11px] font-sans uppercase tracking-wide text-gold-300/80">
              <span className="px-3 py-1 rounded-full bg-royal-dark/80 border border-gold-500/20 flex items-center gap-1.5 break-keep whitespace-nowrap">
                <Car className="w-3.5 h-3.5 text-gold-400" /> {t.valetParking}
              </span>
              <span className="px-3 py-1 rounded-full bg-royal-dark/80 border border-gold-500/20 flex items-center gap-1.5 break-keep whitespace-nowrap">
                <Compass className="w-3.5 h-3.5 text-gold-400" /> {t.easyAccess}
              </span>
            </div>
          </div>

          {/* Interactive Navigation & Copy Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Get Directions Link */}
            <a
              href={EVENT_DETAILS.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold-gradient text-royal-darkest font-sans font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(212,175,55,0.5)] break-keep"
            >
              <Navigation className="w-4 h-4 text-royal-darkest flex-shrink-0" />
              <span>{t.getDirectionsBtn}</span>
            </a>

            {/* Copy Address Button */}
            <button
              onClick={handleCopyAddress}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-royal-dark/80 hover:bg-royal-wine border border-gold-400/50 hover:border-gold-300 text-gold-200 font-sans font-medium text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 break-keep"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-gold-300 flex-shrink-0" />
                  <span>{t.addressCopiedBtn}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>{t.copyAddressBtn}</span>
                </>
              )}
            </button>
          </div>
        </RoyalArchFrame>
      </motion.div>
    </section>
  );
}
