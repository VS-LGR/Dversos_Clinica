export default function PastelPageDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-0"
    >
      <div className="absolute -top-20 -left-24 w-72 h-72 rounded-full bg-pastel-mint/60 blur-3xl" />
      <div className="absolute top-40 -right-28 w-80 h-80 rounded-full bg-pastel-aqua/55 blur-3xl" />
      <div className="absolute top-1/2 -left-16 w-64 h-64 rounded-full bg-pastel-peach/50 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-56 h-56 rounded-full bg-pastel-coral/45 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-64 bg-gradient-to-r from-pastel-lime/40 via-pastel-mint/30 to-pastel-aqua/40 blur-3xl" />
    </div>
  );
}
