"use client";

import React from "react";

export function OmMotif({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sacred Om Motif"
    >
      <defs>
        <linearGradient id="omGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2BD" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#947214" />
        </linearGradient>
        <filter id="omGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* Outer Halo */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="url(#omGold)"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        opacity="0.6"
      />
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="url(#omGold)"
        strokeWidth="0.8"
        opacity="0.4"
      />
      {/* Sacred Om Symbol */}
      <path
        d="M32 38C32 33 36 28 42 28C47 28 50 31 51 35C52 39 50 43 46 45C53 47 57 52 57 59C57 67 50 72 41 72C33 72 27 67 27 60L33 60C33 64 36 67 41 67C46 67 50 63 50 58C50 53 46 49 40 49L37 49L37 44L40 44C44 44 47 41 47 37C47 33 44 31 41 31C37 31 34 34 34 38L32 38ZM57 42C61 44 65 49 67 55C69 61 73 66 79 66L79 71C71 71 66 65 63 58C61 54 58 50 55 48L57 42ZM60 30C66 30 71 33 74 37L71 40C68 37 64 35 60 35C56 35 52 37 49 40L46 37C50 33 54 30 60 30ZM60 23C62 23 64 25 64 27C64 29 62 31 60 31C58 31 56 29 56 27C56 25 58 23 60 23Z"
        fill="url(#omGold)"
        filter="url(#omGlow)"
      />
    </svg>
  );
}

export function GaneshaMotif({
  className = "w-24 h-24",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lord Ganesha Motif"
    >
      <defs>
        <linearGradient id="ganeshaGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF5D1" />
          <stop offset="40%" stopColor="#E5C158" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C6A12" />
        </linearGradient>
        <filter id="ganeshaGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Decorative Aura / Prabhavali */}
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke="url(#ganeshaGold)"
        strokeWidth="1.2"
        strokeDasharray="4 2"
        opacity="0.5"
      />
      <circle
        cx="60"
        cy="60"
        r="50"
        stroke="url(#ganeshaGold)"
        strokeWidth="0.8"
        opacity="0.4"
      />

      {/* Sunburst rays */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <line
          key={deg}
          x1="60"
          y1="7"
          x2="60"
          y2="11"
          stroke="url(#ganeshaGold)"
          strokeWidth="1.5"
          transform={`rotate(${deg} 60 60)`}
          opacity="0.6"
        />
      ))}

      {/* Sacred Crown (Mukut) */}
      <path
        d="M52 28L60 16L68 28L65 34H55L52 28Z"
        fill="url(#ganeshaGold)"
        stroke="url(#ganeshaGold)"
        strokeWidth="0.5"
      />
      <circle cx="60" cy="15" r="2" fill="#FFF4D0" />
      <circle cx="60" cy="24" r="2" fill="#8C1842" />

      {/* Divine Head & Tilak (Trishul shape) */}
      <path
        d="M57 32V42M63 32V42M60 30V44M57 40H63"
        stroke="url(#ganeshaGold)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="60" cy="38" r="1.5" fill="#B81D35" />

      {/* Left Ear */}
      <path
        d="M48 36C40 36 34 42 34 50C34 58 40 63 47 62"
        stroke="url(#ganeshaGold)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Right Ear */}
      <path
        d="M72 36C80 36 86 42 86 50C86 58 80 63 73 62"
        stroke="url(#ganeshaGold)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Trunk (Vakratunda curve towards Modak) */}
      <path
        d="M60 44C57 52 56 63 58 72C60 79 66 84 74 83C80 82 83 77 82 72C81 68 76 67 74 71"
        stroke="url(#ganeshaGold)"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
        filter="url(#ganeshaGlow)"
      />

      {/* Sacred Modak / Sweet in hand */}
      <ellipse
        cx="77"
        cy="66"
        rx="3.5"
        ry="4.5"
        fill="url(#ganeshaGold)"
      />
      <path
        d="M77 62L77 59"
        stroke="url(#ganeshaGold)"
        strokeWidth="1"
      />

      {/* Tusk */}
      <path
        d="M52 54L46 56"
        stroke="url(#ganeshaGold)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Divine Abhaya Mudra Hand / Auspicious blessing */}
      <path
        d="M38 66C38 64 41 62 43 64C45 66 45 70 42 72C39 74 38 70 38 66Z"
        fill="url(#ganeshaGold)"
      />
    </svg>
  );
}

export function GoldDivider({ className = "w-full my-6" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-r from-transparent via-gold-500/60 to-gold-400" />
      <div className="flex items-center gap-1.5 text-gold-400">
        <span className="w-1.5 h-1.5 rotate-45 bg-gold-400 inline-block shadow-[0_0_8px_#D4AF37]" />
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold-400" aria-hidden="true">
          <path d="M12 2L14.4 8.6L21.5 9.2L16.2 13.8L17.8 20.8L12 17.2L6.2 20.8L7.8 13.8L2.5 9.2L9.6 8.6L12 2Z" />
        </svg>
        <span className="w-1.5 h-1.5 rotate-45 bg-gold-400 inline-block shadow-[0_0_8px_#D4AF37]" />
      </div>
      <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-l from-transparent via-gold-500/60 to-gold-400" />
    </div>
  );
}

