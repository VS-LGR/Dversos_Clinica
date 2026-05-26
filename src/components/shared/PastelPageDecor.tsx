export default function PastelPageDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-0"
    >
      {/* Cantos e faixas pasteis sutis para reforçar acolhimento */}
      <div className="absolute -top-20 -left-24 w-72 h-72 rounded-full bg-accent-mint/30 blur-3xl opacity-60" />
      <div className="absolute top-40 -right-28 w-80 h-80 rounded-full bg-accent-lavender/35 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-64 bg-gradient-to-r from-accent-lavender/10 via-white/0 to-accent-mint/10 blur-3xl opacity-70" />
    </div>
  );
}

