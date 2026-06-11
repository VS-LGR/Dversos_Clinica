interface WaveDividerProps {
  position?: "top" | "bottom";
  className?: string;
  fill?: string;
}

export default function WaveDivider({
  position = "bottom",
  className = "",
  fill = "#ffffff",
}: WaveDividerProps) {
  return (
    <div
      className={`relative pointer-events-none w-full h-10 sm:h-12 md:h-14 overflow-hidden ${
        position === "top" ? "rotate-180" : ""
      } ${className}`}
      aria-hidden
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,74C60,88,120,102,180,100C240,98,300,80,360,74C420,68,480,74,540,88C600,102,660,120,720,114C780,108,840,78,900,72C960,66,1020,84,1080,96C1140,108,1200,114,1260,106C1320,98,1380,76,1440,64L1440,120L0,120Z"
          fill={fill}
        />
      </svg>
      <svg
        className="absolute inset-x-0 bottom-0 h-[72%] w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,84C48,94,96,104,144,104C192,104,240,94,288,84C336,74,384,64,432,66C480,68,528,82,576,94C624,106,672,116,720,114C768,112,816,98,864,88C912,78,960,72,1008,76C1056,80,1104,94,1152,102C1200,110,1248,112,1296,106C1344,100,1392,86,1440,74L1440,120L0,120Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
