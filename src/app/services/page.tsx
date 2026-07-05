import React from "react";
import Section from "@/components/ui/Section";
import AITransformationSection from "@/components/sections/AITransformationSection";
import AIProductsSection from "@/components/sections/AIProductsSection";
import CybersecuritySection from "@/components/sections/CybersecuritySection";
import BrandingIntelligenceSection from "@/components/sections/BrandingIntelligenceSection";
import MediaProductionSection from "@/components/sections/MediaProductionSection";
import ManagedTechSection from "@/components/sections/ManagedTechSection";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";

export default function Services() {
  return (
    <div className="flex flex-col">
       {/* Hero for Services Page */}
       <Section className="py-20 md:py-24 bg-fih-deep-black text-center border-b border-white/5">
         <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
           Our Services
         </h1>
         <p className="text-fih-silver max-w-2xl mx-auto text-lg">
           A next-generation AI-powered Digital Transformation, Cybersecurity &amp; Managed
           Technology Partner &mdash; helping organizations build, secure, scale, and optimize
           their entire digital ecosystem.
         </p>
       </Section>

      <AITransformationSection />
      <AIProductsSection />
      <CybersecuritySection />
      <BrandingIntelligenceSection />
      <MediaProductionSection />
      <ManagedTechSection />
      <AccessibilityWidget />
    </div>
  );
}
