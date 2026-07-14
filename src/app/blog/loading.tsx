export default function BlogLoading() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 safe-x" aria-busy="true" aria-live="polite">
      <div className="max-w-6xl mx-auto min-w-0">
        <div className="rounded-3xl border border-primary/[0.08] bg-white p-8 sm:p-10 mb-12 animate-pulse">
          <div className="h-3 w-28 rounded-full bg-pastel-mint/70 mb-5" />
          <div className="h-9 w-48 sm:w-64 rounded-2xl bg-pastel-aqua/60 mb-4" />
          <div className="h-4 w-full max-w-xl rounded-full bg-primary/10 mb-2" />
          <div className="h-4 w-3/4 max-w-lg rounded-full bg-primary/10" />
        </div>

        <div className="h-3 w-40 rounded-full bg-primary/10 mb-6 animate-pulse" />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <li
              key={index}
              className="rounded-2xl border border-primary/[0.08] bg-white overflow-hidden animate-pulse"
            >
              <div className="aspect-[16/10] bg-pastel-mint/40" />
              <div className="p-5 space-y-3">
                <div className="h-3 w-24 rounded-full bg-primary/10" />
                <div className="h-5 w-4/5 rounded-full bg-primary/15" />
                <div className="h-3 w-full rounded-full bg-primary/10" />
                <div className="h-3 w-2/3 rounded-full bg-primary/10" />
              </div>
            </li>
          ))}
        </ul>

        <p className="sr-only">Carregando o blog…</p>
      </div>
    </div>
  );
}
