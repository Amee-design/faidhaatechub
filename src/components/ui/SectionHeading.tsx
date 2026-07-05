"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  icon?: React.ReactNode;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  icon,
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left"
      )}
    >
      {(icon || eyebrow) && (
        <div
          className={cn(
            "flex items-center gap-2 mb-4",
            align === "center" && "justify-center"
          )}
        >
          {icon && (
            <span className="text-fih-hub-blue flex items-center justify-center">
              {icon}
            </span>
          )}
          {eyebrow && (
            <span className="text-fih-hub-blue uppercase tracking-widest text-sm font-bold">
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl md:text-5xl font-bold font-display mb-4",
          light ? "text-fih-deep-black" : "text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg leading-relaxed",
            light ? "text-fih-charcoal" : "text-fih-silver"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
