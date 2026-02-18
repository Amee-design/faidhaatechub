import Hero from "@/components/sections/Hero";
import WhySection from "@/components/sections/WhySection";
import Partners from "@/components/sections/Partners";
import Competencies from "@/components/sections/Competencies";
import ImpactStats from "@/components/sections/ImpactStats";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhySection />
      <Partners />
      <Competencies />
      <ImpactStats />
      <AccessibilityWidget />
    </div>
  );
}
