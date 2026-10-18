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
    // Optimized particle counts for battery and GPU efficiency
    const petalCount = isMobile ? 12 : 24;
    const dustCount = isMobile ? 18 : 36;

    /* -------------------------------------------------------------
       Create Pre-rendered Sprites to eliminate runtime GC allocations
       ------------------------------------------------------------- */
    const createRoseSprite = () => {
      const s = document.createElement("canvas");
      s.width = 40;
      s.height = 40;
      const sctx = s.getContext("2d");
      if (!sctx) return s;
      sctx.translate(20, 10);
      sctx.beginPath();
      sctx.moveTo(0, 0);
      sctx.bezierCurveTo(-14, -12, -16, 18, 0, 26);
      sctx.bezierCurveTo(16, 18, 14, -12, 0, 0);
      const grad = sctx.createLinearGradient(0, 0, 0, 26);
      grad.addColorStop(0, "#C92A45");
      grad.addColorStop(0.5, "#8E1029");
      grad.addColorStop(1, "#4A0314");
      sctx.fillStyle = grad;
      sctx.fill();
      sctx.strokeStyle = "rgba(255, 215, 0, 0.4)";
      sctx.lineWidth = 0.8;
      sctx.stroke();
      return s;
    };

    const createMarigoldSprite = () => {
      const s = document.createElement("canvas");
      s.width = 30;
      s.height = 40;
      const sctx = s.getContext("2d");
      if (!sctx) return s;
      sctx.translate(15, 20);
      sctx.beginPath();
      sctx.ellipse(0, 0, 8, 17, 0, 0, Math.PI * 2);
      const grad = sctx.createLinearGradient(0, -17, 0, 17);
      grad.addColorStop(0, "#FFE066");
      grad.addColorStop(0.5, "#FF9900");
      grad.addColorStop(1, "#CC4400");
      sctx.fillStyle = grad;
      sctx.fill();
      sctx.strokeStyle = "rgba(255, 235, 150, 0.4)";
      sctx.lineWidth = 0.6;
      sctx.stroke();
      return s;
    };

    const roseSprite = createRoseSprite();
    const marigoldSprite = createMarigoldSprite();

    const petals: Petal[] = [];

    // Initialize Petals
    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 8 + 10,
        speedY: Math.random() * 0.9 + 0.5,
        speedX: Math.random() * 0.6 - 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        type: Math.random() > 0.4 ? "rose" : "marigold",
        opacity: Math.random() * 0.35 + 0.45,
        oscillationSpeed: Math.random() * 0.02 + 0.01,
        seed: Math.random() * 100,
      });
    }

    // Initialize Gold Dust
    for (let i = 0; i < dustCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedY: Math.random() * 0.3 + 0.1,
        speedX: (Math.random() - 0.5) * 0.2,
        rotation: 0,
        rotationSpeed: 0,
        type: "goldDust",
        opacity: Math.random() * 0.5 + 0.25,
        oscillationSpeed: Math.random() * 0.025 + 0.01,
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
      ctx.globalAlpha = p.opacity;

      if (p.type === "goldDust") {
        ctx.fillStyle = "#FFE885";
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.rotate((p.rotation * Math.PI) / 180);
        const sprite = p.type === "rose" ? roseSprite : marigoldSprite;
        const scale = p.size / 22;
        ctx.drawImage(
          sprite,
          -sprite.width * scale * 0.5,
          -sprite.height * scale * 0.5,
          sprite.width * scale,
          sprite.height * scale
        );
      }

      ctx.restore();
    };

    let isDocumentVisible = true;
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const handleScroll = () => {
      if (!isMobile) return;
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 120);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = () => {
      if (isDocumentVisible && (!isMobile || !isScrolling)) {
        ctx.clearRect(0, 0, width, height);
        tick += 1;

        for (let i = 0; i < petals.length; i++) {
          const p = petals[i];

          p.y += p.speedY;
          p.x += Math.sin(tick * p.oscillationSpeed + p.seed) * 0.5 + p.speedX;
          p.rotation += p.rotationSpeed;

          if (p.y > height + 30) {
            p.y = -25;
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
      window.removeEventListener("scroll", handleScroll);
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
