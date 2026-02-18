"use client";

import React from "react";
import Section from "@/components/ui/Section";
import StatsCounter from "@/components/ui/StatsCounter";

const ImpactStats = () => {
  return (
    <Section background="default" className="border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatsCounter value={25000} label="Youth Trained" suffix="+" />
        <StatsCounter value={150} label="Startups Incubated" suffix="+" />
        <StatsCounter value={40} label="Partnerships" suffix="+" />
        <StatsCounter value={12} label="States Reached" suffix="" />
      </div>
    </Section>
  );
};

export default ImpactStats;
