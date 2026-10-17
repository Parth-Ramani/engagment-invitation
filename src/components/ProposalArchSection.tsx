"use client";

import React from "react";
import { motion } from "framer-motion";
import { fireCelebrationConfetti } from "@/lib/celebrate";
import { GoldDivider } from "./Ornaments";

export function ProposalArchSection() {
  return (
    <section
      id="proposal-illustration"
      className="relative w-full py-10 sm:py-14 md:py-16 px-3 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden"
      aria-label="Parth & Ankita Proposal Illustration"
    >
      {/* Subtle Top Gold Divider */}
      <div className="w-full max-w-md mx-auto mb-6 sm:mb-8 opacity-80">
        <GoldDivider />
      </div>

      {/* Perfectly Centered Illustration Container for All Screens */}
      <div className="relative w-full flex items-center justify-center">
        {/* Soft Radial Ambient Golden Glow */}
        <div className="absolute inset-0 max-w-3xl mx-auto bg-radial from-gold-400/20 via-gold-500/5 to-transparent blur-3xl -z-10 pointer-events-none" />

        {/* Animated Artwork Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => fireCelebrationConfetti()}
          className="relative w-full max-w-[92vw] sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto flex items-center justify-center cursor-pointer group select-none"
          title="Parth & Ankita · Tap to Celebrate! 🎉"
        >
          {/* Main High-Resolution Proposal Illustration */}
          <picture className="w-full flex items-center justify-center">
            {/* Highly optimized WebP format (151KB vs 1000KB) */}
            <source
              srcSet="/images/parth-ankita-proposal.webp"
              type="image/webp"
            />
            {/* Transparent PNG version fallback */}
            <source
              srcSet="/images/parth-ankita-proposal-transparent.png"
              type="image/png"
            />
            {/* Original JPG fallback */}
            <img
              src="/images/parth-ankita-proposal.jpg"
              alt="Parth and Ankita Proposal Ring Ceremony Illustration under Peacock Floral Arch"
              className="w-full h-auto max-h-[78vh] object-contain mx-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.14)] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </motion.div>
      </div>

      {/* Subtle Bottom Gold Divider */}
      <div className="w-full max-w-md mx-auto mt-6 sm:mt-8 opacity-80">
        <GoldDivider />
      </div>
    </section>
  );
}
