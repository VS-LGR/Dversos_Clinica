import OpeningAnimation from "@/components/home/OpeningAnimation";
import HeroSection from "@/components/home/HeroSection";
import AreasGrid from "@/components/home/AreasGrid";
import NeurodiversityHighlight from "@/components/home/NeurodiversityHighlight";
import DogTherapyBand from "@/components/home/DogTherapyBand";
import HomeCareProcessSection from "@/components/home/HomeCareProcessSection";
import AbaInterventionSection from "@/components/home/AbaInterventionSection";
import ComplementaryCareSection from "@/components/home/ComplementaryCareSection";
import BeDversoSection from "@/components/home/BeDversoSection";
import FoundersSection from "@/components/home/FoundersSection";
import VisitCtaBand from "@/components/home/VisitCtaBand";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import PastelPageDecor from "@/components/shared/PastelPageDecor";

const HOME_SECTIONS = [
  AreasGrid,
  HomeCareProcessSection,
  VisitCtaBand,
  NeurodiversityHighlight,
  DogTherapyBand,
  AbaInterventionSection,
  ComplementaryCareSection,
  BeDversoSection,
  FoundersSection,
] as const;

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <PastelPageDecor />
      <div className="relative z-10">
        <OpeningAnimation>
          <HeroSection />
        </OpeningAnimation>
        {HOME_SECTIONS.map((Section, index) => (
          <RevealOnScroll key={Section.name} index={index}>
            <Section />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
