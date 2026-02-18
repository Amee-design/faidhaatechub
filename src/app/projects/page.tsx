import React from "react";
import ProjectPortfolio from "@/components/sections/ProjectPortfolio";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";

export default function Projects() {
  return (
    <div className="flex flex-col">
       {/* Note: Hero is integrated into the horizontal scroll section for flow */}
      <ProjectPortfolio />
      <AccessibilityWidget />
    </div>
  );
}
