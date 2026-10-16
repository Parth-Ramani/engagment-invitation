"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageSelectorModal } from "@/components/LanguageSelectorModal";
import { TopNavbar } from "@/components/TopNavbar";
import { IntroSequence } from "@/components/IntroSequence";
import { HeroSection } from "@/components/HeroSection";
import { PetalsCanvas } from "@/components/PetalsCanvas";
import { SmoothScroll } from "@/components/SmoothScroll";

const BlessingsSection = dynamic(() =>
  import("@/components/BlessingsSection").then((m) => m.BlessingsSection)
);
const SpecialDaySection = dynamic(() =>
  import("@/components/SpecialDaySection").then((m) => m.SpecialDaySection)
);
const ProposalArchSection = dynamic(() =>
  import("@/components/ProposalArchSection").then((m) => m.ProposalArchSection)
);
const DateSection = dynamic(() =>
  import("@/components/DateSection").then((m) => m.DateSection)
);
const VenueSection = dynamic(() =>
  import("@/components/VenueSection").then((m) => m.VenueSection)
);
const FamilySection = dynamic(() =>
  import("@/components/FamilySection").then((m) => m.FamilySection)
);
const ContactSection = dynamic(() =>
  import("@/components/ContactSection").then((m) => m.ContactSection)
);
const ClosingSection = dynamic(() =>
  import("@/components/ClosingSection").then((m) => m.ClosingSection)
);

function InvitationContent() {
  const [hasOpened, setHasOpened] = useState(false);
  const { hasChosenLanguage } = useLanguage();

  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-royal-darkest text-gold-100 overflow-x-hidden bg-grain transition-colors duration-700">
        {/* First-Time Language Selector Modal */}
        <LanguageSelectorModal />

        {/* Cinematic Grand Opening Sequence */}
        {hasChosenLanguage && !hasOpened && (
          <IntroSequence onComplete={() => setHasOpened(true)} />
        )}

        {/* Unified Top Navigation (Only shown once opened) */}
        {hasOpened && <TopNavbar />}

        {/* Floating Background Petals & Gold Dust (Only active once opened) */}
        {hasOpened && <PetalsCanvas />}

        {/* Invitation Content Sections - strictly rendered once user opens */}
        {hasOpened ? (
          <div className="animate-fade-in duration-500">
            <HeroSection />
            <BlessingsSection />
            <SpecialDaySection />
            <ProposalArchSection />
            <DateSection />
            <VenueSection />
            <FamilySection />
            <ContactSection />
            <ClosingSection />
          </div>
        ) : null}
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
