"use client";

import React from "react";

import { motion, Variants } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ArrowRight, GraduationCap, Clapperboard, Globe2, Accessibility } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const competencies = [
  {
    icon: GraduationCap,
    title: "ICT & STEM Academy",
    description: "Comprehensive training in Coding, Data Science, and Hardware.",
    cta: "Explore Academy",
    href: "/services",
  },
  {
    icon: Clapperboard,
    title: "Creative Studio",
    description: "2D/3D Animation & Visual Storytelling.",
    cta: "View Gallery",
    href: "/services",
  },
  {
    icon: Globe2,
    title: "ICT4D & Advocacy",
    description: "Technology for social good.",
    cta: "See Our Approach",
    href: "/services",
  },
  {
    icon: Accessibility,
    title: "Inclusion First",
    description: "Empowering women & PWDs.",
    cta: "See Our Commitment",
    href: "/services",
  },
];

const Competencies = () => {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
          Core <span className="text-fih-hub-blue">Competencies</span>
        </h2>
        <p className="text-fih-silver max-w-2xl mx-auto">
          Four pillars of the Faidhaa model &mdash; from skills training to
          systemic advocacy.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {competencies.map(({ icon: Icon, title, description, cta, href }) => (
          <motion.div
            key={title}
            variants={item}
            className="glass-card rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-fih-hub-blue/50 hover:shadow-neon"
          >
            <div className="bg-fih-hub-blue/10 w-12 h-12 rounded-xl flex items-center justify-center text-fih-hub-blue mb-5">
              <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-fih-silver mb-6 flex-1">{description}</p>
            <Button
              href={href}
              variant="ghost"
              size="sm"
              className="pl-0 gap-2 justify-start hover:bg-transparent hover:text-fih-hub-blue self-start"
            >
              {cta} <ArrowRight size={16} />
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Competencies;
