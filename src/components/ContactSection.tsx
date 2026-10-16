"use client";

import React from "react";
import { motion } from "framer-motion";
import { EVENT_DETAILS } from "@/lib/event";
import { useLanguage } from "@/context/LanguageContext";
import { GoldDivider, RoyalArchFrame } from "./Ornaments";
import { Phone, MessageCircle } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/919737559903?text=${encodeURIComponent(
    t.whatsappText
  )}`;

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <RoyalArchFrame className="text-center">
          <p className="font-script text-2xl sm:text-3xl text-gold-300 mb-1 break-keep">
            {t.contactSectionSubtitle}
          </p>
          <h2 className="font-royal text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase text-gold-gradient mb-3 break-keep">
            {t.contactSectionTitle}
          </h2>

          <GoldDivider className="my-5 max-w-xs mx-auto" />

          <p className="font-serif italic text-gold-200/90 text-base sm:text-lg max-w-md mx-auto mb-6 break-keep leading-relaxed">
            {t.contactPrompt}
          </p>

          {/* Contact Card */}
          <div className="max-w-md mx-auto p-6 sm:p-8 rounded-2xl bg-royal-dark/60 border border-gold-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <p className="font-sans text-xs uppercase tracking-wide text-gold-400 mb-2 break-keep">
              {t.directContactLabel}
            </p>
            <p className="font-serif italic text-3xl sm:text-4xl font-bold text-gold-gradient tracking-wide mb-6 break-keep">
              {t.phoneNumber}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              {/* Tap to Call */}
              <a
                href={`tel:${EVENT_DETAILS.contact.phoneTel}`}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gold-gradient text-royal-darkest font-sans font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] break-keep"
              >
                <Phone className="w-4 h-4 text-royal-darkest flex-shrink-0" />
                <span>{t.callDirectlyBtn}</span>
              </a>

              {/* WhatsApp message */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-gold-100 font-sans font-medium text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 break-keep"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>{t.whatsappMessageBtn}</span>
              </a>
            </div>
          </div>
        </RoyalArchFrame>
      </motion.div>
    </section>
  );
}
