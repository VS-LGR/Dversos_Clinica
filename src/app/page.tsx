import OpeningAnimation from "@/components/home/OpeningAnimation";
import HeroSection from "@/components/home/HeroSection";
import HomeAboutPreviewSection from "@/components/home/HomeAboutPreviewSection";
import AreasGrid from "@/components/home/AreasGrid";
import NeurodiversityHighlight from "@/components/home/NeurodiversityHighlight";
import DogTherapyBand from "@/components/home/DogTherapyBand";
import HomeCareProcessSection from "@/components/home/HomeCareProcessSection";
import HomeValuesSection from "@/components/home/HomeValuesSection";
import AbaInterventionSection from "@/components/home/AbaInterventionSection";
import ComplementaryCareSection from "@/components/home/ComplementaryCareSection";
import BeDversoSection from "@/components/home/BeDversoSection";
import FoundersSection from "@/components/home/FoundersSection";
import VisitCtaBand from "@/components/home/VisitCtaBand";
import ClinicPreviewSection from "@/components/home/ClinicPreviewSection";
import ClinicTourBand from "@/components/home/ClinicTourBand";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import PageShell from "@/components/shared/PageShell";

const HOME_SECTIONS = [
  HomeAboutPreviewSection,
  ClinicPreviewSection,
  HomeValuesSection,
  HomeCareProcessSection,
  AreasGrid,
  AbaInterventionSection,
  ComplementaryCareSection,
  ClinicTourBand,
  NeurodiversityHighlight,
  DogTherapyBand,
  FoundersSection,
  BeDversoSection,
  VisitCtaBand,
] as const;

export default function HomePage() {
  return (
    <PageShell>
      <OpeningAnimation>
        <HeroSection />
      </OpeningAnimation>
      {HOME_SECTIONS.map((Section, index) => (
        <RevealOnScroll key={Section.name} index={index}>
          <Section />
        </RevealOnScroll>
      ))}
    </PageShell>
  );
}
