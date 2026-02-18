import React from "react";
import Section from "@/components/ui/Section";
import ICTAcademy from "@/components/sections/ICTAcademy";
import CreativeStudio from "@/components/sections/CreativeStudio";
import ICT4D from "@/components/sections/ICT4D";
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
           Comprehensive solutions tailored for impact, innovation, and growth.
         </p>
       </Section>

      <ICTAcademy />
      <CreativeStudio />
      <ICT4D />
      <AccessibilityWidget />
    </div>
  );
}
