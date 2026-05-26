"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

export default function RevealOnScroll({
  children,
  className = "",
  delayMs,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const style: CSSProperties | undefined =
    delayMs !== undefined ? ({ "--reveal-delay": `${delayMs}ms` } as CSSProperties) : undefined;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Trigger slightly before the block is fully in view,
      // so the user actually sees the entrance animation.
      { threshold: 0.1, rootMargin: "0px 0px 12% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${visible ? "reveal-on-scroll--visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
