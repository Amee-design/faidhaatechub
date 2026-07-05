"use client";

import React from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCard from "@/components/ui/IconCard";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChartNoAxesColumn,
  Megaphone,
  Search,
  Share2,
  Sparkles,
  Target,
  ThumbsUp,
  Users,
} from "lucide-react";

const services = [
  { title: "AI Brand Strategy Development", icon: <Target size={22} /> },
  { title: "Social Media Automation & Scheduling", icon: <Share2 size={22} /> },
  { title: "Content Intelligence & Optimization", icon: <Sparkles size={22} /> },
  { title: "Conversion-Driven Digital Campaigns", icon: <Megaphone size={22} /> },
  { title: "Lead Generation Systems", icon: <Users size={22} /> },
  { title: "Audience Targeting & Analytics", icon: <ChartNoAxesColumn size={22} /> },
  { title: "Reputation & Sentiment Management", icon: <ThumbsUp size={22} /> },
  { title: "SEO & AI Search Optimization (AEO/GEO)", icon: <Search size={22} /> },
];

const funnel = ["Visibility", "Credibility", "Engagement", "Conversion", "Revenue"];

const BrandingIntelligenceSection = () => {
  return (
    <Section background="light" id="branding">
      <SectionHeading
        icon={<Megaphone size={18} />}
        eyebrow="Advanced AI Branding & Social Media Intelligence"
        title="Brands Built for Performance"
        subtitle="We turn brands into high-performance digital assets using AI-driven marketing intelligence and advanced AI social media tools."
        light
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((service, index) => (
          <IconCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            index={index}
            light
            accentClassName="bg-fih-action-gold/15 text-fih-action-gold"
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-3 md:gap-4 bg-fih-deep-black rounded-3xl p-8"
      >
        {funnel.map((stage, index) => (
          <React.Fragment key={stage}>
            <span className="px-5 py-2 rounded-full bg-white/10 text-white font-bold text-sm md:text-base">
              {stage}
            </span>
            {index < funnel.length - 1 && (
              <ArrowRight className="text-fih-action-gold" size={20} />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </Section>
  );
};

export default BrandingIntelligenceSection;