export function RoyalArchFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative p-5 sm:p-8 md:p-12 rounded-3xl ${className}`}>
      {/* Outer Glow & Background */}
      <div className="absolute inset-0 rounded-3xl bg-royal-card border border-gold-500/30 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.6)]" />

      {/* Decorative inner border with indented corners */}
      <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-gold-400/20 pointer-events-none" />

      {/* Top Arch Contour */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-8 sm:h-10 text-gold-400/30 pointer-events-none"
        viewBox="0 0 200 30"
        fill="none"
      >
        <path
          d="M0 30 C 50 30, 80 0, 100 0 C 120 0, 150 30, 200 30"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="100" cy="5" r="3" fill="#D4AF37" />
      </svg>

      {/* Corner Ornaments */}
      {/* Top Left */}
      <svg
        className="absolute top-2 left-2 w-8 h-8 sm:w-10 sm:h-10 text-gold-400/70 pointer-events-none"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M4 36 V 12 C 4 7.578 7.578 4 12 4 H 36"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10 32 V 16 C 10 12.686 12.686 10 16 10 H 32"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle cx="14" cy="14" r="2" fill="#D4AF37" />
      </svg>

      {/* Top Right */}
      <svg
        className="absolute top-2 right-2 w-8 h-8 sm:w-10 sm:h-10 text-gold-400/70 pointer-events-none"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M36 36 V 12 C 36 7.578 32.422 4 28 4 H 4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M30 32 V 16 C 30 12.686 27.314 10 24 10 H 8"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle cx="26" cy="14" r="2" fill="#D4AF37" />
      </svg>

      {/* Bottom Left */}
      <svg
        className="absolute bottom-2 left-2 w-8 h-8 sm:w-10 sm:h-10 text-gold-400/70 pointer-events-none"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M4 4 V 28 C 4 32.422 7.578 36 12 36 H 36"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10 8 V 24 C 10 27.314 12.686 30 16 30 H 32"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle cx="14" cy="26" r="2" fill="#D4AF37" />
      </svg>

      {/* Bottom Right */}
      <svg
        className="absolute bottom-2 right-2 w-8 h-8 sm:w-10 sm:h-10 text-gold-400/70 pointer-events-none"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M36 4 V 28 C 36 32.422 32.422 36 28 36 H 4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M30 8 V 24 C 30 27.314 27.314 30 24 30 H 8"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle cx="26" cy="26" r="2" fill="#D4AF37" />
      </svg>

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function RoyalMonogram({
  initials = "P & A",
  className = "w-28 h-28 sm:w-36 sm:h-36",
}: {
  initials?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-royal-maroon via-royal-wine to-royal-darkest border border-gold-400/50 shadow-[0_0_30px_rgba(212,175,55,0.35)] ${className}`}
    >
      {/* Outer spinning dash ring */}
      <svg
        className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.7"
        />
      </svg>

      {/* Inner floral laurel wreath */}
      <svg
        className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] pointer-events-none text-gold-400/40"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.8" />
        {/* Laurel leaves */}
        {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
          <ellipse
            key={deg}
            cx="50"
            cy="9"
            rx="2.5"
            ry="4.5"
            fill="#D4AF37"
            opacity="0.5"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </svg>

      {/* Royal Crown on top of monogram */}
      <div className="absolute -top-3.5 sm:-top-4 text-gold-400 drop-shadow-[0_2px_8px_rgba(212,175,55,0.8)]">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 fill-current">
          <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
        </svg>
      </div>

      {/* Monogram letters */}
      <span className="font-serif italic font-bold text-2xl sm:text-3xl text-gold-gradient tracking-wider drop-shadow-[0_2px_10px_rgba(212,175,55,0.5)]">
        {initials}
      </span>
    </div>
  );
}

export function KalashIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <defs>
        <linearGradient id="kalashG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2C2" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Coconut on top */}
      <path
        d="M16 4C14 7 14 10 16 12C18 10 18 7 16 4Z"
        fill="#947214"
        stroke="url(#kalashG)"
        strokeWidth="0.8"
      />
      {/* Mango leaves */}
      <path
        d="M16 12C12 9 8 11 9 14C11 15 14 14 16 12Z"
        fill="url(#kalashG)"
        opacity="0.9"
      />
      <path
        d="M16 12C20 9 24 11 23 14C21 15 18 14 16 12Z"
        fill="url(#kalashG)"
        opacity="0.9"
      />
      {/* Pot body */}
      <path
        d="M12 14H20L22 17C23 20 22 25 19 27H13C10 25 9 20 10 17L12 14Z"
        fill="url(#kalashG)"
        stroke="#7A5B12"
        strokeWidth="0.8"
      />
      {/* Swastik / Sacred mark on Kalash */}
      <circle cx="16" cy="21" r="2" fill="#8C1842" />
      <path d="M12 27H20V29H12V27Z" fill="url(#kalashG)" />
    </svg>
  );
}

export function DiyaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <defs>
        <linearGradient id="flameG" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF4500" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFFFE0" />
        </linearGradient>
        <linearGradient id="diyaG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF1BD" />
          <stop offset="100%" stopColor="#B89223" />
        </linearGradient>
      </defs>
      {/* Glowing Flame */}
      <path
        d="M16 4C14 8 13 11 16 15C19 11 18 8 16 4Z"
        fill="url(#flameG)"
        filter="drop-shadow(0 0 4px #FFA500)"
      />
      {/* Diya Clay / Brass Bowl */}
      <path
        d="M6 16C6 23 11 27 16 27C21 27 26 23 26 16C22 18 18 19 16 19C14 19 10 18 6 16Z"
        fill="url(#diyaG)"
        stroke="#731437"
        strokeWidth="0.8"
      />
      <ellipse cx="16" cy="17" rx="8" ry="2" fill="#7A5B12" opacity="0.6" />
    </svg>
  );
}
