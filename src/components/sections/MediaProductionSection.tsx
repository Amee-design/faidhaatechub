"use client";

import React from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCard from "@/components/ui/IconCard";
import {
  BookOpen,
  Building2,
  Camera,
  Clapperboard,
  Film,
  PenTool,
  Radio,
  Video,
} from "lucide-react";

const services = [
  { title: "Professional Photography (Events, Corporate, Campaigns)", icon: <Camera size={22} /> },
  { title: "Cinematic Videography & Drone Production", icon: <Video size={22} /> },
  { title: "Motion Graphics & Animation (2D/3D)", icon: <Clapperboard size={22} /> },
  { title: "Social Media Video Content (Reels, TikTok, Ads)", icon: <Film size={22} /> },
  { title: "Brand Storytelling & Documentary Production", icon: <BookOpen size={22} /> },
  { title: "Corporate Promotional Videos", icon: <Building2 size={22} /> },
  { title: "Event Coverage & Live Streaming", icon: <Radio size={22} /> },
  { title: "Scriptwriting & Creative Direction", icon: <PenTool size={22} /> },
];

const MediaProductionSection = () => {
  return (
    <Section id="media-production">
      <SectionHeading
        icon={<Clapperboard size={18} />}
        eyebrow="Communication & Digital Media Production"
        title="Visual Storytelling That Builds Trust"
        subtitle="We combine creativity, AI, and strategy to produce content that drives attention and trust."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <IconCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            index={index}
            accentClassName="bg-fih-action-gold/20 text-fih-action-gold"
          />
        ))}
      </div>
    </Section>
  );
};

export default MediaProductionSection;
