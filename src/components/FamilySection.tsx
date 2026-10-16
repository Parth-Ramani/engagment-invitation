"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { GoldDivider, RoyalArchFrame } from "./Ornaments";
import { HeartHandshake } from "lucide-react";

export function FamilySection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <RoyalArchFrame className="text-center">
          {/* Traditional Toran / Auspicious Floral Top */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-gold-500/15 border border-gold-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <HeartHandshake className="w-7 h-7 text-gold-300" />
            </div>
          </div>

          <p className="font-script text-2xl sm:text-3xl text-gold-300 mb-1 break-keep">
            {t.inviterPrefix}
          </p>

          <GoldDivider className="my-4 max-w-xs mx-auto" />

          {/* Inviter Name */}
          <div className="my-5 space-y-2">
            <h2 className="font-serif italic font-bold text-3xl sm:text-5xl md:text-6xl text-gold-gradient tracking-tight drop-shadow-[0_4px_25px_rgba(212,175,55,0.4)] break-keep">
              {t.inviterName}
            </h2>

            {/* Ramani Family */}
            <p className="font-royal text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide uppercase text-gold-200 mt-3 break-keep">
              &amp; {t.familyName}
            </p>
          </div>

          <GoldDivider className="my-4 max-w-xs mx-auto" />

          {/* Traditional Warm Hospitality Subtext */}
          <p className="font-serif italic text-gold-300/90 text-base sm:text-lg max-w-lg mx-auto leading-relaxed mt-4 break-keep">
            &ldquo;{t.familySubtext}&rdquo;
          </p>
        </RoyalArchFrame>
      </motion.div>
    </section>
  );
}
