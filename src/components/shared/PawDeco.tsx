"use client";

import Image from "next/image";

const PAW_SRC = "https://i.imgur.com/dqEtbXK.png";

interface PawDecoProps {
  count?: number;
  size?: number;
  className?: string;
  animated?: boolean;
}

export default function PawDeco({
  count = 3,
  size = 32,
  className = "",
  animated = true,
}: PawDecoProps) {
  return (
    <div
      className={`flex items-center justify-center gap-1.5 sm:gap-2 ${className}`}
      aria-hidden
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`inline-block cursor-default select-none ${animated ? "animate-paw-bounce" : ""}`}
          style={{
            animationDelay: `${i * 150}ms`,
          }}
        >
          <Image
            src={PAW_SRC}
            alt=""
            width={size}
            height={size}
            className="opacity-90 drop-shadow-sm transition-transform duration-200 hover:scale-110"
          />
        </span>
      ))}
    </div>
  );
}
