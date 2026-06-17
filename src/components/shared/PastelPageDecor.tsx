/** Blobs pastel fixos nas laterais — acolhimento visual sem competir com o conteúdo. */
export default function PastelPageDecor() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -top-32 -left-24 w-80 h-80 rounded-full bg-pastel-mint/30 blob-soft" />
      <div className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-pastel-aqua/25 blob-soft" />
      <div className="absolute bottom-1/3 -left-16 w-64 h-64 rounded-full bg-pastel-peach/30 blob-soft" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-pastel-coral/20 blob-soft" />
    </div>
  );
}
