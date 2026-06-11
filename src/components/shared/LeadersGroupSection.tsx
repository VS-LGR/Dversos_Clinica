import { TEAM_GROUP_PHOTO, TEAM_GROUP_PHOTO_ALT } from "@/lib/constants/clinicMedia";
import { TEAM_LEADERS } from "@/lib/constants/teamLeaders";
import CozyImageFrame from "@/components/shared/CozyImageFrame";
import TeamLeaderCard from "@/components/shared/TeamLeaderCard";
import BrandLogo from "@/components/shared/BrandLogo";

interface LeadersGroupSectionProps {
  showLogo?: boolean;
  expandedCards?: boolean;
}

export default function LeadersGroupSection({
  showLogo = false,
  expandedCards = false,
}: LeadersGroupSectionProps) {
  return (
    <div className="min-w-0 space-y-10">
      {showLogo && (
        <div className="flex justify-center mb-2">
          <BrandLogo variant="primary" size="md" />
        </div>
      )}
      <CozyImageFrame
        src={TEAM_GROUP_PHOTO}
        alt={TEAM_GROUP_PHOTO_ALT}
        variant="landscape"
        index={0}
        priority
        className="max-w-4xl mx-auto"
      />
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
