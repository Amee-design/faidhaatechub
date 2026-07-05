"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Section from "@/components/ui/Section";
import StatsCounter from "@/components/ui/StatsCounter";

const stats = [
  { value: 25000, label: "Youth Trained", suffix: "+" },
  { value: 150, label: "Startups Incubated", suffix: "+" },
  { value: 40, label: "Partnerships", suffix: "+" },
  { value: 12, label: "States Reached", suffix: "" },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ImpactStats = () => {
  return (
    <Section background="default" className="border-t border-white/5">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">
          Our Impact, <span className="text-fih-hub-blue">By the Numbers</span>
        </h2>
        <p className="text-fih-silver max-w-xl mx-auto">
          Real outcomes for the youth, communities, and partners we work with.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden divide-x divide-white/10 [&>*:nth-child(n+3)]:border-t [&>*:nth-child(n+3)]:border-white/10 lg:[&>*:nth-child(n+3)]:border-t-0"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={item}>
            <StatsCounter {...stat} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default ImpactStats;
