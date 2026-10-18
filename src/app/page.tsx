"use client";

import React, { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageSelectorModal } from "@/components/LanguageSelectorModal";
import { TopNavbar } from "@/components/TopNavbar";
import { IntroSequence } from "@/components/IntroSequence";
import { HeroSection } from "@/components/HeroSection";
import { PetalsCanvas } from "@/components/PetalsCanvas";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BlessingsSection } from "@/components/BlessingsSection";
import { SpecialDaySection } from "@/components/SpecialDaySection";
import { ProposalArchSection } from "@/components/ProposalArchSection";
import { DateSection } from "@/components/DateSection";
import { VenueSection } from "@/components/VenueSection";
import { FamilySection } from "@/components/FamilySection";
import { ClosingSection } from "@/components/ClosingSection";

function InvitationContent() {
  // Directly open for instant mobile loading with zero delays
  const [hasOpened, setHasOpened] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const { hasChosenLanguage } = useLanguage();

  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.innerWidth < 768 ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      setIsMobile(mobile);
      if (mobile) {
        setHasOpened(true);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-royal-darkest text-gold-100 overflow-x-hidden bg-grain transition-colors duration-700">
        {/* On desktop only: optional first-time language modal and intro */}
        {!isMobile && !hasChosenLanguage && <LanguageSelectorModal />}
        {!isMobile && hasChosenLanguage && !hasOpened && (
          <IntroSequence onComplete={() => setHasOpened(true)} />
        )}

        {/* Unified Top Navigation with Language Switcher, Theme & Music */}
        <TopNavbar />

        {/* Floating Background Petals & Gold Dust */}
        <PetalsCanvas />

        {/* Complete Invitation Content - directly rendered for instant viewing */}
        <div className="animate-fade-in duration-500">
          <HeroSection />
          <BlessingsSection />
          <SpecialDaySection />
          <ProposalArchSection />
          <DateSection />
          <VenueSection />
          <FamilySection />
          <ClosingSection />
        </div>
      </main>
    </SmoothScroll>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <InvitationContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
