"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "left" | "right";
  /** Índice para alternância automática esquerda/direita (0 = direita, 1 = esquerda, …). */
  index?: number;
}

/** Direção alternada no estilo Formare: par = direita, ímpar = esquerda. */
export function alternateRevealDirection(index: number): "left" | "right" {
  return index % 2 === 0 ? "right" : "left";
}

export default function RevealOnScroll({
  children,
  className = "",
  delayMs,
  direction,
  index,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Ajuste de UX: o elemento ainda pode estar entrando parcialmente fora da tela
  // no momento em que o IntersectionObserver dispara. Mantemos o stagger existente,
  // mas somamos um atraso base para tornar o "slide-in" mais visível.
  const BASE_DELAY_MS = 300;

  const resolvedDirection =
    direction ?? (index !== undefined ? alternateRevealDirection(index) : "right");

  type RevealStyle = CSSProperties & { [key: `--${string}`]: string };
  const style: RevealStyle | undefined = {
    "--reveal-x": resolvedDirection === "left" ? "-24%" : "24%",
    "--reveal-x-mobile": resolvedDirection === "left" ? "-18%" : "18%",
    "--reveal-delay": `${(delayMs ?? 0) + BASE_DELAY_MS}ms`,
  };

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
      { threshold: 0.08, rootMargin: "0px 0px 22% 0px" }
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
