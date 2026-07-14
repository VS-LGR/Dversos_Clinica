"use client";

import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const INTRO_DURATION_MS = 1600;
const INTRO_OUT_START_MS = 1150;
const LOTTIE_SRC = "/video/_Loader%20DversosClinica_Novo.lottie";

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
      <div className="min-h-[60vh] flex items-center justify-center bg-white" aria-hidden>
        <div className="w-[160px] sm:w-[200px] max-w-[220px]">
          <DotLottieReact src={LOTTIE_SRC} loop autoplay />
        </div>
      </div>
    );
  }

  return (
    <>
      {phase !== "done" && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white pointer-events-none ${
            phase === "out" ? "animate-intro-out" : ""
          }`}
          aria-hidden
        >
          <div className="flex flex-col items-center gap-5 sm:gap-6 text-center px-4">
            <div
              className="w-[140px] sm:w-[180px] max-w-[200px] animate-intro-logo opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              <DotLottieReact src={LOTTIE_SRC} loop autoplay />
            </div>
            <span
              className="mt-1 block h-0.5 w-12 mx-auto rounded-full bg-pastel-mint animate-intro-tagline opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.15s" }}
            />
            <p
              className="mt-1 text-primary/80 text-sm sm:text-base font-medium animate-intro-tagline opacity-0"
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
