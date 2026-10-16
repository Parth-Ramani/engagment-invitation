"use client";

import React from "react";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeColorPicker } from "./ThemeColorPicker";
import { AudioPlayer } from "./AudioPlayer";

export function TopNavbar() {
  return (
    <header className="fixed top-3.5 sm:top-5 inset-x-0 z-50 pointer-events-none px-3 sm:px-6 max-w-7xl mx-auto flex items-center justify-between">
      {/* Left side: Language Switcher & Theme Palette Picker */}
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
        <LanguageToggle embedded />
        <ThemeColorPicker embedded />
      </div>

      {/* Right side: Music / Melody Player */}
      <div className="pointer-events-auto">
        <AudioPlayer embedded />
      </div>
    </header>
  );
}
