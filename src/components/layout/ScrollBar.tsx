const DECOR_ITEMS = [
  { type: "psi", opacity: 0.22, size: 14, delay: "0ms" },
  { type: "brain", opacity: 0.2, size: 14, delay: "220ms" },
  { type: "heart", opacity: 0.18, size: 12, delay: "380ms" },
  { type: "dv", opacity: 0.24, size: 16, delay: "540ms" },
  { type: "psi", opacity: 0.2, size: 13, delay: "700ms" },
  { type: "brain", opacity: 0.17, size: 13, delay: "860ms" },
  { type: "dv", opacity: 0.22, size: 16, delay: "1010ms" },
  { type: "heart", opacity: 0.18, size: 12, delay: "1170ms" },
  { type: "psi", opacity: 0.2, size: 14, delay: "1320ms" },
];

function DecorativeIcon({ type, size }: { type: string; size: number }) {
  if (type === "dv") {
    return (
      <span
        className="inline-flex items-center justify-center rounded-full border border-white/30 text-white/80 font-semibold tracking-tight"
        style={{ width: size + 6, height: size + 6, fontSize: Math.max(9, size - 5) }}
      >
        DV
      </span>
    );
  }

  if (type === "psi") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 4V20M8 5.5C8 8 10 10 12 10C14 10 16 8 16 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "brain") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9 6.5C9 4.6 7.4 3 5.5 3C3.6 3 2 4.6 2 6.5C2 7.8 2.7 8.9 3.8 9.5C2.7 10.1 2 11.2 2 12.5C2 14.4 3.6 16 5.5 16H9M15 6.5C15 4.6 16.6 3 18.5 3C20.4 3 22 4.6 22 6.5C22 7.8 21.3 8.9 20.2 9.5C21.3 10.1 22 11.2 22 12.5C22 14.4 20.4 16 18.5 16H15M9 16V6.5M15 16V6.5M9 16C9 18.2 10.8 20 13 20H11C13.2 20 15 18.2 15 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 20C12 20 4 15.3 4 9.8C4 7.2 6.1 5 8.8 5C10.5 5 12 6 12 7.4C12 6 13.5 5 15.2 5C17.9 5 20 7.2 20 9.8C20 15.3 12 20 12 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export default function ScrollBar() {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 w-20 sm:w-24 z-30 pointer-events-none overflow-hidden hidden sm:block"
      aria-hidden
    >
      <div
        className="absolute inset-0 shadow-[6px_0_18px_rgba(26,43,86,0.24)]"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to left, rgba(15,28,55,0.97) 0%, rgba(26,43,86,1) 45%, rgb(26,43,86) 100%)",
          boxShadow: "inset -8px 0 16px -8px rgba(0,0,0,0.18)",
        }}
      />
      <div
        className="absolute top-0 right-0 bottom-0 w-4 bg-gradient-to-r from-transparent to-primary/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-50 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_35%,rgba(0,0,0,0.08)_100%)]"
        aria-hidden
      />
      <div className="absolute inset-0 px-1.5 py-6 flex flex-col items-center justify-between text-white/80">
        {DECOR_ITEMS.map((item, index) => (
          <span
            key={`${item.type}-${index}`}
            className="inline-flex animate-paw-float"
            style={{ opacity: item.opacity, animationDelay: item.delay }}
          >
            <DecorativeIcon type={item.type} size={item.size} />
          </span>
        ))}
      </div>
    </div>
  );
}
