import PastelPageDecor from "@/components/shared/PastelPageDecor";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className={`relative min-h-screen overflow-x-clip safe-x ${className}`}>
      <PastelPageDecor />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
