"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ value, label, suffix = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="text-center p-6 glass-card rounded-2xl">
      <h3 className="text-4xl md:text-5xl font-bold text-fih-hub-blue mb-2 font-display">
        {displayValue.toLocaleString()}
        {suffix}
      </h3>
      <p className="text-fih-silver uppercase tracking-wider text-sm">{label}</p>
    </div>
  );
};

export default StatsCounter;
