export default function ScrollBar() {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 w-20 sm:w-24 z-30 pointer-events-none overflow-hidden hidden sm:block"
      aria-hidden
    >
      <div
        className="absolute inset-0 shadow-[ 8px_0_32px_rgba(26,43,86,0.4) ]"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to left, rgba(15,28,55,0.97) 0%, rgba(26,43,86,1) 45%, rgb(26,43,86) 100%)",
          boxShadow: "inset -14px 0 28px -8px rgba(0,0,0,0.25)",
        }}
      />
      <div
        className="absolute inset-0 opacity-50 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_35%,rgba(0,0,0,0.08)_100%)]"
        aria-hidden
      />
    </div>
  );
}
