"use client";

import React, { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  type: "rose" | "marigold" | "goldDust";
  opacity: number;
  oscillationSpeed: number;
  oscillationDistance: number;
  seed: number;
}

export function PetalsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const petalCount = isMobile ? 22 : 45;
    const dustCount = isMobile ? 35 : 70;

    const petals: Petal[] = [];

    // Initialize Petals
    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 10 + 9,
        speedY: Math.random() * 1.2 + 0.6,
        speedX: Math.random() * 0.8 - 0.4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.8,
        type: Math.random() > 0.4 ? "rose" : "marigold",
        opacity: Math.random() * 0.45 + 0.4,
        oscillationSpeed: Math.random() * 0.02 + 0.01,
        oscillationDistance: Math.random() * 40 + 20,
        seed: Math.random() * 100,
      });
    }

    // Initialize Gold Dust
    for (let i = 0; i < dustCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 1.2,
        speedY: Math.random() * 0.4 + 0.15,
        speedX: (Math.random() - 0.5) * 0.3,
        rotation: 0,
        rotationSpeed: 0,
        type: "goldDust",
        opacity: Math.random() * 0.6 + 0.2,
        oscillationSpeed: Math.random() * 0.03 + 0.01,
        oscillationDistance: Math.random() * 15 + 5,
        seed: Math.random() * 100,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let tick = 0;

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);

      if (p.type === "goldDust") {
        // Glowing gold sparkle
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2);
        grad.addColorStop(0, `rgba(255, 238, 160, ${p.opacity})`);
        grad.addColorStop(0.5, `rgba(212, 175, 55, ${p.opacity * 0.6})`);
        grad.addColorStop(1, "rgba(212, 175, 55, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 240, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === "rose") {
        // Crimson velvet rose petal
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(
          -p.size * 0.7,
          -p.size * 0.6,
          -p.size * 0.8,
          p.size * 0.9,
          0,
          p.size * 1.3
        );
        ctx.bezierCurveTo(
          p.size * 0.8,
          p.size * 0.9,
          p.size * 0.7,
          -p.size * 0.6,
          0,
          0
        );

        const grad = ctx.createLinearGradient(0, 0, 0, p.size * 1.3);
        grad.addColorStop(0, "#B81D35"); // vivid crimson
        grad.addColorStop(0.5, "#800A24"); // deep wine
        grad.addColorStop(1, "#450212"); // dark velvet
        ctx.fillStyle = grad;
        ctx.fill();

        // Subtle gold edge highlight on petal
        ctx.strokeStyle = "rgba(255, 215, 0, 0.35)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else {
        // Bright golden-orange Indian marigold petal
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.45, p.size * 0.95, 0, 0, Math.PI * 2);

        const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
        grad.addColorStop(0, "#FFF099"); // bright marigold yellow
        grad.addColorStop(0.5, "#FFA500"); // rich saffron orange
        grad.addColorStop(1, "#D04B00"); // royal saffron
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.strokeStyle = "rgba(255, 235, 150, 0.4)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      ctx.restore();
    };

    let isDocumentVisible = true;
    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const render = () => {
      if (isDocumentVisible) {
        ctx.clearRect(0, 0, width, height);
        tick += 1;

        for (let i = 0; i < petals.length; i++) {
          const p = petals[i];

          // Fluttering wind & sway physics
          p.y += p.speedY;
          p.x += Math.sin(tick * p.oscillationSpeed + p.seed) * 0.6 + p.speedX;
          p.rotation += p.rotationSpeed;

          // Wrap around top if off screen bottom
          if (p.y > height + 40) {
            p.y = -30;
            p.x = Math.random() * width;
          }
          if (p.x < -30) p.x = width + 20;
          if (p.x > width + 30) p.x = -20;

          drawPetal(p);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      aria-hidden="true"
    />
  );
}
