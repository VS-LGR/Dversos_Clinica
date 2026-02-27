"use client";

import { useState, useEffect } from "react";

const INTRO_DURATION_MS = 1600;
const INTRO_OUT_START_MS = 1150;

interface OpeningAnimationProps {
  children: React.ReactNode;
  onComplete?: () => void;
}

export default function OpeningAnimation({ children, onComplete }: OpeningAnimationProps) {
  const [phase, setPhase] = useState<"intro" | "out" | "done">("intro");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const tOut = setTimeout(() => setPhase("out"), INTRO_OUT_START_MS);
    const tDone = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, INTRO_DURATION_MS);
    return () => {
      clearTimeout(tOut);
      clearTimeout(tDone);
    };
  }, [mounted, onComplete]);

  if (!mounted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#fdfbf9]">
        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin opacity-60" />
      </div>
    );
  }

  return (
    <>
      {phase !== "done" && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-[#fdfbf9] to-white pointer-events-none ${
            phase === "out" ? "animate-intro-out" : ""
          }`}
          aria-hidden
        >
          <div className="text-center px-4">
            <h1
              className="text-3xl sm:text-4xl font-bold text-primary tracking-tight animate-intro-logo opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              Clínica Dverso
            </h1>
            <span
              className="mt-3 block h-0.5 w-12 mx-auto rounded-full bg-accent/70 animate-intro-tagline opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.15s" }}
            />
            <p
              className="mt-3 text-primary/80 text-sm sm:text-base font-medium animate-intro-tagline opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              Saúde que acolhe · Sorocaba e região
            </p>
          </div>
        </div>
      )}

      <div
        className={phase === "done" ? "animate-fade-in" : "opacity-0"}
        style={phase === "done" ? { animationDuration: "0.35s" } : undefined}
      >
        {children}
      </div>
    </>
  );
}
