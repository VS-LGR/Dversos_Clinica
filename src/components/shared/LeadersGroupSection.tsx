import { TEAM_GROUP_PHOTO, TEAM_GROUP_PHOTO_ALT } from "@/lib/constants/clinicMedia";
import { TEAM_LEADERS } from "@/lib/constants/teamLeaders";
import CozyImageFrame from "@/components/shared/CozyImageFrame";
import TeamLeaderCard from "@/components/shared/TeamLeaderCard";

interface LeadersGroupSectionProps {
  expandedCards?: boolean;
  showGroupPhoto?: boolean;
}

export default function LeadersGroupSection({
  expandedCards = false,
  showGroupPhoto = true,
}: LeadersGroupSectionProps) {
  return (
    <div className="min-w-0 space-y-10">
      {showGroupPhoto && (
        <CozyImageFrame
          src={TEAM_GROUP_PHOTO}
          alt={TEAM_GROUP_PHOTO_ALT}
          variant="landscape"
          index={0}
          priority
          className="max-w-4xl mx-auto"
        />
      )}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEAM_LEADERS.map((leader, index) => (
          <li key={leader.id}>
            <TeamLeaderCard leader={leader} index={index} expanded={expandedCards} />
          </li>
        ))}
      </ul>
    </div>
  );
}
