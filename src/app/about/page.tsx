import React from "react";
import FounderStory from "@/components/sections/FounderStory";
import Organogram from "@/components/sections/Organogram";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import Section from "@/components/ui/Section";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";

export default function About() {
  return (
    <div className="flex flex-col">
       {/* Hero for About Page */}
       <Section className="py-20 md:py-24 bg-fih-deep-black text-center">
         <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
           Who We Are
         </h1>
         <p className="text-fih-silver max-w-2xl mx-auto text-lg">
           Driving innovation through inclusion, empowerment, and technology.
         </p>
       </Section>

      <FounderStory />
      <Organogram />
      <JourneyTimeline />
      <AccessibilityWidget />
    </div>
  );
}
