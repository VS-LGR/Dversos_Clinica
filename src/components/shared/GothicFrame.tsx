"use client";

import Image from "next/image";

interface GothicFrameProps {
  children: React.ReactNode;
  className?: string;
}

const GOTHIC_FRAME_SRC = "https://i.imgur.com/U7l7uzA.png";

export default function GothicFrame({ children, className = "" }: GothicFrameProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden bg-primary-pale/50 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <Image
          src={GOTHIC_FRAME_SRC}
          alt=""
          role="presentation"
          width={400}
          height={400}
          className="object-contain max-w-full max-h-full"
        />
      </div>
      <div className="relative z-10 p-6 sm:p-10 text-primary">
        {children}
      </div>
    </div>
  );
}
