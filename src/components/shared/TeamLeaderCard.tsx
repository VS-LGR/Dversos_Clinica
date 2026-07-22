import Image from "next/image";
import type { TeamLeader } from "@/lib/constants/teamLeaders";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

interface TeamLeaderCardProps {
  leader: TeamLeader;
  index: number;
  expanded?: boolean;
}

function initialsFromName(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function TeamLeaderCard({
  leader,
  index,
  expanded = false,
}: TeamLeaderCardProps) {
  const initials = initialsFromName(leader.name);

  return (
    <article
      className={`h-full rounded-xl border border-primary/[0.1] p-6 sm:p-8 min-w-0 ${pastelByIndex(PASTEL_SURFACE_SOFT, index)}`}
    >
      <div className="mb-4 flex justify-center sm:justify-start">
        {leader.imageUrl ? (
          <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-2xl ring-1 ring-primary/10 bg-primary-pale/50">
            <Image
              src={leader.imageUrl}
              alt={`Foto de ${leader.name}`}
              fill
              className="object-cover object-center"
              sizes="128px"
            />
          </div>
        ) : (
          <div
            className="flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-2xl border border-primary/10 bg-white/80 text-primary/50 text-2xl font-semibold tracking-wide"
            aria-hidden
          >
            {initials}
          </div>
        )}
      </div>
      <h3
        className={`font-bold text-primary mb-1 break-words ${
          expanded ? "text-xl" : "text-lg"
        }`}
      >
        {leader.name}
      </h3>
      <p className="text-sm font-medium text-primary/65 mb-3">{leader.role}</p>
      <p className="text-sm text-primary/85 leading-relaxed">{leader.bio}</p>
    </article>
  );
}
