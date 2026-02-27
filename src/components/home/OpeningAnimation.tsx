"use client";

import { useState, useEffect } from "react";

interface OpeningAnimationProps {
  children: React.ReactNode;
  onComplete?: () => void;
}

export default function OpeningAnimation({ children, onComplete }: OpeningAnimationProps) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => {
      setVisible(true);
      onComplete?.();
    }, 400);
    return () => clearTimeout(t);
  }, [onComplete]);

  if (!mounted) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center opacity-0 animate-fade-in">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div
      className={`transition-all duration-600 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}
