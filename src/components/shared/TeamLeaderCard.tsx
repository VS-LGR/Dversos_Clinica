import type { TeamLeader } from "@/lib/constants/teamLeaders";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

interface TeamLeaderCardProps {
  leader: TeamLeader;
  index: number;
  expanded?: boolean;
}

export default function TeamLeaderCard({
  leader,
  index,
  expanded = false,
}: TeamLeaderCardProps) {
  return (
    <article
      className={`h-full rounded-xl border border-primary/[0.1] p-6 sm:p-8 min-w-0 ${pastelByIndex(PASTEL_SURFACE_SOFT, index)}`}
    >
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
