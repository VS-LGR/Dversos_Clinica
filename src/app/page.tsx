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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <OpeningAnimation>
        <HeroSection />
      </OpeningAnimation>
      <RevealOnScroll>
        <AreasGrid />
      </RevealOnScroll>
      <RevealOnScroll>
        <NeurodiversityHighlight />
      </RevealOnScroll>
      <RevealOnScroll>
        <DogTherapyBand />
      </RevealOnScroll>
      <RevealOnScroll>
        <AbaInterventionSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ComplementaryCareSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <BeDversoSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <FoundersSection />
      </RevealOnScroll>
    </div>
  );
}
