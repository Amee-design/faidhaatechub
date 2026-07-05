"use client";

import React from "react";

interface ChipProps {
  icon?: React.ReactNode;
  label: string;
}

const Chip: React.FC<ChipProps> = ({ icon, label }) => {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-fih-silver hover:border-fih-hub-blue/50 hover:text-white transition-colors">
      {icon && <span className="text-fih-hub-blue text-base leading-none flex items-center">{icon}</span>}
      {label}
    </span>
  );
};

export default Chip;
