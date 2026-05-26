import OpeningAnimation from "@/components/home/OpeningAnimation";
import HeroSection from "@/components/home/HeroSection";
import AreasGrid from "@/components/home/AreasGrid";
import NeurodiversityHighlight from "@/components/home/NeurodiversityHighlight";
import DogTherapyBand from "@/components/home/DogTherapyBand";
import AbaInterventionSection from "@/components/home/AbaInterventionSection";
import ComplementaryCareSection from "@/components/home/ComplementaryCareSection";
import BeDversoSection from "@/components/home/BeDversoSection";
import FoundersSection from "@/components/home/FoundersSection";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const HOME_SECTIONS = [
  AreasGrid,
  NeurodiversityHighlight,
  DogTherapyBand,
  AbaInterventionSection,
  ComplementaryCareSection,
  BeDversoSection,
  FoundersSection,
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <OpeningAnimation>
        <HeroSection />
      </OpeningAnimation>
      {HOME_SECTIONS.map((Section, index) => (
        <RevealOnScroll key={Section.name} index={index}>
          <Section />
        </RevealOnScroll>
      ))}
    </div>
  );
}
