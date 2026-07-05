"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ value, label, suffix = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center px-4 py-8 md:py-10">
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-fih-hub-blue font-display tabular-nums leading-none mb-3">
        {displayValue.toLocaleString()}
        {suffix}
      </h3>
      <p className="text-fih-silver/90 uppercase tracking-[0.15em] text-[11px] md:text-xs font-bold">
        {label}
      </p>
    </div>
  );
};

export default StatsCounter;
