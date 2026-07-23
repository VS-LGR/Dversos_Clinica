import OpeningAnimation from "@/components/home/OpeningAnimation";
import HeroSection from "@/components/home/HeroSection";
import HomeAboutPreviewSection from "@/components/home/HomeAboutPreviewSection";
import AreasGrid from "@/components/home/AreasGrid";
import DogTherapyBand from "@/components/home/DogTherapyBand";
import HomeValuesSection from "@/components/home/HomeValuesSection";
import BeDversoSection from "@/components/home/BeDversoSection";
import VisitCtaBand from "@/components/home/VisitCtaBand";
import ClinicPreviewSection from "@/components/home/ClinicPreviewSection";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import PageShell from "@/components/shared/PageShell";

const HOME_SECTIONS = [
  HomeAboutPreviewSection,
  AreasGrid,
  DogTherapyBand,
  ClinicPreviewSection,
  HomeValuesSection,
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
