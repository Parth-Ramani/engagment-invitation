import confetti from "canvas-confetti";

export function fireCelebrationConfetti() {
  if (typeof window === "undefined") return;

  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 50 : 90;

  const defaults = {
    origin: { y: 0.65 },
    colors: ["#D4AF37", "#FFE485", "#B81D35", "#800A24", "#FF8C00", "#FFF8E1"],
    zIndex: 9999,
    disableForReducedMotion: true,
  };

  // Two lightweight bursts instead of 5 heavy simultaneous bursts
  confetti({
    ...defaults,
    particleCount: Math.floor(count * 0.6),
    spread: 60,
    startVelocity: 38,
    scalar: 0.85,
  });

  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.4),
      spread: 95,
      startVelocity: 26,
      decay: 0.93,
    });
  }, 120);
}
